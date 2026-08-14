// const listItems = [
//   {
//     todoItem: "Jollof Rice",
//     editedItem: "Fried Rice",
//   },
//   {
//     todoItem: "Pasta Carbonara",
//     editedItem: "Chicken Shawarma",
//   },
// ];

// describe("Todo App", () => {
//   beforeAll(async () => {
//     await device.launchApp();
//   });

//   describe("Home Screen", () => {
//     it("should display the home screen", async () => {
//       await expect(element(by.id("todo-header-title"))).toBeVisible();
//       await expect(element(by.id("todo-header-title"))).toHaveText(
//         "Today's Tasks 👀",
//       );
//       await expect(element(by.id("todo-input"))).toBeVisible();
//       await expect(element(by.id("input-btn"))).toBeVisible();
//       await expect(element(by.id("empty-todo-title"))).toBeVisible();
//       await expect(element(by.id("empty-todo-title"))).toHaveText(
//         "No todos yet!",
//       );
//       await expect(element(by.id("empty-todo-description"))).toBeVisible();
//       await expect(element(by.id("empty-todo-description"))).toHaveText(
//         "Add your first todo above to get started",
//       );
//     });

//     describe("Todo Management", () => {
//       it("should create a new todo", async () => {
//         await element(by.label("todo-tab")).tap();
//         await expect(element(by.id("todo-header-title"))).toBeVisible();

//         await element(by.id("todo-input")).typeText(listItems[0].todoItem);
//         await element(by.id("input-btn")).tap();

//         await expect(element(by.id("todolist")).atIndex(0)).toHaveText(
//           listItems[0].todoItem,
//         );
//       });

//       it("should display todo action buttons", async () => {
//         await expect(
//           element(by.id("edit-todo-button")).atIndex(0),
//         ).toBeVisible();
//         await expect(
//           element(by.id("delete-todo-button")).atIndex(0),
//         ).toBeVisible();
//       });

//     describe("Edit Todo", () => {
//       it("should open edit modal with existing todo text", async () => {
//         const editButton = element(by.id("edit-todo-button")).atIndex(0);
//         await editButton.tap();
//         await editButton.tap();

//         await expect(element(by.id("edit-input")).atIndex(0)).toBeVisible();
//         await expect(element(by.id("edit-input")).atIndex(0)).toHaveValue(
//           listItems[0].todoItem,
//         );

//         await expect(
//           element(by.id("save-edit-button")).atIndex(0),
//         ).toBeVisible();
//         await expect(element(by.id("save-edit-text")).atIndex(0)).toHaveText(
//           "Save",
//         );

//         await expect(
//           element(by.id("cancel-edit-button")).atIndex(0),
//         ).toBeVisible();
//         await expect(
//           element(by.id("cancel-edit-text")).atIndex(0),
//         ).toHaveText("Cancel");
//       });

//       it("should cancel editing without saving changes", async () => {
//         await element(by.id("cancel-edit-button")).atIndex(0).tap();
//         await expect(element(by.id("todolist")).atIndex(0)).toHaveText(
//           listItems[0].todoItem,
//         );
//       });

//       it("should edit and save todo successfully", async () => {
//         const editButton = element(by.id("edit-todo-button")).atIndex(0);
//         await editButton.tap();

//         await element(by.id("edit-input")).clearText();
//         await element(by.id("edit-input")).typeText(listItems[0].editedItem);
//         await element(by.id("save-edit-button")).atIndex(0).tap();
//         await element(by.id("save-edit-button")).atIndex(0).tap();
//         await expect(element(by.id("todolist")).atIndex(0)).toHaveText(
//           listItems[0].editedItem,
//         );
//       });
//     });

//     describe("Complete Todo", () => {
//       it("should mark a todo as completed", async () => {
//         await element(by.id("completed-task-checkbox")).atIndex(0).tap();
//         await expect(
//           element(by.id("todolist-completed")).atIndex(0),
//         ).toBeVisible();
//         await expect(element(by.id("todolist")).atIndex(0)).not.toBeVisible();
//       });

//       it("should unmark a completed todo", async () => {
//         await element(by.id("completed-task-checkbox")).atIndex(0).tap();
//         await expect(element(by.id("todolist")).atIndex(0)).toBeVisible();
//         await expect(
//           element(by.id("todolist-completed")).atIndex(0),
//         ).not.toBeVisible();
//       });
//     });

//     describe("Delete Todo", () => {
//       it("should show delete confirmation dialog", async () => {
//         const deleteButton = element(by.id("delete-todo-button")).atIndex(0);
//         await deleteButton.tap();

//         await expect(element(by.text("Delete Todo"))).toBeVisible();
//         await expect(
//           element(by.text("Are you sure you want to delete this todo?")),
//         ).toBeVisible();
//         await expect(element(by.text("Cancel"))).toBeVisible();
//         await expect(element(by.text("Delete"))).toBeVisible();
//       });

//       it("should cancel delete and keep todo", async () => {
//         await element(by.text("Cancel")).tap();
//         await expect(element(by.text("Delete Todo"))).not.toBeVisible();
//         await expect(element(by.id("todolist")).atIndex(0)).toBeVisible();
//       });

//       it("should confirm delete and remove todo", async () => {
//         const deleteButton = element(by.id("delete-todo-button")).atIndex(0);
//         await deleteButton.tap();

