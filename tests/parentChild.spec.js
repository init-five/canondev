import { test, expect } from "@playwright/test";
import { BasePage } from "../page-objects/basePage";
import { UserLogin } from "../page-objects/login";
import { loginCred as login } from "../data/loginCred";
import { CreateNewTopic } from "../page-objects/createNewTopic";

test.describe("parent child scenarios", () => {
    let basePage;
    let userLoginPage;
    let newTopicCreation;

    // before each test case
    test.beforeEach(async ({ page }) => {
        basePage = new BasePage(page);
        userLoginPage = new UserLogin(page);
        newTopicCreation = new CreateNewTopic(page);
        await basePage.visit();
    });

    test("scenario 1", async () => {
        await userLoginPage.signin(login.user_A_Email, login.password);
        await newTopicCreation.createNewTopic();
        await newTopicCreation.scenarioOneScore();
        //await page.pause();
    });
});
