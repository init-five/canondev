import { faker } from "@faker-js/faker";

const prefix = faker.person.firstName();
const lastName = faker.person.lastName();
const domain = "cd@yopmail.com";
const email = `${prefix}${domain}`;

export class Register {
    constructor(page) {
        this.page = page;
        this.registerButton = page.getByRole("button", { name: " Register" });
        this.firstNameFied = page.locator('[placeholder="Enter First Name"]');
        this.lastNameField = page.locator('[placeholder="Enter Last Name"]');
        this.emailField = page.locator('[id="registration_email"]');
        this.passwordField = page.locator('[id="registration_password"]');
        this.confirmPasswordField = page.locator('[id="registration_confirm"]');
        this.signupButton = page.locator('[id="register-btn"]');
        this.mailtrapLogin = page.locator('[href="/signin"]');
        this.mailtrapEmailInputField = page.locator('[id="user_email"]');
        this.mailtrapNextButton = page.getByText("Next");
        this.mailtrapPasswordInputField = page.locator('[id="user_password"]');
        this.mailtrapLoginButton = page.locator('[name="commit"]');
        this.mailtrapMyInbox = page.locator('[title="My Inbox"]');
        this.otpMail = page
            .locator('[class="to_email"]')
            .filter({ hasText: `${email}` });
        this.otpText = page.locator("");
    }

    register = async () => {
        await this.registerButton.waitFor();
        await this.registerButton.click();
        await this.firstNameFied.fill(prefix);
        await this.lastNameField.fill(lastName);
        await this.emailField.fill(email);
        await this.passwordField.fill("Pa$$w0rd!");
        await this.confirmPasswordField.fill("Pa$$w0rd!");
        //await this.signupButton.click();
        //await this.page.waitForTimeout(5000);
    };

    goToMailtrap = async () => {
        await this.page.goto("https://mailtrap.io/");
        await this.mailtrapLogin.first().waitFor();
        await this.mailtrapLogin.first().click();
        await this.mailtrapEmailInputField.waitFor();
        await this.mailtrapEmailInputField.fill(
            "subhan.ihsan@codedistrict.com"
        );
        await this.mailtrapNextButton.click();
        await this.mailtrapPasswordInputField.waitFor();
        await this.mailtrapPasswordInputField.fill("$herl0ck@five");
        await this.mailtrapLoginButton.click();
        await this.mailtrapMyInbox.waitFor();
        await this.mailtrapMyInbox.click();
        await this.otpMail.click();
    };
}
