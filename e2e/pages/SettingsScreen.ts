import { element, by, expect } from "detox";
import { BaseScreen } from "./BaseScreen";
import { MESSAGES } from "../utils/constants";

export class SettingsScreen extends BaseScreen {
  // --- Locators ---
  private get settingsScreenContainer() {
    return element(by.id("settings-screen"));
  }
  private get settingsScreenText() {
    return element(by.id("settings-screen-text"));
  }
  private get totalTodoValue() {
    return element(by.id("total-todo-value"));
  }
  private get totalTodoText() {
    return element(by.id("total-todo-text"));
  }
  private get completedTodoValue() {
    return element(by.id("completed-todo-value"));
  }
  private get completedTodoText() {
    return element(by.id("completed-todo-text"));
  }
  private get activeTodoValue() {
    return element(by.id("active-todo-value"));
  }
  private get activeTodoText() {
    return element(by.id("active-todo-text"));
  }
  private get preferenceText() {
    return element(by.id("pereference-text"));
  }
  private get darkModeText() {
    return element(by.id("darkmood-text"));
  }
  private get lightModeBtn() {
    return element(by.id("lightmood-btn"));
  }
  private get darkModeBtn() {
    return element(by.id("darkmood-btn"));
  }
  private get dangerZoneText() {
    return element(by.id("danger-zone-text"));
  }
  private get resetBtn() {
    return element(by.id("reset-btn"));
  }
  private get resetBtnText() {
    return element(by.id("reset-btn-text"));
  }

  // Text Locators
  private get resetAlertTitle() {
    return element(by.text(MESSAGES.RESET_ALERT_TITLE));
  }
  private get resetAlertDesc() {
    return element(by.text(MESSAGES.RESET_ALERT_DESC));
  }
  private get cancelBtn() {
    return element(by.text(MESSAGES.CANCEL));
  }
  private get deleteAllBtn() {
    return element(by.text(MESSAGES.DELETE_ALL));
  }

  // --- Actions & Assertions ---
  async verifySettingsElements() {
    await expect(this.settingsScreenText).toBeVisible();
    await expect(this.totalTodoValue).toBeVisible();
    await expect(this.totalTodoText).toHaveText(MESSAGES.TOTAL_TODOS);

    await expect(this.completedTodoValue).toBeVisible();
    await expect(this.completedTodoText).toHaveText(MESSAGES.COMPLETED);

    await expect(this.activeTodoValue).toBeVisible();
    await expect(this.activeTodoText).toHaveText(MESSAGES.ACTIVE);

    await expect(this.preferenceText).toBeVisible();
    await expect(this.darkModeText).toHaveText(MESSAGES.DARK_MODE);
    await expect(this.lightModeBtn).toBeVisible();
  }

  async verifyStats(total: string, completed: string, active: string) {
    await expect(this.totalTodoValue).toHaveText(total);
    await expect(this.completedTodoValue).toHaveText(completed);
    await expect(this.activeTodoValue).toHaveText(active);
  }

  async toggleDarkMode() {
    // Initial Light Mode state
    await expect(this.lightModeBtn).toBeVisible();
    await expect(this.darkModeBtn).not.toBeVisible();

    // Toggle Dark Mode
    await this.lightModeBtn.tap();
    await expect(this.darkModeBtn).toBeVisible();
    await expect(this.lightModeBtn).not.toBeVisible();

    // Toggle back to Light Mode
    await this.darkModeBtn.tap();
    await expect(this.lightModeBtn).toBeVisible();
    await expect(this.darkModeBtn).not.toBeVisible();
  }

  async scrollToBottom() {
    await this.settingsScreenContainer.scrollTo("bottom");
  }

  async verifyDangerZone() {
    await this.scrollToBottom();
    await expect(this.dangerZoneText).toBeVisible();
    await expect(this.dangerZoneText).toHaveText(MESSAGES.DANGER_ZONE);
    await expect(this.resetBtnText).toBeVisible();
    await expect(this.resetBtnText).toHaveText(MESSAGES.RESET_APP);
  }

  async openResetDialog() {
    await this.resetBtn.tap();
  }

  async verifyResetDialogVisible() {
    await expect(this.resetAlertTitle).toBeVisible();
    await expect(this.resetAlertDesc).toBeVisible();
    await expect(this.cancelBtn).toBeVisible();
    await expect(this.deleteAllBtn).toBeVisible();
  }

  async cancelReset() {
    await this.cancelBtn.tap();
  }

  async confirmReset() {
    await this.deleteAllBtn.tap();
  }
}
