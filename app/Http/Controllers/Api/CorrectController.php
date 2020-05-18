<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Dashboard\Correct;
use App\Services\CorrectService;
use Illuminate\Http\Request;

class CorrectController extends Controller
{
    protected $correctService;

    public function __construct(CorrectService $correctService)
    {
        $this->correctService = $correctService;
    }

    /**
     * Display a listing of the resource.
     *
     */
    public function index()
    {
        $objects = Correct::with('photo')->get();

        return $objects;
    }

    /**
     * Store a newly created resource in storage.
     *
     */
    public function store(Request $request)
    {
        $this->correctService->store($request);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Dashboard\Correct  $correct
     * @return \Illuminate\Http\Response
     */
    public function show(Correct $correct)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Dashboard\Correct  $correct
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Correct $correct)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Dashboard\Correct  $correct
     * @return \Illuminate\Http\Response
     */
    public function destroy(Correct $correct)
    {
        //
    }
}
