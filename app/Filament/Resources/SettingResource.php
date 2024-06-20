<?php

namespace App\Filament\Resources;

use App\Filament\Resources\SettingResource\Pages;
use App\Filament\Resources\SettingResource\RelationManagers;
use App\Models\Setting;
use Filament\Forms;
use Filament\Forms\Components\FileUpload;
use Filament\Forms\Components\Textarea;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Columns\ColorColumn;
use Filament\Tables\Columns\ImageColumn;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Table;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\SoftDeletingScope;

class SettingResource extends Resource
{
    protected static ?string $model = Setting::class;

    protected static ?string $navigationIcon = 'heroicon-o-rectangle-stack';

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                FileUpload::make('logo')
                    ->nullable()
                    ->directory('/settings')
                    ->image()
                    ->disk('public'),
                TextInput::make('title')
                    ->nullable(),
                TextInput::make('intro')
                    ->nullable(),
                TextInput::make('email')
                    ->nullable(),
                TextInput::make('phone')
                    ->numeric()
                    ->nullable(),
                Textarea::make('address')
                    ->nullable(),
                Textarea::make('google_map')
                    ->nullable(),
                TextInput::make('theme_color')
                    ->nullable(),
                FileUpload::make('event')
                    ->image()
                    ->nullable()
                    ->disk('public')
                    ->directory('events'),
                TextInput::make('event_link')
                    ->nullable()
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                ImageColumn::make('logo')
                    ->circular(),
                ColorColumn::make('theme_color')
                    ->copyable()
                    ->copyMessage('Color code copied'),
                TextColumn::make('title'),
                TextColumn::make('intro'),
                TextColumn::make('phone'),
                TextColumn::make('email'),
                TextColumn::make('address')->visibleOn('view'),
                TextColumn::make('google_map')->visibleOn('view'),
                ImageColumn::make('event')->visibleOn('view'),
                TextColumn::make('event_link')->visibleOn('view'),
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
            'index' => Pages\ListSettings::route('/'),
            // 'create' => Pages\CreateSetting::route('/create'),
            'view' => Pages\ViewSetting::route('/{record}'),
            // 'edit' => Pages\EditSetting::route('/{record}/edit'),
        ];
    }
}
