<?php
use Illuminate\Support\Facades\Auth;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
 */


Route::get('/', 'SiteController@index');
Route::get('about', 'SiteController@about');
Route::get('contact', 'SiteController@contact');
Route::get('blog', 'SiteController@blog');
Route::get('faq', 'SiteController@faq');
Route::get('terms', 'SiteController@terms');

Route::group(['prefix' => 'accounts'], function () {

    Auth::routes(['verify' => true]);

});
Route::get('/redirect', 'Auth\SocialAuthLinkedinController@redirect');
Route::get('/callback', 'Auth\SocialAuthLinkedinController@callback');

//protected Routes
Route::middleware(['auth'])->group(function () {
    //users Routes
    Route::middleware(['users', 'verified'])->group(function () {
        Route::get('/feed', 'HomeController@index')->name('feed');
        Route::get('/notifications', 'HomeController@notifications');
        Route::post('api/account-setup', 'Users\AccountsController@setup');
        Route::resource('api/post', 'API\PostController');
        Route::resource('api/comment', 'API\CommentController');
        Route::get('/paypal', 'PaymentController@index');
        // route for processing payment
        Route::post('paypal', 'PaymentController@payWithpaypal');
        // route for check status of the payment
        Route::get('status', 'PaymentController@getPaymentStatus');
        Route::post('likeit/{post}', 'Users\LikeController@likeit');
        Route::delete('likeit/{post}', 'Users\LikeController@unLikeit');
        Route::post('notifications', 'Users\NotificationsController@index');
        Route::get('post-details/{slug}', 'Users\NotificationsController@getDetails');
        Route::post('markAsRead', 'Users\NotificationsController@markAsRead');

        Route::get('/get_auth_user_data', function(){
            return Auth::user();
        });
            Route::get('/get_unread', function(){
                return Auth::user()->unreadNotifications;
                 });
            Route::get('/check_relationship_status/{id}', function($id){
                return \App\User::find($id);
                 });

        Route::group(['namespace' => 'TimeLime'], function () {
            Route::get('/profile/{user}', 'TimeLimeController@index')->name('users');
            Route::get('user/{user}/follow', 'TimeLimeController@follow')->name('users.follow');
            Route::post('follow', 'TimeLimeController@follow1');
            Route::get('getRequest/{id}', 'TimeLimeController@getRequest');
            Route::get('user/{user}/unfollow', 'TimeLimeController@unfollow')->name('users.unfollow');
            Route::get('/check_relationship_status/{id}','TimeLimeController@unfollow');

            Route::post('overview', 'TimeLimeController@createOverview');
            Route::post('experience', 'TimeLimeController@createExperience');
            Route::post('education', 'TimeLimeController@createEducation');
            Route::post('location', 'TimeLimeController@createLocation');
            Route::post('skills', 'TimeLimeController@createSkills');
            Route::get('overview', 'TimeLimeController@getOverview');
            Route::get('experience', 'TimeLimeController@getExperience');
            Route::get('education','TimeLimeController@getEducation');
            Route::get('location','TimeLimeController@getLocation');
            Route::get('skills','TimeLimeController@getSkills');
            Route::delete('skill/{id}','TimeLimeController@removeSkill');
            Route::get('activities','TimeLimeController@getActivity');
            Route::match(['put', 'patch'],'update-experience/{id}','TimeLimeController@updateExperience');
            Route::match(['put', 'patch'],'update-education/{id}','TimeLimeController@updateEducation');
           

        });
        Route::group(['namespace' => 'Connections'], function () {
           
            Route::get('/check_relationship_status/{id}','ConnectionsController@check');
            Route::get('/add_connect/{id}','ConnectionsController@connect');
            Route::get('/accept_connect/{id}','ConnectionsController@accept');
            Route::get('/decline_connect/{id}','ConnectionsController@decline');
            Route::get('friend-request','ConnectionsController@pendingFriendRequest');
            Route::get('friend_request_count','ConnectionsController@count_pending_request');

           

        });

        Route::group(['namespace' => 'Feed'], function () {
            Route::resource('post', 'PostController');

        });

    });

    // Admin Routes
    Route::prefix('admin')->middleware(['admin'])->group(function () {
        Route::get('/', 'Admin\HomeController@index');

    });

});
