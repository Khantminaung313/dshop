<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ProductDatas extends Model
{
    use HasFactory;

    protected $fillable = ['product_id', 'coupon_id', 'promotion_id', 'productCode', 'price', 'intro', 'description', 'status'];
    // protected $with = ['productImages'];

    protected function product()
    {
        return $this->belongsTo(Product::class, 'product_id');
    }

    public function coupon()
    {
        return $this->belongsTo(Coupon::class, 'coupon_id');
    }

    public function promotion()
    {
        return $this->belongsTo(Promotion::class, 'promotion_id');
    }

    public function productImages()
    {
        return $this->hasMany(ProductImage::class);
    }

    public function orders()
    {
        return $this->hasMany(Order::class);
    }

    public function colors()
    {
        return $this->hasMany(Color::class);
    }
}