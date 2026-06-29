<?php

namespace App\Controllers;

class ProductController {
    
    public function index() {
        // Assume AuthMiddleware and TenantMiddleware have run
        $storeId = $GLOBALS['tenant_id'] ?? null;
        
        // Mock DB fetch for products in the store
        $products = [
            ['id' => 1, 'name' => 'Samsung Galaxy S24 Ultra', 'price' => 1199.00],
            ['id' => 2, 'name' => 'Apple MacBook Pro 16', 'price' => 2499.00],
        ];
        
        echo json_encode(['success' => true, 'data' => $products]);
    }
    
    public function show($id) {
        // Mock DB fetch for a single product
        $product = ['id' => $id, 'name' => 'Samsung Galaxy S24 Ultra', 'price' => 1199.00, 'specifications' => [['key' => 'RAM', 'value' => '12GB']]];
        echo json_encode(['success' => true, 'data' => $product]);
    }
    
    public function store() {
        $input = json_decode(file_get_contents('php://input'), true);
        
        // TODO: Validate input, Insert into products table, Insert into product_specifications table
        
        echo json_encode(['success' => true, 'message' => 'Product created successfully', 'data' => $input]);
    }
    
    public function update($id) {
        $input = json_decode(file_get_contents('php://input'), true);
        
        // TODO: Update products table
        
        echo json_encode(['success' => true, 'message' => 'Product updated successfully', 'data' => $input]);
    }
    
    public function destroy($id) {
        // TODO: Delete from products table
        echo json_encode(['success' => true, 'message' => 'Product deleted successfully']);
    }
}
