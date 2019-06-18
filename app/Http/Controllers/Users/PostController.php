<?php

namespace App\Http\Controllers\Users;

use App\Http\Controllers\Controller;
use App\Post;

class PostController extends Controller
{
    //
    public function getDetails($slug)
    {
        $details = Post::where('slug', $slug)->with('user')->firstOrFail();

        $details->each(function ($post) {
            $post['comments'] = $post->getThreadedComments();
            $post['commentscount'] = $post->comments()->count();

        });
        //dd($details);

        return view('post.details');
    }
}
