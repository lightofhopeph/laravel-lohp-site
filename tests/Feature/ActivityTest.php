<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Nuwave\Lighthouse\Testing\MakesGraphQLRequests;
use Illuminate\Foundation\Testing\DatabaseMigrations;
use Tests\TestCase;
use App\Activity;
use App\ActivityImage;

class ActivityTest extends TestCase
{
    use RefreshDatabase, MakesGraphQLRequests, DatabaseMigrations;

    /** @test */
    public function fetch_activities_returns_array()
    {

        factory(Activity::class, 10)->create();

        factory(Activity::class, 3)->create(['location' => 'test on location']);

        factory(Activity::class, 2)->create(['month' => 'April', 'year' => '2020', 'location' => 'test ']);

        factory(ActivityImage::class, 5)->create(['a_id' => 1]);
        factory(ActivityImage::class, 5)->create(['a_id' => 2]);
        factory(ActivityImage::class, 5)->create(['a_id' => 3]);

        $response = $this->graphQL(
            /** @lang GraphQL */
            '
            query activities($input: ActivityFilter)  {
                activities(first: 10, search_key: "test", input: $input ) {
                    data {
                        id
                        title
                        description
                        location
                        month
                        year
                        featured_image
                        images {
                            id
                            description
                            image
                        }
                        created_at
                        updated_at
                    }
                }
            } 
        ',
            [
                'input' => [
                    'month' => ['April', 'September'],
                    'year' => '2020'
                ]
            ]
        );

        $responseBody = json_decode($response->getContent(), true);

        $this->assertArrayHasKey('activities', $responseBody['data']);
        $this->assertArrayHasKey('id', $responseBody['data']['activities']['data'][0]);
        $this->assertArrayHasKey('title', $responseBody['data']['activities']['data'][0]);
        $this->assertArrayHasKey('description', $responseBody['data']['activities']['data'][0]);
        $this->assertArrayHasKey('location', $responseBody['data']['activities']['data'][0]);
        $this->assertArrayHasKey('month', $responseBody['data']['activities']['data'][0]);
        $this->assertArrayHasKey('year', $responseBody['data']['activities']['data'][0]);
        $this->assertArrayHasKey('images', $responseBody['data']['activities']['data'][0]);
        $this->assertArrayHasKey('featured_image', $responseBody['data']['activities']['data'][0]);
        $this->assertArrayHasKey('created_at', $responseBody['data']['activities']['data'][0]);
        $this->assertArrayHasKey('updated_at', $responseBody['data']['activities']['data'][0]);
        $this->assertArrayHasKey('images', $responseBody['data']['activities']['data'][0]);
    }

    /** @test */
    public function create_activity()
    {
        $response = $this->graphQL(
            /** @lang GraphQL */
            'mutation create_activity($input: ActivityInput) {
                create_activity(input: $input) {
                    status
                    message
                }
            } ',
            [
                'input' => [
                    'title' => 'test activity',
                    'description' => 'test description',
                    'location' => 'test location',
                    'month' => 'October',
                    'year' => '2020',
                    'featured_image' => 'test image',
                    'images' => [
                        [
                            'image' => 'test1',
                            'description' => 'test'
                        ],
                        [
                            'image' => 'test2',
                            'description' => 'test2'
                        ]
                    ]
                ],
            ]
        );

        $this->assertDatabaseHas('activities', [
            'title' => 'test activity',
            'description' => 'test description',
            'location' => 'test location',
            'month' => 'October',
            'year' => '2020',
            'featured_image' => 'test image',
        ]);

        $this->assertDatabaseHas('activity_images', [
            'a_id' => 1,
            'image' => 'test1',
            'description' => 'test'
        ]);

