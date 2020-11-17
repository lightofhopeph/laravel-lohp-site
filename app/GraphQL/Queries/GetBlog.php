<?php

namespace App\GraphQL\Queries;

use App\Blog;

class GetBlog
{
    /**
     * @param  null  $_
     * @param  array<string, mixed>  $args
     */
    public function __invoke($_, array $args)
    {
        $blog = Blog::where('id', '=', $args['id'])->first();

        return $blog;
    }
}
