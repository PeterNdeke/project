@extends('layouts.master')

@section('content')
<main>
    <!-- ./Page header -->
     <header class="page header color-1 overlay alpha-8 image-background cover gradient-45" style="background-image: url('images/urban.jpg')">
        <div class="divider-shape">
            <!-- waves divider -->
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" preserveAspectRatio="none" class="shape-waves" style="left: 0; transform: rotate3d(0,1,0,180deg);">
                <path class="shape-fill shape-fill-6" d="M790.5,93.1c-59.3-5.3-116.8-18-192.6-50c-29.6-12.7-76.9-31-100.5-35.9c-23.6-4.9-52.6-7.8-75.5-5.3c-10.2,1.1-22.6,1.4-50.1,7.4c-27.2,6.3-58.2,16.6-79.4,24.7c-41.3,15.9-94.9,21.9-134,22.6C72,58.2,0,25.8,0,25.8V100h1000V65.3c0,0-51.5,19.4-106.2,25.7C839.5,97,814.1,95.2,790.5,93.1z" />
            </svg>
        </div>
        <div class="container pb-9" style="">
            <div class="row">
                <div class="col-md-12">
                    <h1 class="regular display-4 color-1 mb-4">How can we help you today?</h1>
                </div>
            </div>
        </div>
    </header>
    <!-- ./FAQs -->
    <section class="section bg-6">
        <div class="container">

                    <p class="lead color-2">Here are the answers to some of the most common questions we hear from our appreciated customers.</p>
            <div class="row gap-y">
                <div class="col-lg-8 b-md-l order-lg-2">
                    <h3 class="light">Common Questions</h3>
                    <hr class="mb-4">
                    <div class="accordion accordion-clean" id="faqs-accordion">
                        <div class="card mb-3">
                            <div class="card-header"><a href="#" class="card-title btn" data-toggle="collapse" data-target="#v1-q1">Searching on Vybbz</a></div>
                            <div id="v1-q1" class="collapse" data-parent="#faqs-accordion">
                                <div class="card-body">The Search bar at the top of several Vybbz pages allows you to search for people, jobs, companies, posts, and more. You can click any of the search suggestions that appear in the dropdown list as you type, or submit your search to see the full…</div>
                            </div>
                        </div>
                        <div class="card mb-3">
                            <div class="card-header"><a href="#" class="card-title btn" data-toggle="collapse" data-target="#v1-q2">Vybbz Public Profile Visibility</a></div>
                            <div id="v1-q2" class="collapse" data-parent="#faqs-accordion">
                                <div class="card-body">Start IPH Your public profile displays a simplified version of your Vybbz profile. You can customize your public profile settings to set limits on how much of your profile information can be displayed. Simply turn on or off the profile…</div>
                            </div>
                        </div>
                        <div class="card mb-3">
                            <div class="card-header"><a href="#" class="card-title btn" data-toggle="collapse" data-target="#v1-q3">Invitation Restrictions</a></div>
                            <div id="v1-q3" class="collapse" data-parent="#faqs-accordion">
                                <div class="card-body">Your Vybbz account may be temporarily restricted from sending invitations to people for the following reasons: You've sent a large number of invitations within a short amount of time. Many of your invitations have been rejected, ignored, or…</div>
                            </div>
                        </div>
                        <div class="card mb-3">
                            <div class="card-header"><a href="#" class="card-title btn" data-toggle="collapse" data-target="#v1-q4">Editing Your Profile</a></div>
                            <div id="v1-q4" class="collapse" data-parent="#faqs-accordion">
                                <div class="card-body">You can edit sections of your Vybbz profile to best reflect your own, personal brand. Use the introduction card on your profile to display details of your current personal and professional status, just like a business card. You can manage…</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4">
                    <h5 class="bold small text-uppercase mb-3">search</h5>
                    <form class="form search-box">
                        <div class="input-group">
                            <input type="email" name="Search[q]" class="form-control rounded-circle-left shadow-none" placeholder="Search form..." required>
                            <div class="input-group-append">
                                <button class="btn btn-rounded btn-1 border-input border-left-0" type="submit" data-loading-text="Searching ..."><i class="fas fa-search"></i></button>
                            </div>
                        </div>
                    </form>
                    <h4 class="bold small text-uppercase mt-4 mb-3">categories</h4>
                    <nav class="nav flex-column font-sm"><a class="pl-0 nav-item nav-link bold active" href="faqs.html">Common Questions</a> <a class="pl-0 nav-item nav-link" href="faqs.html">Getting Started</a> <a class="pl-0 nav-item nav-link" href="faqs.html">My Account</a> <a class="pl-0 nav-item nav-link" href="faqs.html">Integrations</a> <a class="pl-0 nav-item nav-link" href="faqs.html">Licencing</a></nav>
                </div>
            </div>
        </div>
    </section>
    <!-- ./FAQs - Other channels -->
    <section class="section bg-6">
        <div class="container bring-to-front py-0">
            <div class="row gap-y align-items-center text-center text-lg-left">
                <div class="col-md-6">
                    <div class="shadow card">
                        <div class="card-body"><i class="pe pe-7s-paper-plane pe-3x color-3"></i> <a href="javascript:;" class="mt-4 color-3 d-flex align-items-center"><h4 class="mr-3">Documentation</h4><i class="fas fa-long-arrow-alt-right"></i></a>
                            <p class="mt-4">Asperiores, consequuntur fugit minima natus optio quisquam sint sunt? Earum harum in laudantium nobis obcaecati odio, praesentium, quis sequi soluta vel veniam.</p>
                        </div>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="shadow card">
                        <div class="card-body"><i class="pe pe-7s-comment pe-3x color-4"></i> <a href="contact.html" class="mt-4 color-4 d-flex align-items-center"><h4 class="mr-3">Contact Us</h4><i class="fas fa-long-arrow-alt-right"></i></a>
                            <p class="mt-4">Consequuntur eos ex exercitationem ipsum, nobis nostrum porro praesentium quaerat quidem quis ratione recusandae reprehenderit, saepe soluta temporibus voluptate.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- ./CTA - Create Account -->
    <section class="section bg-1 edge top-left b-b">
        <div class="container pt-5">
            <div class="d-flex align-items-center flex-column flex-md-row">
                <div class="text-center text-md-left">
                    <p class="light mb-0 accent lead">Ready to get started?</p>
                    <h2 class="mt-0">Create an account now</h2></div><a href="register.html" class="btn btn-accent btn-rounded mt-3 mt-md-0 ml-md-auto">Create Vybbz account</a></div>
        </div>
    </section>
</main>

@endsection



