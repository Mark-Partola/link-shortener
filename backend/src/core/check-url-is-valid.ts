export function checkURLIsValid(value: string): boolean {
  try {
    new URL(value);

    return true;
  } catch {
    return false;
  }
}
