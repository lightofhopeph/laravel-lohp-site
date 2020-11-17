<?php

namespace App\GraphQL\Mutations;

use App\Activity;
use App\ActivityImage;

use function PHPSTORM_META\map;

class DeleteActivity
{
    /**
     * @param  null  $_
     * @param  array<string, mixed>  $args
     */
    public function __invoke($_, array $args)
    {
        Activity::whereIn('id', $args["ids"])->delete();

        return [
            'status' => 'Okay',
            'message' => 'Success'
        ];
    }
}
