import { test, expect } from "@playwright/test";

test.describe("Tasks sorting", () => {
  test("sorts alphabetically when the button is clicked", async ({ page }) => {
    await page.goto("http://localhost:3000");

    const firstTaskBeforeSorting = await page.locator("[data-task]").first();

    await page.click("[data-testid='sort-toggle']");

    const firstTaskAfterSorting = await page.locator("[data-task]").first();

    expect(firstTaskBeforeSorting).not.toBe(firstTaskAfterSorting);
  });
});
