import { faker } from "@faker-js/faker";

export class Login {
	constructor(page) {
		this.page = page;
		this.loginButton = page.getByRole("button", { name: "Log In" });
		this.emailInputField = page.getByPlaceholder("Enter Email");
		this.passwordInputField = page.getByPlaceholder("Enter Password");
		this.signinButton = page.locator('[id="login-btn"]');
		this.createTopicButton = page.locator('[href="/create/topic"]');
		this.topicNameInputFied = page.getByPlaceholder("Topic Name");

		this.canonSelectDropDown = page
			.locator("#create_new_topic")
			.getByText("General", { exact: true });
		this.sandboxTestingCanon = page.getByLabel(
			"Canon*(General is recommended, unless you know otherwise)"
		);

		this.createNewTopicButton = page.locator('[data-id="namespace"]');
	}

	visit = async () => {
		await this.page.goto("/");
		//await this.page.pause();
	};

	signin = async () => {
		await this.loginButton.waitFor();
		await this.loginButton.click();
		await this.emailInputField.waitFor();
		await this.emailInputField.fill("jackcd@yopmail.com");
		await this.passwordInputField.fill("Sherl0ck@five");
		await this.signinButton.click();
	};

	createNewTopic = async () => {
		const randomTopicName = faker.person.fullName();
		await this.createTopicButton.first().waitFor();
		await this.createTopicButton.first().click();
		await this.topicNameInputFied.waitFor();
		await this.topicNameInputFied.fill(randomTopicName);
		await this.canonSelectDropDown.waitFor();
		await this.canonSelectDropDown.click();
		await this.sandboxTestingCanon.fill("sandbox testing");
		await this.sandboxTestingCanon.press("Enter");

		//await this.createNewTopicButton.click();
	};
}
