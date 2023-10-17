import { test } from "@playwright/test";
import { BasePage } from "../page-objects/basePage";
import { UserLogin } from "../page-objects/login";
import { Register } from "../page-objects/register";

test("user registeration", async ({ page }) => {
    const basePage = new BasePage(page);
    const userRegister = new Register(page);
    await basePage.visit();
    await userRegister.register();
    //await register.goToMailtrap();
});
