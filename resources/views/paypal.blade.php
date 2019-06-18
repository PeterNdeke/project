

<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Vyybz</title>
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta name="description" content="" />
<meta name="keywords" content="" />
<link rel="apple-touch-icon" href="images/apple-touch-icon.png">
<link rel="icon" href="images/favicon.png">
<link rel="stylesheet" type="text/css" href="{{asset('css/animate.css')}}">
<link rel="stylesheet" type="text/css" href="{{asset('css/bootstrap.min.css')}}">
<link rel="stylesheet" type="text/css" href="{{asset('css/line-awesome.css')}}">
<link rel="stylesheet" type="text/css" href="{{asset('css/line-awesome-font-awesome.min.css')}}">
<link rel="stylesheet" type="text/css" href="{{asset('css/font-awesome.min.css')}}">
<link rel="stylesheet" type="text/css" href="{{asset('css/style.css')}}">
<link rel="stylesheet" type="text/css" href="{{asset('css/responsive.css')}}">
<link rel="stylesheet" href="{{asset('fonts/material-icon/css/material-design-iconic-font.min.css')}}">
<link rel="stylesheet" type="text/css" href="{{asset('css/setup.css')}}">
<style>
.card {
        margin: 0 auto; /* Added */
        float: none; /* Added */
        margin-bottom: 10px; /* Added */
}
</style>
</head>


<body>
	

	<div class="wrapper">
		


		<header>
			<div class="container">
				<div class="header-data">
					<div class="logo">
                    <a href="{{url('feed')}}" title=""><img src="{{asset('images/logo.png')}}" alt=""></a>
					</div><!--logo end-->
					
				</div><!--header-data end-->
			</div>
		</header><!--header end-->	



		<section class="messages-page">
			 <div class="container">
		            <div class="setup-container">
            <h2>Please Confirm your Payment </h2>
         
               
                <fieldset>
                    <div class="fieldset-content">

                            <div class="card text-center mx-auto">
                                    
                                    <div class="card-body">
                                      
                                      <form method="POST" action="{!! URL::to('paypal') !!}" id="payment-form" accept-charset="UTF-8" class="form-horizontal" role="form">
                                        @csrf
                                            <div class="row" style="margin-bottom:40px;">
                                              <div class="col-md-8 col-md-offset-2">
                                            
                                                 
                                            @if (Auth::check())
                                            <input type="hidden" name="email" value="{{Auth::user()->email}}">
                                            @endif
                                              
                                             
                                              <input type="hidden" id="amount" name="amount" value="19.9"> {{-- required in kobo --}}
                                              <input type="hidden" name="plan" value="{{$plan}}">
                                              <input type="hidden" name="industry" value="{{$industry}}">
                                              <input type="hidden" name="job" value="{{$job}}">
                                              <input type="hidden" name="company" value="{{$employer}}">
                                              <input type="hidden" name="interest" value="{{$interest}}">
                                              <input type="hidden" name="imageUrl" value="{{$file}}">
                                            
                                                
                                               
                                    
                                                 <button type="submit" class="btn btn-primary btn-lg">Pay 19.9$ with PayPal</button>
                                              
                                               
                                              </div>
                                            </div>
                                    </form>
                                    </div>
                                   
                                  </div>

                           
                      
                       
                    </div>
                    
                </fieldset>

              
               

               
         
      
        </div>
        </div>
		</section><!--messages-page end-->



		<footer>
			<div class="footy-sec mn no-margin">
				<div class="container">
					<ul>
						<li><a href="#" title="">Help Center</a></li>
						<li><a href="#" title="">Privacy Policy</a></li>
						<li><a href="#" title="">Community Guidelines</a></li>
						<li><a href="#" title="">Cookies Policy</a></li>
						<li><a href="#" title="">Groups</a></li>
						<li><a href="#" title="">Copyright Policy</a></li>
					</ul>
					<p><img src="images/copy-icon2.png" alt="">Copyright 2019 VYBZZ Incorporated</p>
					<img class="fl-rgt" src="images/logo2.png" alt="">
				</div>
			</div>
		</footer>

	</div><!--theme-layout end-->



<script type="text/javascript" src="{{asset('js/jquery.min.js')}}"></script>
<script type="text/javascript" src="{{asset('js/popper.js')}}"></script>
<script type="text/javascript" src="{{asset('js/bootstrap.min.js')}}"></script>
<script src="{{asset('vendor/jquery/jquery.min.js')}}"></script>
    <script src="{{asset('vendor/jquery-validation/dist/jquery.validate.min.js')}}"></script>
    <script src="{{asset('vendor/jquery-validation/dist/additional-methods.min.js')}}"></script>
    <script src="{{asset('vendor/jquery-steps/jquery.steps.min.js')}}"></script>
    <script src="{{asset('vendor/minimalist-picker/dobpicker.js')}}"></script>
    <script src="{{asset('vendor/jquery.pwstrength/jquery.pwstrength.js')}}"></script>
    <script src="{{asset('js/setup.js')}}"></script>

</body>
</html>