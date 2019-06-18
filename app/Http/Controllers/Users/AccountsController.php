<?php

namespace App\Http\Controllers\Users;

use App\Http\Controllers\Controller;
use App\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AccountsController extends Controller
{
    public function setup(Request $request)
    {

        $this->validate($request, [
            'industry' => 'required',
            'job' => 'required',
            'company' => 'required',
            'plan' => 'required',
            'interest' => 'required',
            'image' => 'required',

        ]);

        $plan = $request->plan;
        // $fileName = null;
        // if (request()->hasFile('image')) {
        //     $file = request('image');
        //     $fileName = md5($file->getClientOriginalName() . time()) . "." . $file->getClientOriginalExtension();
        //     $file->move('images', $fileName);
        // }

        if ($plan === 'Standard') {
            $interst = $request->interest;
            $user = Auth::user()->id;
            if ($request->hasFile('image')) {
                $file = $request->file('image');
                $media = User::find($user);
                $media->addMedia($file)
     
                    ->toMediaCollection('images');
                   
                }
            User::where('id', auth()->id())

                ->update([
                    'industry' => $request->industry,
                    'job_role' => $request->job,
                    'employer' => $request->company,
                    'imageUrl' => $file,
                    'plan' => $request->plan,
                ]);

            foreach ($interst as $value) {
                $request->user()->interests()->create([
                    'interest' => $value,

                ]);

            }
            return redirect('/feed')->with([
                'flash_message' => 'you have successfully updated your account, Thank you',
            ]);
        }

        if ($plan === 'Premium') {
            $user = Auth::user()->id;
            if ($request->hasFile('image')) {
                $file = $request->file('image');
                $media = User::find($user);
                $media->addMedia($file)
     
                    ->toMediaCollection('images');
                   
                }
            $arrayinterest = $request->interest;
            $interest = implode(',', $arrayinterest);
            $industry =  $request->industry;
            $job = $request->job;
            $employer = $request->company;
            return view('paypal',compact('plan','interest','industry','employer','file','job'));
        }

        

    }
}
