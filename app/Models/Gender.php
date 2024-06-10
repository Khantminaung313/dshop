<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Gender extends Model
{
    use HasFactory;

    protected $fillable = ['name'];

    // protected $with = ['categories'];

    public function categoriesByGender($genderId)
    {
        return Category::all('id','name')
                ->where([
                    ['gender_id', 1],
                    ['parent_id', 0]
                ])
                ->orWhere([
                    ['gender_id',  $genderId],
                    ['parent_id', 0]
                ])->get();
    }


    public function categories()
    {
        return $this->hasMany(Category::class);
    }
}
