<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\ActivityImage;
use Faker\Generator as Faker;

$factory->define(ActivityImage::class, function (Faker $faker) {
    return [
        'description' => $faker->text,
        'image' => 'http://lorempixel.com/640/480/'
    ];
});
