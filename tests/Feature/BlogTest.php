<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Nuwave\Lighthouse\Testing\MakesGraphQLRequests;
use Illuminate\Foundation\Testing\DatabaseMigrations;
use Tests\TestCase;
use App\Blog;

class BlogTest extends TestCase
{
    use RefreshDatabase, MakesGraphQLRequests, DatabaseMigrations;

    /** @test */
    public function get_blogs()
    {
        factory(Blog::class, 2)->create(['title' => 'test', 'blog_type' => 'Community', 'created_at' => '2019-03-02 20:01:00']);

        factory(Blog::class, 2)->create(['title' => 'test1',  'blog_type' => 'Community', 'created_at' => '2020-04-02 20:01:00']);

        factory(Blog::class, 2)->create(['title' => 'test2', 'blog_type' => 'Community', 'created_at' => '2021-05-02 20:01:00']);

        factory(Blog::class, 2)->create(['title' => 'test3',  'blog_type' => 'Community', 'created_at' => '2022-01-02 20:01:00']);

        factory(Blog::class, 2)->create(['title' => 'test4', 'blog_type' => 'Community', 'created_at' => '2023-12-02 20:01:00']);

        $response = $this->graphQL(
            /** @lang GraphQL */
            '
            query blogs($input: BlogTypeInput) {
                blogs(first: 10, search_key: "test", input: $input) {
                    data {
                        id
                        title
                        blog_type
                        featured_image
                        content
                        is_active
                        created_at
                        updated_at
                    }
                }
            }
        ',
            [
                'input' => [
                    'blog_type' => ['Community'],
                    'year' => 2020,
                    'month' => 4
                ]
            ]
        );

        $responseBody = json_decode($response->getContent(), true);

        $this->assertArrayHasKey('blogs', $responseBody['data']);
        $this->assertArrayHasKey('id', $responseBody['data']['blogs']['data'][0]);
        $this->assertArrayHasKey('title', $responseBody['data']['blogs']['data'][0]);
        $this->assertArrayHasKey('blog_type', $responseBody['data']['blogs']['data'][0]);
        $this->assertArrayHasKey('featured_image', $responseBody['data']['blogs']['data'][0]);
        $this->assertArrayHasKey('content', $responseBody['data']['blogs']['data'][0]);
        $this->assertArrayHasKey('is_active', $responseBody['data']['blogs']['data'][0]);
        $this->assertArrayHasKey('created_at', $responseBody['data']['blogs']['data'][0]);
        $this->assertArrayHasKey('updated_at', $responseBody['data']['blogs']['data'][0]);
    }

    /** @test */
    public function create_blog()
    {
        $response = $this->graphQL(
            /** @lang GraphQL */
            '
            mutation create_blog($input: BlogInput) {
                create_blog(input: $input) {
                    status
                    message
                }
            }
        ',
            [
                'input' => [
                    'title' => 'test title',
                    'blog_type' => 'How to',
                    'featured_image' => 'test image',
                    'content' => 'test content'
                ]
            ]
        );

        $this->assertDatabaseHas('blogs', [
            'title' => 'test title',
            'blog_type' => 'How to',
            'featured_image' => 'test image',
            'content' => 'test content'
        ]);
    }

    /** @test */
    public function update_blog()
    {
        factory(Blog::class)->create();

        $response = $this->graphQL(
            /** @lang GraphQL */
            '
            mutation update_blog($input: BlogInput) {
                update_blog(input: $input) {
                    id
                    title
                    blog_type
                    featured_image
                    content
                    is_active
                    created_at
                    updated_at
                }
            }
        ',
            [
                'input' => [
                    'id' => 1,
                    'title' => 'updated title',
                    'blog_type' => 'How to',
                    'featured_image' => 'updated image',
                    'content' => 'updated content'
                ]
            ]
        );

        $this->assertDatabaseHas('blogs', [
            'id' => 1,
            'title' => 'updated title',
            'blog_type' => 'How to',
            'featured_image' => 'updated image',
            'content' => 'updated content'
        ]);
    }

    /** @test */
    public function delete_blogs()
    {
        factory(Blog::class)->create([
            'title' => 'test title1',
            'featured_image' => 'test fi1',
            'content' => 'test content1',
            'blog_type' => 'How to',
        ]);

        factory(Blog::class)->create([
            'title' => 'test title2',
            'featured_image' => 'test fi2',
            'content' => 'test content2',
            'blog_type' => 'How to',
        ]);

        $this->assertDatabaseHas('blogs', [
            'id' => 1,
            'title' => 'test title1',
            'featured_image' => 'test fi1',
            'content' => 'test content1',
            'blog_type' => 'How to',
        ]);
        $this->assertDatabaseHas('blogs', [
            'id' => 2,
            'title' => 'test title2',
            'featured_image' => 'test fi2',
            'content' => 'test content2',
            'blog_type' => 'How to',
        ]);

        $response = $this->graphQL(
            /** @lang GraphQL */
            '
            mutation delete_blogs($ids: [ID]) {
                delete_blogs(ids: $ids) {
                    status
                    message 
                }
            }
        ',
            [
                'ids' => [1, 2]
            ]
        );

        $this->assertDatabaseMissing('blogs', [
            'id' => 1,
            'title' => 'test title1',
            'featured_image' => 'test fi1',
            'content' => 'test content1',
            'blog_type' => 'How to',
        ]);
        $this->assertDatabaseMissing('blogs', [
            'id' => 2,
            'title' => 'test title2',
            'featured_image' => 'test fi2',
            'content' => 'test content2',
            'blog_type' => 'How to',
        ]);
    }

    /** @test */
    public function get_blog()
    {
        factory(Blog::class, 10)->create();

        $response = $this->graphQL(
            /** @lang GraphQL */
            '
            query get_blog($id: ID) {
                get_blog(id: $id) {
                    id
                    title
                    blog_type
                    featured_image
                    content
                    is_active
                    created_at
                    updated_at
                }
            }
        ',
            [
                'id' => 9
            ]
        );

        $responseBody = json_decode($response->getContent(), true);

        $this->assertArrayHasKey('get_blog', $responseBody['data']);
        $this->assertArrayHasKey('id', $responseBody['data']['get_blog']);
        $this->assertArrayHasKey('title', $responseBody['data']['get_blog']);
        $this->assertArrayHasKey('blog_type', $responseBody['data']['get_blog']);
        $this->assertArrayHasKey('featured_image', $responseBody['data']['get_blog']);
        $this->assertArrayHasKey('content', $responseBody['data']['get_blog']);
        $this->assertArrayHasKey('created_at', $responseBody['data']['get_blog']);
        $this->assertArrayHasKey('updated_at', $responseBody['data']['get_blog']);
    }
}
