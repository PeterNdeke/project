@extends('layouts.feed')

@section('content')


<section class="cover-sec image-background cover" style="background-image:url(../images/d-cover.jpg);">
			
    <a href="#" title=""><i class="fa fa-camera"></i> Change Image</a>
</section>


<main class="profile-page">
    <div class="main-section">
        <div class="container">
            <div class="main-section-data">
                <div class="row">
                    <div class="col-lg-3">
                        <div class="main-left-sidebar">
                            <div class="user_profile">
                                <div class="user-pro-img">
                                <img src="{{Auth::user()->pic}}" alt="">
                                    <a href="#" title=""><i class="fa fa-camera"></i></a>
                                </div><!--user-pro-img end-->
                                <div class="user_pro_status">
                                    <ul class="flw-status">
                                        <li class="u-status">
                                            <span>Connections</span>
                                            <b>{{Auth::user()->friends_count()}}</b>
                                            
                                        </li>
                                        <li class="u-status">
                                            <span>Post</span>
                                            <b>34</b>
                                        </li>
                                    </ul>
                                </div><!--user_pro_status end-->
                              @if (Auth::id() !== $user->id)
                              <connect-component :profile_user_id = "{{$user->id}}"></connect-component>
                              @endif
                              
                           
                               
                                    
                                
                                <ul class="social_links">
                                    <li><a href="#" title=""><i class="la la-link"></i> www.vybbz.com/susan</a></li>
                                    <li><a href="#" title=""><i class="fa fa-phone"></i> 070 686 283 837</a></li>
                                    <li><a href="#" title=""><i class="fa fa-envelope"></i> susan@gmail.com</a></li>
                                </ul>
                            </div><!--user_profile end-->
                            <div class="suggestions full-width">
                                <div class="sd-title">
                                    <h3>Your Interest</h3>
                                    <i class="la la-ellipsis-v"></i>
                                </div><!--sd-title end-->
                                <div class="interest-list">
                                    <ul>
                                        @foreach ($user->interests as $item)
                                    <li><a href="#" title="">{{$item->interest}}</a></li>
                                        @endforeach
                                       
                                      
                                    </ul>
                                </div><!--suggestions-list end-->
                            </div><!--suggestions end-->
                        </div><!--main-left-sidebar end-->
                    </div>
                    <div class="col-lg-6">
                        <div class="main-ws-sec">
                            <div class="user-tab-sec">
                            <h3>{{$user->name}}<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="verified-color feather feather-check-circle" title="" data-toggle="tooltip" data-original-title="Verified User"><path d="M23,12L20.56,9.22L20.9,5.54L17.29,4.72L15.4,1.54L12,3L8.6,1.54L6.71,4.72L3.1,5.53L3.44,9.21L1,12L3.44,14.78L3.1,18.47L6.71,19.29L8.6,22.47L12,21L15.4,22.46L17.29,19.28L20.9,18.46L20.56,14.78L23,12M10,17L6,13L7.41,11.59L10,14.17L16.59,7.58L18,9L10,17Z"></path></svg></h3>
                                <div class="star-descp">
                                <span>{{$user->job_role}} {{$user->employer}}</span>
                                    <a href="#" title="">Status</a>
                                </div><!--star-descp end-->
                                <div class="tab-feed st2">
                                    <ul>
                                        <li data-tab="info-dd" class="active">
                                            <a href="#" title="">
                                                <img src="{{asset('images/ic2.png')}}" alt="">
                                                <span>Info</span>
                                            </a>
                                        </li>
                                        <li data-tab="feed-dd">
                                            <a href="#" title="">
                                                <img src="{{asset('images/ic1.png')}}" alt="">
                                                <span>Activities</span>
                                            </a>
                                        </li>
                                        <li data-tab="saved-jobs">
                                            <a href="#" title="">
                                                <img src="{{asset('images/ic4.png')}}" alt="">
                                                <span>My Ticjets</span>
                                            </a>
                                        </li>
                                        <li data-tab="my-bids">
                                            <a href="#" title="">
                                                <img src="{{asset('images/ic5.png')}}" alt="">
                                                <span>My Groups</span>
                                            </a>
                                        </li>
                                        <li data-tab="payment-dd">
                                            <a href="#" title="">
                                                <img src="{{asset('images/ic6.png')}}" alt="">
                                                <span>Payment</span>
                                            </a>
                                        </li>
                                    </ul>
                                </div><!-- tab-feed end-->
                            </div><!--user-tab-sec end-->
                            <div class="product-feed-tab current" id="info-dd">
                                <div class="user-profile-ov">
                                    <h3><a href="#" title="" class="overview-open">Career Meta</a> <a href="#" title="" class="overview-open"><i class="fa fa-pencil"></i></a></h3>
                                    <ul class="pro-status">
                                    <li class="u-status">
                                        <h4>Industry</h4>
                                    <span>{{$user->Industry}}</span>
                                    </li>
                                    <li class="u-status">
                                        <h4>Corporate Title</h4>
                                        <span>Creative Director</span>
                                    </li>
                                    <li class="u-status">
                                        <h4>Job Role</h4>
                                    <span>{{$user->job_role}}</span>
                                    </li>
                                </ul>
                                </div><!--user-profile-ov end-->
                                <overview-component></overview-component>
                                <experience-component></experience-component>
                                <education-component></education-component>
                                <location-component></location-component>
                               <skills-component></skills-component>
                            </div><!--product-feed-tab end-->
                            <div class="product-feed-tab" id="feed-dd">
                                <div class="posts-section">
                                   
                                    <activities-component></activities-component>
                                    
                                   
                                    
                                        <div class="process-comm">
                                            <a href="#" title=""><img src="{{asset('images/process-icon.png')}}" alt=""></a>
                                        </div><!--process-comm end-->
                                </div><!--posts-section end-->
                            </div><!--product-feed-tab end-->
                            <div class="product-feed-tab" id="saved-jobs">
                                <div class="event-section">
                                    <!-- event-item - start -->
                        <div class="event-list-item clearfix">

                            <!-- event-image - start -->
                            <div class="event-image">
                                <div class="post-date">
                                    <span class="date">08</span>
                                    <small class="month">APR</small>
                                </div>
                                <img src="images/resources/event-1.jpg" alt="Image_not_found">
                            </div>
                            <!-- event-image - end -->

                            <!-- event-content - start -->
                            <div class="event-content">
                                <div class="event-title mb-15">
                                    <h3 class="title">Startup Advice: How To Get Funded</h3>
                                    <span class="ticket-price color-3">2 Tickets from $52</span>
                                </div>
                                <p class="discription-text mb-30">
                                    Free order #781289836 on June 6, 2018
                                </p>
                                <div class="event-info-list ul-li clearfix">
                                    <ul>
                                        <li>
                                            <a href="#!" class="tickets-details-btn">
                                                tickets & details
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <!-- event-content - end -->

                        </div>
                        <!-- event-item - end -->

                        <!-- event-item - start -->
                        <div class="event-list-item clearfix">

                            <!-- event-image - start -->
                            <div class="event-image">
                                <div class="post-date">
                                    <span class="date">26</span>
                                    <small class="month">june</small>
                                </div>
                                <img src="images/resources/event-1.jpg" alt="Image_not_found">
                            </div>
                            <!-- event-image - end -->

                            <!-- event-content - start -->
                            <div class="event-content">
                                <div class="event-title mb-15">
                                    <h3 class="title">
                                        Barcelona <strong>Food truck Festival 2018</strong>
                                    </h3>
                                    <span class="ticket-price color-3">1 Tickets from $52</span>
                                </div>
                                <p class="discription-text mb-30">Free order #829028324 on September 23, 2018
                                </p>
                                <div class="event-info-list ul-li clearfix">
                                    <ul>
                                        <li>
                                            <a href="#!" class="tickets-details-btn">
                                                tickets & details
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <!-- event-content - end -->

                        </div>
                        <!-- event-item - end -->
                                    <div class="process-comm">
                                        <a href="#" title=""><img src="images/process-icon.png" alt=""></a>
                                    </div><!--process-comm end-->
                                </div><!--posts-section end-->
                            </div><!--product-feed-tab end-->
                            <div class="product-feed-tab" id="my-bids">
                                <div class="posts-section">
                                    <div class="post-bar">
                                        <div class="post_topbar">
                                            <div class="usy-dt">
                                                <img src="images/resources/us-pic.png" alt="">
                                                <div class="usy-name">
                                                    <h3>John Doe</h3>
                                                    <span><img src="images/clock.png" alt="">3 min ago</span>
                                                </div>
                                            </div>
                                            <div class="ed-opts">
                                                <a href="#" title="" class="ed-opts-open"><i class="la la-ellipsis-v"></i></a>
                                                <ul class="ed-options">
                                                    <li><a href="#" title="">Edit Post</a></li>
                                                    <li><a href="#" title="">Unsaved</a></li>
                                                    <li><a href="#" title="">Unbid</a></li>
                                                    <li><a href="#" title="">Close</a></li>
                                                    <li><a href="#" title="">Hide</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div class="epi-sec">
                                            <ul class="descp">
                                                <li><img src="images/icon8.png" alt=""><span>Frontend Developer</span></li>
                                                <li><img src="images/icon9.png" alt=""><span>India</span></li>
                                            </ul>
                                            <ul class="bk-links">
                                                <li><a href="#" title=""><i class="la la-bookmark"></i></a></li>
                                                <li><a href="#" title=""><i class="la la-envelope"></i></a></li>
                                                <li><a href="#" title="" class="bid_now">Bid Now</a></li>
                                            </ul>
                                        </div>
                                        <div class="job_descp">
                                            <h3>Simple Classified Site</h3>
                                            <ul class="job-dt">
                                                <li><span>$300 - $350</span></li>
                                            </ul>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam luctus hendrerit metus, ut ullamcorper quam finibus at. Etiam id magna sit amet... <a href="#" title="">view more</a></p>
                                            <ul class="skill-tags">
                                                <li><a href="#" title="">HTML</a></li>
                                                <li><a href="#" title="">PHP</a></li>
                                                <li><a href="#" title="">CSS</a></li>
                                                <li><a href="#" title="">Javascript</a></li>
                                                <li><a href="#" title="">Wordpress</a></li> 	
                                                <li><a href="#" title="">Photoshop</a></li> 	
                                                <li><a href="#" title="">Illustrator</a></li> 	
                                                <li><a href="#" title="">Corel Draw</a></li> 	
                                            </ul>
                                        </div>
                                        <div class="job-status-bar">
                                            <ul class="like-com">
                                                <li>
                                                    <a href="#"><i class="la la-heart"></i> Like</a>
                                                    <img src="images/liked-img.png" alt="">
                                                    <span>25</span>
                                                </li> 
                                                <li><a href="#" title="" class="com"><img src="images/com.png" alt=""> Comment 15</a></li>
                                            </ul>
                                            <a><i class="la la-eye"></i>Views 50</a>
                                        </div>
                                    </div><!--post-bar end-->
                                    <div class="post-bar">
                                        <div class="post_topbar">
                                            <div class="usy-dt">
                                                <img src="images/resources/us-pic.png" alt="">
                                                <div class="usy-name">
                                                    <h3>John Doe</h3>
                                                    <span><img src="images/clock.png" alt="">3 min ago</span>
                                                </div>
                                            </div>
                                            <div class="ed-opts">
                                                <a href="#" title="" class="ed-opts-open"><i class="la la-ellipsis-v"></i></a>
                                                <ul class="ed-options">
                                                    <li><a href="#" title="">Edit Post</a></li>
                                                    <li><a href="#" title="">Unsaved</a></li>
                                                    <li><a href="#" title="">Unbid</a></li>
                                                    <li><a href="#" title="">Close</a></li>
                                                    <li><a href="#" title="">Hide</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div class="epi-sec">
                                            <ul class="descp">
                                                <li><img src="images/icon8.png" alt=""><span>Frontend Developer</span></li>
                                                <li><img src="images/icon9.png" alt=""><span>India</span></li>
                                            </ul>
                                            <ul class="bk-links">
                                                <li><a href="#" title=""><i class="la la-bookmark"></i></a></li>
                                                <li><a href="#" title=""><i class="la la-envelope"></i></a></li>
                                                <li><a href="#" title="" class="bid_now">Bid Now</a></li>
                                            </ul>
                                        </div>
                                        <div class="job_descp">
                                            <h3>Ios Shopping mobile app</h3>
                                            <ul class="job-dt">
                                                <li><span>$300 - $350</span></li>
                                            </ul>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam luctus hendrerit metus, ut ullamcorper quam finibus at. Etiam id magna sit amet... <a href="#" title="">view more</a></p>
                                            <ul class="skill-tags">
                                                <li><a href="#" title="">HTML</a></li>
                                                <li><a href="#" title="">PHP</a></li>
                                                <li><a href="#" title="">CSS</a></li>
                                                <li><a href="#" title="">Javascript</a></li>
                                                <li><a href="#" title="">Wordpress</a></li> 	
                                                <li><a href="#" title="">Photoshop</a></li> 	
                                                <li><a href="#" title="">Illustrator</a></li> 	
                                                <li><a href="#" title="">Corel Draw</a></li> 	
                                            </ul>
                                        </div>
                                        <div class="job-status-bar">
                                            <ul class="like-com">
                                                <li>
                                                    <a href="#"><i class="la la-heart"></i> Like</a>
                                                    <img src="images/liked-img.png" alt="">
                                                    <span>25</span>
                                                </li> 
                                                <li><a href="#" title="" class="com"><img src="images/com.png" alt=""> Comment 15</a></li>
                                            </ul>
                                            <a><i class="la la-eye"></i>Views 50</a>
                                        </div>
                                    </div><!--post-bar end-->
                                    <div class="post-bar">
                                        <div class="post_topbar">
                                            <div class="usy-dt">
                                                <img src="images/resources/us-pic.png" alt="">
                                                <div class="usy-name">
                                                    <h3>John Doe</h3>
                                                    <span><img src="images/clock.png" alt="">3 min ago</span>
                                                </div>
                                            </div>
                                            <div class="ed-opts">
                                                <a href="#" title="" class="ed-opts-open"><i class="la la-ellipsis-v"></i></a>
                                                <ul class="ed-options">
                                                    <li><a href="#" title="">Edit Post</a></li>
                                                    <li><a href="#" title="">Unsaved</a></li>
                                                    <li><a href="#" title="">Unbid</a></li>
                                                    <li><a href="#" title="">Close</a></li>
                                                    <li><a href="#" title="">Hide</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div class="epi-sec">
                                            <ul class="descp">
                                                <li><img src="images/icon8.png" alt=""><span>Frontend Developer</span></li>
                                                <li><img src="images/icon9.png" alt=""><span>India</span></li>
                                            </ul>
                                            <ul class="bk-links">
                                                <li><a href="#" title=""><i class="la la-bookmark"></i></a></li>
                                                <li><a href="#" title=""><i class="la la-envelope"></i></a></li>
                                                <li><a href="#" title="" class="bid_now">Bid Now</a></li>
                                            </ul>
                                        </div>
                                        <div class="job_descp">
                                            <h3>Simple Classified Site</h3>
                                            <ul class="job-dt">
                                                <li><span>$300 - $350</span></li>
                                            </ul>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam luctus hendrerit metus, ut ullamcorper quam finibus at. Etiam id magna sit amet... <a href="#" title="">view more</a></p>
                                            <ul class="skill-tags">
                                                <li><a href="#" title="">HTML</a></li>
                                                <li><a href="#" title="">PHP</a></li>
                                                <li><a href="#" title="">CSS</a></li>
                                                <li><a href="#" title="">Javascript</a></li>
                                                <li><a href="#" title="">Wordpress</a></li> 	
                                                <li><a href="#" title="">Photoshop</a></li> 	
                                                <li><a href="#" title="">Illustrator</a></li> 	
                                                <li><a href="#" title="">Corel Draw</a></li> 	
                                            </ul>
                                        </div>
                                        <div class="job-status-bar">
                                            <ul class="like-com">
                                                <li>
                                                    <a href="#"><i class="la la-heart"></i> Like</a>
                                                    <img src="images/liked-img.png" alt="">
                                                    <span>25</span>
                                                </li> 
                                                <li><a href="#" title="" class="com"><img src="images/com.png" alt=""> Comment 15</a></li>
                                            </ul>
                                            <a><i class="la la-eye"></i>Views 50</a>
                                        </div>
                                    </div><!--post-bar end-->
                                    <div class="post-bar">
                                        <div class="post_topbar">
                                            <div class="usy-dt">
                                                <img src="images/resources/us-pic.png" alt="">
                                                <div class="usy-name">
                                                    <h3>John Doe</h3>
                                                    <span><img src="images/clock.png" alt="">3 min ago</span>
                                                </div>
                                            </div>
                                            <div class="ed-opts">
                                                <a href="#" title="" class="ed-opts-open"><i class="la la-ellipsis-v"></i></a>
                                                <ul class="ed-options">
                                                    <li><a href="#" title="">Edit Post</a></li>
                                                    <li><a href="#" title="">Unsaved</a></li>
                                                    <li><a href="#" title="">Unbid</a></li>
                                                    <li><a href="#" title="">Close</a></li>
                                                    <li><a href="#" title="">Hide</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div class="epi-sec">
                                            <ul class="descp">
                                                <li><img src="images/icon8.png" alt=""><span>Frontend Developer</span></li>
                                                <li><img src="images/icon9.png" alt=""><span>India</span></li>
                                            </ul>
                                            <ul class="bk-links">
                                                <li><a href="#" title=""><i class="la la-bookmark"></i></a></li>
                                                <li><a href="#" title=""><i class="la la-envelope"></i></a></li>
                                                <li><a href="#" title="" class="bid_now">Bid Now</a></li>
                                            </ul>
                                        </div>
                                        <div class="job_descp">
                                            <h3>Ios Shopping mobile app</h3>
                                            <ul class="job-dt">
                                                <li><span>$300 - $350</span></li>
                                            </ul>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam luctus hendrerit metus, ut ullamcorper quam finibus at. Etiam id magna sit amet... <a href="#" title="">view more</a></p>
                                            <ul class="skill-tags">
                                                <li><a href="#" title="">HTML</a></li>
                                                <li><a href="#" title="">PHP</a></li>
                                                <li><a href="#" title="">CSS</a></li>
                                                <li><a href="#" title="">Javascript</a></li>
                                                <li><a href="#" title="">Wordpress</a></li> 	
                                                <li><a href="#" title="">Photoshop</a></li> 	
                                                <li><a href="#" title="">Illustrator</a></li> 	
                                                <li><a href="#" title="">Corel Draw</a></li> 	
                                            </ul>
                                        </div>
                                        <div class="job-status-bar">
                                            <ul class="like-com">
                                                <li>
                                                    <a href="#"><i class="la la-heart"></i> Like</a>
                                                    <img src="images/liked-img.png" alt="">
                                                    <span>25</span>
                                                </li> 
                                                <li><a href="#" title="" class="com"><img src="images/com.png" alt=""> Comment 15</a></li>
                                            </ul>
                                            <a><i class="la la-eye"></i>Views 50</a>
                                        </div>
                                    </div><!--post-bar end-->
                                    <div class="process-comm">
                                        <a href="#" title=""><img src="images/process-icon.png" alt=""></a>
                                    </div><!--process-comm end-->
                                </div><!--posts-section end-->
                            </div><!--product-feed-tab end-->
                            <div class="product-feed-tab" id="payment-dd">
                                <div class="billing-method">
                                    <ul>
                                        <li>
                                            <h3>Add Billing Method</h3>
                                            <a href="#" title=""><i class="fa fa-plus-circle"></i></a>
                                        </li>
                                        <li>
                                            <h3>See Activity</h3>
                                            <a href="#" title="">View All</a>
                                        </li>
                                        <li>
                                            <h3>Total Money</h3>
                                            <span>$0.00</span>
                                        </li>
                                    </ul>
                                    <div class="lt-sec">
                                        <img src="images/lt-icon.png" alt="">
                                        <h4>All your transactions are saved here</h4>
                                        <a href="#" title="">Click Here</a>
                                    </div>
                                </div><!--billing-method end-->
                                <div class="add-billing-method">
                                    <h3>Add Billing Method</h3>
                                    <h4><img src="images/dlr-icon.png" alt=""><span>With workwise payment protection , only pay for work delivered.</span></h4>
                                    <div class="payment_methods">
                                        <h4>Credit or Debit Cards</h4>
                                        <form>
                                            <div class="row">
                                                <div class="col-lg-12">
                                                    <div class="cc-head">
                                                        <h5>Card Number</h5>
                                                        <ul>
                                                            <li><img src="images/cc-icon1.png" alt=""></li>
                                                            <li><img src="images/cc-icon2.png" alt=""></li>
                                                            <li><img src="images/cc-icon3.png" alt=""></li>
                                                            <li><img src="images/cc-icon4.png" alt=""></li>
                                                        </ul>
                                                    </div>
                                                    <div class="inpt-field pd-moree">
                                                        <input type="text" name="cc-number" placeholder="">
                                                        <i class="fa fa-credit-card"></i>
                                                    </div><!--inpt-field end-->
                                                </div>
                                                <div class="col-lg-6">
                                                    <div class="cc-head">
                                                        <h5>First Name</h5>
                                                    </div>
                                                    <div class="inpt-field">
                                                        <input type="text" name="f-name" placeholder="">
                                                    </div><!--inpt-field end-->
                                                </div>
                                                <div class="col-lg-6">
                                                    <div class="cc-head">
                                                        <h5>Last Name</h5>
                                                    </div>
                                                    <div class="inpt-field">
                                                        <input type="text" name="l-name" placeholder="">
                                                    </div><!--inpt-field end-->
                                                </div>
                                                <div class="col-lg-6">
                                                    <div class="cc-head">
                                                        <h5>Expiresons</h5>
                                                    </div>
                                                    <div class="rowwy">
                                                        <div class="row">
                                                            <div class="col-lg-6 pd-left-none no-pd">
                                                                <div class="inpt-field">
                                                                    <input type="text" name="f-name" placeholder="">
                                                                </div><!--inpt-field end-->
                                                            </div>
                                                            <div class="col-lg-6 pd-right-none no-pd">
                                                                <div class="inpt-field">
                                                                    <input type="text" name="f-name" placeholder="">
                                                                </div><!--inpt-field end-->
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-lg-6">
                                                    <div class="cc-head">
                                                        <h5>Cvv (Security Code) <i class="fa fa-question-circle"></i></h5>
                                                    </div>
                                                    <div class="inpt-field">
                                                        <input type="text" name="l-name" placeholder="">
                                                    </div><!--inpt-field end-->
                                                </div>
                                                <div class="col-lg-12">
                                                    <button type="submit">Continue</button>
                                                </div>
                                            </div>
                                        </form>
                                        <h4>Add Paypal Account</h4>
                                    </div>
                                </div><!--add-billing-method end-->
                            </div><!--product-feed-tab end-->
                        </div><!--main-ws-sec end-->
                    </div>
                    <div class="col-lg-3">
                        <div class="widget widget-groups">
                                <div class="sd-title">
                                    <h3>Groups You Follow</h3>
                                    <i class="la la-ellipsis-v"></i>
                                </div><!--sd-title end-->
                                <div class="suggestions-list">
                                    <div class="row suggestion-usd">
                                        <div class="col-md-3">
                                            <img src="images/resources/pf-img8.jpg" alt="">
                                        </div>												
                                        <div class="col-md-9 sgt-text">
                                            <h4><a href="#" title="">Premiere League Lovers</a></h4>
                                            <span>2500 Members</span>
                                        </div>
                                        
                                    </div>
                                    <div class="row suggestion-usd">
                                        <div class="col-md-3">
                                            <img src="images/resources/pf-gallery3.png" alt="">
                                        </div>												
                                        <div class="col-md-9 sgt-text">
                                            <h4><a href="#" title="">London Foodie Association</a></h4>
                                            <span>2500 Members</span>
                                        </div>
                                        
                                    </div>
                                    <div class="view-more">
                                        <a href="groups.html" title="">View More</a>
                                    </div>
                                </div><!--suggestions-list end-->
                        </div><!--suggestions end-->
                        <div class="suggestions full-width">
                                <div class="sd-title">
                                    <h3>People Also Viewed</h3>
                                    <i class="la la-ellipsis-v"></i>
                                </div><!--sd-title end-->
                                <div class="suggestions-list">
                                    <div class="suggestion-usd">
                                        <img src="images/resources/s1.png" alt="">
                                        <div class="sgt-text">
                                            <h4>Jessica William</h4>
                                            <span>Graphic Designer</span>
                                        </div>
                                        <span><i class="la la-plus"></i></span>
                                    </div>
                                    <div class="suggestion-usd">
                                        <img src="images/resources/s2.png" alt="">
                                        <div class="sgt-text">
                                            <h4>John Doe</h4>
                                            <span>PHP Developer</span>
                                        </div>
                                        <span><i class="la la-plus"></i></span>
                                    </div>
                                    <div class="suggestion-usd">
                                        <img src="images/resources/s3.png" alt="">
                                        <div class="sgt-text">
                                            <h4>Poonam</h4>
                                            <span>Wordpress Developer</span>
                                        </div>
                                        <span><i class="la la-plus"></i></span>
                                    </div>
                                    <div class="suggestion-usd">
                                        <img src="images/resources/s4.png" alt="">
                                        <div class="sgt-text">
                                            <h4>Bill Gates</h4>
                                            <span>C & C++ Developer</span>
                                        </div>
                                        <span><i class="la la-plus"></i></span>
                                    </div>
                                    <div class="suggestion-usd">
                                        <img src="images/resources/s5.png" alt="">
                                        <div class="sgt-text">
                                            <h4>Jessica William</h4>
                                            <span>Graphic Designer</span>
                                        </div>
                                        <span><i class="la la-plus"></i></span>
                                    </div>
                                    <div class="suggestion-usd">
                                        <img src="images/resources/s6.png" alt="">
                                        <div class="sgt-text">
                                            <h4>John Doe</h4>
                                            <span>PHP Developer</span>
                                        </div>
                                        <span><i class="la la-plus"></i></span>
                                    </div>
                                    <div class="view-more">
                                        <a href="#" title="">View More</a>
                                    </div>
                                </div><!--suggestions-list end-->
                        </div><!--suggestions end-->
                    </div>
                </div>
            </div><!-- main-section-data end-->
        </div> 
    </div>
</main>

<footer>
    <div class="footy-sec mn no-margin">
        <div class="container">
            <ul>
                <li><a href="about.html" title="About" target="_blank">About</a></li>
                <li><a href="contact.html" title="Contact" target="_blank">Contact</a></li>
                <li><a href="terms.html" title="Privacy and Terms" target="_blank">Privacy and Terms</a></li>
                <li><a href="faqs.html" title="Help Center" target="_blank">Help Center</a></li>
                <li><a href="blog.html" title="Blog" target="_blank">Blog</a></li>
            </ul>
            <p><img src="images/copy-icon2.png" alt=""> 2019 VYBZZ Incorporated. All Rights Reserved </p>
        </div>
    </div>
</footer><!--footer end-->





	
@endsection