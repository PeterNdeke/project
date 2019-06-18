<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Education extends Model
{
    protected $fillable = [
        'user_id', 'degree','description', 'school', 'date_from', 'date_to',
    ];

    public function user()
    {
        return $this->belongsTo('App\User');
    }
}
