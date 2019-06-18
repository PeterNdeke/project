<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Experience extends Model
{
    protected $fillable = [
        'user_id', 'job_role', 'company', 'subject', 'experience', 'date_from', 'date_to', 'location',
    ];

    public function user()
    {
        return $this->belongsTo('App\User');
    }

}
