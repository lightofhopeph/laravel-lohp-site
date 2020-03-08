<?php

namespace Tests\Browser;

use Tests\DuskTestCase;
use Laravel\Dusk\Browser;
use Illuminate\Foundation\Testing\DatabaseMigrations;
use Illuminate\Foundation\Testing\RefreshDatabase;
use App\Apiuser;

class AuthenticationTest extends DuskTestCase
{
    use RefreshDatabase;
    /**
     * A Dusk test example.
     *
     * @return void
     */
    public function testRegistrationFlow()
    {
        

        $apiuser = factory(Apiuser::class)->create([
            'name' => 'lohp_name',
            'email' => 'admin@email.com',
            'password' => '1qaz2wsx'
        ]);

        $this->browse(function ($browser) use($apiuser) {
            $browser->visit('http://127.0.0.1:8000/lohp/contributor/portal/register/')
                    ->type('name', $apiuser->name)
                    ->type('email', $apiuser->email)
                    ->type('password', $apiuser->password)
                    ->type('password_confirmation', $apiuser->password)
                    ->press('register')
                    ->assertPathIs('http://127.0.0.1:8000/lohp/contributor/portal/login');
        });
    }
}
