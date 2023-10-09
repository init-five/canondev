export class ManageSupport {
    constructor(page) {
        this.page = page;
        this.manageSupportButton = page.locator('[id="manage-support-btn"]');
        this.submitButton = page.locator('[id="uploadBtn"]');
    }

    addSupport = async () => {
        await this.page.waitForTimeout(5000);
        //await this.page.pause();
        await this.manageSupportButton.waitFor();
        await this.manageSupportButton.click();
        await this.submitButton.waitFor();
        await this.submitButton.click();
    };
}
