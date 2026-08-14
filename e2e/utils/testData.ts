export interface TodoItem {
  todoItem: string;
  editedItem: string;
}

export const listItems: TodoItem[] = [
  {
    todoItem: "Jollof Rice",
    editedItem: "Fried Rice",
  },
  {
    todoItem: "Pasta Carbonara",
    editedItem: "Chicken Shawarma",
  },
];


// --- Domain Constants ---
export const FIRST_ITEM_INDEX = 0;

export const PRIMARY_TODO = listItems[0];
export const SECONDARY_TODO = listItems[1];

export const INITIAL_TODO_TITLE = PRIMARY_TODO.todoItem;
export const EDITED_TODO_TITLE = PRIMARY_TODO.editedItem;
export const SECONDARY_TODO_TITLE = SECONDARY_TODO.todoItem;

// --- Statistics Expectations ---
export const EXPECTED_STATS = {
  EMPTY: { total: "0", completed: "0", active: "0" },
  ACTIVE_TASK: { total: "1", completed: "1", active: "0" },
  COMPLETED_TASK: { total: "1", completed: "0", active: "1" },
} as const;