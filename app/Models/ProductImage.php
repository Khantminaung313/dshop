<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ProductImage extends Model
{
    use HasFactory;

    protected $fillable = ['path', 'alt_text', 'product_datas_id'];

    protected function productDatas()
    {
        return $this->belongsTo(productDatas::class);
    }
}
