import { faker } from "@faker-js/faker";
import { expect } from "@playwright/test";

const randomTopicName = faker.hacker.noun();
// const campNameLocator = `#camp-1 span:has-text("${randomTopicName}")`;

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
        //this.agreementCampName = page.locator(campNameLocator);
        this.agreementCampScore = page.locator('[id="camp-1"]');
        // this.createNewCampButton = page.getByRole("link", {
        //     name: "<Start new supporting camp here>",
        // });
    }

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
    };

    //createNewCamp = async () => {};

    scenarioOneScore = async () => {
        await this.agreementCampScore.waitFor();
        await expect(this.agreementCampScore).toContainText("1.00");
    };
}
