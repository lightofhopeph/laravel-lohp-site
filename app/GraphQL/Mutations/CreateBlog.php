<?php

namespace App\GraphQL\Mutations;

use App\Blog;

class CreateBlog
{
    /**
     * @param  null  $_
     * @param  array<string, mixed>  $args
     */
    public function __invoke($_, array $args)
    {
        Blog::create([
            'title' => $args['title'],
            'blog_type' => $args['blog_type'],
            'featured_image' => $args['featured_image'],
            'content' => $args['content'],
        ]);

        return [
            'status' => 'Okay',
            'message' => 'Success'
        ];
    }
}
