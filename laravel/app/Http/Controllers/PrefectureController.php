<?php

namespace App\Http\Controllers;

use App\Models\Prefecture;
use Illuminate\Http\Request;

class PrefectureController extends Controller
{
    public function index()
    {
        return Prefecture::get();
    }
}
