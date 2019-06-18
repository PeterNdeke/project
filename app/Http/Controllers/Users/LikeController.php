<?php

namespace App\Http\Controllers\Users;

use App\Events\LikeEvent;
use App\Http\Controllers\Controller;
use App\Post;
use App\Like;
use Illuminate\Support\Facades\Auth;

class LikeController extends Controller
{
    public function likeit(Post $post)
    {
       $like= $post->like()->create([
            'user_id' => auth()->id(),
        ]);

        broadcast(new LikeEvent($post->id, 1))->toOthers();

        return Like::find($like->id);
       

    }

    public function unLikeit( $post)
    {
        $post = Post::find($post);
        
        $like = Like::where('user_id', Auth::id())
            ->where('post_id', $post->id)
            ->first();
        $like->delete();
        broadcast(new LikeEvent($post->id, 0))->toOthers();
        return $like->id;
    //    $like= $post->like()->where(['user_id' => auth()->id()])->first()->delete();
    //     broadcast(new LikeEvent($post->id, 0))->toOthers();
    //     return $like->id;
    }
}
