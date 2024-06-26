<?php

namespace App\Http\Controllers;

use App\Models\Category;
use App\Models\Gender;
use App\Models\Product;
use App\Models\Promotion;
use App\Models\Sliders;
use App\Models\Testimonial;
use Illuminate\Http\Request;

class PageController extends Controller
{
    public function home()
    {
        return inertia('Home', [
            'sliders' => Sliders::all(),
            'products' => Product::all(),
            'testimonials' => Testimonial::all(),
        ]);
    }

    public function about()
    {
        return inertia('About');
    }
    public function contact()
    {
        return inertia('Contact');
    }
}
