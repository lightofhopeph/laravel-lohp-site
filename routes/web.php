<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

use App\Http\Controllers\ApiController;


Route::get('/', function () {
    return view('welcome');
});

Auth::routes();

Route::get('/lohp/contributor/portal/register', 'Auth\RegisterController@showApiuserRegisterForm')->name('apiuserregisterform');
Route::get('/lohp/contributor/portal/login', 'Auth\LoginController@showApiuserLoginForm')->name('apiuserloginform');
Route::get('/lohp/contributor/portal/{apiuser}', 'ApiController@index')->name('apiuserportal');


Route::post('/lohp/contributor/portal/login', 'Auth\LoginController@apiuserLogin')->name('apiuserlogin');
Route::post('/lohp/contributor/portal/register', 'Auth\RegisterController@createApiuser')->name('apiuserregister');