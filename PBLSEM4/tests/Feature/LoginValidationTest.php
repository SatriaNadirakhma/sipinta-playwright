<?php

namespace Tests\Unit;

use Tests\TestCase;
use Illuminate\Support\Facades\Validator;

class LoginValidationTest extends TestCase
{
    /**
     * Test 1: Validasi login berhasil dengan data valid
     */
    public function test_login_validation_passes_with_valid_data()
    {
        $data = [
            'username' => 'admin',
            'password' => '12345',
        ];

        $rules = [
            'username' => 'required|string',
            'password' => 'required|string',
        ];

        $validator = Validator::make($data, $rules);

        // Assert validasi berhasil
        $this->assertFalse($validator->fails());
        $this->assertTrue($validator->passes());
    }
}