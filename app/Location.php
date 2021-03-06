<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Location extends Model
{
    protected $fillable = [
        'user_id', 'city', 'country',
    ];

    public function user()
    {
        return $this->belongsTo(User::class);

    }
}
