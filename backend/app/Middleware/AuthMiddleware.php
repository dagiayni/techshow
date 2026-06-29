<?php

namespace App\Middleware;

use Firebase\JWT\JWT;
use Firebase\JWT\Key;
use Exception;

class AuthMiddleware {
    
    public static function handle() {
        $headers = getallheaders();
        $authHeader = $headers['Authorization'] ?? '';
        
        if (!$authHeader || !preg_match('/Bearer\s(\S+)/', $authHeader, $matches)) {
            http_response_code(401);
            echo json_encode(['error' => 'Unauthorized. Token not found.']);
            exit();
        }
        
        $token = $matches[1];
        
        try {
            $secretKey = $_ENV['JWT_SECRET'] ?? 'default_secret_for_dev_only';
            $decoded = JWT::decode($token, new Key($secretKey, 'HS256'));
            
            // Store user info in global scope for controllers to access
            $GLOBALS['user'] = $decoded;
        } catch (Exception $e) {
            http_response_code(401);
            echo json_encode(['error' => 'Unauthorized. Invalid token.']);
            exit();
        }
    }
}
