<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class PostFile extends Model
{
    //
    protected $fillable = ['post_id', 'file'];

    public function post()
    {
        return $this->belongsTo(Post::class);
    }
}
