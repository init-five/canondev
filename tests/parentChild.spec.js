import { test, expect } from "@playwright/test";
import { BasePage } from "../page-objects/basePage";
import { UserLogin } from "../page-objects/login";
import { loginCred as login } from "../data/loginCred";
import { CreateNewTopic } from "../page-objects/createNewTopic";
import { CreateNewCamp } from "../page-objects/createNewCamp";
import { ManageSupport } from "../page-objects/manageSupport";
import { ParentChildChange } from "../page-objects/changeParentChild";

test.describe("parent child scenarios", () => {
    let basePage;
    let userLoginPage;
    let newTopicCreation;
    let newCampCreation;
    let manageSupport;
    let parentChildChange;

    // before each test case
    test.beforeEach(async ({ page }) => {
        basePage = new BasePage(page);
        userLoginPage = new UserLogin(page);
        newTopicCreation = new CreateNewTopic(page);
        newCampCreation = new CreateNewCamp(page);
        manageSupport = new ManageSupport(page);
        parentChildChange = new ParentChildChange(page);
        await basePage.visit();
    });

    test("scenario 1", async () => {
        await userLoginPage.signin(login.user_A_Email, login.password);
        await newTopicCreation.createNewTopic();
        await newCampCreation.newCampCreate("Camp 1");
        await newTopicCreation.closeConsensusTree();
        await manageSupport.addSupport();
        await newTopicCreation.navigateToAgreementCamp();

        await newCampCreation.newCampCreate("Camp 2");
        await newTopicCreation.closeConsensusTree();
        await manageSupport.addSupport();
        //await newTopicCreation.navigateToAgreementCamp();

        await parentChildChange.changeCampRecord();
        await newTopicCreation.closeConsensusTree();
        //await page.pause();
    });
});
