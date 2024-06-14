<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Storage;

class Testimonial extends Model
{
    use HasFactory;

    protected $fillable = ['username', 'profile', 'message'];

    protected static function booted()
    {
        static::deleting(function ($testimonial) {
            if ($testimonial->profile) {
                Storage::disk('public')->delete($testimonial->profile);
            }
        });
    }
}
