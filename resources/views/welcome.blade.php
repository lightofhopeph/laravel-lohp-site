@extends('layouts.app')

@section('content')
<section id="services" class="pt-32 pb-4 ">
    <div class="mx-auto"> 
        <div class="text-center "> 
            <span class="text-4xl lg:text-5xl uppercase font-bold"  style="font-family: 'Montserrat', sans-serif"> advocacy</span>
            <p class=" italic" style="font-family: 'Roboto Slab', serif"> <q>  Because we care for the environment and for our children's children... </q> </p>
        </div>
        <div class="lg:flex lg:flex-wrap lg:justify-center">
            <div class="border mx-auto rounded overflow-hidden my-8 bg-gray-100 sm:m-10 lg:w-2/5 xl:w-3/12"> 
                <img src="/storage/services/fablab2_s.jpg" class="mx-auto" />
                <div class="p-4">
                    <span class="font-bold " style="font-family: 'Montserrat', sans-serif"> Workshops and awareness about the environment </span>     
                    <p class="text-justify" style="font-family: 'Roboto Slab', serif">Participate to become a steward for the environment in creating a brighter future for our children. </p>
                </div>
            </div>
            <div class="border mx-auto rounded overflow-hidden my-8 bg-gray-100 sm:m-10 lg:w-2/5 xl:w-3/12"> 
                <img src="/storage/services/img3_s.jpg" class="mx-auto" />
                <div class="p-4"> 
                    <span class="font-bold" style="font-family: 'Montserrat', sans-serif"> Solar Lamp Program</span>
                    <p style="font-family: 'Roboto Slab', serif">This project aims to provide a clean, safe, cheap and sustainable source of light for the communities in far-flung areas. Join us in our advocacy! </p>
                </div>
            </div>
            {{-- <div class="border mx-auto rounded overflow-hidden my-8 bg-gray-100 sm:m-10 lg:w-2/5 xl:w-3/12"> 
                <img src="/storage/services/frontpage1_s.jpg" class="mx-auto" />
                <div class="p-4">
                    <span class="font-bold" style="font-family: 'Montserrat', sans-serif"> DIY KIT Solar Lamp in a Bottle</span>
                    <p style="font-family: 'Roboto Slab', serif">The DIY kit costs only 300 pesos and the lamp could last for at least 2-5 years. Put a smile on someone's face today! </p>
                </div>
            </div> --}}
        </div>
        <div class="lg:flex lg:flex-wrap lg:justify-center"> 
            <div class="lg:px-0 lg:py-4 p-4 mx-auto sm:px-0 sm:m-10 lg:w-4/5 xl:9/12" >
                <p class="text-justify" style="font-family: 'Roboto Slab', serif">We are fulfilled knowing that today as of March 2020, we have assembled and distributed <span class="font-bold text-green-500"> 2,033 </span> Solar Night Lamps in A Bottle to <span class="font-bold text-green-500" > 1,016 </span> family beneficiaries, recycled <span class="font-bold text-green-500"> 2,033 </span> PET Plastic Bottles and reduced C0<sub>2</sub> emissions from kersone (that's approximately 80,154 Kg of CO<sub>2</sub>). Thank you to all those who shared their time and resources to make all of these possible. </p>
                <p class="pt-4"> <span class="font-bold" style="font-family: 'Montserrat', sans-serif">These solar lamps are hitting 3 birds in 1 stone.</span> </p>
                <ul class="list-decimal list-inside">
                    <li class="text-justify" style="font-family: 'Roboto Slab', serif"> We are fighting against plastic pollution by utilizing used plastic bottles.</li>
                    <li class="text-justify" style="font-family: 'Roboto Slab', serif">We are fighting against climate change by reducing our carbon footprint with the aid of renewable energy. </li>
                    <li class="text-justify" style="font-family: 'Roboto Slab', serif"> We are helping less privileged off grid communities to have a safe source of light at night time with the use of clean renewable energy.</li>
                </ul>

            </div>
        </div>

    </div>
</section>
<section id="activities" class="pt-20 pb-4s">
    <div class="mx-auto ">
        <div class="text-center pt-20 pb-4 mx-10"> 
            <span class="text-4xl lg:text-5xl uppercase font-bold"  style="font-family: 'Montserrat', sans-serif"> outreach programmes</span>
            <p class="font-thin italic" style="font-family: 'Roboto Slab', serif"><q> We can do no great things, only small things with great love. </q> </p>
        </div>

        <div class="py-8 sm:mx-10 inline">
            <div class="flex justify-center" > 
                <iframe id="llc-video" width="640px" height="385px" src="//www.youtube.com/embed/WCl5TYTePBA?modestbranding=1" > 
                </iframe>  
            </div>
            <div class="px-4 pt-2 lg:flex lg:justify-center w-auto" style="font-family: 'Roboto Slab', serif; ">
                <p class="w-full lg:w-2/5 text-center text-gray-800">Sharing The Light of Hope to less privileged communities in Marigondon Lapu Lapu City Philippines </p>
            </div>
        </div>
        <div class="block lg:flex lg:flex-wrap lg:justify-center" style="font-family: 'Roboto Slab', serif">
            
            <div class="border hover:bg-green-100 sm:m-10 pb-5 rounded overflow-hidden lg:w-2/5 xl:w-3/12">
                <a id="op1" data-toggle="modal" href="#" > 
                    <div class="mx-auto w-full" >
                        <img src="/storage/pajo/pajo_fp.jpg" class="w-screen" />
                    </div>
                    <div class="pt-4 text-center"> 
                        <h1 class="font-bold">Pajo Barangay Hall </h1>
                        <h4> Lapu-Lapu City, Cebu</h4>
                    </div>
                </a>
            </div>

            <div class="border hover:bg-green-100 sm:m-10 pb-5 rounded overflow-hidden lg:w-2/5 xl:w-3/12">
                <a id="op2" data-toggle="modal" href="#" > 
                    <div class="mx-auto w-full" >
                        <img src="/storage/tulang/tulang_fp.jpg" class="w-screen"/>
                    </div>
                    <div class="pt-4 text-center"> 
                        <h1 class="font-bold">Tulang Island </h1>
                        <h4> Island in San Francisco, Cebu</h4>
                    </div>
                </a>
            </div>
            <div class="border hover:bg-green-100 sm:m-10 pb-5 rounded overflow-hidden lg:w-2/5 xl:w-3/12">
                <a id="op2" data-toggle="modal" href="#" > 
                    <div class="mx-auto w-full">
                        <img src="/storage/fablab/fablab_fp.jpg" class="w-screen"/>
                    </div>
                    <div class="pt-4 text-center"> 
                        <h1 class="font-bold">Fablab UP, Cebu </h1>
                        <h4> Solderless Solar Night Lamp, 22 Hours Makeathon</h4>
                    </div>
                </a>
            </div>
            <div class="border hover:bg-green-100 sm:m-10 pb-5 rounded overflow-hidden lg:w-2/5 xl:w-3/12">
                <a id="op2" data-toggle="modal" href="#" > 
                    <div class="mx-auto w-full">
                        <img src="/storage/pajo/pajo_fp.jpg" class="w-screen"/>
                    </div>
                    <div class="pt-4 text-center"> 
                        <h1 class="font-bold">Pajo Barangay Hall </h1>
                        <h4> Lapu-lapu City, Cebu</h4>
                    </div>
                </a>
            </div>
            <div class="border hover:bg-green-100 sm:m-10 pb-5 rounded overflow-hidden lg:w-2/5 xl:w-3/12">
                <a id="op2" data-toggle="modal" href="#" > 
                    <div class="mx-auto w-full">
                        <img src="/storage/psbank/psbank_fp.jpg" class="w-screen"/>
                    </div>
                    <div class="pt-4 text-center"> 
                        <h1 class="font-bold">PS Bank</h1>
                        <h4> PS Bank</h4>
                    </div>
                </a>
            </div>
            <div class="border hover:bg-green-100 sm:m-10 pb-5 rounded overflow-hidden lg:w-2/5 xl:w-3/12">
                <a id="op2" data-toggle="modal" href="#" > 
                    <div class="mx-auto w-full">
                        <img src="/storage/dipolog/dipolog_fp.jpg" class="w-screen"/>
                    </div>
                    <div class="pt-4 text-center"> 
                        <h1 class="font-bold">Dipolog</h1>
                        <h4> Dipolog City</h4>
                    </div>
                </a>
            </div>
            <div class="border hover:bg-green-100 sm:m-10 pb-5 rounded overflow-hidden lg:w-2/5 xl:w-3/12">
                <a id="op2" data-toggle="modal" href="#" > 
                    <div class="mx-auto w-full">
                        <img src="/storage/pitos/pitos_fp.jpg" class="w-screen"/>
                    </div>
                    <div class="pt-4 text-center"> 
                        <h1 class="font-bold"> Sitio Pundok, Pit-os </h1>
                        <h4> Cebu City</h4>
                    </div>
                </a>
            </div>
            <div class="border hover:bg-green-100 sm:m-10 pb-5 rounded overflow-hidden lg:w-2/5 xl:w-3/12">
                <a id="op2" data-toggle="modal" href="#" > 
                    <div class="mx-auto w-full">
                        <img src="/storage/carcar/carcar_fp.jpg" class="w-screen" />
                    </div>
                    <div class="pt-4 text-center"> 
                        <h1 class="font-bold">Op Camp, Carcar</h1>
                        <h4>Cebu</h4>
                    </div>
                </a>
            </div>
        </div>
    </div>
</section>
<section id="patrons" class="pt-20 pb-4">
    <div class=" mx-auto "> 
        <div class="text-center pt-20 pb-4 "> 
            <span class="text-4xl lg:text-5xl uppercase font-bold"  style="font-family: 'Montserrat', sans-serif"> Our Patrons</span>
        </div>
        <div class="sm:flex sm:flex-wrap sm:justify-center" style="font-family: 'Roboto Slab', serif"> 
            <div class="inline m-12">
                <div> 
                    <div class="flex justify-center pt-4 "> 
                        <img src="/storage/patrons/patron_fablab.jpg" class="h-32"/>
                    </div>
                   
                </div>
            </div>
            <div class="inline m-12">
                <div>
                    <div class="flex justify-center pt-4 "> 
                        <img src="/storage/patrons/patron_dti.jpg" class="h-32"/>
                    </div>
                 
                </div>
            </div>
            <div class="inline m-12">
                <div> 
                    <div class="flex justify-center pt-4 "> 
                        <img src="/storage/patrons/patron_psbank.jpg" class="h-32"/>
                    </div>
                 
                </div>
            </div>
            <div class="inline m-12">
                <div>
                    <div class="flex justify-center pt-4"> 
                        <img src="/storage/patrons/patron_pajo.jpg" class=" h-32"/>
                    </div>
                   
                </div>
            </div>
            <div class="inline m-12">
                <div>
                    <div class="flex justify-center pt-4"> 
                        <img src="/storage/patrons/aklanvhs.PNG" class=" h-32"/>
                    </div>
                  
                </div>
            </div>
            <div class="inline m-12">
                <div>
                    <div class="flex justify-center pt-4"> 
                        <img src="/storage/patrons/arch.PNG" class=" h-32"/>
                    </div>
                  
                </div>
            </div>
            <div class="inline m-12">
                <div>
                    <div class="flex justify-center pt-4"> 
                        <img src="/storage/patrons/ascom.PNG" class=" h-32"/>
                    </div>
                 
                </div>
            </div>
            <div class="inline m-12">
                <div>
                    <div class="flex justify-center pt-4"> 
                        <img src="/storage/patrons/cis.PNG" class=" h-32"/>
                    </div>
                  
                </div>
            </div>
            <div class="inline m-12">
                <div>
                    <div class="flex justify-center pt-4"> 
                        <img src="/storage/patrons/cristalec.PNG" class=" h-32"/>
                    </div>
                  
                </div>
            </div>
            <div class="inline m-12">
                <div>
                    <div class="flex justify-center pt-4"> 
                        <img src="/storage/patrons/fablabohol.PNG" class=" h-32"/>
                    </div>
                 
                </div>
            </div>
            <div class="inline m-12">
                <div>
                    <div class="flex justify-center pt-4"> 
                        <img src="/storage/patrons/gla.PNG" class=" h-32"/>
                    </div>
                  
                </div>
            </div>
            <div class="inline m-12">
                <div>
                    <div class="flex justify-center pt-4"> 
                        <img src="/storage/patrons/opcamp.PNG" class=" h-32"/>
                    </div>
                 
                </div>
            </div>
            <div class="inline m-12">
                <div>
                    <div class="flex justify-center pt-4"> 
                        <img src="/storage/patrons/rotaractcf.PNG" class=" h-32"/>
                    </div>
                 
                </div>
            </div>
            <div class="inline m-12">
                <div>
                    <div class="flex justify-center pt-4"> 
                        <img src="/storage/patrons/tag.PNG" class=" h-32"/>
                    </div>
                 
                </div>
            </div>
            <div class="inline m-12">
                <div>
                    <div class="flex justify-center pt-4"> 
                        <img src="/storage/patrons/univet.PNG" class=" h-32"/>
                    </div>
                 
                </div>
            </div>
            <div class="inline m-12">
                <div>
                    <div class="flex justify-center pt-4"> 
                        <img src="/storage/patrons/vriend.PNG" class=" h-32"/>
                    </div>
                 
                </div>
            </div>
            <div class="inline m-12">
                <div>
                    <div class="flex justify-center pt-4"> 
                        <img src="/storage/patrons/workplace.PNG" class=" h-32"/>
                    </div>
                 
                </div>
            </div>
        </div>
    </div>
</section>
<section id="getinvolved" class="pt-20 pb-4">
    <div class="mx-auto">
        <div class="text-center pt-20 pb-4"  > 
            <span class="text-4xl lg:text-5xl uppercase font-bold" style="font-family: 'Montserrat', sans-serif"> Get Involved </span>
            
        </div>
        <div class="md:flex md:justify-center" style="font-family: 'Roboto Slab', serif"> 
            <div class="border rounded m-10 py-2 pt-4 md:w-2/5 md:px-0 md:m-4">
                <div class="flex justify-center"> 
                    <img src="/storage/getinvolved/joinus.jpg" class=" h-16" />
                </div>
                <div class="text-center" > 
                    <span >Join Us</span>
                    <p class="text-justify p-8" >Make a difference now for the lives of many. Be an instrument of hope for those individuals who need most of our help. Participate to become a steward for the environment in creating a brighter future for our children. Contact us:<span class="text-blue-500 font-bold"> lightofhopeph@gmail.com <span> </p>
                </div>
            </div> 

            <div class="border rounded m-10 py-2 pt-4 md:w-2/5 md:px-0 md:m-4">
                <div class="flex justify-center"> 
                    <img src="/storage/getinvolved/donate.jpg" class=" h-16" />
                </div>
                <div class="text-center" > 
                    <span >Donate</span>
                    <p class="text-justify p-8" >Help build our cause. Help create a brighter future for our children's children. Make a donation today! A little help can go a long way. Contact us: <span class="text-blue-500 font-bold"> lightofhopeph@gmail.com </span> </p>
                </div>
            </div> 
        </div>

    </div>
</section>
<footer class="pt-20">
    <hr class="w-screen">
    <div class="bg-gray-100 w-screen"> 
       
        <div class="pt-6 lg:grid lg:grid-cols-2 lg:flex lg:items-center"> 
            
            <div class="flex justify-center "> 
                <span  style="font-family: 'Montserrat', sans-serif"> Light of Hope Project PH @2020 </span>
            </div>
            <div class="flex justify-center ">  
                <div class="p-2"> 
                    <a href="https://www.facebook.com/lightofhopeph/"> 
                        <i class="fab fa-facebook"></i>
                    </a>
                </div>
                <div class="p-2"> 
                    <a href="#"> 
                        <i class="fab fa-instagram"></i>
                    </a>
                </div>
                <div class="p-2"> 
                    <a href="#"> 
                        <i class="fab fa-twitter"></i>
                    </a>
                </div>
            </div>
            
        </div>
    </div>
</footer>
@endsection