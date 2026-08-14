import { device, expect } from "detox";
import { HomeScreen } from "../pages/HomeScreen";
import { SettingsScreen } from "../pages/SettingsScreen";
import {
  EDITED_TODO_TITLE,
  EXPECTED_STATS,
  FIRST_ITEM_INDEX,
  INITIAL_TODO_TITLE,
  SECONDARY_TODO_TITLE,
} from "../utils/testData";

describe("Todo App", () => {
  let homeScreen: HomeScreen;
  let settingsScreen: SettingsScreen;

  beforeAll(async () => {
    await device.launchApp();
    homeScreen = new HomeScreen();
    settingsScreen = new SettingsScreen();
  });

  describe("Home Screen", () => {
    it("should display the home screen", async () => {
      await homeScreen.verifyInitialUI();
    });

    describe("Todo Management", () => {
      it("should create a new todo", async () => {
        await homeScreen.navigateToTodoTab();
        await homeScreen.addTodo(INITIAL_TODO_TITLE);

        await expect(homeScreen.getTodoList(FIRST_ITEM_INDEX)).toHaveText(
          INITIAL_TODO_TITLE,
        );
      });

      it("should display todo action buttons", async () => {
        await homeScreen.verifyActionButtonsVisible(FIRST_ITEM_INDEX);
      });

      describe("Edit Todo", () => {
        it("should open edit modal with existing todo text", async () => {
          await homeScreen.openEditModal(FIRST_ITEM_INDEX);
          await homeScreen.verifyEditModalUI(
            FIRST_ITEM_INDEX,
            INITIAL_TODO_TITLE,
          );
        });

        it("should cancel editing without saving changes", async () => {
          await homeScreen.cancelEditing(FIRST_ITEM_INDEX);
          await expect(homeScreen.getTodoList(FIRST_ITEM_INDEX)).toHaveText(
            INITIAL_TODO_TITLE,
          );
        });

        it("should edit and save todo successfully", async () => {
          await homeScreen.updateTodo(FIRST_ITEM_INDEX, EDITED_TODO_TITLE);
          await expect(homeScreen.getTodoList(FIRST_ITEM_INDEX)).toHaveText(
            EDITED_TODO_TITLE,
          );
        });
      });

      describe("Complete Todo", () => {
        it("should mark a todo as completed", async () => {
          await homeScreen.toggleTodoCompletion(FIRST_ITEM_INDEX);
          await expect(
            homeScreen.getCompletedTodoList(FIRST_ITEM_INDEX),
          ).toBeVisible();
          await expect(
            homeScreen.getTodoList(FIRST_ITEM_INDEX),
          ).not.toBeVisible();
        });

        it("should unmark a completed todo", async () => {
          await homeScreen.toggleTodoCompletion(FIRST_ITEM_INDEX);
          await expect(homeScreen.getTodoList(FIRST_ITEM_INDEX)).toBeVisible();
          await expect(
            homeScreen.getCompletedTodoList(FIRST_ITEM_INDEX),
          ).not.toBeVisible();
        });
      });

      describe("Delete Todo", () => {
        it("should show delete confirmation dialog", async () => {
          await homeScreen.openDeleteDialog(FIRST_ITEM_INDEX);
          await homeScreen.verifyDeleteDialogVisible();
        });

        it("should cancel delete and keep todo", async () => {
          await homeScreen.cancelDelete();
          await expect(homeScreen.getTodoList(FIRST_ITEM_INDEX)).toBeVisible();
        });

        it("should confirm delete and remove todo", async () => {
          await homeScreen.openDeleteDialog(FIRST_ITEM_INDEX);
          await homeScreen.confirmDelete();

          await expect(
            homeScreen.getTodoList(FIRST_ITEM_INDEX),
          ).not.toBeVisible();
          await homeScreen.verifyEmptyStateVisible();
        });
      });
    });
  });

  describe("Settings Screen", () => {
    it("should display settings screen elements", async () => {
      await settingsScreen.navigateToSettingsTab();
      await settingsScreen.verifySettingsElements();
    });

    describe("Dark Mode", () => {
      it("should toggle dark mode on and off", async () => {
        await settingsScreen.toggleDarkMode();
      });
    });

    describe("Todo Statistics", () => {
      it("should update progress stats when todos are created and completed", async () => {
        // Initial stats - no todos
        const empty = EXPECTED_STATS.EMPTY;
        await settingsScreen.verifyStats(
          empty.total,
          empty.completed,
          empty.active,
        );

        // Navigate to home and create a todo
        await homeScreen.navigateToTodoTab();
        await homeScreen.addTodo(SECONDARY_TODO_TITLE);

        // Mark as completed then unmark (toggle)
        await homeScreen.toggleTodoCompletion(FIRST_ITEM_INDEX);
        await homeScreen.toggleTodoCompletion(FIRST_ITEM_INDEX);

        // Verify stats - todo is active
        await settingsScreen.navigateToSettingsTab();
        const activeState = EXPECTED_STATS.ACTIVE_TASK;
        await settingsScreen.verifyStats(
          activeState.total,
          activeState.completed,
          activeState.active,
        );

        // Mark as completed
        await homeScreen.navigateToTodoTab();
        await homeScreen.toggleTodoCompletion(FIRST_ITEM_INDEX);

        // Verify stats - todo is completed
        await settingsScreen.navigateToSettingsTab();
        const completedState = EXPECTED_STATS.COMPLETED_TASK;
        await settingsScreen.verifyStats(
          completedState.total,
          completedState.completed,
          completedState.active,
        );
      });
    });

    describe("Reset App", () => {
      it("should display danger zone and reset button", async () => {
        await settingsScreen.verifyDangerZone();
      });

      it("should show reset confirmation dialog and cancel reset when Cancel is tapped", async () => {
        await settingsScreen.openResetDialog();
        await settingsScreen.verifyResetDialogVisible();
        await settingsScreen.cancelReset();
      });

      it("should confirm reset and delete all todos", async () => {
        await settingsScreen.openResetDialog();
        await settingsScreen.confirmReset();
      });
    });
  });
});
