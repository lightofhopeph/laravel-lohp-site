<?php



namespace App\Http\Controllers;

use Socialite;
use App\Apiuser;
use Illuminate\Http\Request;

class ApiController extends Controller
{

    public function __construct()
    {
        return $this->middleware('auth:portal');
    }

    public function index(Apiuser $apiuser){
        
        return view('api.index');

    }


}
