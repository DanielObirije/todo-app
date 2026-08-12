import "detox";

declare global {
  namespace jest {
    interface Matchers<R> {
      toBeVisible(): Promise<R>;
      toExist(): Promise<R>;
      toHaveText(text: string): Promise<R>;
      toHaveValue(value: string): Promise<R>;
    }
  }
}

export {};
