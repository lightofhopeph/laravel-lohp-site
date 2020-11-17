<?php

namespace App\GraphQL\Mutations;

use App\Blog;

class DeleteBlogs
{
    /**
     * @param  null  $_
     * @param  array<string, mixed>  $args
     */
    public function __invoke($_, array $args)
    {
        Blog::whereIn('id', $args["ids"])->delete();

        return [
            'status' => 'Okay',
            'message' => 'Success'
        ];
    }
}
