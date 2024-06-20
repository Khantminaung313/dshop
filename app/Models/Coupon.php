<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Coupon extends Model
{
    use HasFactory;

    protected $fillable = ['discount_id', 'coupon_number', 'used'];

    public function discount()
    {
        return $this->belongsTo(Discount::class);
    }

}
