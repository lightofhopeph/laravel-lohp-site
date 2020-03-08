<?php

namespace Tests\Feature;

use Tests\TestCase;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Foundation\Testing\RefreshDatabase;



class RouteTest extends TestCase
{
    /**
     * A basic feature test example.
     *
     * @return void
     */
/*
    public function testMainRoute()
    {
        $response = $this->get('/');
        $response->assertStatus(200);
    }

    */
    public function testApiRegisterRoute()
    {
        $response = $this->get('/lohp/contributor/portal/register');
        
       $response->assertStatus(200);
    }
    
    public function testApiLoginRoute()
    {
        $response = $this->get('/lohp/contributor/portal/login');

       $response->assertStatus(200);
    }

}
