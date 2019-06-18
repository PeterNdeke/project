<!doctype html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <!--[if IE]><meta http-equiv="X-UA-Compatible" content="IE=edge" /><![endif]-->
    <title>Login - VYBBZ</title>
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
                <div class="col-md-6 col-lg-7 fullscreen-md d-flex justify-content-center align-items-center overlay gradient-45 alpha-7 image-background cover" style="background-image:url(../images/login.jpg)">
                    <div class="content">
                    <a href="{{url('/')}}"><img src="{{asset('images/logo-bordered.png')}}" class="logo img-responsive mb-4" alt=""></a>
                        <h2 class="display-4 display-md-3 color-1 mt-4 mt-md-0">Welcome to <span class="bold d-block">Vybbz</span></h2>
                        <p class="lead color-1 alpha-5">Login to your account</p>
                    </div>
                </div>
                <div class="col-md-5 col-lg-4 mx-auto">
                    <div class="login-form mt-5 mt-md-0">
                        <h1 class="color-2 bold">Login</h1>
                    <p class="color-2 mt-0 mb-4">Don't have an account yet? <a href="{{url('accounts/register')}}" class="accent bold">Create it here</a></p>
                        <form class="cozy" action="{{ route('login') }}" method="POST" data-validate-on="submit" novalidate>
                            @csrf
                            <label class="control-label bold small text-uppercase color-2">Email</label>
                            @error('email')
                            <span class="text-danger" role="alert">
                                <strong>{{ $message }}</strong>
                            </span>
                        @enderror
                            <div class="form-group has-icon">
                                <input type="text" id="login_username" name="email" class="form-control form-control-rounded @error('email') is-invalid @enderror" value="{{ old('email') }}" autocomplete="email" autofocus placeholder="Your registered email" required> <i class="icon fas fa-user"></i>
                               
                            </div>
                            <label class="control-label bold small text-uppercase color-2">Password</label>
                            @error('password')
                            <span class="text-danger" role="alert">
                                <strong>{{ $message }}</strong>
                            </span>
                        @enderror
                            <div class="form-group has-icon">
                                <input type="password" id="login_password" name="password" class="form-control form-control-rounded @error('password') is-invalid @enderror" placeholder="Your password" required> <i class="icon fas fa-lock"></i>
                               
                            </div>
                            <div class="form-group d-flex align-items-center justify-content-between"><a href="{{route('password.request')}}" class="text-warning small">Forgot your password?</a>
                                <div class="ajax-button">
                                    <div class="fas fa-check btn-status text-success success"></div>
                                    <div class="fas fa-times btn-status text-danger failed"></div>
                                    <button type="submit" class="btn btn-accent btn-rounded">Login <i class="fas fa-long-arrow-alt-right ml-2"></i></button>
                                </div>
                            </div>
                        </form>
                        <hr class="mt-md-6 w-25">
                        <div class="d-flex flex-column">
                            <p class="small bold color-2">Or sign in with</p>
                            <nav class="nav mb-4"> <a class="btn btn-outline-2 brand-linkedin" href="{{ url('/redirect') }}"><i class="fab fa-linkedin-in"></i> LinkedIn</a></nav>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
    <script src="{{asset('js/lib.min.js')}}"></script>
    <script src="{{asset('js/dashcore.min.js')}}"></script>
</body>

</html>