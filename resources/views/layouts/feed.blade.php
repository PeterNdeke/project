@if (Auth::user()->imageUrl == null && Auth::user()->industry == null && Auth::user()->job_role == null && Auth::user()->employer == null && Auth::user()->plan == null )  
@include('account')
@else
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
<link rel="stylesheet" type="text/css" href="{{asset('css/jquery.mCustomScrollbar.min.css')}}">
<link rel="stylesheet" type="text/css" href="{{asset('lib/slick/slick.css')}}">
<link rel="stylesheet" type="text/css" href="{{asset('lib/slick/slick-theme.css')}}">
<link rel="stylesheet" type="text/css" href="{{asset('css/style.css')}}">
<link rel="stylesheet" type="text/css" href="{{asset('css/responsive.css')}}">
<link rel="stylesheet" href="{{asset('css/plyr.css')}}" />
<!-- Preload -->
        <link
            rel="preload"
            as="font"
            crossorigin
            type="font/woff2"
            href="https://cdn.plyr.io/static/fonts/gordita-medium.woff2"
        />
        <link
            rel="preload"
            as="font"
            crossorigin
            type="font/woff2"
            href="https://cdn.plyr.io/static/fonts/gordita-bold.woff2"
        />
        <meta name="user-id" content="{{ Auth::user()->avatar}}">

<meta name="user" content="{{ Auth::user()->id}}">

<!-- CSRF Token -->
<meta name="csrf-token" content="{{ csrf_token() }}">

<!-- Scripts -->
<script src="{{ asset('js/app.js') }}" defer></script>
</head>
<body>
	<div id="app">

	<div class="wrapper">
		
     
       <init-component></init-component>
	
		<header>
			<div class="container">
				<div class="header-data">
					<div class="logo">
                    <a href="{{url('/')}}" title=""><img src="{{asset('images/logo.png')}}" alt=""></a>
					</div><!--logo end-->
					<div class="search-bar">
						<form>
							<input type="text" name="search" placeholder="Search for people, groups and events">
							<button type="submit"><i class="la la-search"></i></button>
						</form>
					</div><!--search-bar end-->
					<nav>
						<ul>
							<li class="active">
                            <a href="{{url('/')}}" title="">
									<span><i class="pe pe-7s-home"></i></span>
									Home
								</a>
							</li>
							<li>
								<a href="my-network.html" title="">
									<span><i class="pe pe-7s-network"></i></span>
									My Network
								</a>
							</li>
							<li>
								<a href="explore.html" title="">
									<span><i class="pe pe-7s-search"></i></span>
									Explore
								</a>
							</li>
							<li>
								<a href="groups.html" title="">
									<span><i class="pe pe-7s-users"></i></span>
									Groups
								</a>
							</li>
							<li>
								<a href="events.html" title="">
									<span><i class="pe pe-7s-date"></i></span>
									Events
								</a>
							</li>
							<li>
								<a href="articles.html" title="">
									<span><i class="pe pe-7s-news-paper"></i></span>
									Articles
								</a>
							</li>
							<connection-component ></connection-component>
							<li class="nav-notifications-icon">
								<a href="#" title="" class="not-box-open">
									<span><i class="pe pe-7s-chat"></i></span>
								<div class="notification-box msg">
									<div class="nt-title">
										<h4>Setting</h4>
										<a href="#" title="">Clear all</a>
									</div>
									<div class="nott-list">
										<div class="notfication-details">
							  				<div class="noty-user-img">
							  					<img src="images/resources/ny-img1.png" alt="">
							  				</div>
							  				<div class="notification-info">
							  					<h3><a href="user-profile.html" title="">Jassica William</a> </h3>
							  					<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do.</p>
							  					<span>2 min ago</span>
							  				</div><!--notification-info -->
						  				</div>
						  				<div class="notfication-details">
							  				<div class="noty-user-img">
							  					<img src="images/resources/ny-img2.png" alt="">
							  				</div>
							  				<div class="notification-info">
							  					<h3><a href="user-profile.html" title="">Jassica William</a></h3>
							  					<p>Lorem ipsum dolor sit amet.</p>
							  					<span>2 min ago</span>
							  				</div><!--notification-info -->
						  				</div>
						  				<div class="notfication-details">
							  				<div class="noty-user-img">
							  					<img src="images/resources/ny-img3.png" alt="">
							  				</div>
							  				<div class="notification-info">
							  					<h3><a href="user-profile.html" title="">Jassica William</a></h3>
							  					<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempo incididunt ut labore et dolore magna aliqua.</p>
							  					<span>2 min ago</span>
							  				</div><!--notification-info -->
						  				</div>
						  				<div class="view-all-nots">
						  					<a href="messages.html" title="">View All Messsages</a>
						  				</div>
									</div><!--nott-list end-->
								</div><!--notification-box end-->
							</li>
						
							<app-notification></app-notification>
						</ul>
					</nav><!--nav end-->
					<div class="menu-btn">
						<a href="#" title=""><i class="fa fa-bars"></i></a>
					</div><!--menu-btn end-->
					<div class="user-account">
						<div class="user-info">
                            @if (Auth::user()->imageUrl !==NULL)
                            <img src="{{Auth::user()->avatar}}" alt="">
                            @endif
							<a href="#" title="">Me</a>
							<i class="la la-sort-down"></i>
						</div>
						<div class="user-account-settingss">
							<h3>My Profile</h3>
							<ul class="us-links">
								<li>Wallet Balance: 0</li>
								<li><a href="my-profile-feed.html" title="">View Profile</a></li>
							</ul>
							<h3>Groups</h3>
							<ul class="us-links">
								<li><a href="#" title="">My Groups</a></li>
								<!-- Premium Member Features -->
								<li><a href="#" title="">Manage Group</a></li>
								<li><a href="#" title="">Create Group</a></li>
							</ul>
							<h3>Setting</h3>
							<ul class="us-links">
								<li><a href="profile-account-setting.html" title="">Account Setting</a></li>
							</ul>
							<h3 class="tc"><a href=""  onclick="event.preventDefault();
								document.getElementById('logout-form').submit();" class="color-3">Logout</a></h3>
						</div><!--user-account-settingss end-->
					</div>
				</div><!--header-data end-->
			</div>
        </header><!--header end-->	
        <form id="logout-form" action="{{ route('logout') }}" method="POST" style="display: none;">
            @csrf
        </form>


        @yield('content')
		
	<notification :id ="{{Auth::id()}}"></notification>

	<audio id="noty_audio">
		<source src="{{ asset('audio/noty.mp3') }}">
		
	</audio>

		

		

	</div><!--theme-layout end-->
