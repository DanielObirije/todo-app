import { element, by, expect } from "detox";
import { BaseScreen } from "./BaseScreen";
import { MESSAGES } from "../utils/constants";
import { Helpers } from "../utils/helpers";

export class HomeScreen extends BaseScreen {
  // --- Locators ---
  private get headerTitle() {
    return element(by.id("todo-header-title"));
  }
  private get todoInput() {
    return element(by.id("todo-input"));
  }
  private get inputBtn() {
    return element(by.id("input-btn"));
  }
  private get emptyTodoTitle() {
    return element(by.id("empty-todo-title"));
  }
  private get emptyTodoDescription() {
    return element(by.id("empty-todo-description"));
  }

  // Index-based element getters
  getTodoList(index = 0) {
    return element(by.id("todolist")).atIndex(index);
  }
  getCompletedTodoList(index = 0) {
    return element(by.id("todolist-completed")).atIndex(index);
  }
  getEditButton(index = 0) {
    return element(by.id("edit-todo-button")).atIndex(index);
  }
  getDeleteButton(index = 0) {
    return element(by.id("delete-todo-button")).atIndex(index);
  }
  getEditInput(index = 0) {
    return element(by.id("edit-input")).atIndex(index);
  }
  getSaveEditButton(index = 0) {
    return element(by.id("save-edit-button")).atIndex(index);
  }
  getSaveEditText(index = 0) {
    return element(by.id("save-edit-text")).atIndex(index);
  }
  getCancelEditButton(index = 0) {
    return element(by.id("cancel-edit-button")).atIndex(index);
  }
  getCancelEditText(index = 0) {
    return element(by.id("cancel-edit-text")).atIndex(index);
  }
  getCompletedCheckbox(index = 0) {
    return element(by.id("completed-task-checkbox")).atIndex(index);
  }

  // Text-based Locators
  private get deleteDialogTitle() {
    return element(by.text(MESSAGES.DELETE_TITLE));
  }
  private get deleteDialogMessage() {
    return element(by.text(MESSAGES.DELETE_CONFIRM));
  }
  private get dialogCancelBtn() {
    return element(by.text(MESSAGES.CANCEL));
  }
  private get dialogDeleteBtn() {
    return element(by.text(MESSAGES.DELETE));
  }

  // --- Actions & Assertions ---
  async verifyInitialUI() {
    await expect(this.headerTitle).toBeVisible();
    await expect(this.headerTitle).toHaveText(MESSAGES.HOME_HEADER);
    await expect(this.todoInput).toBeVisible();
    await expect(this.inputBtn).toBeVisible();
    await this.verifyEmptyStateVisible();
  }

  async verifyEmptyStateVisible() {
    await expect(this.emptyTodoTitle).toBeVisible();
    await expect(this.emptyTodoTitle).toHaveText(MESSAGES.EMPTY_TODO_TITLE);
    await expect(this.emptyTodoDescription).toBeVisible();
    await expect(this.emptyTodoDescription).toHaveText(
      MESSAGES.EMPTY_TODO_DESC,
    );
  }

  async addTodo(text: string) {
    await this.todoInput.typeText(text);
    await this.inputBtn.tap();
  }

  async verifyActionButtonsVisible(index = 0) {
    await expect(this.getEditButton(index)).toBeVisible();
    await expect(this.getDeleteButton(index)).toBeVisible();
  }

  async openEditModal(index = 0) {
    await Helpers.doubleTap(this.getEditButton(index));
  }

  async verifyEditModalUI(index = 0, expectedText: string) {
    await expect(this.getEditInput(index)).toBeVisible();
    await expect(this.getEditInput(index)).toHaveValue(expectedText);
    await expect(this.getSaveEditButton(index)).toBeVisible();
    await expect(this.getSaveEditText(index)).toHaveText(MESSAGES.SAVE);
    await expect(this.getCancelEditButton(index)).toBeVisible();
    await expect(this.getCancelEditText(index)).toHaveText(MESSAGES.CANCEL);
  }

  async cancelEditing(index = 0) {
    await this.getCancelEditButton(index).tap();
  }

  async updateTodo(index = 0, newText: string) {
    await this.getEditButton(index).tap();
    await this.getEditInput(index).clearText();
    await this.getEditInput(index).typeText(newText);
    await Helpers.doubleTap(this.getSaveEditButton(index));
  }

  async toggleTodoCompletion(index = 0) {
    await this.getCompletedCheckbox(index).tap();
  }

  async openDeleteDialog(index = 0) {
    await this.getDeleteButton(index).tap();
  }

  async verifyDeleteDialogVisible() {
    await expect(this.deleteDialogTitle).toBeVisible();
    await expect(this.deleteDialogMessage).toBeVisible();
    await expect(this.dialogCancelBtn).toBeVisible();
    await expect(this.dialogDeleteBtn).toBeVisible();
  }

  async cancelDelete() {
    await this.dialogCancelBtn.tap();
    await expect(this.deleteDialogTitle).not.toBeVisible();
  }

  async confirmDelete() {
    await this.dialogDeleteBtn.tap();
    await expect(this.deleteDialogTitle).not.toBeVisible();
  }
}
