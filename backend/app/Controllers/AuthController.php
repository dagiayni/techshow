<?php

namespace App\Controllers;

use Firebase\JWT\JWT;

class AuthController {
    
    public function login() {
        // Read JSON input
        $input = json_decode(file_get_contents('php://input'), true);
        $email = $input['email'] ?? '';
        $password = $input['password'] ?? '';
        
        // TODO: Validate against DB
        // Mock validation
        if ($email === 'admin@techhub.et' && $password === 'password') {
            $payload = [
                'iss' => 'techhub.et',
                'aud' => 'techhub.et',
                'iat' => time(),
                'exp' => time() + (60 * 60 * 24), // 24 hours
                'data' => [
                    'user_id' => 1,
                    'role' => 'super_admin'
                ]
            ];
            
            $secretKey = $_ENV['JWT_SECRET'] ?? 'default_secret_for_dev_only';
            $jwt = JWT::encode($payload, $secretKey, 'HS256');
            
            echo json_encode([
                'success' => true,
                'token' => $jwt,
                'user' => $payload['data']
            ]);
        } else {
            http_response_code(401);
            echo json_encode(['error' => 'Invalid credentials']);
        }
    }
    
    public function me() {
        // Assume AuthMiddleware has run and populated $GLOBALS['user']
        $user = $GLOBALS['user'] ?? null;
        
        if ($user) {
            echo json_encode(['success' => true, 'user' => $user->data]);
        } else {
            http_response_code(401);
            echo json_encode(['error' => 'Not authenticated']);
        }
    }
}
