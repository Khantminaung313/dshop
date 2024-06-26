<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Http\Request;

class ProductController extends Controller
{
    public function show($slug)
    {
        if($slug === null) abort(404);
        $product = Product::where('slug', $slug)->first();
        if($product) {
            return inertia('SingleProduct', [
                'product' => $product
            ]);   
        } else {
            abort(404);
        }
    }
}
