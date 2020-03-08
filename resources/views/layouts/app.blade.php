<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>{{ config('app.name', 'Laravel') }}</title>

    <!-- Scripts -->
    <script src="{{ asset('js/app.js') }}" defer></script>

    <link rel="icon" href="{{ asset('/css/favicon.png') }}" type="image/x-icon"/>

    <!-- Fonts -->
    <link rel="dns-prefetch" href="//fonts.gstatic.com">

    <!-- Styles -->
    <link href="{{ asset('css/app.css') }}" rel="stylesheet">
</head>
<body style="font-family: Roboto">
    <div class="bg-gray-900 fixed w-screen text-center px-8 sm:px-12 " style="z-index: 100;padding-left:7%; padding-right:7%"> 
        <nav id="nav-menu" class="xl:px-8" style="font-family: 'Montserrat', sans-serif"> 
            
        </nav>
    </div>
    
    <header class="relative">
        <div class="flex items-center justify-center w-screen h-screen"> 
           
            <a class="bg-green-700 text-white uppercase py-2 px-4 rounded tracking-wider" href="#services" role="button" style="font-family: 'Montserrat', sans-serif">our advocacy </a>
        </div>
           
        
        <div class="bg-fixed bg-no-repeat bg-center bg-cover w-screen absolute top-0 left-0 h-full" style="background-image:url('storage/fp/fp.JPG'); z-index:-100"> 
        </div>
        
    </header>

    <main class="py-4">                             
        @yield('content')
    </main>

</body>
</html>
