import { test } from "@playwright/test";
import { BasePage } from "../page-objects/basePage";
import { Browse } from "../page-objects/browsePage";

test("duplicate topics", async ({ page }) => {
    const basePage = new BasePage(page);
    const browsepage = new Browse(page);
    await basePage.visit();
    await browsepage.duplicateTopics();
    await page.pause();
});
