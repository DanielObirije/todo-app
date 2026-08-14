import { Helpers } from "../utils/helpers";
import { TABS } from "../utils/constants";

export class BaseScreen {
  async navigateToTodoTab() {
    await Helpers.navigateToTab(TABS.TODO);
  }

  async navigateToSettingsTab() {
    await Helpers.navigateToTab(TABS.SETTINGS);
  }
}
