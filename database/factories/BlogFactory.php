<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Blog;
use Faker\Generator as Faker;

$factory->define(Blog::class, function (Faker $faker) {
    $type = ['How to', 'Inspiration', 'Community'];

    return [
        'title' => $faker->sentence,
        'blog_type' => $type[rand(0, 2)],
        "featured_image" => "http://lorempixel.com/640/480/",
        'content' => $faker->randomHtml(2, 20)
    ];
});
