<?php

namespace Database\Seeders;

use App\Models\Permission;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class PermissionSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $data = [
            [
                'name' => 'user-create',
                'slug' => 'user-create',
            ],
            [
                'name' => 'user-read',
                'slug' => 'user-read',
            ],
            [
                'name' => 'user-update',
                'slug' => 'user-update',
            ],
            [
                'name' => 'user-delete',
                'slug' => 'user-delete',
            ],
            [
                'name' => 'role-create',
                'slug' => 'role-create',
            ],
            [
                'name' => 'role-read',
                'slug' => 'role-read',
            ],
            [
                'name' => 'role-update',
                'slug' => 'role-update',
            ],
            [
                'name' => 'role-delete',
                'slug' => 'role-delete',
            ],
            [
                'name' => 'permission-create',
                'slug' => 'permission-create',
            ],
            [
                'name' => 'permission-read',
                'slug' => 'permission-read',
            ],
            [
                'name' => 'permission-update',
                'slug' => 'permission-update',
            ],
            [
                'name' => 'permission-delete',
                'slug' => 'permission-delete',
            ],
            [
                'name' => 'category-create',
                'slug' => 'category-create',
            ],
            [
                'name' => 'category-read',
                'slug' => 'category-read',
            ],
            [
                'name' => 'category-update',
                'slug' => 'category-update',
            ],
            [
                'name' => 'category-delete',
                'slug' => 'category-delete',
            ],
            [
                'name' => 'brand-create',
                'slug' => 'brand-create',
            ],
            [
                'name' => 'brand-read',
                'slug' => 'brand-read',
            ],
            [
                'name' => 'brand-update',
                'slug' => 'brand-update',
            ],
            [
                'name' => 'brand-delete',
                'slug' => 'brand-delete',
            ],
            [
                'name' => 'gender-create',
                'slug' => 'gender-create',
            ],
            [
                'name' => 'gender-read',
                'slug' => 'gender-read',
            ],
            [
                'name' => 'gender-update',
                'slug' => 'gender-update',
            ],
            [
                'name' => 'gender-delete',
                'slug' => 'gender-delete',
            ],
            [
                'name' => 'product-create',
                'slug' => 'product-create',
            ],
            [
                'name' => 'product-read',
                'slug' => 'product-read',
            ],
            [
                'name' => 'product-update',
                'slug' => 'product-update',
            ],
            [
                'name' => 'product-delete',
                'slug' => 'product-delete',
            ],
            [
                'name' => 'order-create',
                'slug' => 'order-create',
            ],
            [
                'name' => 'order-read',
                'slug' => 'order-read',
            ],
            [
                'name' => 'order-update',
                'slug' => 'order-update',
            ],
            [
                'name' => 'order-delete',
                'slug' => 'order-delete',
            ],
            [
                'name' => 'setting-create',
                'slug' => 'setting-create',
            ],
            [
                'name' => 'setting-read',
                'slug' => 'setting-read',
            ],
            [
                'name' => 'setting-update',
                'slug' => 'setting-update',
            ],
            [
                'name' => 'setting-delete',
                'slug' => 'setting-delete',
            ],
            [
                'name' => 'promotion-create',
                'slug' => 'promotion-create',
            ],
            [
                'name' => 'promotion-read',
                'slug' => 'promotion-read',
            ],
            [
                'name' => 'promotion-update',
                'slug' => 'promotion-update',
            ],
            [
                'name' => 'promotion-delete',
                'slug' => 'promotion-delete',
            ],
            [
                'name' => 'testimonial-create',
                'slug' => 'testimonial-create',
            ],
            [
                'name' => 'testimonial-read',
                'slug' => 'testimonial-read',
            ],
            [
                'name' => 'testimonial-update',
                'slug' => 'testimonial-update',
            ],
            [
                'name' => 'testimonial-delete',
                'slug' => 'testimonial-delete',
            ],
            [
                'name' => 'slider-create',
                'slug' => 'slider-create',
            ],
            [
                'name' => 'slider-read',
                'slug' => 'slider-read',
            ],
            [
                'name' => 'slider-update',
                'slug' => 'slider-update',
            ],
            [
                'name' => 'slider-delete',
                'slug' => 'slider-delete',
            ],

        ];

        Permission::insert($data);
    }
}
