<!doctype html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <!--[if IE]><meta http-equiv="X-UA-Compatible" content="IE=edge" /><![endif]-->
    <title>Vybbz - Sign Up</title>
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
                        <h2 class="display-4 display-md-3 color-1 mt-4 mt-md-0">Get started with <span class="bold d-block">Vybbz</span></h2>
                        <p class="lead color-1 alpha-5">The exclusive network platform for professionals.</p>
                    </div>
                </div>
                <div class="col-md-5 col-lg-4 mx-auto">
                    <div class="login-form mt-5 mt-md-0">
                        <h1 class="color-2 bold">Register</h1>
                    <p class="color-2 mt-0 mb-4">Already have an account? <a href="{{url('accounts/login')}}" class="accent bold">Login here</a></p>
                        <form class="cozy" action="{{ route('register') }}" method="POST" data-validate-on="submit" novalidate>
                            @csrf
                            <div class="form-group has-icon">
                                <input type="text" id="register_username" name="username" class="form-control form-control-rounded @error('username') is-invalid @enderror" value="{{ old('username') }}" placeholder="Desired username" autofocus> <i class="icon fas fa-user-plus"></i>
                                @error('username')
                                <span class="text-danger" role="alert">
                                    <strong>{{ $message }}</strong>
                                </span>
                            @enderror
                            </div>
                            <div class="form-group has-icon">
                            <input type="text" id="register_fullname" name="name" class="form-control form-control-rounded @error('name') is-invalid @enderror" value="{{old('name')}}" placeholder="Full name"> <i class="icon fas fa-address-card"></i>
                            @error('name')
                            <span class="text-danger" role="alert">
                                <strong>{{ $message }}</strong>
                            </span>
                        @enderror
                        </div>
                            <div class="form-group has-icon">
                            <input type="text" id="register_email" name="email" class="form-control form-control-rounded  @error('email') is-invalid @enderror" value="{{old('email')}}" placeholder="Valid email"> <i class="icon fas fa-envelope"></i>
                            @error('email')
                            <span class="text-danger" role="alert">
                                <strong>{{ $message }}</strong>
                            </span>
                        @enderror
                        </div>
                            <div class="form-group has-icon">
                                <input type="password" id="register_password" name="password" class="form-control form-control-rounded @error('password') is-invalid @enderror" placeholder="Password"> <i class="icon fas fa-lock"></i>
                                @error('password')
                                <span class="text-danger" role="alert">
                                    <strong>{{ $message }}</strong>
                                </span>
                            @enderror
                            </div>

                        <div class="mt-5">
                        <p class="small color-2">By signing up, I agree to the <a href="{{url('terms')}}">Terms of Service</a></p>
                        </div>
                            <div class="form-group d-flex align-items-center justify-content-between">
                                <button type="submit" class="btn btn-accent btn-rounded ml-auto">Register <i class="fas fa-long-arrow-alt-right ml-2"></i></button>
                            </div>
                        </form>
                        <hr class="w-25">
                        <div class="d-flex flex-column">
                            <p class="small bold color-2">Or sign up with</p>
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