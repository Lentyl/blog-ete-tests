import BasePage from './BasePage'
import { Page } from "@playwright/test";

export default class HomePage extends BasePage {

  constructor(page: Page) {
    super(page);
  }

  //locators
  login_button = this.page.locator("//button[normalize-space()='Login']");
  avatar_icon = this.page.getByRole('button', { name: 'Mariusz04' });
  avatar_menu_email_text = this.page.locator('.text-sm.text-gray-500');

}