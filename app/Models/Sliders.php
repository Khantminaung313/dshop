<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Sliders extends Model
{
    use HasFactory;

    protected $fillable = ['title', 'title_color', 'sub_title', 'sub_title_color', 'intro', 'description', 'image', 'link'];
}
