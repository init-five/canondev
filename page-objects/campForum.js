import { faker } from "@faker-js/faker";

export class CampForum {
    constructor(page) {
        this.page = page;
        this.campforumButton = page.locator("[id='camp-forum-btn']");
        this.createThreadButton = page.locator('[id="create-btn"]');
        this.titleofthreadInputField = page.locator(
            '[id="create_new_thread_thread_title"]'
        );
        this.nicknameField = page.getByLabel("Nickname*");
        this.submitThreadButton = page.locator('[id="submit-btn"]');
    }

    navigateToCampForum = async () => {
        await this.campforumButton.waitFor();
        await this.campforumButton.click();
    };
    createThread = async () => {
        await this.createThreadButton.waitFor();
        await this.createThreadButton.click();
        await this.titleofthreadInputField.waitFor();
        const threadTitle = faker.internet.userName();
        await this.titleofthreadInputField.fill(threadTitle);
        await this.page.waitForTimeout(2000);
        await this.submitThreadButton.waitFor();
        await this.submitThreadButton.click();
    };
}
