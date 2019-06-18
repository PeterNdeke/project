<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class AccountsController extends Controller
{
    public function setup(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'industry' => 'required',
            'job' => 'required',
            'company' => 'required',
            'plan' => 'required',
            'interest' => 'required',
            'image' => 'required',

        ]);

        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 401);
        }

        $plan = $request->plan;
        $interst = $request->interest;
        $arrvar = explode(",", $interst);

        $fileName = null;
        if (request()->hasFile('image')) {
            $file = request('image');
            $fileName = md5($file->getClientOriginalName() . time()) . "." . $file->getClientOriginalExtension();
            $file->move('images', $fileName);
        }

        if ($plan === 'Standard') {

            User::where('id', auth()->id())

                ->update([
                    'industry' => $request->industry,
                    'job_role' => $request->job,
                    'employer' => $request->company,
                    'imageUrl' => $fileName,
                    'plan' => $request->plan,
                ]);

            foreach ($arrvar as $value) {
                $request->user()->interests()->create([
                    'interest' => $value,

                ]);

            }

            return response('submitted');

        }
    }
}
