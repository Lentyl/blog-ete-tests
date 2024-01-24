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
    await page.getByText('Incorrect username or').isDisabled();
  });

  test('Sign in with an incorrect password', async ({ page }) => {
    await page.locator("//button[normalize-space()='Login']").click();
    await page.getByLabel('Username or email address').fill('many185@wp.pl');
    await page.getByLabel('Password').fill('KLFD');
    await page.getByRole('button', { name: 'Sign in', exact: true }).click();
    await page.getByText('Incorrect username or').isDisabled();
  });

  test('Log in with correct email and password', async ({ page }) => {
    await page.locator("//button[normalize-space()='Login']").click();
    await page.getByLabel('Username or email address').fill('many185@wp.pl');
    await page.getByLabel('Password').fill('Mariusz123%$');
    await page.getByRole('button', { name: 'Sign in', exact: true }).click();
    await expect(page.locator('.d-block.color-fg-muted')).toHaveText('wants to access your Mariusz04 account');
    await page.getByRole('button', { name: 'Authorize*/' }).click();
    await page.locator("img[alt='Mariusz04']").isDisabled();
  });

  test.afterEach(async ({ page }) => {
    await page.close();
  });

})


