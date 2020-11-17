<?php

namespace App\GraphQL\Mutations;

use App\Blog;

class UpdateBlog
{
    /**
     * @param  null  $_
     * @param  array<string, mixed>  $args
     */
    public function __invoke($_, array $args)
    {
        $blog = Blog::find($args['id']);

        $blog->title = isset($args['title']) ? $args['title'] : $blog->title;
        $blog->blog_type = isset($args['blog_type']) ? $args['blog_type'] : $blog->blog_type;
        $blog->featured_image = isset($args['featured_image']) ? $args['featured_image'] : $blog->featured_image;
        $blog->content = isset($args['content']) ? $args['content'] : $blog->content;

        $blog->save();

        $blog->refresh();

        return $blog->first();
    }
}
