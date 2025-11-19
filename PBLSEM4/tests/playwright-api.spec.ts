import { test, expect } from '@playwright/test';

// Objek respons yang diharapkan untuk perbandingan
const expectedResponse = {
  "breadcrumb": {
    "title": "Daftar Admin",
    "list": [
      "Home",
      "Admin"
    ]
  },
  "page": {
    "title": "Daftar admin yang terdaftar dalam sistem"
  },
  "activeMenu": "admin"
};

test('GET /admin/list - Debug Response', async ({ request }) => {
  const response = await request.get('http://localhost:8000/admin/list');
  
  // Tampilkan informasi lengkap
  console.log('Status:', response.status());
  console.log('Status Text:', response.statusText());
  console.log('OK:', response.ok());
  
  // Coba lihat body responsenya
  const body = await response.text();
  console.log('Response Body:', body);
});