<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ProductDatas extends Model
{
    use HasFactory;

    protected $fillable = ['product_id', 'productCode', 'color', 'price', 'instock', 'size', 'available'];
    protected $with = ['productImages'];

    protected function product()
    {
        return $this->belongsTo(Product::class);
    }

    public function productImages()
    {
        return $this->hasMany(ProductImage::class);
    }

    public function orders()
    {
        return $this->hasMany(Order::class);
    }
}