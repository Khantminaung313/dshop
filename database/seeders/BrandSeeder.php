<?php

namespace Database\Seeders;

use App\Models\Brand;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class BrandSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $data = [
            [
                'name' => 'Addidas',
                'slug' => 'addidas'
            ],
            [
                'name' => 'Nike',
                'slug' => 'nike'
            ],
            [
                'name' => 'Puma',
                'slug' => 'puma'
            ],
            [
                'name' => 'Auguest',
                'slug' => 'auguest'
            ],
            [
                'name' => 'Zara',
                'slug' => 'zara'
            ]
        ];

        Brand::insert($data);
    }
}
