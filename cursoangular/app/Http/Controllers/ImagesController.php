<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Image;
use Illuminate\Support\Facades\Response;

class ImagesController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $images = Image::all();
        $response = Response::json($images,200);
        return $response;
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {

        if((!$request->title) || (!$request->thumbnail) || (!$request->imageLink) ){
            $response = Response::json([
                'message' => 'Please enter all required fields'
            ],422);
            return $response;
        }

        $image = new Image([
           'thumbnail' => trim($request->thumbnail),
           'imageLink' => trim($request->imageLink),
           'title' => trim($request->title),
           'description' => trim($request->description),
           'user_id' => 1,
        ]);
        $image->save();

        $message = 'SYour image has been added correctly';

        $response = Response::json([
            'message' => $message,
            'data' => $image
        ],201);

        return $response;
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $image = Image::find($id);
        if(!$image){
            return Response::json([
                'error' => [
                    'message' => "Image not found"
                ]
            ],404);
        }
        return Response::json($image,200);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
