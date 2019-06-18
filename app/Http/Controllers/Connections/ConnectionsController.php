<?php

namespace App\Http\Controllers\Connections;

use App\Http\Controllers\Controller;
use App\Notifications\FriendRequestAccepted;
use App\Notifications\NewFriendRequest;
use App\User;
use Illuminate\Support\Facades\Auth;

class ConnectionsController extends Controller
{
    public function check($id)
    {
        if (Auth::user()->is_friends_with($id) === 1) {
            return ["status" => "friends"];
        }

        if (Auth::user()->has_pending_friend_request_from($id)) {
            return ["status" => "pending"];
        }
        if (Auth::user()->has_pending_friend_request_sent_to($id)) {
            return ["status" => "waiting"];
        }
        return ["status" => 0];
    }

    public function connect($id)
    {
        $resp = Auth::user()->add_friend($id);

        User::find($id)->notify(new NewFriendRequest(Auth::user()));

        return $resp;
    }

    public function accept($id)
    {
        $resp = Auth::user()->accept_friend($id);
        User::find($id)->notify(new FriendRequestAccepted(Auth::user()));
        return $resp;
    }
    public function decline($id)
    {
        $resp = Auth::user()->decline_friend($id);
        // User::find($id)->notify(new FriendRequestAccepted(Auth::user()));
        return $resp;
    }

    public function pendingFriendRequest()
    {
        $pending = Auth::user()->pending_friend_requests();

        return $pending;
    }

    public function count_pending_request()
    {
        return Auth::user()->count_pending_request_from();
    }
}
