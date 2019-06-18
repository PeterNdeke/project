<!doctype html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <!--[if IE]><meta http-equiv="X-UA-Compatible" content="IE=edge" /><![endif]-->
    <title>VYBBZ - The exclusive network platform for professionals</title>
    <meta name="description" content="">
    <meta name="viewport" content="width=device-width,initial-scale=1">
    <!-- Place favicon.ico in the root directory -->
    <link rel="apple-touch-icon" href="images/apple-touch-icon.png">
    <link rel="icon" href="images/favicon.png">
    <link href="https://fonts.googleapis.com/css?family=Poppins:100,300,400,700,900" rel="stylesheet">
    <!-- <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,700,800" rel="stylesheet"> -->
    <link href="https://fonts.googleapis.com/css?family=Caveat" rel="stylesheet">
    <link rel="stylesheet" href="{{asset('css/web.vendor.css')}}">
    <link rel="stylesheet" href="{{asset('css/web.css')}}">
</head>

<body>
    <!--[if lt IE 8]>
<p class="browserupgrade">You are using an <strong>outdated</strong> browser. Please <a href="http://browsehappy.com/">upgrade your browser</a> to improve your experience.</p>
<![endif]-->
    <!-- Making stripe menu -->
    <nav class="st-nav navbar main-nav navigation fixed-top">
        <div class="container">
            <ul class="st-nav-menu nav navbar-nav">
                <li class="st-nav-section nav-item">
                <a href="{{url('/')}}" class="navbar-brand"><img src="{{asset('images/logo.png')}}" alt="Vybbz" class="logo logo-sticky d-block d-md-none"> <img src="images/logo-bordered.png" alt="Vybbz" class="logo d-none d-md-block"></a>
                </li>
                <li class="st-nav-section st-nav-primary nav-item">
                <a class="st-root-link nav-link" href="{{url('about')}}">About Vybbz </a>
                <a class="st-root-link nav-link" href="{{url('blog')}}">Blog</a>
                <a class="st-root-link nav-link" href="{{url('faq')}}">FAQs</a>
                <a class="st-root-link nav-link" href="{{url('contact')}}">Contact </a></li>
                <li class="st-nav-section st-nav-secondary nav-item"><a class="btn btn-rounded btn-outline mr-3 px-3" href="{{url('accounts/login')}}"><i class="fas fa-sign-in-alt d-none d-md-inline mr-md-0 mr-lg-2"></i> <span class="d-md-none d-lg-inline">Login</span> </a><a class="btn btn-rounded btn-solid px-3" href="{{url('accounts/register')}}"><i class="fas fa-user-plus d-none d-md-inline mr-md-0 mr-lg-2"></i> <span class="d-md-none d-lg-inline">Signup</span></a></li>
                <li class="st-nav-section st-nav-mobile nav-item">
                    <button class="st-root-link navbar-toggler" type="button"><span class="icon-bar"></span> <span class="icon-bar"></span> <span class="icon-bar"></span></button>
                    <div class="st-popup">
                        <div class="st-popup-container"><a class="st-popup-close-button">Close</a>
                            <div class="st-dropdown-content-group">
                                <h4 class="text-uppercase regular">Pages</h4>
                            <a class="regular text-primary" href="{{url('about')}}"><i class="far fa-building icon"></i> About </a>
                            <a class="regular text-warning" href="{{url('blog')}}"><i class="fas fa-blog icon"></i>Blog </a>
                            <a class="regular text-info" href="{{url('faq')}}"><i class="far fa-question-circle icon"></i> FAQs</a>
                            <a class="regular text-success" href="{{url('contact')}}"><i class="far fa-envelope icon"></i> Contact </a></div>
                            <div class="st-dropdown-content-group bg-6 b-t"><a href="{{url('accounts/login')}}">Login <i class="fas fa-arrow-right"></i></a></div>
                            <div class="st-dropdown-content-group bg-6 b-t"><a href="{{url('accounts/register')}}">Signup <i class="fas fa-arrow-right"></i></a></div>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
        <div class="st-dropdown-root">
            <div class="st-dropdown-bg">
                <div class="st-alt-bg"></div>
            </div>
            <div class="st-dropdown-arrow"></div>
            <div class="st-dropdown-container">
                
            </div>
        </div>
    </nav>
   @yield('content')
    <!-- ./Footer - Four Columns -->
    <footer class="site-footer section">
        <div class="container pb-3">
            <div class="row gap-y text-center text-md-left">
                <div class="col-md-4 mr-auto">
                    <p>Vybzz Is a networking and Event management platform that connect Professionals from all background together</p>
                    <nav class="nav mt-5"><a href="#" style="margin-right: 5px;"><img src="images/download_en.cf6dad40.png" height="40" alt="" class="logo"></a> <a href="#"><img src="images/download_en.b85d892d.png" height="40" alt="" class="logo"></a></nav>
                </div>
                <div class="col-md-2">
                    <h6 class="py-2 bold">Company</h6>
                    <nav class="nav flex-column"><a class="nav-item py-2" href="about.html">About</a> <a class="nav-item py-2" href="contact.html">Contact</a> <a class="nav-item py-2" href="blog.html">Blog</a></nav>
                </div>
                <div class="col-md-2">
                    <h6 class="py-2 bold">Your Account</h6>
                    <nav class="nav flex-column"><a class="nav-item py-2" href="register.html">Sign up</a> <a class="nav-item py-2" href="login.html">Log in</a> <a class="nav-item py-2" href="faqs.html">Help</a></nav>
                </div>
                <div class="col-md-2">
                    <h6 class="py-2 bold">Discover</h6>
                    <nav class="nav flex-column"><a class="nav-item py-2" href="#">Groups</a> <a class="nav-item py-2" href="#">Events</a> <a class="nav-item py-2" href="#">Topics</a></nav>
                </div>
            </div>
            <hr class="mt-5">
            <div class="row small align-items-center">
                <div class="col-md-4">
                    <p class="mt-2 mb-md-0 color-1 text-center text-md-left">© 2019 VYBZZ Incorporated. All Rights Reserved</p>
                </div>
                <div class="col-md-8">
                    <nav class="nav justify-content-center justify-content-md-end"><a href="#" class="btn btn-circle btn-sm btn-2 mr-3 op-4"><i class="fab fa-facebook"></i></a> <a href="#" class="btn btn-circle btn-sm btn-2 mr-3 op-4"><i class="fab fa-twitter"></i></a> <a href="#" class="btn btn-circle btn-sm btn-2 op-4"><i class="fab fa-instagram"></i></a></nav>
                </div>
            </div>
        </div>
    </footer>
    <script src="{{asset('js/lib.js')}}"></script>
    <script src="{{asset('js/web.js')}}"></script>
</body>

</html>