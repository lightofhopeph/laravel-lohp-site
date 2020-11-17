<?php

namespace App\GraphQL\Mutations;

use App\Profile;

class UpdateProfile
{
    /**
     * @param  null  $_
     * @param  array<string, mixed>  $args
     */
    public function __invoke($_, array $args)
    {
        $profile = Profile::first();

        $profile->name = isset($args['name']) ? $args['name'] : $profile->name;
        $profile->motto = isset($args['motto']) ? $args['motto'] : $profile->motto;
        $profile->logo = isset($args['logo']) ? $args['logo'] : $profile->logo;
        $profile->contact_number = isset($args['contact_number']) ? $args['contact_number'] : $profile->contact_number;
        $profile->email = isset($args['email']) ? $args['email'] : $profile->email;
        $profile->street_address = isset($args['street_address']) ? $args['street_address'] : $profile->street_address;
        $profile->city = isset($args['city']) ? $args['city'] : $profile->city;
        $profile->zip = isset($args['zip']) ? $args['zip'] : $profile->zip;
        $profile->country = isset($args['country']) ? $args['country'] : $profile->country;
        $profile->fp_image = isset($args['fp_image']) ? $args['fp_image'] : $profile->fp_image;
        $profile->act_image = isset($args['act_image']) ? $args['act_image'] : $profile->act_image;
        $profile->blog_image = isset($args['blog_image']) ? $args['blog_image'] : $profile->blog_image;
        $profile->facebook = isset($args['facebook']) ? $args['facebook'] : $profile->facebook;
        $profile->instagram = isset($args['instagram']) ? $args['instagram'] : $profile->instagram;
        $profile->twitter = isset($args['twitter']) ? $args['twitter'] : $profile->twitter;
        $profile->linkedin = isset($args['linkedin']) ? $args['linkedin'] : $profile->linkedin;

        $profile->save();

        return $profile;
    }
}
