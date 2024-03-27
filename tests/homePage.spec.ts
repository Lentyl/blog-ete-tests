import { expect } from '@playwright/test';
import { test } from "../fixtures/pagesFixture"
import testData from '../data/testData.json'

test.describe('Log in suite', () => {

  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('Sign in with an incorrect email address', async ({ homePage }) => {
    await homePage.login_button.click();
    await homePage.Login(testData.incorrectEmail, testData.password);
    await homePage.login_validation_text.isVisible();
  });

  test('Sign in with an incorrect password', async ({ homePage }) => {
    await homePage.login_button.click();
    await homePage.Login(testData.email, testData.incorrectPassword);
    await homePage.login_validation_text.isVisible();
  });

  test('Log in with correct email and password', async ({ homePage }) => {
    test.slow();
    await homePage.login_button.click();
    await homePage.Login(testData.email, testData.password);
    await homePage.avatar_icon.click();
    await expect(homePage.avatar_menu_email_text).toHaveText('many185@wp.pl');
  });

  test.afterEach(async ({ page }) => {
    await page.close();
  });

})


