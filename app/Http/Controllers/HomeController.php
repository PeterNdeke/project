<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\User;
use Illuminate\Support\Facades\Auth;

class HomeController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
   

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */
    public function index()
    {
        $user = Auth::user()->id;

        $media = User::find($user);
        // dd($media);
        // $profile = $media->getMedia('images');
        if ($media->imageUrl != null) {
            $profile = $media->getMedia('images')->first()->getUrl('thumb');
            // dd($profile);
            # code...
        }
        return view('home',compact('profile'));

    }

    public function notifications()
    {
        Auth::user()->unreadNotifications->markAsRead();
        return view('users.noty')->with('nots', Auth::user()->notifications);
    }
}
