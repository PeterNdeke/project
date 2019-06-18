@extends('layouts.master')

@section('content')

<main class="position-relative overflow-hidden">
    <!-- ./Page header -->
    <header class="page header color-1 overlay alpha-8 image-background cover gradient-45" style="background-image: url('images/urban.jpg')">
        <div class="divider-shape">
            <!-- waves divider -->
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" preserveAspectRatio="none" class="shape-waves" style="left: 0; transform: rotate3d(0,1,0,180deg);">
                <path class="shape-fill shape-fill-1" d="M790.5,93.1c-59.3-5.3-116.8-18-192.6-50c-29.6-12.7-76.9-31-100.5-35.9c-23.6-4.9-52.6-7.8-75.5-5.3c-10.2,1.1-22.6,1.4-50.1,7.4c-27.2,6.3-58.2,16.6-79.4,24.7c-41.3,15.9-94.9,21.9-134,22.6C72,58.2,0,25.8,0,25.8V100h1000V65.3c0,0-51.5,19.4-106.2,25.7C839.5,97,814.1,95.2,790.5,93.1z" />
            </svg>
        </div>
        <div class="container" style="">
            <div class="row">
                <div class="col-md-6">
                    <h1 class="regular display-4 color-1 mb-6">About Vybbz</h1>
                </div>
            </div>
        </div>
    </header>
    <!-- ./Overview - Floating boxes -->
    <section class="section overview">
        <div class="container">
            <div class="row align-items-center gap-y">
                <div class="col-lg-5 mr-auto text-center text-md-left">
                    <div class="section-heading">
                        <p class="badge badge-success bold">Connect with VybbZ</p>
                        <h2>Create economic opportunity for every member of the global workforce.</h2>
                        <p class="lead color-2">Vybzz Is a networking and Event management platform that connect Professionals from all background together.</p>
                    </div>
                    <p>Vybbz leads a diversified business with revenues from membership subscriptions, advertising sales and recruitment solutions. In July 2019, Microsoft completed its acquisition of Vybbz, bringing together the world’s leading professional cloud and the world’s leading professional network.</p>
                </div>
                <div class="col-lg-6">
                    <div class="row gap-y">
                        <div class="col-6 col-sm-5 col-md-6 mt-6 ml-lg-auto">
                            <div class="card rounded p-2 p-sm-4 shadow text-center text-md-left" data-aos="fade-up"><i class="pe pe-3x pe-7s-date color-3"></i>
                                <p class="bold mb-0">Events</p>
                                <p class="op-7 small">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi at, cumque dolores dolorum est.</p>
                            </div>
                        </div>
                        <div class="col-6 col-sm-5 col-md-6 mr-lg-auto">
                            <div class="color-1 bg-4-gradient card rounded p-2 p-sm-4 shadow text-center text-md-left" data-aos="fade-up"><i class="pe pe-3x pe-7s-users"></i>
                                <p class="bold mb-0">Groups</p>
                                <p class="op-7 small">Cupiditate debitis delectus dolor dolore doloremque, doloribus eveniet illo in labore neque.</p>
                            </div>
                        </div>
                        <div class="col-6 col-sm-5 col-md-6 ml-lg-auto">
                            <div class="card rounded p-2 p-sm-4 shadow text-center text-md-left" data-aos="fade-up"><i class="pe pe-3x pe-7s-global color-3"></i>
                                <p class="bold mb-0">Community</p>
                                <p class="op-7 small">Amet aperiam cumque delectus eligendi, esse, modi nemo nisi officiis rem repellat sed ulla.</p>
                            </div>
                        </div>
                        <div class="col-6 col-sm-5 col-md-6 mt-6n mr-lg-auto">
                            <div class="card rounded p-2 p-sm-4 shadow text-center text-md-left" data-aos="fade-up"><i class="pe pe-3x pe-7s-browser color-3"></i>
                                <p class="bold mb-0">News Aggregation</p>
                                <p class="op-7 small">Ad aliquam dicta, eaque eos iusto totam velit. Amet atque dolorum eaque ipsa sed. Aliquid cupiditate.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- ./Video -->
    <section class="section">
        <div class="container bring-to-front">
            <div class="shadow rounded text-center overlay overlay-2 alpha-8 color-1 p-5 image-background cover" style="background-image: url(images/8.jpg)">
                <div class="content">
                    <div class="section-heading">
                        <h2 class="color-1">Discover how VybbZ works</h2></div>
                    <p class="handwritten highlight font-md">Play the video</p><a href="https://www.youtube.com/watch?v=lfBNNZso2g0" class="modal-popup mfp-iframe btn btn-circle btn-lg btn-accent" data-effect="mfp-fade"><i class="pe pe-7s-play pe-2x ml-2"></i></a></div>
            </div>
        </div>
    </section>
    
    <!-- ./Counters -->
    <section class="bg-1 edge top-left">
        <div class="container">
            <div class="row">
                <div class="col-xs-4 col-md-3 text-center"><i class="pe pe-7s-users pe-3x accent"></i>
                    <p class="counter bold color-5 font-md mt-0">273</p>
                    <p class="color-2 m-0">Groups</p>
                </div>
                <div class="col-xs-4 col-md-3 text-center"><i class="pe pe-7s-cloud-download pe-3x accent"></i>
                    <p class="counter bold color-5 font-md mt-0">654</p>
                    <p class="color-2 m-0">Downloads</p>
                </div>
                <div class="col-xs-4 col-md-3 text-center"><i class="pe pe-7s-tools pe-3x accent"></i>
                    <p class="counter bold color-5 font-md mt-0">7941</p>
                    <p class="color-2 m-0">Followers</p>
                </div>
                <div class="col-xs-4 col-md-3 text-center"><i class="pe pe-7s-medal pe-3x accent"></i>
                    <p class="counter bold color-5 font-md mt-0">654</p>
                    <p class="color-2 m-0">New users</p>
                </div>
            </div>
        </div>
    </section>
    
    <!-- ./Team -->
    <section class="section bg-1">
        <div class="container bring-to-front pt-0 pb-5">
            <div class="section-heading text-center">
                <h2>Get to know our team</h2>
                <p class="lead color-2">These amazing people have made possible to stay where we are</p>
            </div>
            <!-- sm: 576px, md: 768px,-->
            <div class="swiper-container pb-5" data-sw-centered-slides="false" data-sw-show-items="2" data-sw-space-between="30" data-sw-breakpoints='{"576": {"slidesPerView": 1, "spaceBetween": 10, "slidesPerGroup": 1}}'>
                <div class="swiper-wrapper">
                    <div class="swiper-slide">
                        <div class="card shadow">
                            <div class="container-fluid py-0">
                                <div class="row">
                                    <div class="col-md-5 py-9 py-sm-7 overlay overlay-5 alpha-2 image-background cover center-top" style="background-image: url(images/avatar/team/1.jpg)"></div>
                                    <div class="col-md-7">
                                        <div class="p-4">
                                            <h6 class="bold font-l">Rafael Freeman</h6>
                                            <p class="small mt-0 accent text-uppercase mb-5">Founder &amp; CEO</p>
                                            <blockquote class="team-quote pt-1">
                                                <p class="italic pl-4">Long time ago, this guy started it all.</p>
                                            </blockquote>
                                            <hr class="w-25 mt-5">
                                            <nav class="nav"><a href="javascript:;" class="nav-item nav-link pb-0"><i class="fab fa-facebook color-2"></i> </a><a href="javascript:;" class="nav-item nav-link pb-0"><i class="fab fa-twitter color-2"></i> </a><a href="javascript:;" class="nav-item nav-link pb-0"><i class="fab fa-dribbble color-2"></i></a></nav>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="swiper-slide">
                        <div class="card shadow">
                            <div class="container-fluid py-0">
                                <div class="row">
                                    <div class="col-md-5 py-9 py-sm-7 overlay overlay-5 alpha-2 image-background cover center-top" style="background-image: url(images/avatar/team/2.jpg)"></div>
                                    <div class="col-md-7">
                                        <div class="p-4">
                                            <h6 class="bold font-l">Aline De Souza</h6>
                                            <p class="small mt-0 accent text-uppercase mb-5">Marketing Director</p>
                                            <blockquote class="team-quote pt-1">
                                                <p class="italic pl-4">The girl that influences our products.</p>
                                            </blockquote>
                                            <hr class="w-25 mt-5">
                                            <nav class="nav"><a href="javascript:;" class="nav-item nav-link pb-0"><i class="fab fa-facebook color-2"></i> </a><a href="javascript:;" class="nav-item nav-link pb-0"><i class="fab fa-twitter color-2"></i> </a><a href="javascript:;" class="nav-item nav-link pb-0"><i class="fab fa-dribbble color-2"></i></a></nav>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="swiper-slide">
                        <div class="card shadow">
                            <div class="container-fluid py-0">
                                <div class="row">
                                    <div class="col-md-5 py-9 py-sm-7 overlay overlay-5 alpha-2 image-background cover center-top" style="background-image: url(images/avatar/team/3.jpg)"></div>
                                    <div class="col-md-7">
                                        <div class="p-4">
                                            <h6 class="bold font-l">Jayden Gardner</h6>
                                            <p class="small mt-0 accent text-uppercase mb-5">Account Manager</p>
                                            <blockquote class="team-quote pt-1">
                                                <p class="italic pl-4">Keeps all the numbers in place.</p>
                                            </blockquote>
                                            <hr class="w-25 mt-5">
                                            <nav class="nav"><a href="javascript:;" class="nav-item nav-link pb-0"><i class="fab fa-facebook color-2"></i> </a><a href="javascript:;" class="nav-item nav-link pb-0"><i class="fab fa-twitter color-2"></i> </a><a href="javascript:;" class="nav-item nav-link pb-0"><i class="fab fa-dribbble color-2"></i></a></nav>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="swiper-slide">
                        <div class="card shadow">
                            <div class="container-fluid py-0">
                                <div class="row">
                                    <div class="col-md-5 py-9 py-sm-7 overlay overlay-5 alpha-2 image-background cover center-top" style="background-image: url(images/avatar/team/4.jpg)"></div>
                                    <div class="col-md-7">
                                        <div class="p-4">
                                            <h6 class="bold font-l">Jacobi Edwards</h6>
                                            <p class="small mt-0 accent text-uppercase mb-5">VP of Sales</p>
                                            <blockquote class="team-quote pt-1">
                                                <p class="italic pl-4">The man that leads the Global Sales team.</p>
                                            </blockquote>
                                            <hr class="w-25 mt-5">
                                            <nav class="nav"><a href="javascript:;" class="nav-item nav-link pb-0"><i class="fab fa-facebook color-2"></i> </a><a href="javascript:;" class="nav-item nav-link pb-0"><i class="fab fa-twitter color-2"></i> </a><a href="javascript:;" class="nav-item nav-link pb-0"><i class="fab fa-dribbble color-2"></i></a></nav>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="swiper-slide">
                        <div class="card shadow">
                            <div class="container-fluid py-0">
                                <div class="row">
                                    <div class="col-md-5 py-9 py-sm-7 overlay overlay-5 alpha-2 image-background cover center-top" style="background-image: url(images/avatar/team/5.jpg)"></div>
                                    <div class="col-md-7">
                                        <div class="p-4">
                                            <h6 class="bold font-l">Allison Fernandez</h6>
                                            <p class="small mt-0 accent text-uppercase mb-5">Client Support</p>
                                            <blockquote class="team-quote pt-1">
                                                <p class="italic pl-4">Need any assistance with the product?</p>
                                            </blockquote>
                                            <hr class="w-25 mt-5">
                                            <nav class="nav"><a href="javascript:;" class="nav-item nav-link pb-0"><i class="fab fa-facebook color-2"></i> </a><a href="javascript:;" class="nav-item nav-link pb-0"><i class="fab fa-twitter color-2"></i> </a><a href="javascript:;" class="nav-item nav-link pb-0"><i class="fab fa-dribbble color-2"></i></a></nav>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="swiper-slide">
                        <div class="card shadow">
                            <div class="container-fluid py-0">
                                <div class="row">
                                    <div class="col-md-5 py-9 py-sm-7 overlay overlay-5 alpha-2 image-background cover center-top" style="background-image: url(images/avatar/team/6.jpg)"></div>
                                    <div class="col-md-7">
                                        <div class="p-4">
                                            <h6 class="bold font-l">Richard Smith</h6>
                                            <p class="small mt-0 accent text-uppercase mb-5">Lead Developer</p>
                                            <blockquote class="team-quote pt-1">
                                                <p class="italic pl-4">Geek, manager, and manager of geeks.</p>
                                            </blockquote>
                                            <hr class="w-25 mt-5">
                                            <nav class="nav"><a href="javascript:;" class="nav-item nav-link pb-0"><i class="fab fa-facebook color-2"></i> </a><a href="javascript:;" class="nav-item nav-link pb-0"><i class="fab fa-twitter color-2"></i> </a><a href="javascript:;" class="nav-item nav-link pb-0"><i class="fab fa-dribbble color-2"></i></a></nav>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- Add Arrows -->
                <div class="swiper-button-next"></div>
                <div class="swiper-button-prev"></div>
                <!-- Add Pagination -->
                <div class="swiper-pagination"></div>
            </div>
        </div>
    </section>
   
    <!-- ./Newsletter Form -->
    <section class="section bg-1 edge top-left b-b">
        <div class="container">
            <div class="row">
                <div class="col-md-6 b-md-r">
                    <h2>VybbZ official <span class="bold">Newsletter</span></h2></div>
                <div class="col-md-5 ml-md-auto">
                    <form action="srv/register.php" class="form" data-response-message-animation="slide-in-left">
                        <div class="input-group">
                            <input type="email" name="Subscribe[email]" class="form-control rounded-circle-left" placeholder="Enter your email" required>
                            <div class="input-group-append">
                                <button class="btn btn-rounded btn-4" type="submit">Register</button>
                            </div>
                        </div>
                    </form>
                    <div class="response-message"><i class="fas fa-envelope font-lg"></i>
                        <p class="font-md m-0">Check your email</p>
                        <p class="response">We sent you an email with a link to get started. You’ll be in your account in no time.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</main>
@endsection



