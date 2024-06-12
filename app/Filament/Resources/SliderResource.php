<?php

namespace App\Filament\Resources;

use App\Filament\Resources\SliderResource\Pages;
use App\Filament\Resources\SliderResource\RelationManagers;
use App\Models\Slider;
use App\Models\Sliders;
use Filament\Forms;
use Filament\Forms\Components\ColorPicker;
use Filament\Forms\Components\FileUpload;
use Filament\Forms\Components\Textarea;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Columns\ColorColumn;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Table;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\SoftDeletingScope;

class SliderResource extends Resource
{
    protected static ?string $model = Sliders::class;

    protected static ?string $navigationIcon = 'heroicon-o-rectangle-stack';

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                TextInput::make('title')
                    ->nullable(),
                ColorPicker::make('title_color'),
                TextInput::make('sub_title')
                    ->nullable(),
                ColorPicker::make('sub_title_color'),
                TextInput::make('intro')
                    ->nullable(),
                ColorPicker::make('intro_color'),
                Textarea::make('description')
                    ->nullable(),
                ColorPicker::make('description_color'),
                FileUpload::make('image')
                    ->disk('public')
                    ->directory('sliders')
                    ->image()
                    ->image()
                    ->nullable(),
                TextInput::make('link')
                    ->nullable(),
                ColorPicker::make('description_color'),
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                TextColumn::make('title')
                    ->sortable()
                    ->searchable(),
                ColorColumn::make('title_color'),
                TextColumn::make('sub_title')
                    ->sortable()
                    ->searchable(),
                ColorColumn::make('sub_title_color'),
                TextColumn::make('intro')
                    ->limit(30),
                ColorColumn::make('intro_color'),
            ])
            ->filters([
                //
            ])
            ->actions([
                Tables\Actions\ViewAction::make(),
                Tables\Actions\EditAction::make(),
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
            'index' => Pages\ListSliders::route('/'),
            'create' => Pages\CreateSlider::route('/create'),
            'view' => Pages\ViewSlider::route('/{record}'),
            'edit' => Pages\EditSlider::route('/{record}/edit'),
        ];
    }
}
