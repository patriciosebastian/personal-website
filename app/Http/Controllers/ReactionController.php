<?php

namespace App\Http\Controllers;

use App\Http\Requests\ReactionStoreRequest;
use App\Models\Reaction;
use Illuminate\Http\Request;

class ReactionController extends Controller
{
    public function store(ReactionStoreRequest $request)
    {
        $reaction = Reaction::create($request->validated());

        return $reaction.count;
    }
}
