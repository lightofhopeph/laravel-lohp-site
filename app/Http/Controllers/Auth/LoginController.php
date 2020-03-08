<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Foundation\Auth\AuthenticatesUsers;
use Illuminate\Http\Request;

use Illuminate\Support\Facades\Auth;
use App\Apiuser;
class LoginController extends Controller
{
    /*
    |--------------------------------------------------------------------------
    | Login Controller
    |--------------------------------------------------------------------------
    |
    | This controller handles authenticating users for the application and
    | redirecting them to your home screen. The controller uses a trait
    | to conveniently provide its functionality to your applications.
    |
    */

    use AuthenticatesUsers;

    /**
     * Where to redirect users after login.
     *
     * @var string
     */
    protected $redirectTo = '/home';

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('guest')->except('logout');
        $this->middleware('guest:portal')->except('logout');
    }

    public function showApiuserLoginForm()
    {
        return view('api.login');
    }



    public function apiuserLogin(Request $request)
    {
        $this->validate($request,[
            'email' => 'required|email',
            'password' => 'required'
        ]);

            

        if (Auth::guard('portal')->attempt(['email'=>$request->email, 'password'=>$request->password], $request->get('remember'))){

            $apiuser = Auth::guard('portal')->user();
    
            return redirect('/lohp/contributor/portal/' . $apiuser->id );
        }

        return back()->withInput($request->only('email', 'remember'));
    }
}
