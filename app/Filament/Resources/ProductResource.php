<?php

namespace App\Filament\Resources;

use App\Filament\Resources\ProductResource\Pages;
use App\Filament\Resources\ProductResource\RelationManagers;
use App\Models\Brand;
use App\Models\Category;
use App\Models\Product;
use Filament\Forms;
use Filament\Forms\Components\FileUpload;
use Filament\Forms\Components\Grid;
use Filament\Forms\Components\Hidden;
use Filament\Forms\Components\Radio;
use Filament\Forms\Components\Repeater;
use Filament\Forms\Components\Section;
use Filament\Forms\Components\Select;
use Filament\Forms\Components\Textarea;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Form;
use Filament\Forms\Get;
use Filament\Forms\Set;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Columns\TextInputColumn;
use Filament\Tables\Table;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\SoftDeletingScope;
use Illuminate\Support\Collection;
use Illuminate\Support\Str;

class ProductResource extends Resource
{
    protected static ?string $model = Product::class;

    protected static ?string $navigationIcon = 'heroicon-o-shopping-cart';

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                Section::make('Products Info')
                    ->description('Fill all product infomation')
                    ->columns([
                        'default' => 1,
                        'lg' => 2
                    ])
                    ->schema([
                        TextInput::make('name')
                            ->required()
                            ->live()
                            ->debounce(500)
                            ->afterStateUpdated(function (Get $get, Set $set, ?string $old, ?string $state) {
                                if (($get('slug') ?? '') !== Str::slug($old)) {
                                    return;
                                }

                                $set('slug', Str::slug($state));
                            }),
                        TextInput::make('slug')
                            ->required()
                            ->unique(ignoreRecord: true),
                        Select::make('category_type')
                            ->required()
                            ->label('Type')
                            ->relationship(name: 'category', titleAttribute: 'name')
                            ->options(
                                fn (Get $get): Collection => Category::query()
                                    ->where('parent_id', null)
                                    ->pluck('name', 'id')
                            )
                            ->searchable()
                            ->preload()
                            ->native(false),
                        Select::make('category_id')
                            ->required()
                            ->relationship(name: 'category', titleAttribute: 'name')
                            ->options(fn (Get $get): Collection => Category::query()
                                ->where('parent_id', $get('category_type'))
                                ->whereNot('parent_id', null)
                                ->pluck('name', 'id'))
                            ->searchable()
                            ->preload()
                            ->native(false)
                            ->createOptionForm([
                                TextInput::make('name')
                                    ->required()
                                    ->live()
                                    ->debounce(500)
                                    ->afterStateUpdated(function (Get $get, Set $set, ?string $old, ?string $state) {
                                        if (($get('slug') ?? '') !== Str::slug($old)) {
                                            return;
                                        }

                                        $set('slug', Str::slug($state));
                                    }),
                                TextInput::make('slug')
                                    ->required()
                                    ->unique(ignoreRecord: true),
                                Select::make('parent_id')
                                    ->relationship(name: 'parent', titleAttribute: 'name')
                                    ->options(
                                        fn (Get $get): Collection => Category::query()
                                            ->where('parent_id', null)
                                            ->pluck('name', 'id')
                                    )
                                    ->preload()
                                    ->native(),
                                Select::make('gender_id')
                                    ->relationship(name: 'gender', titleAttribute: 'name')
                                    ->preload()
                                    ->native(false)
                            ]),
                        Select::make('brand_id')
                            ->required()
                            ->relationship(name: 'brand', titleAttribute: 'name')
                            ->preload()
                            ->native(false)
                            ->createOptionForm([
                                TextInput::make('name')
                                    ->required()
                                    ->live()
                                    ->debounce(500)
                                    ->afterStateUpdated(function (Get $get, Set $set, ?string $old, ?string $state) {
                                        if (($get('slug') ?? '') !== Str::slug($old)) {
                                            return;
                                        }
                                        $set('slug', Str::slug($state));
                                    }),
                                TextInput::make('slug')
                                    ->required()
                                    ->unique()
                            ]),

                        TextInput::make('rating')
                            ->required()
                            ->numeric(),
                        Textarea::make('about')
                            ->nullable(),
                        Textarea::make('description')
                            ->nullable(),
                        Textarea::make('care_instruction')
                            ->nullable(),
                        
                    ]),

                // Product Detail
                Section::make('Product Details')
                    ->description('Fill all product data')
                    ->collapsible()
                    ->schema([
                        Repeater::make('Product Data')
                            ->required()
                            ->relationship('productDatas')
                            ->columns([
                                'default' => 1,
                                'lg' => 2
                            ])
                            ->schema([
                                TextInput::make('product_code')
                                    ->required()
                                    ->unique(ignoreRecord: true),
                                Hidden::make('product_id')
                                    ->default(fn ($get) => $get('id')),
                                TextInput::make('price')
                                    ->required()
                                    ->numeric(),
                                TextInput::make('intro')
                                    ->required(),
                                TextInput::make('description')
                                    ->required(),
                                Radio::make('status')
                                    ->options([
                                        'draft' => 'Draft',
                                        'published' => 'Published',
                                    ])
                                    ->default('draft')
                                    ->inline()
                                    ->inlineLabel(false),

                                // Product Images
                                Section::make('Product Images')
                                    ->description('Add images for product')
                                    ->collapsible()
                                    ->schema([
                                        Repeater::make('Product Images')
                                            ->relationship('productImages')
                                            ->nullable()
                                            ->schema([
                                                Grid::make([
                                                    'default' => 1,
                                                    'lg' => 2
                                                ])
                                                    ->schema([
                                                        FileUpload::make('path')
                                                            ->disk('public')
                                                            ->directory('productImages')
                                                            ->imagePreviewHeight('150')
                                                            ->image(),
                                                        TextInput::make('alt_text')
                                                            ->required(),
                                                        Hidden::make('product_datas_id')
                                                            ->default(fn ($get) => $get('id'))
                                                    ])
                                            ])
                                    ])
                            ])


                    ])
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                TextColumn::make('name')
                    ->searchable()
                    ->sortable(),
                TextColumn::make('brand.name')
                    ->label('Brand')
                    ->searchable()
                    ->sortable(),
                TextColumn::make('slug')
                    ->searchable()
                    ->visibleOn(['view', 'edit', 'create']),
                TextColumn::make('category.name'),
                TextColumn::make('product_datas_count')
                    ->label('Total Items')
                    ->alignCenter()
                    ->counts('productDatas'),
                TextColumn::make('rating')
                    ->alignCenter(),
                TextColumn::make('created_at')
                    ->date('d/m/y h:m:s'),
                TextColumn::make('description')
                    ->visibleOn('view')
            ])
            ->filters([
                //
            ])
            ->actions([
                Tables\Actions\ViewAction::make(),
                Tables\Actions\EditAction::make(),
                Tables\Actions\DeleteAction::make(),
            ])
            ->bulkActions([
                Tables\Actions\BulkActionGroup::make([
                    Tables\Actions\DeleteBulkAction::make(),
                ]),
            ]);
    }

    public static function getRelations(): array
    {
        return [
            //
        ];
    }

    public static function getPages(): array
    {
        return [
            'index' => Pages\ListProducts::route('/'),
            'create' => Pages\CreateProduct::route('/create'),
            'view' => Pages\ViewProduct::route('/{record}'),
            'edit' => Pages\EditProduct::route('/{record}/edit'),
        ];
    }
}
