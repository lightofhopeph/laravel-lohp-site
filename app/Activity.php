<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Activity extends Model
{
    protected $guarded = [];

    public function images()
    {
        return $this->hasMany('App\ActivityImage', 'a_id');
    }
}
