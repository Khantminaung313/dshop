<?php

namespace App\Filament\Resources;

use App\Filament\Resources\ProductResource\Pages;
use App\Filament\Resources\ProductResource\RelationManagers;
use App\Models\Brand;
use App\Models\Category;
use App\Models\Product;
use Closure;
use Filament\Forms;
use Filament\Forms\Components\Card;
use Filament\Forms\Components\ColorPicker;
use Filament\Forms\Components\DatePicker;
use Filament\Forms\Components\FileUpload;
use Filament\Forms\Components\Grid;
use Filament\Forms\Components\Hidden;
use Filament\Forms\Components\MarkdownEditor;
use Filament\Forms\Components\Radio;
use Filament\Forms\Components\Repeater;
use Filament\Forms\Components\Section;
use Filament\Forms\Components\Select;
use Filament\Forms\Components\Tabs;
use Filament\Forms\Components\Tabs\Tab;
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
                Tabs::make('Tabs')
                    ->tabs([
                        Tab::make('Product Info')
                            ->icon('heroicon-o-shopping-bag')
                            ->iconPosition('after')
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
                                    ->numeric()
                                    ->maxValue(5),
                                TextInput::make('discount')
                                    ->nullable()
                                    ->numeric(),
                                Textarea::make('about')
                                    ->nullable(),
                                MarkdownEditor::make('description')
                                    ->fileAttachmentsDisk('s3')
                                    ->fileAttachmentsDirectory('attachments')
                                    ->fileAttachmentsVisibility('private')
                                    ->nullable()
                                    ->columnSpan(2),
                                MarkdownEditor::make('care_instruction')
                                    ->fileAttachmentsDisk('s3')
                                    ->fileAttachmentsDirectory('attachments')
                                    ->fileAttachmentsVisibility('private')
                                    ->nullable()
                                    ->columnSpan(2),
                            ]),
                        Tab::make('Product Detail')
                                ->icon('heroicon-o-folder')
                                ->iconPosition('after')
                                ->schema([
                                    Repeater::make('Product Data')
                                        ->required()
                                        ->relationship('productDatas')
                                        ->label('Product Detail')
                                        ->addActionLabel('Add Item')
                                        ->reorderableWithDragAndDrop()
                                        ->schema([
                                            TextInput::make('product_code')
                                                ->required()
                                                ->unique(ignoreRecord: true),
                                            Select::make("color_id")
                                                ->relationship(name: 'color', titleAttribute: 'name')
                                                ->required()
                                                ->native(false)
                                                ->createOptionForm([
                                                    TextInput::make('name')->required(),
                                                    ColorPicker::make('code')->required()
                                                ]),
                                            Hidden::make('product_id')
                                                ->default(fn ($get) => $get('id')),
                                            TextInput::make('intro')
                                                ->required(),
                                                TextInput::make('price')
                                                ->required()
                                                ->numeric(),
                                            MarkdownEditor::make('description')
                                                ->required()
                                                ->fileAttachmentsDisk('s3')
                                                ->fileAttachmentsDirectory('attachments')
                                                ->fileAttachmentsVisibility('private')
                                                ->columnSpan(2),
            
                                            // Product Images
                                            Tabs::make('Tabs')
                                                ->tabs([
                                                    Tab::make('Product Images')
                                                    ->icon('heroicon-o-photo')
                                                    ->iconPosition('after')
                                                    ->schema([
                                                        Repeater::make('Product Images')
                                                            ->relationship('productImages')
                                                            ->nullable()
                                                            ->defaultItems(4)
                                                            ->grid([
                                                                'default' => 1,
                                                                'sm' => 2,
                                                                'md' => 3,
                                                                'xl' => 4
                                                            ])
                                                            ->addActionLabel('Add Image')
                                                            ->schema([
                                                                FileUpload::make('path')
                                                                    ->label('image')
                                                                    ->disk('public')
                                                                    ->directory('productImages')
                                                                    ->imagePreviewHeight('100')
                                                                    ->image(),
                                                                TextInput::make('alt_text'),
                                                                Hidden::make('product_datas_id')
                                                                    ->default(fn ($get) => $get('id'))
                                                            ])
                                                    ]),
                                                    Tab::make('Product Sizes')
                                                    ->icon('heroicon-o-chart-bar')
                                                    ->iconPosition('after')                                                        
                                                    ->schema([
                                                        Repeater::make('Product Size and quatities')
                                                            ->relationship('productVariation')
                                                            ->nullable()
                                                            ->label("Product's size")
                                                            ->addActionLabel('Add Size')
                                                            ->grid([
                                                                'default' => 1,
                                                                'sm' => 2,
                                                                'md' => 3,
                                                                '2xl' => 3
                                                            ])
                                                            ->defaultItems(3)
                                                            ->schema([
                                                                Hidden::make('product_datas_id')
                                                                    ->default(fn ($get) => $get('id')),
                                                                Select::make('size_id')
                                                                    ->relationship(name: 'size', titleAttribute: 'name'),
                                                                TextInput::make('instock')
                                                                    ->required()
                                                                    ->numeric(),
                                                                TextInput::make('available')
                                                                    ->required()
                                                                    ->numeric()
                                                            ])
                                                    ])
                                                ])->columnSpan(2),
                                            Radio::make('status')
                                                ->options([
                                                    'draft' => 'Draft',
                                                    'published' => 'Published',
                                                ])
                                                ->default('draft')
                                                ->inline()
                                                ->inlineLabel(false),
                                        ])->collapsible()->cloneable(),
                                ])
                    ]),
            ])->columns(1);
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
