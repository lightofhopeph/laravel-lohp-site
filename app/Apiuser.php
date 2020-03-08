<?php

namespace App;

use Illuminate\Support\Str;
use Illuminate\Notifications\Notifiable;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Database\Eloquent\Model;

class Apiuser extends Authenticatable
{
    use Notifiable;

    protected $guard = 'portal';


    protected $keyType = 'string';

    public $incrementing = false;

    protected $fillable = [
        'name', 'email' ,'password'
    ];

    protected $hidden = [
        'password', 'remember_token',
    ];

    public static function boot()
    {
        parent::boot();

        static::creating(function (Model $model){
            if(! $model->getKey()){
                $model->id = Str::uuid()->toString();
            }
        });
    }
}

