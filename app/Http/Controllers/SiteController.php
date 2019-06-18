<?php

namespace App\Http\Controllers;

class SiteController extends Controller
{
    //
    public function index()
    {
        return view('Site.index');
    }

    public function about()
    {
        return view('Site.about');
    }

    public function contact()
    {
        return view('Site.contact');
    }

    public function blog()
    {
        return view('Site.blog');
    }

    public function faq()
    {
        return view('Site.faq');
    }
    public function terms()
    {
        return view('Site.terms');
    }
}
