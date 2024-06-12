<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Category extends Model
{
    use HasFactory;

    protected $fillable = ['name', 'parent_id', 'slug', 'thumbnail', 'intro', 'description'];

    protected $with = ['gender', 'subCategories'];

    public function products()
    {
        return $this->hasMany(Category::class);
    }

    public function subCategories()
    {
        return $this->hasMany(Category::class, 'parent_id');
    }

    public function parent()
    {
        return $this->belongsTo(Category::class, 'parent_id');
    }

    public function gender()
    {
        return $this->belongsTo(Gender::class);
    }
}
