<?php

namespace App\Providers;

use App\Models\Category;
use App\Models\Gender;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Schema;
use Illuminate\Support\ServiceProvider;
use Inertia\Inertia;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        //
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        Schema::defaultStringLength(191);

        
        Inertia::share([
            'categories' => function () {
                return Category::all();
            },
            'genderList' => function () {
                return Gender::all();
            },
        ]);
    }
}
