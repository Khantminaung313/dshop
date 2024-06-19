<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ProductVariation extends Model
{
    use HasFactory;

    protected $fillable = ['color_id', 'size_id', 'instock', 'available'];

    public function productDatas()
    {
        return $this->belongsTo(ProductDatas::class);
    }

    public function sizes()
    {
        return $this->belongsTo(Size::class);
    }
}
