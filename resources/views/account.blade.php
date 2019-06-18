

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
<link rel="stylesheet" type="text/css" href="css/animate.css">
<link rel="stylesheet" type="text/css" href="css/bootstrap.min.css">
<link rel="stylesheet" type="text/css" href="css/line-awesome.css">
<link rel="stylesheet" type="text/css" href="css/line-awesome-font-awesome.min.css">
<link rel="stylesheet" type="text/css" href="css/font-awesome.min.css">
<link rel="stylesheet" type="text/css" href="css/style.css">
<link rel="stylesheet" type="text/css" href="css/responsive.css">
<link rel="stylesheet" href="fonts/material-icon/css/material-design-iconic-font.min.css">
<link rel="stylesheet" type="text/css" href="css/setup.css">
</head>


<body>
	

	<div class="wrapper">
		


		<header>
			<div class="container">
				<div class="header-data">
					<div class="logo">
						<a href="index.html" title=""><img src="images/logo.png" alt=""></a>
					</div><!--logo end-->
					
				</div><!--header-data end-->
			</div>
		</header><!--header end-->	



		<section class="messages-page">
			 <div class="container">
		            <div class="setup-container">
            <h2>Set up to your new account </h2>
                <form method="POST" id="signup-form" action="{{url('api/account-setup')}}" class="signup-form" enctype="multipart/form-data">
                <h3>
                    <span class="title_text">Profile Setup</span>
                </h3>
                @include('errors.list')
                <fieldset>
                    <div class="fieldset-content">
                        <div class="form-select">
                            <label for="industry" class="form-label">Industry</label>
                            <select name="industry" id="industry" class="required">
                                <option value="">Select Industry</option>
                                <option value="Business Services">Business Services</option>
                                <option value="Banking">Banking</option>
                            </select>
                        </div>
                        <div class="form-group">
                            <label for="job-title" class="form-label required">Current Job Title</label>
                            <input type="text" name="job" id="job-title" placeholder="Your Job Title" />
                        </div>
                        <div class="form-group">
                            <label for="company" class="form-label required">Current Job/Company</label>
                            <input type="text" name="company" id="company" />
                        </div>
                        <div class="form-group">
                            <label for="your_avatar" class="form-label">Profile Photo</label>
                            <div class="form-file">
                                <input type="file" name="image" id="your_avatar" class="custom-file-input" />
                                <span id='val'></span>
                                <span id='button'>Select File</span>
                            </div>
                        </div>
                    </div>
                    <div class="fieldset-footer">
                        <span>Step 1 of 3</span>
                    </div>
                </fieldset>

                <h3>
                    <span class="title_text">Membership Plan</span>
                </h3>
                <fieldset>
                		<h4>Select Your Membership Plan</h4>
                    <div class="fieldset-content" style="padding-right: 0px;">
                        <div class="form cf">
                                                <div class="plan cf"> 
                                                    <input type="radio" name="plan" id="standard-plan" value="Standard">
                                                    <label class="free-label four col pricing" for="standard-plan">
                                                           <i class="fa fa-credit-card" aria-hidden="true"></i> 
                                                           <h4>Standard Plan</h4>
                                <div class="pricing-value"><span class="price bold">0</span></div>
                                <p>For settle companies looking to stay competitive in the market and growing with the technology</p>
                                                    </label>
                                                    <input type="radio" name="plan" id="premium-plan" value="Premium">
                                                    <label class="basic-label four col pricing" for="premium-plan">
                                                            <i class="fa fa-credit-card" aria-hidden="true"></i> 
                                                            <h4>Premium Plan</h4>
                                <div class="pricing-value"><span class="price bold">29.99</span></div>
                                <p>For settle companies looking to stay competitive in the market and growing with the technology</p>
                                                    </label>
                                                </div>
                                          </div>
                    </div>

                    <div class="fieldset-footer">
                        <span>Step 2 of 3</span>
                    </div>

                </fieldset>

                <h3>
                    <span class="title_text">Select Your Interest</span>
                </h3>
                <fieldset>
                    <div class="fieldset-content" style="padding-right: 0px;">
                        
        <h4>Last step! Tell us what you're interested in</h4>
      
      
      <div class="button-group-pills" data-toggle="buttons">
        <label class="btn btn-default active">
          <input type="checkbox" value="News" name="interest[]">
          <div>News</div>
        </label>
        <label class="btn btn-default">
          <input type="checkbox" value="Entrepreneurship" name="interest[]">
          <div>Entrepreneurship</div>
        </label>
        <label class="btn btn-default">
          <input type="checkbox" value="Fashion Trends" name="interest[]">
          <div>Fashion Trends</div>
        </label>
        <label class="btn btn-default">
          <input type="checkbox" value="Adventure Travel" name="interest[]">
          <div>Adventure Travel</div>
        </label>
        <label class="btn btn-default">
          <input type="checkbox" value="Home Decorating" name="interest[]">
          <div>Home Decorating</div>
        </label>
        <label class="btn btn-default">
          <input type="checkbox" value="Happiness" name="interest[]">
          <div>Happiness</div>
        </label>
        <label class="btn btn-default">
          <input type="checkbox" value="Sports" name="interest[]">
          <div>Sports</div>
        </label>
        <label class="btn btn-default">
          <input type="checkbox" value="Wine Tasting" name="interest[]">
          <div>Wine Tasting</div>
        </label>
        <label class="btn btn-default">
          <input type="checkbox" value="Book Reviews" name="interest[]">
          <div>Book Reviews</div>
        </label>
        <label class="btn btn-default">
          <input type="checkbox" value="Crafting" name="interest[]">
          <div>Crafting</div>
        </label>
        <label class="btn btn-default">
          <input type="checkbox" value="Photography" name="interest[]">
          <div>Photography</div>
        </label>
        <label class="btn btn-default">
          <input type="checkbox" value="Technology" name="interest[]">
          <div>Technology</div>
        </label>
        <label class="btn btn-default">
          <input type="checkbox" value="Spirituality" name="interest[]">
          <div>Spirituality</div>
        </label>
      </div>                       
                    </div>

                    <div class="fieldset-footer">
                        <span>Step 3 of 3</span>
                    </div>
                </fieldset>
            </form>
      
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



<script type="text/javascript" src="js/jquery.min.js"></script>
<script type="text/javascript" src="js/popper.js"></script>
<script type="text/javascript" src="js/bootstrap.min.js"></script>
<script src="vendor/jquery/jquery.min.js"></script>
    <script src="vendor/jquery-validation/dist/jquery.validate.min.js"></script>
    <script src="vendor/jquery-validation/dist/additional-methods.min.js"></script>
    <script src="vendor/jquery-steps/jquery.steps.min.js"></script>
    <script src="vendor/minimalist-picker/dobpicker.js"></script>
    <script src="vendor/jquery.pwstrength/jquery.pwstrength.js"></script>
    <script src="js/setup.js"></script>

</body>
</html>