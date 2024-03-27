import { test as pageTest } from "@playwright/test";
import HomePage from "../pages/HomePage"

type pages = {
  homePage: HomePage;
}

const testPages = pageTest.extend<pages>({

  homePage: async ({ page }, use) => {
    await use(new HomePage(page))
  },

})

export const test = testPages;