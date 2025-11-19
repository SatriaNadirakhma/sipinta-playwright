<?php

namespace Tests\Feature;

use Tests\TestCase;
use Illuminate\Foundation\Testing\DatabaseTransactions;

class AuthControllerTest extends TestCase
{
    use DatabaseTransactions;

    public function test_login_success_with_correct_credentials()
    {
        $response = $this->postJson(route('postlogin'), [
            'username' => 'admin',
            'password' => '12345',
        ]);

        $response->assertStatus(200)
                 ->assertJson([
                     'status' => true,
                     'message' => 'Login Berhasil',
                 ]);

        $this->assertAuthenticated();
    }

    public function test_login_fails_with_wrong_password()
    {
        $response = $this->postJson(route('postlogin'), [
            'username' => 'admin',
            'password' => 'wrongpassword',
        ]);

        $response->assertStatus(200)
                 ->assertJson([
                     'status' => false,
                     'message' => 'Login Gagal. Username atau password salah.',
                 ]);

        $this->assertGuest();
    }
}
