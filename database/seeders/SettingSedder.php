<?php

namespace Database\Seeders;

use App\Models\Setting;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class SettingSedder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $data = [
            [
                'title' => 'D Shop',
                'intro' => 'Whatever you want!',
                'logo' => null,
                'email' => 'dshop@email.com',
                'phone' => '09780591018',
                'address' => 'City Mart Supermarket Dagon Seikkan, Yangon, Myanmar',
                'google_map' => '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3818.979250811855!2d96.26729027593215!3d16.82738541869455!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30c18d137560221d%3A0x22204635015bd16d!2sCity%20Mart%20Supermarket%20Dagon%20Seikkan!5e0!3m2!1sen!2smm!4v1718004568410!5m2!1sen!2smm" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
                'theme_color' => null
            ]
        ];

        Setting::insert($data);
    }
}
