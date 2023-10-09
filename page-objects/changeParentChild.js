export class ParentChildChange {
    constructor(page) {
        this.page = page;
        this.currentCampRecord = page.getByText("Current Camp Record");
        this.manageCampButton = page.locator('id="manage-camp-btn"');
        this.campUpdateButton = page.locator('[id="submit-update-11994"]');
        this.parentCampField = page
            .locator("span")
            .filter({ hasText: "Agreement" });
        this.selectCamp1 = page.locator("div").filter({ hasText: /^Camp 1$/ });
        this.submitUpdateButton = page.getByRole("button", {
            name: "Submit Update",
        });
        this.commitChangeButton = page.getByRole("button", {
            name: "Commit Change",
        });
        this.agreementCampNavigate = page.getByRole("link", {
            name: "Agreement",
        });
    }

    changeCampRecord = async () => {
        await this.page.waitForTimeout(3000);
        //await this.page.pause();
        await this.currentCampRecord.waitFor();
        await this.currentCampRecord.click();
        await this.manageCampButton.waitFor();
        await this.manageCampButton.click();
        await this.campUpdateButton.waitFor();
        await this.campUpdateButton.click();
        await this.parentCampField.waitFor();
        await this.parentCampField.nth(1).click();
        await this.selectCamp1.waitFor();
        await this.selectCamp1.nth(1).click();
        await this.submitUpdateButton.waitFor();
        await this.submitUpdateButton.click();
        await this.page.waitForTimeout(3000);
        await this.commitChangeButton.waitFor();
        await this.commitChangeButton.click();
        await this.agreementCampNavigate.waitFor();
        await this.agreementCampNavigate.click();
    };
}
