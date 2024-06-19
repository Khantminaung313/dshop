<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;

use App\Models\Brand;
use App\Models\Color;
use App\Models\Coupon;
use App\Models\Discount;
use App\Models\Product;
use App\Models\ProductDatas;
use App\Models\ProductImage;
use App\Models\ProductVariation;
use App\Models\Promotion;
use App\Models\Setting;
use App\Models\Size;
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
            'color_id' => 1,
            'product_code' => 12345,
            'price' => 123,
            'intro' => 'this is intro',
            'description' => 'this is desc',
            'status' =>'published'
        ]);
        ProductDatas::factory()->create([
            'product_id' => 2,
            'color_id' => 2,
            'product_code' => 12346,
            'price' => 123,
            'intro' => 'this is intro',
            'description' => 'this is desc',
            'status' => 'published'
        ]);
        Color::create([
            'name' => 'red',
            'code' => '#ff0000'
        ]);
        Color::create([
            'name' => 'blue',
            'code' => '#005dff'
        ]);
        ProductImage::factory()->create([
            'product_datas_id' => 1,
            'alt_text' => 'product name',
            'path' => '/assets/images/1.jpg'
        ]);

        Size::create(['name' => 'S']);
        Size::create(['name' => 'M']);
        Size::create(['name' => 'L']);

        Discount::create(['amount' => '10']);
        Discount::create(['amount' => '20']);

        Coupon::create(['discount_id' => 1, 'coupon_number' => 'ABC123456']);
        Coupon::create(['discount_id' => 2, 'coupon_number' => 'ABC123455']);

        Promotion::create(['discount_id' => 1, 'image' => null]);
        Promotion::create(['discount_id' => 1, 'image' => null]);

        ProductVariation::create([
            'product_datas_id' => 1,
            'size_id' => 1,
            'instock' => 50,
            'available' => 45
        ]);
        ProductVariation::create([
            'product_datas_id' => 2,
            'size_id' => 2,
            'instock' => 50,
            'available' => 45
        ]);
    }
}
