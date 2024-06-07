<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Setting extends Model
{
    use HasFactory;

    protected $fillable = ['title', 'email', 'phone', 'address', 'logo', 'intro', 'google_map', 'theme_color'];
}
