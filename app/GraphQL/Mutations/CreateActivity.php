<?php

namespace App\GraphQL\Mutations;

use App\Activity;
use App\ActivityImage;

class CreateActivity
{
    /**
     * @param  null  $_
     * @param  array<string, mixed>  $args
     */
    public function __invoke($_, array $args)
    {
        $activity = Activity::create([
            'title' => $args['title'],
            'description' => $args['description'],
            'location' => $args['location'],
            'month' => $args['month'],
            'year' => $args['year'],
            'featured_image' => $args['featured_image']
        ]);

        if (isset($args['images'])) {
            foreach ($args['images'] as $image) {
                ActivityImage::create([
                    'a_id' => $activity->id,
                    'image' => $image['image'],
                    'description' => $image['description']
                ]);
            }
        }

        return [
            'status' => 'Okay',
            'message' => 'Success'
        ];
    }
}
