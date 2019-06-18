@extends('layouts.feed')

@section('content')

<main>
    <div class="main-section">
        <div class="container">
            <div class="main-section-data">
                <div class="row">
                    <div class="col-lg-3 col-md-4 pd-left-none no-pd">
                        <div class="main-left-sidebar no-margin">
                            <div class="user-data full-width">
                                <div class="user-profile">
                                    <div class="username-dt image-background cover" style="background-image:url(images/d-cover.jpg);">
                                        <div class="usr-pic">
                                            @if (Auth::user()->imageUrl !==NULL)
                                            <img src="{{Auth::user()->pic}}" alt="">
                                            @endif
                                        </div>
                                    </div><br><br><!--username-dt end-->
                                    <div class="user-specs">
                                        <h3>John Doe <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="verified-color feather feather-check-circle" title="" data-toggle="tooltip" data-original-title="Verified User"><path d="M23,12L20.56,9.22L20.9,5.54L17.29,4.72L15.4,1.54L12,3L8.6,1.54L6.71,4.72L3.1,5.53L3.44,9.21L1,12L3.44,14.78L3.1,18.47L6.71,19.29L8.6,22.47L12,21L15.4,22.46L17.29,19.28L20.9,18.46L20.56,14.78L23,12M10,17L6,13L7.41,11.59L10,14.17L16.59,7.58L18,9L10,17Z"></path></svg></h3>
                                        <span>Graphic Designer at Self Employed</span>
                                    </div>
                                </div><!--user-profile end-->
                                <ul class="user-fw-status">
                                    <li class="u-status">
                                        <h4>Connections</h4>
                                        <span>155</span>
                                    </li>
                                    <li class="u-status">
                                        <h4>Post</h4>
                                        <span>34</span>
                                    </li>
                                    <li>
                                        <a href="my-profile-feed.html" title="">View Profile</a>
                                    </li>
                                </ul>
                            </div><!--user-data end-->
                            <div class="suggestions full-width">
                                <div class="sd-title">
                                    <h3>People You May Know</h3>
                                    <i class="la la-ellipsis-v"></i>
                                </div><!--sd-title end-->
                                <div class="suggestions-list">
                                    <div class="suggestion-usd">
                                        <img src="images/resources/s1.png" alt="">
                                        <div class="sgt-text">
                                            <h4>Jessica William</h4>
                                            <span>15 mutual friends</span>
                                        </div>
                                        <span><a href="#" title="Remove"><i class="la la-trash"></i></a></span>
                                        <span><a href="#" title="Add Connection"><i class="la la-plus"></i></a></span>
                                    </div>
                                    <div class="suggestion-usd">
                                        <img src="images/resources/s2.png" alt="">
                                        <div class="sgt-text">
                                            <h4>John Doe</h4>
                                            <span>15 mutual friends</span>
                                        </div>
                                        <span><a href="#" title="Remove"><i class="la la-trash"></i></a></span>
                                        <span><a href="#" title="Add Connection"><i class="la la-plus"></i></a></span>
                                    </div>
                                    <div class="suggestion-usd">
                                        <img src="images/resources/s3.png" alt="">
                                        <div class="sgt-text">
                                            <h4>Poonam</h4>
                                            <span>15 mutual friends</span>
                                        </div>
                                        <span><a href="#" title="Remove"><i class="la la-trash"></i></a></span>
                                        <span><a href="#" title="Add Connection"><i class="la la-plus"></i></a></span>
                                    </div>
                                    <div class="suggestion-usd">
                                        <img src="images/resources/s4.png" alt="">
                                        <div class="sgt-text">
                                            <h4>Bill Gates</h4>
                                            <span>15 mutual friends</span>
                                        </div>
                                        <span><a href="#" title="Remove"><i class="la la-trash"></i></a></span>
                                        <span><a href="#" title="Add Connection"><i class="la la-plus"></i></a></span>
                                    </div>
                                    <div class="suggestion-usd">
                                        <img src="images/resources/s5.png" alt="">
                                        <div class="sgt-text">
                                            <h4>Jessica William</h4>
                                            <span>15 mutual friends</span>
                                        </div>
                                        <span><a href="#" title="Remove"><i class="la la-trash"></i></a></span>
                                        <span><a href="#" title="Add Connection"><i class="la la-plus"></i></a></span>
                                    </div>
                                    <div class="suggestion-usd">
                                        <img src="images/resources/s6.png" alt="">
                                        <div class="sgt-text">
                                            <h4>John Doe</h4>
                                            <span>15 mutual friends</span>
                                        </div>
                                        <span><a href="#" title="Remove"><i class="la la-trash"></i></a></span>
                                        <span><a href="#" title="Add Connection"><i class="la la-plus"></i></a></span>
                                    </div>
                                    <div class="view-more">
                                        <a href="#" title="">View More</a>
                                    </div>
                                </div><!--suggestions-list end-->
                            </div><!--suggestions end-->

                            <div class="widget widget-groups">
                                <div class="sd-title">
                                    <h3>Groups You May Like</h3>
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
                                        <div class="col-md-12 sgt-button">
                                        <span><a href="#" class="btn btn-primary btn-sm" role="button" aria-pressed="true" title="Join Group"><i class="la la-plus"></i> Join</a></span>
                                            <span><a href="#" class="btn btn-primary btn-sm" role="button" aria-pressed="true" title="Remove"><i class="la la-trash"></i></a></span>

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
                                        <div class="col-md-12 sgt-button">
                                        <span><a href="#" class="btn btn-primary btn-sm" role="button" aria-pressed="true" title="Join Group"><i class="la la-plus"></i> Join</a></span>
                                            <span><a href="#" class="btn btn-primary btn-sm" role="button" aria-pressed="true" title="Remove"><i class="la la-trash"></i></a></span>

                                        </div>
                                        
                                    </div>
                                    <div class="row suggestion-usd">
                                        <div class="col-md-3">
                                            <img src="images/resources/pf-img9.jpg" alt="">
                                        </div>												
                                        <div class="col-md-9 sgt-text">
                                            <h4><a href="#" title="">Tasty Food Recipes</a></h4>
                                            <span>2500 Members</span>
                                        </div>
                                        <div class="col-md-12 sgt-button">
                                        <span><a href="#" class="btn btn-primary btn-sm" role="button" aria-pressed="true" title="Join Group"><i class="la la-plus"></i> Join</a></span>
                                            <span><a href="#" class="btn btn-primary btn-sm" role="button" aria-pressed="true" title="Remove"><i class="la la-trash"></i></a></span>

                                        </div>
                                        
                                    </div>
                                    <div class="view-more">
                                        <a href="groups.html" title="">View More</a>
                                    </div>
                                </div><!--suggestions-list end-->
                            </div><!--suggestions end-->
                            <div class="widget suggestions full-width">
                                <div class="sd-title">
                                    <h3>Most Viewed People</h3>
                                    <i class="la la-ellipsis-v"></i>
                                </div><!--sd-title end-->
                                <div class="popular-list">
                                    <div class="popular_img">
                                                <a href="user-profile.html" title=""><img src="images/resources/bg-img1.png" alt=""></a>
                                            </div>
                                            <div class="popular_img">
                                                <a href="user-profile.html" title=""><img src="images/resources/bg-img2.png" alt=""></a>
                                            </div>
                                            <div class="popular_img">
                                                <a href="user-profile.html" title=""><img src="images/resources/bg-img3.png" alt=""></a>
                                            </div>
                                            <div class="popular_img">
                                                <a href="user-profile.html" title=""><img src="images/resources/bg-img4.png" alt=""></a>
                                            </div>
                                            <div class="popular_img">
                                                <a href="user-profile.html" title=""><img src="images/resources/bg-img1.png" alt=""></a>
                                            </div>
                                            <div class="popular_img">
                                                <a href="user-profile.html" title=""><img src="images/resources/bg-img2.png" alt=""></a>
                                            </div>
                                            <div class="popular_img">
                                                <a href="user-profile.html" title=""><img src="images/resources/bg-img3.png" alt=""></a>
                                            </div>
                                            <div class="popular_img">
                                                <a href="user-profile.html" title=""><img src="images/resources/bg-img4.png" alt=""></a>
                                            </div>
                                            <div class="popular_img">
                                                <a href="user-profile.html" title=""><img src="images/resources/bg-img1.png" alt=""></a>
                                            </div>
                                            <div class="popular_img">
                                                <a href="user-profile.html" title=""><img src="images/resources/bg-img2.png" alt=""></a>
                                            </div>
                                    
                                </div><!--suggestions-list end-->
                            </div>
                            
                        </div><!--main-left-sidebar end-->
                    </div>
                    <div class="col-lg-6 col-md-8 no-pd">
                        <div class="main-ws-sec">
                            <post-component></post-component>
                            <div class="posts-section">
                               
                                
                                <feed-component></feed-component>
                                
                                
                             
                               



                            </div><!--posts-section end-->

                            <!-- status elements -->
                                <div class="scroller-status">
                                  <div class="infinite-scroll-request loader-ellips">
                                    ...
                                  </div>
                                  <p class="infinite-scroll-last">End of content</p>
                                  <p class="infinite-scroll-error">No more pages to load</p>
                                </div>

                                <!-- pagination has path -->
                                <p class="pagination">
                                  <a class="pagination__next" href="page2.html">Next page</a>
                                </p>

                        </div><!--main-ws-sec end-->
                    </div>
                    <div class="col-lg-3 pd-right-none no-pd">
                        <div class="right-sidebar">
                            <div class="widget widget-about">
                                <img src="images/Premium_grande.png" alt="">
                                <h3>Vybbz Premium</h3>
                                <span>Access exclusive tools and features</span>
                                <div class="sign_link">
                                    <h3><a href="#" title="">Upgrade to Premium</a></h3>
                                    <a href="#" title="">Learn More</a>
                                </div>
                            </div><!--widget-about end-->

                            <div class="widget widget-events">
                                <div class="sd-title mb-2">
                                    <h3>Upcoming Events</h3>
                                    <i class="la la-calendar"></i>
                                </div>
                                <figure class="eventwidget image-background cover" style="background-image:url(images/resources/event-1.jpg)">
                                        
                                        <div class="date"><span class="day">12</span><span class="month">Jun</span></div>
                                        <figcaption class="">
                                        <h3>This Thing Called Life: A Celebration of Prince and His Legacy at MEZZANINE SF</h3>
                                        <p><i class="la la-map-marker"></i> Mezzanine, San Francisco, CA</p>
                                        <p><i class="la la-money"></i> $25 &ndash; $80</p>
                                        </figcaption>
                                        <div class="hover"><i class="la la-ticket"></i> <span>Get Tickets</span></div>
                                        <a href="#"></a>
                                </figure>
                                <figure class="eventwidget image-background cover" style="background-image:url(images/resources/event-2.jpg)">
                                        
                                        <div class="date"><span class="day">28</span><span class="month">Aug</span></div>
                                        <figcaption>
                                        <h3>Brunch and Games @ the Dorchester</h3>
                                        <p><i class="la la-map-marker"></i> Alain Ducasse at the Dorchester, London, UK</p>
                                        <p><i class="la la-money"></i> $220</p>
                                        </figcaption>
                                        <div class="hover"><i class="la la-ticket"></i> <span>Get Tickets</span></div>
                                        <a href="#"></a>
                                </figure>
                                
                            </div><!--widget-events end-->


                            <div class="widget widget-about">
                                <div class="sd-title">
                                    <h3><i class="la la-envelope"></i> Invite Your Friends</h3>
                                </div>
                                <div class="invite_form">
                                    <form>
                                        <input type="text" name="search" placeholder="Email">
                                        <button type="submit">Ok</button>
                                    </form>
                                </div>
                            </div><!--widget-invite end-->

                            <!--footer start-->
                            <div class="tags-sec full-width">
                                <ul>
                                    <li><a href="about.html" title="About" target="_blank">About</a></li>
                                    <li><a href="contact.html" title="Contact" target="_blank">Contact</a></li>
                                    <li><a href="terms.html" title="Privacy and Terms" target="_blank">Privacy and Terms</a></li>
                                    <li><a href="faqs.html" title="Help Center" target="_blank">Help Center</a></li>
                                    <li><a href="blog.html" title="Blog" target="_blank">Blog</a></li>
                                </ul>
                                <div class="cp-sec">
                                    <p><img src="images/copy-icon2.png" alt=""> 2019 VYBZZ Incorporated. All Rights Reserved </p>
                                </div>
                            </div><!--footer end-->

                        </div><!--right-sidebar end-->
                    </div>
                </div>
            </div><!-- main-section-data end-->
        </div> 
    </div>