//         await element(by.text("Delete")).tap();
//         await expect(element(by.text("Delete Todo"))).not.toBeVisible();
//         await expect(element(by.id("todolist")).atIndex(0)).not.toBeVisible();

//         // Verify empty state
//         await expect(element(by.id("empty-todo-title"))).toHaveText(
//           "No todos yet!",
//         );
//         await expect(element(by.id("empty-todo-description"))).toHaveText(
//           "Add your first todo above to get started",
//         );
//       });
//     });
//     });
//   });

//   describe("Settings Screen", () => {
//     it("should display settings screen elements", async () => {
//       await element(by.label("settings-tab")).tap();
//       await expect(element(by.id("settings-screen-text"))).toBeVisible();
//       await expect(element(by.id("total-todo-value"))).toBeVisible();
//       await expect(element(by.id("total-todo-text"))).toBeVisible();
//       await expect(element(by.id("total-todo-text"))).toHaveText("Total Todos");

//       await expect(element(by.id("completed-todo-value"))).toBeVisible();
//       await expect(element(by.id("completed-todo-text"))).toBeVisible();
//       await expect(element(by.id("completed-todo-text"))).toHaveText(
//         "Completed",
//       );

//       await expect(element(by.id("active-todo-value"))).toBeVisible();
//       await expect(element(by.id("active-todo-text"))).toBeVisible();
//       await expect(element(by.id("active-todo-text"))).toHaveText("Active");

//       await expect(element(by.id("pereference-text"))).toBeVisible();
//       await expect(element(by.id("darkmood-text"))).toHaveText("Dark Mode");
//       await expect(element(by.id("lightmood-btn"))).toBeVisible();
//     });

//     describe("Dark Mode", () => {
//       it("should toggle dark mode on and off", async () => {
//         const darkModeButton = element(by.id("darkmood-btn"));
//         const lightModeButton = element(by.id("lightmood-btn"));

//         // Initially light mode
//         await expect(lightModeButton).toBeVisible();
//         await expect(darkModeButton).not.toBeVisible();

//         // Toggle to dark mode
//         await lightModeButton.tap();
//         await expect(darkModeButton).toBeVisible();
//         await expect(lightModeButton).not.toBeVisible();

//         // Toggle back to light mode
//         await darkModeButton.tap();
//         await expect(lightModeButton).toBeVisible();
//         await expect(darkModeButton).not.toBeVisible();
//       });
//     });

//     describe("Todo Statistics", () => {
//       it("should update progress stats when todos are created and completed", async () => {
//         // Initial stats - no todos
//         await expect(element(by.id("total-todo-value"))).toHaveText("0");
//         await expect(element(by.id("completed-todo-value"))).toHaveText("0");
//         await expect(element(by.id("active-todo-value"))).toHaveText("0");

//         // Navigate to home and create a todo
//         await element(by.label("todo-tab")).tap();
//         await element(by.id("todo-input")).typeText(listItems[1].todoItem);
//         await element(by.id("input-btn")).tap();

//         // Mark as completed then unmark (toggle)
//         await element(by.id("completed-task-checkbox")).atIndex(0).tap();
//         await element(by.id("completed-task-checkbox")).atIndex(0).tap();

//         // // Verify stats - todo is active (not completed)
//         await element(by.label("settings-tab")).tap();
//         await expect(element(by.id("total-todo-value"))).toHaveText("1");
//         await expect(element(by.id("completed-todo-value"))).toHaveText("1");
//         await expect(element(by.id("active-todo-value"))).toHaveText("0");

//         // Mark as completed
//         await element(by.label("todo-tab")).tap();
//         await element(by.id("completed-task-checkbox")).atIndex(0).tap();

//         // Verify stats - todo is completed
//         await element(by.label("settings-tab")).tap();
//         await expect(element(by.id("total-todo-value"))).toHaveText("1");
//         await expect(element(by.id("completed-todo-value"))).toHaveText("0");
//         await expect(element(by.id("active-todo-value"))).toHaveText("1");
//       });
//     });

//         describe("Reset App", () => {
//           it("should display danger zone and reset button", async () => {
//             await element(by.id("settings-screen")).scrollTo("bottom");
//             await expect(element(by.id("danger-zone-text"))).toBeVisible();
//             await expect(element(by.id("danger-zone-text"))).toHaveText(
//               "Danger Zone",
//             );
//             await expect(element(by.id("reset-btn-text"))).toBeVisible();
//             await expect(element(by.id("reset-btn-text"))).toHaveText("Reset App");
//           });

//           it("should show reset confirmation dialog and cancel reset when Cancel is tapped", async () => {
//             await element(by.id("reset-btn")).tap();

//             await expect(element(by.text("Reset App Alert"))).toBeVisible();
//             await expect(
//               element(
//                 by.text(
//                   "⚠️ This will delete ALL your todos permanently. This action cannot be undone.",
//                 ),
//               ),
//             ).toBeVisible();

//             await expect(element(by.text("Cancel"))).toBeVisible();
//             await expect(element(by.text("Delete All"))).toBeVisible();
//             await element(by.text("Cancel")).tap();
//           });

//           it("should confirm reset and delete all todos", async () => {
//             await element(by.id("reset-btn")).tap();
//             await element(by.text("Delete All")).tap();
//           });
//     });
//   });
// });
