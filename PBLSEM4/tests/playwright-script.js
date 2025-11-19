const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({
    headless: false
  });
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto('http://127.0.0.1:8000/');
  await page.getByRole('link', { name: 'Masuk!' }).click();
  await page.getByRole('textbox', { name: 'Username' }).click();
  await page.getByRole('textbox', { name: 'Username' }).press('CapsLock');
  await page.getByRole('textbox', { name: 'Username' }).press('CapsLock');
  await page.getByRole('textbox', { name: 'Username' }).fill('admin');
  await page.getByRole('textbox', { name: 'Username' }).press('Tab');
  await page.getByRole('textbox', { name: 'Kata Sandi' }).fill('12345');
  await page.getByRole('button', { name: 'Masuk!' }).click();
  await page.getByRole('link', { name: 'Profile Picture ' }).click();
  await page.getByRole('link', { name: ' Logout' }).click();
  await page.screenshot({ path: 'screenshotlogout.png' });
  await page.getByRole('button', { name: 'Ya' }).click();
  await page.screenshot({ path: 'screenshotafterlogout.png' });zzz
  await page.goto('http://127.0.0.1:8000/login');
  await page.getByRole('link', { name: 'Kembali ke Halaman Awal' }).click();

  // ---------------------
  await context.close();
  await browser.close();
})();