</main>

<div class="chatbox-list">
    <div class="chatbox">
        <div class="chat-mg">
            <a href="#" title=""><img src="{{asset('images/resources/usr-img1.png')}}" alt=""></a>
            <span>2</span>
        </div>
        <div class="conversation-box">
            <div class="con-title mg-3">
                <div class="chat-user-info">
                    <img src="images/resources/us-img1.png" alt="">
                    <h3>John Doe <span class="status-info"></span></h3>
                </div>
                <div class="st-icons">
                    <a href="#" title=""><i class="la la-cog"></i></a>
                    <a href="#" title="" class="close-chat"><i class="la la-minus-square"></i></a>
                    <a href="#" title="" class="close-chat"><i class="la la-close"></i></a>
                </div>
            </div>
            <div class="chat-hist mCustomScrollbar" data-mcs-theme="dark">
                <div class="chat-msg">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec rutrum congue leo eget malesuada. Vivamus suscipit tortor eget felis porttitor.</p>
                    <span>Sat, Aug 23, 1:10 PM</span>
                </div>
                <div class="date-nd">
                    <span>Sunday, August 24</span>
                </div>
                <div class="chat-msg st2">
                    <p>Cras ultricies ligula.</p>
                    <span>5 minutes ago</span>
                </div>
                <div class="chat-msg">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec rutrum congue leo eget malesuada. Vivamus suscipit tortor eget felis porttitor.</p>
                    <span>Sat, Aug 23, 1:10 PM</span>
                </div>
            </div><!--chat-list end-->
            <div class="typing-msg">
                <form>
                    <textarea placeholder="Type a message here"></textarea>
                    <button type="submit"><i class="fa fa-send"></i></button>
                </form>
                <ul class="ft-options">
                    <li><a href="#" title=""><i class="la la-smile-o"></i></a></li>
                    <li><a href="#" title=""><i class="la la-camera"></i></a></li>
                    <li><a href="#" title=""><i class="fa fa-paperclip"></i></a></li>
                </ul>
            </div><!--typing-msg end-->
        </div><!--chat-history end-->
    </div>
    <div class="chatbox">
        <div class="chat-mg">
            <a href="#" title=""><img src="{{asset('images/resources/usr-img2.png')}}" alt=""></a>
        </div>
        <div class="conversation-box">
            <div class="con-title mg-3">
                <div class="chat-user-info">
                    <img src="images/resources/us-img1.png" alt="">
                    <h3>John Doe <span class="status-info"></span></h3>
                </div>
                <div class="st-icons">
                    <a href="#" title=""><i class="la la-cog"></i></a>
                    <a href="#" title="" class="close-chat"><i class="la la-minus-square"></i></a>
                    <a href="#" title="" class="close-chat"><i class="la la-close"></i></a>
                </div>
            </div>
            <div class="chat-hist mCustomScrollbar" data-mcs-theme="dark">
                <div class="chat-msg">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec rutrum congue leo eget malesuada. Vivamus suscipit tortor eget felis porttitor.</p>
                    <span>Sat, Aug 23, 1:10 PM</span>
                </div>
                <div class="date-nd">
                    <span>Sunday, August 24</span>
                </div>
                <div class="chat-msg st2">
                    <p>Cras ultricies ligula.</p>
                    <span>5 minutes ago</span>
                </div>
                <div class="chat-msg">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec rutrum congue leo eget malesuada. Vivamus suscipit tortor eget felis porttitor.</p>
                    <span>Sat, Aug 23, 1:10 PM</span>
                </div>
            </div><!--chat-list end-->
            <div class="typing-msg">
                <form>
                    <textarea placeholder="Type a message here"></textarea>
                    <button type="submit"><i class="fa fa-send"></i></button>
                </form>
                <ul class="ft-options">
                    <li><a href="#" title=""><i class="la la-smile-o"></i></a></li>
                    <li><a href="#" title=""><i class="la la-camera"></i></a></li>
                    <li><a href="#" title=""><i class="fa fa-paperclip"></i></a></li>
                </ul>
            </div><!--typing-msg end-->
        </div><!--chat-history end-->
    </div>
    <div class="chatbox">
        <div class="chat-mg bx">
            <a href="#" title=""><img src="{{asset('images/chat.png')}}" alt=""></a>
            <span>2</span>
        </div>
        <div class="conversation-box">
            <div class="con-title">
                <h3>Messages</h3>
                <a href="#" title="" class="close-chat"><i class="la la-minus-square"></i></a>
            </div>
            <div class="chat-list">
                <div class="conv-list active">
                    <div class="usrr-pic">
                        <img src="{{asset('images/resources/usy1.png')}}" alt="">
                        <span class="active-status activee"></span>
                    </div>
                    <div class="usy-info">
                        <h3>John Doe</h3>
                        <span>Lorem ipsum dolor <img src="{{asset('images/smley.png')}}" alt=""></span>
                    </div>
                    <div class="ct-time">
                        <span>1:55 PM</span>
                    </div>
                    <span class="msg-numbers">2</span>
                </div>
                <div class="conv-list">
                    <div class="usrr-pic">
                        <img src="{{asset('images/resources/usy2.png')}}" alt="">
                    </div>
                    <div class="usy-info">
                        <h3>John Doe</h3>
                        <span>Lorem ipsum dolor <img src="{{asset('images/smley.png')}}" alt=""></span>
                    </div>
                    <div class="ct-time">
                        <span>11:39 PM</span>
                    </div>
                </div>
                <div class="conv-list">
                    <div class="usrr-pic">
                        <img src="{{asset('images/resources/usy3.png')}}" alt="">
                    </div>
                    <div class="usy-info">
                        <h3>John Doe</h3>
                        <span>Lorem ipsum dolor <img src="{{asset('images/smley.png')}}" alt=""></span>
                    </div>
                    <div class="ct-time">
                        <span>0.28 AM</span>
                    </div>
                </div>
            </div><!--chat-list end-->
        </div><!--conversation-box end-->
    </div>
</div><!--chatbox-list end-->

	
@endsection