<?php

namespace App\Middleware;

class TenantMiddleware {
    
    public static function handle() {
        // In a real application, you might get this from a custom header 
        // e.g. X-Tenant-Slug or extract it from the URL path if the router supports it.
        $headers = getallheaders();
        $tenantSlug = $headers['X-Tenant-Slug'] ?? null;
        
        if (!$tenantSlug) {
            http_response_code(400);
            echo json_encode(['error' => 'Tenant slug is required.']);
            exit();
        }
        
        // TODO: Query the database to find the store_id based on the $tenantSlug
        // For now, we simulate resolving it.
        $storeId = self::resolveStoreIdFromSlug($tenantSlug);
        
        if (!$storeId) {
            http_response_code(404);
            echo json_encode(['error' => 'Store not found.']);
            exit();
        }
        
        // Store tenant info in global scope
        $GLOBALS['tenant_id'] = $storeId;
    }
    
    private static function resolveStoreIdFromSlug($slug) {
        // Mock implementation. E.g., 'abc-electronics' => 1
        $mockStores = [
            'abc-electronics' => 1,
            'digital-world' => 2
        ];
        return $mockStores[$slug] ?? null;
    }
}
