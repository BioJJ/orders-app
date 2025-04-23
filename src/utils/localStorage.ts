"use client";

export const STORAGE_KEY = "APP:";

export function getLocalStorage(key: string) {
  if (typeof window !== "undefined") {
    const data = window.localStorage.getItem(`${STORAGE_KEY}${key}`);

    return data ? JSON.parse(data) : undefined;
  } else {
    return undefined;
  }
}

export function setLocalStorage(key: string, value: unknown) {
  return window.localStorage.setItem(
    `${STORAGE_KEY}${key}`,
    JSON.stringify(value)
  );
}

export function removeLocalStorage(key: string) {
  return window.localStorage.removeItem(`${STORAGE_KEY}${key}`);
}
