<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Overview extends Model
{
    protected $fillable = [
        'user_id', 'overview',
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
