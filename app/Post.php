<?php

namespace App;

use Cviebrock\EloquentSluggable\Sluggable;
use Illuminate\Database\Eloquent\Model;

class Post extends Model
{
    use Sluggable;

    protected $fillable = ['user_id', 'content', 'file', 'post_type'];
    protected $appends = ['humanCreatedAt', 'count', 'liked'];
    public $with = ['user','like', 'postFiles'];

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function comments()
    {
        return $this->hasMany(Comment::class);
    }

    public function getThreadedComments()
    {
        return $this->comments()->with('user')->get()->threaded();
    }
    public function getHumanCreatedAtAttribute()
    {
        return $this->created_at->diffForHumans();
    }

    public function getCountAttribute()
    {
        return $this->like->count();
    }

    public function getLikedAttribute()
    {
        return !!$this->like->where('user_id', auth()->id())->count();
    }

    public function addComment($attributes)
    {
        $comment = (new Comment())->forceFill($attributes);
        $comment->user_id = auth()->id();
        return $this->comments()->save($comment);
    }
    public function like()
    {
        return $this->hasMany(Like::class);
    }

    public function postFiles()
    {
        return $this->hasMany(PostFile::class);
    }
    public function sluggable()
    {
        return [
            'slug' => [
                'source' => 'title',
            ],
        ];
    }
    protected $dispatchesEvents = [
        'deleting' => \App\Events\DeletePostEvent::class,
    ];

}
