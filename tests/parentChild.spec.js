// @ts-check
const { test, expect } = require("@playwright/test");
const { Login } = require("../page-objects/login");

test.describe("parent child scenarios", () => {
	test.beforeEach(async ({ page }) => {
		const userLogin = new Login(page);
		await userLogin.visit();
		await userLogin.signin();
	});
	test("scenario 1", async ({ page }) => {
		const userLogin = new Login(page);
		await userLogin.createNewTopic();
		await page.pause();
	});
});
