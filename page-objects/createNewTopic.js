import { faker } from "@faker-js/faker";
import { expect } from "@playwright/test";

const randomTopicName = faker.person.firstName();
const campNameLocator = `#camp-1 span:has-text("${randomTopicName}")`;

export class CreateNewTopic {
    constructor(page) {
        this.page = page;
        this.createTopicButton = page.locator('[href="/create/topic"]');
        this.topicNameInputFied = page.getByPlaceholder("Topic Name");
        this.nickNameField = page.locator('[id="create_new_topic_nick_name"]');
        this.canonSelectDropDown = page
            .locator("#create_new_topic")
            .getByText("General", { exact: true });
        this.sandboxTestingCanon = page.getByLabel(
            "Canon*(General is recommended, unless you know otherwise)"
        );

        this.createNewTopicButton = page.locator('[id="create-topic-btn"]');
        this.agreementCampName = page.locator(campNameLocator);
        this.agreementCampScore = page.locator('[id="camp-1"]');
        this.camp1Score = page.locator('[id="camp-2"]');
        this.camp2Score = page.locator('[id="camp-3"]');
        this.navigateToCamp1 = page.locator('#camp-1 span:has-text("camp 1")');
        this.camp1ManageSupportButton = page.locator(
            '[id="manage-support-btn"]'
        );
        this.consensusTreeButton = page.getByRole("button", {
            name: "Consensus Tree",
        });
        this.consensusButtonState = page.locator(
            '[class="ant-btn ant-btn-primary btnFilter drawerBtn isDrawerOpen"]'
        );
    }

    closeConsensusTree = async () => {
        await this.page.waitForTimeout(3000);
        if (this.consensusButtonState) {
            await this.consensusTreeButton.click();
        }
        //await this.consensusTreeButton.waitFor();
    };

    createNewTopic = async () => {
        await this.createTopicButton.first().waitFor();
        await this.createTopicButton.first().click();
        await this.nickNameField.waitFor();
        await this.topicNameInputFied.waitFor();
        await this.topicNameInputFied.fill(randomTopicName);
        await this.canonSelectDropDown.waitFor();
        await this.canonSelectDropDown.click();
        await this.sandboxTestingCanon.fill("sandbox testing");
        await this.sandboxTestingCanon.press("Enter");
        await this.createNewTopicButton.click();
        // await this.consensusTreeButton.waitFor();
        // await this.consensusTreeButton.click();
    };

    scenarioOneScore = async () => {
        await this.agreementCampScore.waitFor();
        await expect(this.agreementCampScore).toContainText("1.00");
        await expect(this.camp1Score).toContainText("1.00");
        await expect(this.camp2Score).toContainText("1.00");
        await this.navigateToCamp1.click();
        await this.closeConsensusTree();
        await this.page.waitForTimeout(3000);
        await expect(this.camp1ManageSupportButton).toHaveText(
            "Directly Join and Support"
        );
    };

    navigateToAgreementCamp = async () => {
        await this.closeConsensusTree();
        await this.agreementCampName.waitFor();
        await this.agreementCampName.click();
        await this.page.waitForTimeout(3000);
    };
}
