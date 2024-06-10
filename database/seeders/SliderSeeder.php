<?php

namespace Database\Seeders;

use App\Models\Sliders;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class SliderSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $data = [
            [
                'title' => 'D Shop',
                'title_color' => '#09b4f7',
                'sub_title' => 'Whatever you want',
                'sub_title_color' => '#09b4f5',
                'intro' => 'this is intro',
                'description' => 'this is desc',
                'image' => null,
                'link' => '/'
            ]
        ];

        Sliders::insert($data);
    }
}
