@extends('layouts.master')

@section('content')
<main>
    <!-- ./Page header -->
     <header class="page header color-1 overlay gradient-45 alpha-8 image-background cover" style="background-image: url('images/urban.jpg')">
        <div class="container">
            <div class="row">
                <div class="col-md-6">
                    <h1 class="display-4 color-1 mb-4">Vybbz Blog</h1>
                    <p class="lead color-1">What our awesome community is talking about</p>
                </div>
            </div>
        </div>
    </header>
    <!-- ./Blog -->
    <section class="section">
        <div class="container">
            <div class="row gap-y">
                <div class="col-md-6 col-lg-4">
                    <div class="card card-blog shadow-box shadow-hover border-0">
                        <a href="blog-post.html"><img class="card-img-top img-responsive" src="https://picsum.photos/350/200/?random&gravity=north" alt=""></a>
                        <div class="card-body">
                            <div class="d-flex align-items-center justify-content-between">
                                <div class="author d-flex align-items-center"><img class="author-picture rounded-circle icon-md shadow-box" src="images/avatar/user.png" alt="...">
                                    <p class="small bold my-0">Jenny Oliver</p>
                                </div>
                                <nav class="nav"><a href="#" class="d-flex align-items-center mr-3 color-2"><i class="fas fa-heart text-danger mr-2 favorite"></i> <span class="small">347</span> </a><a href="#" class="d-flex align-items-center color-2"><i class="far fa-bookmark mr-2 bookmark"></i> <span class="small">73</span></a></nav>
                            </div>
                            <hr>
                            <p class="card-title regular"><a href="blog-post.html">Discover the Beauty of VybbZ</a></p>
                            <p class="card-text color-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi at, cumque dolores dolorum est.</p>
                            <p class="bold small color-2 my-0"><small>Jun 14 2018</small></p>
                        </div>
                    </div>
                </div>
                <div class="col-md-6 col-lg-4">
                    <div class="card card-blog shadow-box shadow-hover border-0">
                        <a href="blog-post.html"><img class="card-img-top img-responsive" src="https://picsum.photos/350/200/?random&gravity=south" alt=""></a>
                        <div class="card-body">
                            <div class="d-flex align-items-center justify-content-between">
                                <div class="author d-flex align-items-center"><img class="author-picture rounded-circle icon-md shadow-box" src="images/avatar/user.png" alt="...">
                                    <p class="small bold my-0">Jennifer Wells</p>
                                </div>
                                <nav class="nav"><a href="#" class="d-flex align-items-center mr-3 color-2"><i class="far fa-heart mr-2 favorite"></i> <span class="small">415</span> </a><a href="#" class="d-flex align-items-center color-2"><i class="fas fa-bookmark text-warning mr-2 bookmark"></i> <span class="small">98</span></a></nav>
                            </div>
                            <hr>
                            <p class="card-title regular"><a href="blog-post.html">Extending VybbZ Community</a></p>
                            <p class="card-text color-2">Cupiditate debitis delectus dolor dolore doloremque, doloribus eveniet illo in labore neque numquam.</p>
                            <p class="bold small color-2 my-0"><small>Jun 14 2018</small></p>
                        </div>
                    </div>
                </div>
                <div class="col-md-6 col-lg-4">
                    <div class="card card-blog shadow-box shadow-hover border-0">
                        <a href="blog-post.html"><img class="card-img-top img-responsive" src="https://picsum.photos/350/200/?random&gravity=east" alt=""></a>
                        <div class="card-body">
                            <div class="d-flex align-items-center justify-content-between">
                                <div class="author d-flex align-items-center"><img class="author-picture rounded-circle icon-md shadow-box" src="images/avatar/user.png" alt="...">
                                    <p class="small bold my-0">Roger Sanchez</p>
                                </div>
                                <nav class="nav"><a href="#" class="d-flex align-items-center mr-3 color-2"><i class="far fa-heart mr-2 favorite"></i> <span class="small">152</span> </a><a href="#" class="d-flex align-items-center color-2"><i class="far fa-bookmark mr-2 bookmark"></i> <span class="small">13</span></a></nav>
                            </div>
                            <hr>
                            <p class="card-title regular"><a href="blog-post.html">5 Reasons to Choose VybbZ</a></p>
                            <p class="card-text color-2">Amet aperiam cumque delectus eligendi, esse, modi nemo nisi officiis rem repellat sed ulla.</p>
                            <p class="bold small color-2 my-0"><small>Jun 14 2018</small></p>
                        </div>
                    </div>
                </div>
                <div class="col-md-6 col-lg-4">
                    <div class="card card-blog shadow-box shadow-hover border-0">
                        <a href="blog-post.html"><img class="card-img-top img-responsive" src="https://picsum.photos/350/200/?random&gravity=west" alt=""></a>
                        <div class="card-body">
                            <div class="d-flex align-items-center justify-content-between">
                                <div class="author d-flex align-items-center"><img class="author-picture rounded-circle icon-md shadow-box" src="images/avatar/user.png" alt="...">
                                    <p class="small bold my-0">Billie Robertson</p>
                                </div>
                                <nav class="nav"><a href="#" class="d-flex align-items-center mr-3 color-2"><i class="far fa-heart mr-2 favorite"></i> <span class="small">237</span> </a><a href="#" class="d-flex align-items-center color-2"><i class="far fa-bookmark mr-2 bookmark"></i> <span class="small">87</span></a></nav>
                            </div>
                            <hr>
                            <p class="card-title regular"><a href="blog-post.html">Styling with Style: Gold Rule</a></p>
                            <p class="card-text color-2">Ad aliquam dicta, eaque eos iusto totam velit. Amet atque dolorum eaque ipsa sed. Aliquid cupiditate.</p>
                            <p class="bold small color-2 my-0"><small>Jun 14 2018</small></p>
                        </div>
                    </div>
                </div>
                <div class="col-md-6 col-lg-4">
                    <div class="card card-blog shadow-box shadow-hover border-0">
                        <a href="blog-post.html"><img class="card-img-top img-responsive" src="https://picsum.photos/350/200/?random&gravity=east" alt=""></a>
                        <div class="card-body">
                            <div class="d-flex align-items-center justify-content-between">
                                <div class="author d-flex align-items-center"><img class="author-picture rounded-circle icon-md shadow-box" src="images/avatar/user.png" alt="...">
                                    <p class="small bold my-0">Billie Ramos</p>
                                </div>
                                <nav class="nav"><a href="#" class="d-flex align-items-center mr-3 color-2"><i class="fas fa-heart text-danger mr-2 favorite"></i> <span class="small">731</span> </a><a href="#" class="d-flex align-items-center color-2"><i class="far fa-bookmark mr-2 bookmark"></i> <span class="small">83</span></a></nav>
                            </div>
                            <hr>
                            <p class="card-title regular"><a href="blog-post.html">Extending VybbZ Community</a></p>
                            <p class="card-text color-2">Amet animi autem commodi, debitis dolore doloribus fugiat illum molestias nesciunt perspiciatis.</p>
                            <p class="bold small color-2 my-0"><small>Jun 14 2018</small></p>
                        </div>
                    </div>
                </div>
                <div class="col-md-6 col-lg-4">
                    <div class="card card-blog shadow-box shadow-hover border-0">
                        <a href="blog-post.html"><img class="card-img-top img-responsive" src="https://picsum.photos/350/200/?random&gravity=north" alt=""></a>
                        <div class="card-body">
                            <div class="d-flex align-items-center justify-content-between">
                                <div class="author d-flex align-items-center"><img class="author-picture rounded-circle icon-md shadow-box" src="images/avatar/user.png" alt="...">
                                    <p class="small bold my-0">Katherine Wade</p>
                                </div>
                                <nav class="nav"><a href="#" class="d-flex align-items-center mr-3 color-2"><i class="far fa-heart mr-2 favorite"></i> <span class="small">187</span> </a><a href="#" class="d-flex align-items-center color-2"><i class="far fa-bookmark mr-2 bookmark"></i> <span class="small">53</span></a></nav>
                            </div>
                            <hr>
                            <p class="card-title regular"><a href="blog-post.html">Think Smarter than Others</a></p>
                            <p class="card-text color-2">Adipisci animi aperiam aut culpa deleniti deserunt error et eveniet, incidunt labore natus nihil.</p>
                            <p class="bold small color-2 my-0"><small>Jun 14 2018</small></p>
                        </div>
                    </div>
                </div>
                <div class="col-md-6 col-lg-4">
                    <div class="card card-blog shadow-box shadow-hover border-0">
                        <a href="blog-post.html"><img class="card-img-top img-responsive" src="https://picsum.photos/350/200/?random&gravity=south" alt=""></a>
                        <div class="card-body">
                            <div class="d-flex align-items-center justify-content-between">
                                <div class="author d-flex align-items-center"><img class="author-picture rounded-circle icon-md shadow-box" src="images/avatar/user.png" alt="...">
                                    <p class="small bold my-0">Pearl Hoffman</p>
                                </div>
                                <nav class="nav"><a href="#" class="d-flex align-items-center mr-3 color-2"><i class="far fa-heart mr-2 favorite"></i> <span class="small">568</span> </a><a href="#" class="d-flex align-items-center color-2"><i class="far fa-bookmark mr-2 bookmark"></i> <span class="small">89</span></a></nav>
                            </div>
                            <hr>
                            <p class="card-title regular"><a href="blog-post.html">15 Minutes Configuration</a></p>
                            <p class="card-text color-2">Some quick example text to build on the New post and make up the bulk of the post&#39;s content.</p>
                            <p class="bold small color-2 my-0"><small>Jun 14 2018</small></p>
                        </div>
                    </div>
                </div>
                <div class="col-md-6 col-lg-4">
                    <div class="card card-blog shadow-box shadow-hover border-0">
                        <a href="blog-post.html"><img class="card-img-top img-responsive" src="https://picsum.photos/350/200/?random&gravity=center" alt=""></a>
                        <div class="card-body">
                            <div class="d-flex align-items-center justify-content-between">
                                <div class="author d-flex align-items-center"><img class="author-picture rounded-circle icon-md shadow-box" src="images/avatar/user.png" alt="...">
                                    <p class="small bold my-0">Charlie Green</p>
                                </div>
                                <nav class="nav"><a href="#" class="d-flex align-items-center mr-3 color-2"><i class="fas fa-heart mr-2 favorite"></i> <span class="small">543</span> </a><a href="#" class="d-flex align-items-center color-2"><i class="fas fa-bookmark text-warning mr-2 bookmark"></i> <span class="small">125</span></a></nav>
                            </div>
                            <hr>
                            <p class="card-title regular"><a href="blog-post.html">Smart new Innovations</a></p>
                            <p class="card-text color-2">Asperiores atque ea enim illum in ipsam labore maiores necessitatibus odit officiis optio quae.</p>
                            <p class="bold small color-2 my-0"><small>Jun 14 2018</small></p>
                        </div>
                    </div>
                </div>
                <div class="col-md-6 col-lg-4">
                    <div class="card card-blog shadow-box shadow-hover border-0">
                        <a href="blog-post.html"><img class="card-img-top img-responsive" src="https://picsum.photos/350/200/?random&gravity=west" alt=""></a>
                        <div class="card-body">
                            <div class="d-flex align-items-center justify-content-between">
                                <div class="author d-flex align-items-center"><img class="author-picture rounded-circle icon-md shadow-box" src="images/avatar/user.png" alt="...">
                                    <p class="small bold my-0">Constance Hunter</p>
                                </div>
                                <nav class="nav"><a href="#" class="d-flex align-items-center mr-3 color-2"><i class="far fa-heart mr-2 favorite"></i> <span class="small">298</span> </a><a href="#" class="d-flex align-items-center color-2"><i class="far fa-bookmark mr-2 bookmark"></i> <span class="small">26</span></a></nav>
                            </div>
                            <hr>
                            <p class="card-title regular"><a href="blog-post.html">Becoming an Entrepreneur</a></p>
                            <p class="card-text color-2">Aspernatur atque, cum dolore earum eius et eum facere iusto magni molestiae nam officiis placeat.</p>
                            <p class="bold small color-2 my-0"><small>Jun 14 2018</small></p>
                        </div>
                    </div>
                </div>
            </div>
            <nav class="nav justify-content-center mt-5"><a class="btn btn-1 btn-rounded mr-5" href="#"><i class="fas fa-angle-left"></i> Previous</a> <a class="btn btn-1 btn-rounded" href="#">Next <i class="fas fa-angle-right"></i></a></nav>
        </div>
    </section>
</main>

@endsection



