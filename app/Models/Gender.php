<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Gender extends Model
{
    use HasFactory;

    protected $fillable = ['name', 'slug', 'thumbnail', 'intro', 'description'];

    public function categories()
    {
        return $this->hasMany(Category::class);
    }
}
