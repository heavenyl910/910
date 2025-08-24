// credentials.ts
const credentials = new Map<string, unknown>();

export function setCred<T>(name: string, value: T): void {
  credentials.set(name, value);
}

export function getCred<T = unknown>(name: string): T | undefined {
  return credentials.get(name) as T | undefined;
}