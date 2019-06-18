<?php

namespace App\Http\Controllers\Users;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class NotificationsController extends Controller
{
    public function index()
    {
        return [
            'read' => auth()->user()->readNotifications,
            'unread' => auth()->user()->unreadNotifications,
            'avatar' => auth()->user()->avatar,

        ];
    }

    public function getDetails($slug)
    {
        // $details = Post::where('slug', $slug)->with('user')->firstOrFail();

        // auth()->user()->notifications->where('slug', $slug)->markAsRead();

        //  $details->each(function ($post) {
        //  $post['comments'] = $post->getThreadedComments();
        //   $post['commentscount'] = $post->comments()->count();

        //   });
        //dd($details);

        return view('post.details');
    }
    public function markAsRead(Request $request)
    {

        auth()->user()->unreadNotifications->where('id', $request->id)->markAsRead();
        return $request->id;
    }
}
