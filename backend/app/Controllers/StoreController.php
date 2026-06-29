<?php

namespace App\Controllers;

class StoreController {
    
    public function index() {
        // Super Admin only: List all stores
        // TODO: Check if user role is super_admin
        
        $stores = [
            ['id' => 1, 'name' => 'ABC Electronics', 'slug' => 'abc-electronics', 'status' => 'active'],
            ['id' => 2, 'name' => 'Digital World', 'slug' => 'digital-world', 'status' => 'active'],
        ];
        
        echo json_encode(['success' => true, 'data' => $stores]);
    }
    
    public function show($id) {
        $store = ['id' => $id, 'name' => 'ABC Electronics', 'slug' => 'abc-electronics', 'status' => 'active'];
        echo json_encode(['success' => true, 'data' => $store]);
    }
    
    public function store() {
        $input = json_decode(file_get_contents('php://input'), true);
        // TODO: Insert into stores table
        echo json_encode(['success' => true, 'message' => 'Store created successfully', 'data' => $input]);
    }
    
    public function update($id) {
        $input = json_decode(file_get_contents('php://input'), true);
        // TODO: Update stores table
        echo json_encode(['success' => true, 'message' => 'Store updated successfully', 'data' => $input]);
    }
}
