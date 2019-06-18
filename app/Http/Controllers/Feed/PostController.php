<?php

namespace App\Http\Controllers\Feed;

use App\Http\Controllers\Controller;
use App\Post;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Auth;

class PostController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
       // $posts = Post::with('user')->with('postFiles')->orderBy('created_at', 'ASC')->get();
        $friends = Auth::user()->friends();
        $feed = array();

    foreach($friends as $friend):
            foreach($friend->posts as $post):
                array_push($feed, $post);
            endforeach;
    endforeach;
    foreach(Auth::user()->posts as $post):
        array_push($feed, $post);
    endforeach;

    foreach ($feed as $post) {
        $post['comments'] = $post->getThreadedComments();
        $post['commentscount'] = $post->comments()->count();
    }

     usort($feed, function($p1, $p2){
        return $p1->id > $p2->id;
     });

        // $feed->each(function ($post) {
        //     $post['comments'] = $post->getThreadedComments();
        //     $post['commentscount'] = $post->comments()->count();

        // });
        // return response()->json([
        //     'data' => $posts,

        // ]);
        return response()->json([
            'data'=>$feed

        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request, Post $post)
    {
        $validator = Validator::make($request->all(), [
            'postText' => 'required',
            'postPrivacy' => 'required',

        ]);
        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 401);
        }
        $file = $request->file('files');

        $createdPost = auth()->user()->posts()->create([
            'content' => $request->postText,

            'post_type' => $request->postPrivacy,
        ]);

        foreach ($file as $key => $value) {
            $uploaded = $value->store('img');

            $createdPost->postFiles()->create([

                'file' => $uploaded,
            ]);

            $posts = $post->with('postFiles')->with('user')->find($createdPost->id);

        }
        return response()->json($posts);

    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $post = Post::findOrFail($id);
        $this->validate($request, [
            'content' => 'required',

        ]);
        $post->update($request->all());
        // $user->update($request->all());
        return response()->json(['data' => $post]);
        //  return ['message' => 'Updated the user info'];
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $user = Post::findOrFail($id);
        // delete the user
        $user->comments()->delete();
        $user->like()->delete();
        $user->postFiles()->delete();
        $user->delete();
        return ['message' => 'User Deleted'];
    }
}