</div>
<script
            src="../cdn.polyfill.io/v3/polyfill.min0a44.js?features=es6,Array.prototype.includes,CustomEvent,Object.entries,Object.values,URL,Math.trunc&amp;flags=gated"
            crossorigin="anonymous"
		></script>
		

<script type="text/javascript" src="{{asset('js/jquery.min.js')}}"></script>
<script type="text/javascript" src="{{asset('js/popper.js')}}"></script>
<script type="text/javascript" src="{{asset('js/flatpickr.min.js')}}"></script>
<script type="text/javascript" src="{{asset('js/bootstrap.min.js')}}"></script>
<script type="text/javascript" src="{{asset('js/jquery.mCustomScrollbar.js')}}"></script>
<script type="text/javascript" src="{{asset('lib/slick/slick.min.js')}}"></script>
<script type="text/javascript" src="{{asset('js/scrollbar.js')}}"></script>
<script type="text/javascript" src="{{asset('js/script.js')}}"></script>
<script type="text/javascript" src="{{asset('js/infinite-scroll.pkgd.js')}}"></script>
<script src="{{asset('js/plyr.js')}}"></script>
<script>
    //const player = new Plyr('#player');
    // const players = Plyr.setup('#player');
    // const player = new Plyr('#player', {});
    (function() { 
  // This is the bare minimum JavaScript. You can opt to pass no arguments to setup.
  // e.g. just plyr.setup(); and leave it at that if you have no need for events
  var instances = Plyr.setup('#player', {
    // Output to console
    debug: true
  });
})();

</script>
</body>


</html>
@endif