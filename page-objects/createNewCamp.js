export class CreateNewCamp {
    constructor(page) {
        this.page = page;
        this.consensusTreeButton = page.getByRole("button", {
            name: "Consensus Tree",
        });
        this.createNewCampButton = page.getByRole("link", {
            name: "<Start new supporting camp here>",
        });
        this.campNameInputField = page.locator(
            '[id="create_new_camp_camp_name"]'
        );
        this.createCampButton = page.getByText("Create Camp");
    }

    newCampCreate = async (campName) => {
        //await this.page.pause();
        await this.page.waitForTimeout(3000);
        await this.createNewCampButton.waitFor();
        await this.createNewCampButton.click();
        await this.campNameInputField.waitFor();
        await this.campNameInputField.fill(campName);
        await this.createCampButton.waitFor();
        await this.createCampButton.click();
        // await this.consensusTreeButton.waitFor();
        // await this.consensusTreeButton.click();
    };
}
