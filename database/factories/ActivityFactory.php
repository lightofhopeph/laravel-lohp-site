<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Activity;
use Faker\Generator as Faker;
use Illuminate\Support\Carbon;

$factory->define(Activity::class, function (Faker $faker) {
    return [
        "title" => $faker->text(),
        "description" => $faker->text(),
        "location" => $faker->streetName,
        'month' => $faker->monthName,
        'year' => '2020',
        "featured_image" => "http://lorempixel.com/640/480/",
        'created_at' => now(),
        'updated_at' => now()
    ];
});
