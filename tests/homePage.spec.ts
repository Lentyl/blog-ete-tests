import { test, expect } from '@playwright/test';

test.describe('Log in suite', () => {

  test.beforeEach(async ({ page }) => {
    await page.goto('https://mariusz-blog.vercel.app/');
  });

  test('Sign in with an incorrect email address', async ({ page }) => {
    await page.locator("//button[normalize-space()='Login']").click();
    await page.getByLabel('Username or email address').fill('ABCD');
    await page.getByLabel('Password').fill('Mariusz123%$');
    await page.getByRole('button', { name: 'Sign in', exact: true }).click();
    await page.getByText('Incorrect username or').isVisible();
  });

  test('Sign in with an incorrect password', async ({ page }) => {
    await page.locator("//button[normalize-space()='Login']").click();
    await page.getByLabel('Username or email address').fill('many185@wp.pl');
    await page.getByLabel('Password').fill('KLFD');
    await page.getByRole('button', { name: 'Sign in', exact: true }).click();
    await page.getByText('Incorrect username or').isVisible();
  });

  test('Log in with correct email and password', async ({ page }) => {
    test.slow();
    await page.locator("//button[normalize-space()='Login']").click();
    await page.getByLabel('Username or email address').fill('many185@wp.pl');
    await page.getByLabel('Password').fill('Mariusz123%$');
    await page.getByRole('button', { name: 'Sign in', exact: true }).click();
    await page.getByRole('button', { name: 'Mariusz04' }).click()
    //await expect(page).toHaveURL('https://mariusz-blog.vercel.app/');
    await page.getByRole('button', { name: 'Mariusz04' }).click()
    await expect(page.locator('.text-sm.text-gray-500')).toHaveText('many185@wp.pl');
  });

  test.afterEach(async ({ page }) => {
    await page.close();
  });

})


