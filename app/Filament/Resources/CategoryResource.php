<?php

namespace App\Filament\Resources;

use App\Filament\Resources\CategoryResource\Pages;
use App\Filament\Resources\CategoryResource\RelationManagers;
use App\Models\Category;
use App\Models\Gender;
use Faker\Provider\ar_EG\Text;
use Filament\Forms;
use Filament\Forms\Components\FileUpload;
use Filament\Forms\Components\Select;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Form;
use Filament\Forms\Get;
use Filament\Forms\Set;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Columns\ImageColumn;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Table;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\SoftDeletingScope;
use Illuminate\support\Str;

class CategoryResource extends Resource
{
    protected static ?string $model = Category::class;

    protected static ?string $navigationIcon = 'heroicon-o-document-chart-bar';

    public static function form(Form $form): Form
    {
        return $form
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
                    })
                    ->maxLength(255),
                TextInput::make('slug')
                    ->required()
                    ->unique(ignoreRecord: true)
                    ->maxLength(255),
                Select::make('gender_id')
                    ->nullable()
                    ->label('Gender')
                    ->searchable()
                    ->preload()
                    ->relationship(name: 'gender', titleAttribute: 'name')
                    ->native(false),
                Select::make('parent_id')
                    ->nullable()
                    ->label('Parent Category')
                    ->searchable('name')
                    ->preload()
                    ->relationship(
                        name: 'parent',
                        modifyQueryUsing: fn (Builder $query) => $query->where('parent_id', null),
                        titleAttribute: 'name',
                        ignoreRecord: true
                    )
                    ->native(false),
                TextInput::make('intro')
                    ->nullable()
                    ->maxLength(255),
                TextInput::make('description')
                    ->nullable()
                    ->placeholder('Enter Description...'),
                FileUpload::make('thumbnail')
                    ->nullable()
                    ->directory('/Categories/images')
                    ->label('Thumbnail - (Optional)')
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                ImageColumn::make('thumbnail')
                    ->visibleOn('view'),
                TextColumn::make('name')
                    ->searchable()
                    ->sortable(),
                TextColumn::make('slug')
                    ->searchable()
                    ->sortable(),
                TextColumn::make('intro')
                    ->visibleOn('view'),
                TextColumn::make('description')
                    ->visibleOn('view'),
                TextColumn::make('gender.name')
                    ->label('Gender')
                    ->searchable(),
                TextColumn::make('parent.name')
                    ->label('Parent Category')
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
            'index' => Pages\ListCategories::route('/'),
            'create' => Pages\CreateCategory::route('/create'),
            'view' => Pages\ViewCategory::route('/{record}'),
            'edit' => Pages\EditCategory::route('/{record}/edit'),
        ];
    }
}
