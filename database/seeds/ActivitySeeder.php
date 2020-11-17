<?php

use Illuminate\Database\Seeder;

use App\Activity;
use App\ActivityImage;

class ActivitySeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        factory(Activity::class, 10)->create();

        for ($x = 1; $x <= 10; $x++) {
            factory(ActivityImage::class, 5)->create(['a_id' => $x]);
        }
    }
}
