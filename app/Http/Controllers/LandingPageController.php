<?php

namespace App\Http\Controllers;

use App\Models\Category;
use App\Models\Gender;
use App\Models\User;
use Illuminate\Http\Request;

class LandingPageController extends Controller
{
    public function index()
    {
        return inertia('Home', [
            'genderList' => Gender::all('id', 'name'),
            'categories' => Category::with('subCategories')->get(),
        ]);
    }
}
