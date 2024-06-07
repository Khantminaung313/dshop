<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class UserDatas extends Model
{
    use HasFactory;

    protected $fillable = ['phone', 'shipping_address', 'delivery_address', 'user_id'];

    protected function user()
    {
        return $this->belongsTo(User::class);
    }
}
