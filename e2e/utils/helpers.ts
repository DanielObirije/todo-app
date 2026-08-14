import { element, by } from "detox";

export class Helpers {
  static async doubleTap(elementFinder: Detox.NativeElement) {
    await elementFinder.tap();
    await elementFinder.tap();
  }

  static async navigateToTab(tabLabel: string) {
    await element(by.label(tabLabel)).tap();
  }
}
