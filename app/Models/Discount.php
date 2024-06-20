<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Discount extends Model
{
    use HasFactory;

    protected $fillable = ['name', 'amount', 'type', 'start_date', 'end_date', 'usage_limit', 'times_used'];

    public function coupons()
    {
        return $this->hasMany(Coupon::class);
    }
}
