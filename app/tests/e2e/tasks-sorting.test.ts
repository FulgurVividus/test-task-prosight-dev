import { test, expect } from "@playwright/test";

const config = useRuntimeConfig();

test.describe("Tasks sorting", () => {
  test("sorts alphabetically when the button is clicked", async ({ page }) => {
    await page.goto(
      config.public.mode === "prod"
        ? "https://fulgur-vividus-test-task-prosight.netlify.app/tasks"
        : "http://localhost:3000/tasks"
    );

    const firstTaskBeforeSorting = await page.locator("[data-task]").first();

    await page.click("[data-testid='sort-toggle']");

    const firstTaskAfterSorting = await page.locator("[data-task]").first();

    expect(firstTaskBeforeSorting).not.toBe(firstTaskAfterSorting);
  });
});
