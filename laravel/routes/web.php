<?php

use Illuminate\Support\Facades\Route;

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

// Route::get('/', function () {
//     return view('home');
// });

// Auth::routes();

// Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');

// Route::group(['middleware' => 'auth:sanctum'], function() {
//     Route::apiResource('task','TaskController');
//     Route::patch('task/update-done/{task}','TaskController@updateDone');
//     Route::get('user', function(Request $request) {
//         return $request->user();
//     });
// });

Route::get('{any}', function () {
    return view('app');
})->where('any','.*');

// Route::get('/', function () {
//     return view('app');
// });

// Auth::routes();

// Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');

// Route::get('/{any}', function() {
//   return view('app');
// })->where('any', '.*');
