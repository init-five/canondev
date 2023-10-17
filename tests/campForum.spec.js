import { test } from "@playwright/test";
import { CreateNewTopic } from "../page-objects/createNewTopic";
import { BasePage } from "../page-objects/basePage";
import { UserLogin } from "../page-objects/login";
import { loginCred } from "../data/loginCred";
import { CampForum } from "../page-objects/campForum";

test("create 100 threads", async ({ page }) => {
    const basePage = new BasePage(page);
    const login = new UserLogin(page);
    const createNewTopic = new CreateNewTopic(page);
    const campForum = new CampForum(page);
    await basePage.visit();
    await login.signin(loginCred.user_A_Email, loginCred.password);
    await createNewTopic.createNewTopic();
    await createNewTopic.closeConsensusTree();
    await campForum.navigateToCampForum();
    for (let i = 0; i <= 100; i++) {
        await campForum.createThread();
    }
});
