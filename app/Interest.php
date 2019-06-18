<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Interest extends Model
{
    //
    protected $fillable = ['interest'];

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
