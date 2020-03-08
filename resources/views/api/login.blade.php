@extends('api.template')

@section('content')
<div class="container mx-auto flex pt-5 sm:pt-16" style="font-family: 'Montserrat', sans-serif" > 
   
    <form class="mx-auto w-screen " action="{{route('apiuserlogin')}}" method="POST" >
        @csrf
        <div class="mx-auto text-center pb-16">
            
            <h1 class="text-2xl font-bold text-gray-700">LOHP Contributor's Portal </h1>
        </div>
       
        <div class="border mx-auto text-center bg-green-100 md:w-9/12 lg:w-7/12 lx:w-5/12 shadow-lg"  > 
            <div class="mx-auto text-center bg-gray-500 w-3/12 -m-5 py-2 rounded-full " style="z-index: 1000">
                <h1> Sign In </h1>
            </div>
            <div class="mx-auto text-center pt-20" > 
            
                <div  class="flex justify-center items-baseline"> 
                      
                    <div class=" h-10 w-10/12 flex border items-center rounded-full overflow-hidden hover:shadow-md "> 
                        <label for="email" class="hidden " > Email: </label>
                        <span class="h-full px-4 bg-gray-400 text-xl pt-1"> <i class="fas fa-envelope"></i> </span>
                        <input id="email" type="email" name="email" class="focus:outline-none h-full w-full pl-1" placeholder="email"> 
                    </div>
                </div>
                @error('email')
                <span class="invalid-feedback" role="alert">
                    <span class="text-xs text-red-500">{{ $message }}</span>
                </span>
                @enderror
            
                <div  class="flex justify-center items-baseline pt-8"> 
 
                    <div class="h-10 w-10/12 flex border items-center rounded-full overflow-hidden hover:shadow-md"> 
                        <label for="password" class="hidden"> Password: </label>
                        <span class="h-full px-4 bg-gray-400 text-xl pt-1"> <i class="fas fa-unlock"></i> </span>
                        <input id="password" type="password" name="password" class="focus:outline-none h-full w-full pl-1" placeholder="password"> 
                    </div>
                </div>
                @error('password')
                <span class="invalid-feedback" role="alert">
                    <span class="text-xs text-red-500">{{ $message }}</span>
                </span>
                @enderror
              
           
                <div class="mx-auto text-center w-10/12 pt-12  "> 
                    <button name="register" class="focus:outline-none w-full border py-2 px-4 bg-blue-500 rounded-full hover:shadow-md" type="submit">Login </button>
                </div>

                <div class="pt-2 pb-10"> 
                    <span> Don't have an account? </span> <a href="{{route('apiuserregisterform')}}" class="underline">  Register <a> 
                </div>
            </div>
        </div>
    </form>
</div>
@endsection