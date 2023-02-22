<?php


use App\Http\Controllers\WelcomeController;
use Illuminate\Support\Facades\Route;
use App\Events\TestEvent;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', [WelcomeController::class, 'Display']);

Route::get('/test', function(){
    
    event(new \App\Events\TestEvent());
});

require __DIR__.'/auth.php';
