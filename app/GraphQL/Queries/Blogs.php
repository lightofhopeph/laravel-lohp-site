<?php

namespace App\GraphQL\Queries;

use Illuminate\Support\Facades\DB;
use App\Blog;

class Blogs
{
    /**
     * @param  null  $_
     * @param  array<string, mixed>  $args
     */
    public function __invoke($_, array $args)
    {

        $query = DB::table('blogs');

        if (isset($args['month'])) {
            $query = $query->whereMonth('created_at', $args['month']);
        }

        if (isset($args['year'])) {
            $query = $query->whereYear('created_at', $args['year']);
        }

        if (!empty($args['blog_type'])) {
            $query = $query->whereIn('blogs.blog_type', $args['blog_type']);
        }

        if (isset($args['status'])) {
            if ($args['status'] != -1) {
                $query = $query->where('blogs.is_active', "=", $args['status']);
            }
        }

        if (isset($args['search_key'])) {
            $query = $query->where('blogs.title', 'LIKE', '%' . $args['search_key'] . '%');
        }

        return $query;
    }
}
