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
                'name' => 'Unisex',
                'slug' => 'unisex',
                'thumbnail' => null,
                'intro' => 'Testing intro',
                'description' => 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor alias explicabo reiciendis ad fugit quaerat voluptatem magnam hic sit saepe numquam reprehenderit sequi excepturi impedit quia, aut optio voluptatum minima distinctio vel repellendus. Quibusdam perspiciatis similique repellat voluptatibus asperiores ratione.',
                'parent_id' => null
            ],
            [
                'name' => 'Men',
                'slug' => 'men',
                'thumbnail' => null,
                'intro' => 'Testing intro',
                'description' => 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor alias explicabo reiciendis ad fugit quaerat voluptatem magnam hic sit saepe numquam reprehenderit sequi excepturi impedit quia, aut optio voluptatum minima distinctio vel repellendus. Quibusdam perspiciatis similique repellat voluptatibus asperiores ratione.',
                'parent_id' => null
            ],
            [
                'name' => 'Women',
                'slug' => 'cloths',
                'thumbnail' => null,
                'intro' => 'Testing intro',
                'description' => 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor alias explicabo reiciendis ad fugit quaerat voluptatem magnam hic sit saepe numquam reprehenderit sequi excepturi impedit quia, aut optio voluptatum minima distinctio vel repellendus. Quibusdam perspiciatis similique repellat voluptatibus asperiores ratione.',
                'parent_id' => null
            ],
            [
                'name' => 'Kid',
                'slug' => 'kid',
                'thumbnail' => null,
                'intro' => 'Testing intro',
                'description' => 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor alias explicabo reiciendis ad fugit quaerat voluptatem magnam hic sit saepe numquam reprehenderit sequi excepturi impedit quia, aut optio voluptatum minima distinctio vel repellendus. Quibusdam perspiciatis similique repellat voluptatibus asperiores ratione.',
                'parent_id' => null
            ],
            [
                'name' => 'Cloths',
                'slug' => 'cloths',
                'thumbnail' => null,
                'intro' => 'Testing intro',
                'description' => 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor alias explicabo reiciendis ad fugit quaerat voluptatem magnam hic sit saepe numquam reprehenderit sequi excepturi impedit quia, aut optio voluptatum minima distinctio vel repellendus. Quibusdam perspiciatis similique repellat voluptatibus asperiores ratione.',
                'parent_id' => 3
            ],
            [
                'name' => 'Shoe',
                'slug' => 'shoe',
                'thumbnail' => null,
                'intro' => 'Testing intro',
                'description' => 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor alias explicabo reiciendis ad fugit quaerat voluptatem magnam hic sit saepe numquam reprehenderit sequi excepturi impedit quia, aut optio voluptatum minima distinctio vel repellendus. Quibusdam perspiciatis similique repellat voluptatibus asperiores ratione.',
                'parent_id' => 2
            ],
            [
                'name' => 'Shirt',
                'slug' => 'shirt',
                'thumbnail' => null,
                'intro' => 'Testing intro',
                'description' => 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor alias explicabo reiciendis ad fugit quaerat voluptatem magnam hic sit saepe numquam reprehenderit sequi excepturi impedit quia, aut optio voluptatum minima distinctio vel repellendus. Quibusdam perspiciatis similique repellat voluptatibus asperiores ratione.',
                'parent_id' => 1
            ],
            [
                'name' => 'Hat',
                'slug' => 'hat',
                'thumbnail' => null,
                'intro' => 'Testing intro',
                'description' => 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor alias explicabo reiciendis ad fugit quaerat voluptatem magnam hic sit saepe numquam reprehenderit sequi excepturi impedit quia, aut optio voluptatum minima distinctio vel repellendus. Quibusdam perspiciatis similique repellat voluptatibus asperiores ratione.',
                'parent_id' => 2
            ],
            [
                'name' => 'Pant',
                'slug' => 'pant',
                'thumbnail' => null,
                'intro' => 'Testing intro',
                'description' => 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor alias explicabo reiciendis ad fugit quaerat voluptatem magnam hic sit saepe numquam reprehenderit sequi excepturi impedit quia, aut optio voluptatum minima distinctio vel repellendus. Quibusdam perspiciatis similique repellat voluptatibus asperiores ratione.',
                'parent_id' => 3
            ],
            [
                'name' => 'Nike',
                'slug' => 'nike',
                'thumbnail' => null,
                'intro' => 'Testing intro',
                'description' => 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor alias explicabo reiciendis ad fugit quaerat voluptatem magnam hic sit saepe numquam reprehenderit sequi excepturi impedit quia, aut optio voluptatum minima distinctio vel repellendus. Quibusdam perspiciatis similique repellat voluptatibus asperiores ratione.',
                'parent_id' => 6
            ]
        ];

        Category::insert($datas);
    }
}
