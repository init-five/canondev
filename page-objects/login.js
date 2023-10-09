import { BasePage } from "./basePage"; // Import the BasePage class

export class UserLogin extends BasePage {
    constructor(page) {
        super(page); // Call the constructor of the base class

        // Initialize properties using 'this.page'
        this.loginButton = this.page.getByRole("button", { name: "Log In" });
        this.emailInputField = this.page.getByPlaceholder("Enter Email");
        this.passwordInputField = this.page.getByPlaceholder("Enter Password");
        this.signinButton = this.page.locator('[id="login-btn"]');
    }

    signin = async (username, password) => {
        await this.loginButton.waitFor();
        await this.loginButton.click();
        await this.emailInputField.waitFor();
        await this.emailInputField.fill(username);
        await this.passwordInputField.fill(password);
        await this.signinButton.click();
    };
}
