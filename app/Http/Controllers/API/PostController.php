<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Post;
use App\Traits\ApiJsonResponse;
use Illuminate\Http\Request;

class PostController extends Controller
{
    use ApiJsonResponse;
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $posts = Post::with('user')->orderBy('created_at', 'ASC')->get();
        // $allPost = $post::find(auth()->id())
        //  ->with('user');

        //$posts = $allPost->orderBy('created_at', 'ASC')->get();

        $posts->each(function ($post) {
            $post['comments'] = $post->getThreadedComments();
            $post['commentscount'] = $post->comments()->count();

        });
        // $posts = Post::all();
        // $posts->each(function($post) {
        //     $post['comments'] = $post->getThreadedComments();
        // });

        return response()->json([
            'data' => $posts,

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
        $id = auth()->id();

        $this->validate($request, [
            'title' => 'required',
            'category' => 'required',
            'skills' => 'required',
            'price_from' => 'required',
            'price_to' => 'required',
            'description' => 'required',
        ]);

        $createdPost = $request->user()->posts()->create([

            'user_id' => auth()->id(),
            'title' => $request['title'],
            'category' => $request['category'],
            'skills' => $request['skills'],
            'price_from' => $request['price_from'],
            'price_to' => $request['price_to'],
            'description' => $request['description'],
            'post_type' => 'Project Post',
        ]);
        return response()->json($post->with('user')->find($createdPost->id));

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
        return response()->json($post->with('user')->find($post->id));
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
        $user->delete();
        return ['message' => 'User Deleted'];
    }
}
