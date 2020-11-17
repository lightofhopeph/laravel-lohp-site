<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Nuwave\Lighthouse\Testing\MakesGraphQLRequests;
use Illuminate\Foundation\Testing\DatabaseMigrations;
use Tests\TestCase;
use App\Profile;

class ProfileTest extends TestCase
{
    use RefreshDatabase, MakesGraphQLRequests, DatabaseMigrations;

    /** @test */
    public function get_profile_returns_array()
    {
        factory(Profile::class)->create();

        $response = $this->graphQL(
            /** @lang GraphQL */
            '
            {
                profile {
                    id
                    name
                    motto
                    logo
                    contact_number
                    email
                    street_address
                    city
                    zip
                    country
                    fp_image
                    facebook
                    instagram
                    twitter
                    linkedin
                    created_at
                    updated_at
                }
            }
        ',
        );

        $responseBody = json_decode($response->getContent(), true);

        $this->assertArrayHasKey('profile', $responseBody['data']);
        $this->assertArrayHasKey('id', $responseBody['data']['profile']);
        $this->assertArrayHasKey('name', $responseBody['data']['profile']);
        $this->assertArrayHasKey('motto', $responseBody['data']['profile']);
        $this->assertArrayHasKey('logo', $responseBody['data']['profile']);
        $this->assertArrayHasKey('contact_number', $responseBody['data']['profile']);
        $this->assertArrayHasKey('email', $responseBody['data']['profile']);
        $this->assertArrayHasKey('street_address', $responseBody['data']['profile']);
        $this->assertArrayHasKey('city', $responseBody['data']['profile']);
        $this->assertArrayHasKey('zip', $responseBody['data']['profile']);
        $this->assertArrayHasKey('country', $responseBody['data']['profile']);
        $this->assertArrayHasKey('fp_image', $responseBody['data']['profile']);
        $this->assertArrayHasKey('facebook', $responseBody['data']['profile']);
        $this->assertArrayHasKey('instagram', $responseBody['data']['profile']);
        $this->assertArrayHasKey('twitter', $responseBody['data']['profile']);
        $this->assertArrayHasKey('linkedin', $responseBody['data']['profile']);
        $this->assertArrayHasKey('created_at', $responseBody['data']['profile']);
        $this->assertArrayHasKey('updated_at', $responseBody['data']['profile']);
    }

    /** @test */
    public function update_profile_returns_updated_profile()
    {
        factory(Profile::class)->create();

        $response = $this->graphQL(
            /** @lang GraphQL */
            '
            mutation update_profile($input: UpdateProfile) {
                update_profile(input: $input) {
                    id
                    name
                    motto
                    logo
                    contact_number
                    email
                    street_address
                    city
                    zip
                    country
                    fp_image
                    facebook
                    instagram
                    twitter
                    linkedin
                    created_at
                    updated_at
                }
            }
        ',
            [
                'input' => [
                    'name' => 'Light of Hope PH',
                    'motto' => 'Sharing the light',
                    'logo' => '',
                    'contact_number' => '09090909090',
                    'email' => 'hello@lightofhopeph.org',
                    'street_address' => '',
                    'city' => 'Lapu-lapu',
                    'zip' => '6015',
                    'country' => 'Philippines',
                    'fp_image' => '',
                    'facebook' => '',
                    'instagram' => '',
                    'twitter' => '',
                    'linkedin' => ''
                ],
            ]
        );

        $response->assertJsonStructure([
            'data' => [
                'update_profile' => [
                    'id',
                    'name',
                    'motto',
                    'logo',
                    'contact_number',
                    'email',
                    'street_address',
                    'city',
                    'zip',
                    'country',
                    'fp_image',
                    'facebook',
                    'instagram',
                    'twitter',
                    'linkedin',
                    'created_at',
                    'updated_at'
                ],
            ],
        ]);
    }
}
