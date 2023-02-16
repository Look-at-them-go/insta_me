<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Inertia\Response;

class WelcomeController extends Controller {

    public function Display() : Response {

        return Inertia::render("Index", []);

    }

}