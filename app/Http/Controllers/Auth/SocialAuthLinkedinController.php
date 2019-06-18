<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\User;
use Auth;
use Socialite;

class SocialAuthLinkedinController extends Controller
{
    public function redirect()
    {
        return Socialite::driver('linkedin')->redirect();
    }

    public function callback()
    {

        $linkdinUser = Socialite::driver('linkedin')->user();

        $existUser = User::where('email', $linkdinUser->email)->first();
        if ($existUser) {
            Auth::loginUsingId($existUser->id);
        } else {
            $user = new User;
            $user->name = $linkdinUser->name;
            $user->username = $linkdinUser->email;
            $user->email = $linkdinUser->email;
            $user->imageUrl = null;
            $user->isAdmin = 0;
            $user->email_verified_at = now();
            $user->linkdin_id = $linkdinUser->id;
            $user->password = md5(rand(1, 10000));
            $user->save();
            Auth::loginUsingId($user->id);
        }
        return redirect()->to('/feed');

    }
}
