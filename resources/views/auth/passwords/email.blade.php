<!doctype html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <!--[if IE]><meta http-equiv="X-UA-Compatible" content="IE=edge" /><![endif]-->
    <title>Vybbz - Forgot Password?</title>
    <meta name="description" content="">
    <meta name="viewport" content="width=device-width,initial-scale=1">
    <!-- Place favicon.ico in the root directory -->
    <link rel="apple-touch-icon" href="images/apple-touch-icon.png">
    <link rel="icon" href="{{asset('images/favicon.png')}}">
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
    <main>
        <div class="container-fluid">
            <div class="row align-items-center">
                <div class="col-md-6 col-lg-7 fullscreen-md d-flex justify-content-center align-items-center overlay gradient-45 alpha-7 image-background cover" style="background-image:url(../../images/login.jpg)">
                    <div class="content">
                    <a href="{{url('/')}}"><img src="{{asset('images/logo-bordered.png')}}" class="logo img-responsive mb-4" alt=""></a>
                        <h2 class="display-4 display-md-3 color-1 mt-4 mt-md-0">Forgot<span class="bold d-block">Password?</span></h2>
                        <p class="lead color-1 alpha-5">We've got you covered</p>
                    </div>
                </div>
                <div class="col-md-5 col-lg-4 mx-auto">
                    <div class="login-form mt-5 mt-md-0">
                        <h1 class="color-2 bold">Forgot your password?</h1>
                    <p class="color-2 mt-0 mb-4">Enter your email bellow to retrieve your account or <a href="{{url('accounts/login')}}" class="accent bold">Login</a></p>
                        <form class="cozy" action="{{ route('password.email') }}" method="POST" data-validate-on="submit" novalidate>
                            @csrf
                            <div class="form-group has-icon">
                                <input type="text" id="register_email" class="form-control form-control-rounded @error('email') is-invalid @enderror" name="email" value="{{ old('email') }}"  autocomplete="email" autofocus placeholder="Your registered email"> <i class="icon fas fa-envelope"></i>
                                @error('email')
                                <span class="text-danger" role="alert">
                                    <strong>{{ $message }}</strong>
                                </span>
                            @enderror
                            </div>
                            <div class="form-group d-flex align-items-center justify-content-between">
                                <button type="submit" class="btn btn-accent btn-rounded ml-auto">Send reset link <i class="fas fa-long-arrow-alt-right ml-2"></i></button>
                            </div>
                        </form>
                </div>
            </div>
        </div>
    </main>
    <script src="{{asset('js/lib.min.js')}}"></script>
    <script src="{{asset('js/dashcore.min.js')}}"></script>
</body>

</html>