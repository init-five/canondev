import { expect } from "@playwright/test";

export class Browse {
    constructor(page) {
        this.page = page;
        this.browseButton = page
            .getByTestId("loggedOutHeader")
            .getByRole("link", { name: "Browse" });
        this.canonInputField = page.getByText("General");
        this.canonTypeAll = page.locator("#name-space-dropdown");
        this.canonSelectAll = page.getByText("All", { exact: true });
        this.loadMoreButton = page.locator(
            '[class="ant-btn ant-btn-default topicsList_viewAll__4YIHG"]'
        );
        this.topicName = page.locator(
            '[class="ant-list-items"] li a span:nth-child(1)'
        );
    }

    duplicateTopics = async () => {
        await this.browseButton.waitFor();
        await this.browseButton.click();
        await this.page.waitForURL(/\/browse/, { timeout: 3000 });
        await this.canonInputField.waitFor();
        await this.canonInputField.click();
        await this.canonTypeAll.fill("all");
        //await this.page.waitForTimeout(15000);
        await this.canonSelectAll.click();

        // Start a loop to keep clicking the "load more" button until it disappears
        while (await this.loadMoreButton) {
            await this.loadMoreButton.click();
        }
        // let loopThrough = true;
        // console.warn(await expect(this.loadMoreButton).toBeVisible());
        // while (loopThrough) {
        //     if (await expect(this.loadMoreButton).toBeVisible()) {
        //         await this.loadMoreButton.click();
        //     } else {
        //         loopThrough = false;
        //     }
        // }
        const topicNames = await this.topicName.allInnerTexts();
        console.warn(topicNames);
    };
}
