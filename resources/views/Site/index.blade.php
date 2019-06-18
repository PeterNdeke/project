@extends('layouts.master')

@section('content')
<main>
    <!-- ./Page header -->
    <header class="header section parallax image-background center-bottom cover gradient-45 alpha-8 color-1" style="padding-top: 0px">
        <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
<ol class="carousel-indicators">
  <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
  <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
  <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
  <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
</ol>
<div class="carousel-inner" role="listbox">
  <!-- Slide One - Set the background image for this slide in the line below -->
  <div class="carousel-item active" style="background-image: url('images/slides/slide-1.jpg')">
    <div class="carousel-caption d-none d-md-block">
      <h2 class="display-3">JOIN US FOR WEEKEND BRUNCH AT NUMBER FIVE</h2>
      <p class="lead">The new and exclusive social networking platform for professionals.</p>
    </div>
  </div>
  <!-- Slide Two - Set the background image for this slide in the line below -->
  <div class="carousel-item" style="background-image: url('images/slides/slide-2.jpg')">
    <div class="carousel-caption d-none d-md-block">
      <h2 class="display-4">MEMBERS CAN ENJOY FULL ACCESS TO ALL FEATURES WE OFFER</h2>
    </div>
  </div>
  <!-- Slide Three - Set the background image for this slide in the line below -->
  <div class="carousel-item" style="background-image: url('images/slides/slide-3.jpg')">
    <div class="carousel-caption d-none d-md-block">
      <h2 class="display-4">BECOME A MEMBER</h2>
    </div>
  </div>
  <!-- Slide Four - Set the background image for this slide in the line below -->
  <div class="carousel-item" style="background-image: url('images/slides/slide-4.jpg')">
    <div class="carousel-caption d-none d-md-block">
      <h2 class="display-4">Ride with us on Vybbz upcoming exclusive event!</h2>
    </div>
  </div>
</div>
<a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="sr-only">Previous</span>
    </a>
<a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="sr-only">Next</span>
    </a>
</div>
    </header>
    <!-- ./Features - grid -->
    <section id="features" class="section bottom-right bg-1">
        <div class="container pb-5">
            <div class="section-heading mb-6 text-center">
                <h2>BUILD YOUR PERSONAL NETWORK</h2>
                <p class="lead color-2">Vybzz Is a networking and Event management platform that connect Professionals from all background together</p>
            </div>
            <div class="row gap-y text-center text-md-left">
                <div class="col-md-4 py-4 rounded shadow-hover text-center"><i class="pe pe-7s-add-user pe-3x color-3 mb-2"></i>
                    <h5 class="bold">Create an account</h5>
                    <p class="color-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab dolores ea fugiat nesciunt quisquam. Assumenda dolore error nulla pariatur voluptatem?</p>
                </div>
                <div class="col-md-4 py-4 rounded shadow-hover text-center"><i class="pe pe-7s-share pe-3x color-3 mb-2"></i>
                    <h5 class="bold">Connect and share with people</h5>
                    <p class="color-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab dolores ea fugiat nesciunt quisquam. Assumenda dolore error nulla pariatur voluptatem?</p>
                </div>
                <div class="col-md-4 py-4 rounded shadow-hover text-center"><i class="pe pe-7s-comment pe-3x color-3 mb-2"></i>
                    <h5 class="bold">Join our interstate’s based group</h5>
                    <p class="color-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab dolores ea fugiat nesciunt quisquam. Assumenda dolore error nulla pariatur voluptatem?</p>
                </div>
            </div>
        </div>
    </section>
    <!-- ./Bring to life - Swiper -->
    

<section class="singl-testimonial shadow"><div class="container-fluid py-0"><div class="row align-items-center gradient gradient-54 color-1"><div class="col-md-4 mx-auto py-4 py-md-0"><p class="font-md bold mt-1 color-1">COMMUNITY FEEDS</p><hr class="my-4"><p class="lead color-1"> Share your thoughts with the community and get inspiration from other professionals by following the interactive feed. Post photos, share resources and get into conversation every day with the rest of the professional world.</p></div><div class="col-12 col-md-6 image-background cover" style="background-image: url(images/Ellipse5.png);"></div></div></div></section>

   
    <!-- ./Top-notch appearance - Big screen left -->
    <section class="section bottom-right bg-1">
        <div class="container-wide bring-to-front">
            <div class="row gap-y align-items-center text-center text-lg-left">
                <div class="col-10 col-lg-5 mx-auto order-md-2">
                    <h2>NETWORKING</h2>
                    <p class="lead color-2">Expand your network to truly global proportions. Connect with other professionals the world-over, introduce connections and send messages. It’s time for professionals to join forces to become more collectively valued.</p></div>
                <div class="col-12 col-lg-6 order-md-1"><img src="images/connected_world_way.svg" alt="" class="img-responsive" style="max-width: 80%;" data-aos="fade-right">
                </div>
            </div>
        </div>
    </section>
    <!-- ./Lightweight HTML - Big screen right -->
    <section class="section bg-6">
        <div class="container-wide">
            <div class="row gap-y align-items-center text-center text-lg-left">
                <div class="col-10 col-lg-6 mx-auto">
                    <h2>DISCUSSIONS</h2>
                    <p class="lead color-2">Ask and answer questions about any aspect of your professional life. Offline collaboration is something all professionals are particularly adept at, and bringing this online will help to spread best-practice learnings across the globe and accelerate professional development.</p></div>
                <div class="col-12 col-lg-5 pr-0"><img src="images/7b1c7e8059f7a45b75d668d4343b6a19.png" alt="" class="img-responsive" style="max-width: 60%;" data-aos="fade-left"></div>
            </div>
        </div>
    </section>
    <!-- ./Single testimonial - Right -->
    <section class="singl-testimonial shadow">
        <div class="container-fluid py-0">
            <div class="row align-items-center gradient gradient-54 color-1">
                <div class="col-md-7 image-background cover center-top" style="background-image: url(images/home-events-section.jpg);"></div>
                <div class="col-md-4 mx-auto py-4 py-md-0">
                    <h2>EVENTS</h2>
                    <hr class="my-4">
                    <div class="bold mt-1 color-1">Check out a directory of all Vybbz related events around the world where you can see event information, which of your peers are attending, discuss the conference learnings and view photos of the event. It’s bringing the offline, online, and allowing conversation to continue well after the fact.</div>
            </div>
        </div>
    </section>
    
</main>

@endsection



