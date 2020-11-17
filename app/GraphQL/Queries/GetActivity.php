<?php

namespace App\GraphQL\Queries;

use App\Activity;

class GetActivity
{
    /**
     * @param  null  $_
     * @param  array<string, mixed>  $args
     */
    public function __invoke($_, array $args)
    {
        $activity = Activity::where('id', '=', $args['id'])->with('images')->first();

        return $activity;
    }
}
