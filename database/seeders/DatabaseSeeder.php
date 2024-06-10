<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;

use App\Models\Brand;
use App\Models\Product;
use App\Models\ProductDatas;
use App\Models\ProductImage;
use App\Models\Setting;
use Illuminate\Database\Seeder;
use OpenSpout\Reader\ODS\Helper\SettingsHelper;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // \App\Models\User::factory(10)->create();

        $this->call([
            CategoriesSeeder::class,
            GenderSeeder::class,
            BrandSeeder::class,
            PermissionSeeder::class,
            ProductSeeder::class,
            RoleSeeder::class,
            SettingSedder::class,
            SliderSeeder::class,
            SocialSeeder::class,
            TestimonialSeeder::class,
            UserSeeder::class
        ]);

        \App\Models\User::factory()->create([
            'username' => 'admin',
            'password' => bcrypt('password'),
            'email' => 'admin@gmail.com',
        ]);
        Product::factory(2)->create();
        ProductDatas::factory()->create([
            'product_id' => 1,
            'productCode' => 12345,
            'color' => 'red',
            'price' => 123,
            'instock' => 123,
            'discount' => '10',
            'size' => '123'
        ]);
        ProductDatas::factory()->create([
            'product_id' => 2,
            'productCode' => 12346,
            'color' => 'blue',
            'price' => 123,
            'instock' => 123,
            'discount' => '10',
            'size' => '123'
        ]);
        ProductImage::factory()->create([
            'product_datas_id' => 1,
            'alt_text' => 'product name',
            'path' => '/assets/images/1.jpg'
        ]);
    }
}
