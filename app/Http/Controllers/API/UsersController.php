<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;

class UsersController extends Controller
{

    public $successStatus = 200;
    //

    public function register(Request $request)
    {

        $validator = Validator::make($request->all(), [
            'username' => 'required|unique:users',
            'email' => 'required|email|unique:users',
            'password' => 'required',
            'name' => 'required',
        ]);
        if ($validator->fails()) {
            return response()->json(['error' => $validator->errors()], 401);
        }
        $input = $request->all();
        $input['password'] = bcrypt($input['password']);
        $input['isAdmin'] = 0;

        $user = User::create($input);
        if ($user) {
            $success['token'] = $user->createToken('vybbz')->accessToken;
            $success['name'] = $user->name;
            $success['message'] = 'Registration Successful';
            return response()->json(['success' => $success], $this->successStatus);
        } else {
            $error['error'] = 'Registration Unsuccessfull';
            return response()->json(['error_message' => $error]);
        }

    }
    public function login(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'email' => 'required',
            'password' => 'required',

        ]);
        if ($validator->fails()) {
            return response()->json(['error' => $validator->errors()], 401);
        }
        if (Auth::attempt(['email' => request('email'), 'password' => request('password')])) {
            $user = Auth::user();

            $success['token'] = $user->createToken('vybbz')->accessToken;
            $success['message'] = 'Login Successful';
            return response()->json(['success' => $success], $this->successStatus);
        } else {
            return response()->json(['error' => 'Invalid credentials'], 401);
        }
    }

    public function details()
    {
        $user = Auth::user();
        return response()->json(['success' => $user], $this->successStatus);
    }
}
