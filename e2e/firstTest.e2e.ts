describe("Todo App", () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  describe("Home screen", () => {
    it("should display the home screen", async () => {
      await expect(element(by.id("todo-header-title"))).toBeVisible();
      await expect(element(by.id("todo-header-title"))).toHaveText(
        "Today's Tasks 👀",
      );
      await expect(element(by.id("todo-input"))).toBeVisible();
      await expect(element(by.id("input-btn"))).toBeVisible();
      await expect(element(by.id("empty-todo-title"))).toBeVisible();
      await expect(element(by.id("empty-todo-title"))).toHaveText(
        "No todos yet!",
      );
      await expect(element(by.id("empty-todo-description"))).toBeVisible();
      await expect(element(by.id("empty-todo-description"))).toHaveText(
        "Add your first todo above to get started",
      );
    });

    it("should display the settings screen", async () => {
      await element(by.label("settings-tab")).tap();
      await expect(element(by.id("settings-screen"))).toBeVisible();
      await expect(element(by.id("total-todo-value"))).toBeVisible();
      await expect(element(by.id("total-todo-text"))).toBeVisible();
      await expect(element(by.id("total-todo-text"))).toHaveText("Total Todos");

      await expect(element(by.id("completed-todo-value"))).toBeVisible();
      await expect(element(by.id("completed-todo-text"))).toBeVisible();
      await expect(element(by.id("completed-todo-text"))).toHaveText(
        "Completed",
      );

      await expect(element(by.id("active-todo-value"))).toBeVisible();
      await expect(element(by.id("active-todo-text"))).toBeVisible();
      await expect(element(by.id("active-todo-text"))).toHaveText("Active");

      await expect(element(by.id("pereference-text"))).toBeVisible();
      await expect(element(by.id("darkmood-text"))).toHaveText("Dark Mode");
      await expect(element(by.id("pereference-text"))).toBeVisible();
      await expect(element(by.id("lightmood-btn"))).toBeVisible();
    });

    it("should toggle dark mode", async () => {
      const darkModeButton = element(by.id("darkmood-btn"));
      const lightModeButton = element(by.id("lightmood-btn"));

      // Initially light mode
      await expect(lightModeButton).toBeVisible();
      await expect(darkModeButton).not.toBeVisible();

      // Toggle to dark mode
      await lightModeButton.tap();

      await expect(darkModeButton).toBeVisible();
      await expect(lightModeButton).not.toBeVisible();

      // Toggle back to light mode
      await darkModeButton.tap();

      await expect(lightModeButton).toBeVisible();
      await expect(darkModeButton).not.toBeVisible();
    });

    it("should  be able to create todo on  home screen", async () => {
      await element(by.label("todo-tab")).tap();
      await expect(element(by.id("todo-header-title"))).toBeVisible();
      await expect(element(by.id("todo-header-title"))).toHaveText(
        "Today's Tasks 👀",
      );
    });
  });
});
