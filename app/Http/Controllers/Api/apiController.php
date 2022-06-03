<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Post;

class apiController extends Controller
{
    public function index(){
        $posts = Post::with(['user', 'categories'])->paginate(5);

        return response()->json($posts);
    }

    public function show($id){
        $post = Post::fingOrFail($id);
        return response()->json([
            'success' => true,
            'result' => $post
        ]);
    }
}
