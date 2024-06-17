<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Color extends Model
{
    use HasFactory;

    protected $fillable = ['product_datas_id', 'name', 'code'];

    public function productData()
    {
        return $this->belongsTo(ProductDatas::class, 'product_datas_id');
    }

    public function productImages()
    {
        return $this->hasMany(ProductImage::class);
    }

    public function productVariation()
    {
        return $this->hasMany(ProductVariation::class);
    }
}
