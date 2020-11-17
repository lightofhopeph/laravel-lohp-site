<?php

namespace App\GraphQL\Mutations;

use App\Activity;
use App\ActivityImage;

class UpdateActivity
{
    /**
     * @param  null  $_
     * @param  array<string, mixed>  $args
     */
    public function __invoke($_, array $args)
    {
        $activity = Activity::find($args['id']);

        $activity->title = isset($args['title']) ? $args['title'] : $activity->title;
        $activity->description = isset($args['description']) ? $args['description'] : $activity->description;
        $activity->location = isset($args['location']) ? $args['location'] : $activity->location;
        $activity->month = isset($args['month']) ? $args['month'] : $activity->month;
        $activity->year = isset($args['year']) ? $args['year'] : $activity->year;
        $activity->featured_image = isset($args['featured_image']) ? $args['featured_image'] : $activity->featured_image;

        $activity->save();

        $activity->images()->delete();

        if (isset($args['images'])) {
            foreach ($args['images'] as $image) {
                ActivityImage::create([
                    'a_id' => $activity->id,
                    'image' => $image['image'],
                    'description' => $image['description']
                ]);
            }
        }

        $activity->refresh();

        return $activity->with('images')->first();
    }
}
