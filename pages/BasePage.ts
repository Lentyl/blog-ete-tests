import { Page, Locator } from "@playwright/test";
import testData from '../data/testData.json'


export default class BasePage {

  constructor(protected readonly page: Page) { }

  emial_input = this.page.getByLabel('Username or email address');
  password_input = this.page.getByLabel('Password');
  sign_in_button = this.page.getByRole('button', { name: 'Sign in', exact: true })
  login_validation_text = this.page.getByText('Incorrect username or')

  async Login(email: string, password: string) {
    await this.emial_input.fill(email);
    await this.password_input.fill(password);
    await this.sign_in_button.click();
  }
} 