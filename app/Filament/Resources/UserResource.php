<?php

namespace App\Filament\Resources;

use App\Filament\Resources\UserResource\Pages;
use App\Filament\Resources\UserResource\RelationManagers;
use App\Models\User;
use Faker\Provider\ar_EG\Text;
use Filament\Forms;
use Filament\Forms\Components\FileUpload;
use Filament\Forms\Components\Select;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Columns\ImageColumn;
use Filament\Tables\Columns\SelectColumn;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Table;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\SoftDeletingScope;

class UserResource extends Resource
{
    protected static ?string $model = User::class;

    protected static ?string $navigationIcon = 'heroicon-o-users';

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                TextInput::make('first_name'),
                TextInput::make('last_name'),
                TextInput::make('username')
                    ->required()
                    ->unique(ignoreRecord: true),
                TextInput::make('email')
                    ->required()
                    ->email()
                    ->unique(ignoreRecord: true),
                TextInput::make('password')
                    ->required()
                    ->password()
                    ->hiddenOn(['view', 'edit']),
                Select::make('roles')
                    ->multiple()
                    ->preload()
                    ->relationship(titleAttribute: 'type')
                    ->createOptionForm([
                        TextInput::make('type')
                            ->required()
                            ->unique(ignoreRecord: true),
                        TextInput::make('slug')
                            ->required()
                            ->unique(ignoreRecord: true)
                    ]),
                FileUpload::make('avatar')
                    ->avatar()
                    ->directory('/avatar')
                    ->downloadable()
                    ->image()
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                ImageColumn::make('avatar')
                    ->circular()
                    ->defaultImageUrl('/images/avatar.jpg'),
                TextColumn::make('username')
                    ->searchable()
                    ->sortable(),
                TextColumn::make('email')
                    ->searchable()
                    ->sortable(),
                TextColumn::make('roles.type')
                    ->label('Roles')
                    ->badge()
                    ->color(fn (string $state): string => match ($state) {
                        'Admin' => 'success',
                        'manager' => 'danger',
                        'Content Writer' => 'warning',
                        'Accountant' => 'info',
                        default => 'gray'
                    })
                    ->limit(5),
                TextColumn::make('created_at')
                    ->dateTime()
                    ->sortable(),


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
            'index' => Pages\ListUsers::route('/'),
            'create' => Pages\CreateUser::route('/create'),
            'view' => Pages\ViewUser::route('/{record}'),
            'edit' => Pages\EditUser::route('/{record}/edit'),
        ];
    }
}