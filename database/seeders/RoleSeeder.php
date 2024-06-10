<?php

namespace Database\Seeders;

use App\Models\Role;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class RoleSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $data = [
            ['type' => 'Admin', 'slug' => 'admin'],
            ['type' => 'Manager', 'slug' => 'manager'],
            ['type' => 'Content Writer', 'slug' => 'content-writer'],
            ['type' => 'Data Entry', 'slug' => 'data-entry'],
            ['type' => 'Accountant', 'slug' => 'accountant'],
            ['type' => 'User', 'slug' => 'user'],
        ];

        Role::insert($data);
    }
}
