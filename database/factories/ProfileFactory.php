<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Profile;
use Faker\Generator as Faker;

$factory->define(Profile::class, function (Faker $faker) {
    return [
        "name" => "Light Of Hope PH",
        "motto" => "Motto",
        "logo" => "",
        "contact_number" => "",
        "email" => "hello@lightofhopeph.org",
        "street_address" => "",
        "city" => "Lapu-lapu",
        "zip" => "6015",
        "country" => "Philippines",
        "fp_image" => "",
        "facebook" => "https://www.facebook.com/lightofhopeph",
        "instagram" => "",
        "twitter" => "",
        "linkedin" => "",
    ];
});
