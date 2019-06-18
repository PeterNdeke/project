<?php

namespace App\Http\Controllers\TimeLime;

use App\Http\Controllers\Controller;
use App\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use phpDocumentor\Reflection\Types\Array_;
use App\Experience;
use App\Education;
use App\Skill;

class TimeLimeController extends Controller
{
    public function index(User $user)
    {
        // dd($user);
        $pending = DB::table('follows')->where('user_id', auth()->id())
            ->where('follower_id', $user->id)->where('status', 0)->count();

        //   $profile = User::where('username', $user)->with('interests')->first();

        return view('users.profile', compact('user', 'pending'));

    }
    public function follow1(Request $request)
    {
        $follow = $request->user()->following()->attach($request->id);

        return response()->json([
            'data' => 'successfull',
        ]);

    }
    public function getRequest($id)
    {
        $data = DB::table('follows')->where('user_id', auth()->id())->where('follower_id', $id)->count();
        return (bool) response()->json(['data' => $data]);
    }
    public function follow(Request $request, User $user)
    {

        if ($request->user()->canFollow($user)) {
            $request->user()->following()->attach($user->id);
        }

        return redirect()->back();

    }
    public function unfollow(Request $request, User $user)
    {

        if ($request->user()->canUnFollow($user)) {
            $request->user()->following()->detach($user->id);
        }

        return redirect()->back();

    }

    public function createOverview(Request $request)
    {
        $this->validate($request,[
            'overview'=> 'required'
        ]);
        $overview = $request->user()->overview()->create([
            'overview' => $request->overview,
        ]);

        return response()->json($overview);
    }

    public function createEducation(Request $request)
    {
        $this->validate($request, [
            'degree'=>'required',
            'school'=> 'required',
            'date_from'=> 'required',
            'date_to'=> 'required',
            
        ]);
        $education = $request->user()->education()->create([
            'degree' => $request->degree,
            'description' => $request->description,
            'school' => $request->school,
            'date_from' => $request->date_from,
            'date_to' => $request->date_to,
        ]);

        return response()->json($education);

    }

    public function createExperience(Request $request)
    {
        $this->validate($request, [
            'job_role' => 'required',
            'company' => 'required',
            'subject' => 'required',
            'experience' => 'required',
            'date_from' => 'required',
            'location' => 'required',
        ]);
        $experience = $request->user()->experiences()->create([
            'job_role' => $request->job_role,
            'company' => $request->company,
            'subject' => $request->subject,
            'experience' => $request->experience,
            'date_from' => $request->date_from,
            'date_to' => $request->date_to,
            'location' => $request->location,

        ]);

        return response()->json($experience);
    }
    public function createLocation(Request $request)
    {
        $this->validate($request,[
            'city' => 'required',
            'country'=>'required'
        ]);
        $location = $request->user()->location()->create([
            'city' => $request->city,
            'country' => $request->country,

        ]);

        return response()->json($location);
    }

    public function createSkills(Request $request)
    {
        $this->validate($request, [
            'skill'=>'required'
        ]);
        
            $skills = $request->user()->skills()->create([
                'skill' => $request->skill,
            ]);
        

        return response()->json($skills);
    }

    public function getOverview()
    {
        $overview = Auth::user()->overview;

        return $overview;
    }

    public function getExperience()
    {
        $overview = Auth::user()->experiences()->get();

        return $overview;
    }

    public function getEducation()
    {
        $education = Auth::user()->education()->get();
        return $education;
    }

    public function getLocation()
    {
        $location = Auth::user()->location;
        return $location;
    }

    public function getSkills()
    {
        $skills = Auth::user()->skills()->get();
        return $skills;
    }
    public function removeSkill($id){
        $skil = Skill::findOrFail($id);
        // delete the user
        $skil->delete();
        return ['message' => 'skill Deleted'];
    }

    public function getActivity()
    {  
        $feed = array();
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

        return response()->json([
            'data'=>$feed

        ]);
    }

    public function updateExperience(Request $request,$id)
    {
        $experience = Experience::findOrFail($id);
        $this->validate($request, [
            'job_role' => 'required',
            'company' => 'required',
            'subject' => 'required',
            'experience' => 'required',
            'date_from' => 'required',
            'location' => 'required',

        ]);
        $experience->update($request->all());
        // $user->update($request->all());
        return response()->json(['data' => $experience]);
        
    }
    public function updateEducation(Request $request,$id)
    {
        $education = Education::findOrFail($id);
        $this->validate($request, [
            'degree'=>'required',
            'school'=> 'required',
            'date_from'=> 'required',
            'date_to'=> 'required',

        ]);
        $education->update($request->all());
        // $user->update($request->all());
        return response()->json(['data' => $education]);
        
    }

    

}
