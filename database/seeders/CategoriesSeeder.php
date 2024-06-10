<?php

namespace Database\Seeders;

use App\Models\Category;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class CategoriesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $datas = [
            [
                'name' => 'Cloths',
                'slug' => 'cloths',
                'thumbnail' => null,
                'intro' => 'Testing intro',
                'description' => 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor alias explicabo reiciendis ad fugit quaerat voluptatem magnam hic sit saepe numquam reprehenderit sequi excepturi impedit quia, aut optio voluptatum minima distinctio vel repellendus. Quibusdam perspiciatis similique repellat voluptatibus asperiores ratione.',
                'gender_id' => null,
                'parent_id' => null
            ],
            [
                'name' => 'Shoe',
                'slug' => 'shoe',
                'thumbnail' => null,
                'intro' => 'Testing intro',
                'description' => 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor alias explicabo reiciendis ad fugit quaerat voluptatem magnam hic sit saepe numquam reprehenderit sequi excepturi impedit quia, aut optio voluptatum minima distinctio vel repellendus. Quibusdam perspiciatis similique repellat voluptatibus asperiores ratione.',
                'gender_id' => null,
                'parent_id' => null
            ],
            [
                'name' => 'Accessories',
                'slug' => 'accessories',
                'thumbnail' => null,
                'intro' => 'Testing intro',
                'description' => 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor alias explicabo reiciendis ad fugit quaerat voluptatem magnam hic sit saepe numquam reprehenderit sequi excepturi impedit quia, aut optio voluptatum minima distinctio vel repellendus. Quibusdam perspiciatis similique repellat voluptatibus asperiores ratione.',
                'gender_id' => null,
                'parent_id' => null
            ],
            [
                'name' => 'Cosmetic',
                'slug' => 'cosmetic',
                'thumbnail' => null,
                'intro' => 'Testing intro',
                'description' => 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor alias explicabo reiciendis ad fugit quaerat voluptatem magnam hic sit saepe numquam reprehenderit sequi excepturi impedit quia, aut optio voluptatum minima distinctio vel repellendus. Quibusdam perspiciatis similique repellat voluptatibus asperiores ratione.',
                'gender_id' => null,
                'parent_id' => null
            ],
            [
                'name' => 'Shirt',
                'slug' => 'shirt',
                'thumbnail' => null,
                'intro' => 'Testing intro',
                'description' => 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor alias explicabo reiciendis ad fugit quaerat voluptatem magnam hic sit saepe numquam reprehenderit sequi excepturi impedit quia, aut optio voluptatum minima distinctio vel repellendus. Quibusdam perspiciatis similique repellat voluptatibus asperiores ratione.',
                'gender_id' => 1,
                'parent_id' => 1
            ],
            [
                'name' => 'Hat',
                'slug' => 'hat',
                'thumbnail' => null,
                'intro' => 'Testing intro',
                'description' => 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor alias explicabo reiciendis ad fugit quaerat voluptatem magnam hic sit saepe numquam reprehenderit sequi excepturi impedit quia, aut optio voluptatum minima distinctio vel repellendus. Quibusdam perspiciatis similique repellat voluptatibus asperiores ratione.',
                'gender_id' => 1,
                'parent_id' => 3
            ],
            [
                'name' => 'Pant',
                'slug' => 'pant',
                'thumbnail' => null,
                'intro' => 'Testing intro',
                'description' => 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor alias explicabo reiciendis ad fugit quaerat voluptatem magnam hic sit saepe numquam reprehenderit sequi excepturi impedit quia, aut optio voluptatum minima distinctio vel repellendus. Quibusdam perspiciatis similique repellat voluptatibus asperiores ratione.',
                'gender_id' => 1,
                'parent_id' => 1
            ],
            [
                'name' => "Women's Bra",
                'slug' => "women's bra",
                'thumbnail' => null,
                'intro' => 'Testing intro',
                'description' => 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor alias explicabo reiciendis ad fugit quaerat voluptatem magnam hic sit saepe numquam reprehenderit sequi excepturi impedit quia, aut optio voluptatum minima distinctio vel repellendus. Quibusdam perspiciatis similique repellat voluptatibus asperiores ratione.',
                'gender_id' => 3,
                'parent_id' => 1
            ],
        ];

        Category::insert($datas);
    }
}
