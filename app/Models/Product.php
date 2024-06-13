<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    use HasFactory;
    protected $fillable = ['name', 'slug', 'category_id', 'brand_id', 'rating', 'intro', 'discount', 'description', 'gender'];

    protected $with = ['productDatas', 'brand', 'category'];

    public function category()
    {
        return $this->belongsTo(Category::class);
    }

    public function brand()
    {
        return $this->belongsTo(Brand::class);
    }

    public function productDatas()
    {
        return $this->hasMany(ProductDatas::class);
    }
}
