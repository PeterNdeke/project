<?php

namespace App;

use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Passport\HasApiTokens;
use Spatie\MediaLibrary\HasMedia\HasMedia;
use Spatie\MediaLibrary\HasMedia\HasMediaTrait;
use Spatie\MediaLibrary\Models\Media;
use App\Traits\Friendable;

class User extends Authenticatable implements MustVerifyEmail, HasMedia
{
    use Notifiable, HasApiTokens, HasMediaTrait, friendable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name', 'email', 'password', 'isAdmin', 'username',
    ];

    protected $appends = ['avatar', 'pic'];

    public function getAvatar()
    {
        return $this->imageUrl;

    }

    public function getAvatarAttribute()
    {
        //return $this->getAvatar();
        if ($this->imageUrl != null) {
            return $this->getMedia('images')->first()->getUrl('thumb');
        }

    }
    public function getPicAttribute()
    {
        //return $this->getAvatar();
        return $this->getMedia('images')->first()->getUrl();
    }
    public function getRouteKeyName()
    {
        return "username";
    }

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token',
    ];

    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    public function interests()
    {
        return $this->hasMany(Interest::class);

    }
    public function registerMediaConversions(Media $media = null)
    {
        $this->addMediaConversion('thumb')

            ->width(50)
            ->height(50);
    }
    public function registerMediaCollections()
    {
        $this
            ->addMediaCollection('images')
            ->singleFile();
    }

    public function posts()
    {
        return $this->hasMany(Post::class);
    }
    public function isNotTheUser(User $user)
    {
        return $this->id !== $user->id;
    }
    public function isFollowing(User $user)
    {
        return $this->following()->where('users.id', $user->id)->value('status');
    }
    public function pendingFriendRequest(User $user)
    {
        return (bool) $this->following()->where('users.id', $user->id)->wherePivot('status', '=', 0)->count();
    }
    public function canFollow(User $user)
    {
        if (!$this->isNotTheUser($user)) {
            return false;

        }
        return !$this->isFollowing($user);
    }
    public function canUnfollow(User $user)
    {
        return $this->isFollowing($user);
    }

    public function following()
    {
        return $this->belongsToMany(User::class, 'follows', 'user_id', 'follower_id')->withPivot('status')->withTimestamps();
    }

    public function overview()
    {
        return $this->hasOne(Overview::class);
    }

    public function experiences()
    {
        return $this->hasMany(Experience::class);
    }

    public function education()
    {
        return $this->hasMany(Education::class);
    }

    public function location()
    {
        return $this->hasOne(Location::class);
    }

    public function skills()
    {
        return $this->hasMany(Skill::class);
    }

}
