<?php

namespace App\GraphQL\Queries;

use App\Activity;
use Illuminate\Support\Facades\DB;

class Activities
{
    /**
     * @param  null  $_
     * @param  array<string, mixed>  $args
     */
    public function __invoke($_, array $args)
    {

        $query = Activity::with('images');

        if (isset($args['status'])) {
            if ($args['status'] != -1) {
                $query = $query->where('activities.is_active', "=", $args['status']);
            }
        }

        if (isset($args['month']) && !empty($args['month'])) {
            $query = $query->whereIn('activities.month', $args['month']);
        }

        if (isset($args['year'])) {
            $query = $query->where('activities.year', '=', $args['year']);
        }

        if (isset($args['search_key'])) {
            $query = $query->where('activities.location', 'LIKE', '%' . $args['search_key'] . '%')
                ->orWhere('activities.title', 'LIKE', '%' . $args['search_key'] . '%');
        }

        return $query;
    }
}