        $this->assertDatabaseHas('activity_images', [
            'a_id' => 1,
            'image' => 'test2',
            'description' => 'test2'
        ]);
    }

    /** @test */
    public function update_activity()
    {
        factory(Activity::class)->create();

        factory(ActivityImage::class, 5)->create(['a_id' => 1]);

        $response = $this->graphQL(
            /** @lang GraphQL */
            'mutation update_activity($input: ActivityInput) {
                update_activity(input: $input) {
                    id
                    title
                    description
                    location
                    month
                    year
                    featured_image
                    images {
                        id
                        image
                        description
                    }
                    created_at
                    updated_at
                }  
            } ',
            [
                'input' => [
                    'id' => 1,
                    'title' => 'updated title',
                    'description' => 'update desc',
                    'location' => 'updated loc',
                    'month' => 'new month',
                    'year' => 'new year',
                    'featured_image' => 'new fi',
                    'images' => [
                        [
                            'image' => 'updated img1',
                            'description' => 'test'
                        ],
                        [
                            'image' => 'updated img2',
                            'description' => 'test2'
                        ]
                    ]
                ]
            ]

        );

        $this->assertDatabaseHas('activities', [
            'id' => 1,
            'title' => 'updated title',
            'description' => 'update desc',
            'location' => 'updated loc',
            'month' => 'new month',
            'year' => 'new year',
            'featured_image' => 'new fi',
        ]);

        $this->assertDatabaseHas('activity_images', [
            'a_id' => 1,
            'image' => 'updated img1',
            'description' => 'test'
        ]);

        $this->assertDatabaseHas('activity_images', [
            'a_id' => 1,
            'image' => 'updated img2',
            'description' => 'test2'
        ]);
    }

    /** @test */
    public function delete_activity()
    {
        factory(Activity::class)->create([
            'title' => 'test title1',
            'description' => 'test desc1',
            'location' => 'test loc1',
            'month' => 'test month1',
            'year' => 'test year1',
            'featured_image' => 'test img1',
        ]);

        factory(Activity::class)->create([
            'title' => 'test title2',
            'description' => 'test desc2',
            'location' => 'test loc2',
            'month' => 'test month2',
            'year' => 'test year2',
            'featured_image' => 'test img2',
        ]);


        factory(ActivityImage::class)->create([
            'a_id' => 1,
            'image' => 'test1',
            'description' => 'test1'
        ]);

        factory(ActivityImage::class)->create([
            'a_id' => 2,
            'image' => 'test2',
            'description' => 'test2'
        ]);


        $this->assertDatabaseHas('activities', [
            'title' => 'test title1',
            'description' => 'test desc1',
            'location' => 'test loc1',
            'month' => 'test month1',
            'year' => 'test year1',
            'featured_image' => 'test img1',
        ]);

        $this->assertDatabaseHas('activities', [
            'title' => 'test title2',
            'description' => 'test desc2',
            'location' => 'test loc2',
            'month' => 'test month2',
            'year' => 'test year2',
            'featured_image' => 'test img2',
        ]);

        $this->assertDatabaseHas('activity_images', [
            'a_id' => 1,
            'image' => 'test1',
            'description' => 'test1'
        ]);

        $this->assertDatabaseHas('activity_images', [
            'a_id' => 2,
            'image' => 'test2',
            'description' => 'test2'
        ]);

        $response = $this->graphQL(
            /** @lang GraphQL */
            'mutation delete_activity($ids: [ID]) {
                delete_activity(ids: $ids) {
                    status
                    message           
                }
            }',
            [
                'ids' => [1, 2]
            ]
        );

        $this->assertDatabaseMissing('activities', [
            'title' => 'test title1',
            'description' => 'test desc1',
            'location' => 'test loc1',
            'month' => 'test month1',
            'year' => 'test year1',
            'featured_image' => 'test img1',
        ]);

        $this->assertDatabaseMissing('activity_images', [
            'a_id' => 1,
            'image' => 'test1',
            'description' => 'test1'
        ]);

        $this->assertDatabaseMissing('activities', [
            'title' => 'test title2',
            'description' => 'test desc2',
            'location' => 'test loc2',
            'month' => 'test month2',
            'year' => 'test year2',
            'featured_image' => 'test img2',
        ]);

        $this->assertDatabaseMissing('activity_images', [
            'a_id' => 2,
            'image' => 'test2',
            'description' => 'test2'
        ]);
    }

    /** @test */
    public function get_activity()
    {
        factory(Activity::class, 10)->create();

        $response = $this->graphQL(
            /** @lang GraphQL */
            'query get_activity($id: ID) {
                get_activity(id: $id) {
                    id
                    title
                    description
                    location
                    month
                    year
                    featured_image
                    images {
                        id
                        image
                        description
                    }
                    created_at
                    updated_at
                }
            } ',
            [
                'id' => 9
            ]
        );


        $responseBody = json_decode($response->getContent(), true);

        $this->assertArrayHasKey('get_activity', $responseBody['data']);
        $this->assertArrayHasKey('id', $responseBody['data']['get_activity']);
        $this->assertArrayHasKey('title', $responseBody['data']['get_activity']);
        $this->assertArrayHasKey('description', $responseBody['data']['get_activity']);
        $this->assertArrayHasKey('location', $responseBody['data']['get_activity']);
        $this->assertArrayHasKey('month', $responseBody['data']['get_activity']);
        $this->assertArrayHasKey('year', $responseBody['data']['get_activity']);
        $this->assertArrayHasKey('images', $responseBody['data']['get_activity']);
        $this->assertArrayHasKey('featured_image', $responseBody['data']['get_activity']);
        $this->assertArrayHasKey('created_at', $responseBody['data']['get_activity']);
        $this->assertArrayHasKey('updated_at', $responseBody['data']['get_activity']);
        $this->assertArrayHasKey('images', $responseBody['data']['get_activity']);
    }
}
