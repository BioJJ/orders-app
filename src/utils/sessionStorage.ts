'use client'

export const STORAGE_KEY = 'APP:'

export function getSessionStorage(key: string) {
  if (typeof window !== 'undefined') {
    const data = window.sessionStorage.getItem(`${STORAGE_KEY}${key}`)

    return data ? JSON.parse(data) : undefined
  } else {
    return undefined
  }
}

export function setSessionStorage(key: string, value: unknown) {
  return window.sessionStorage.setItem(
    `${STORAGE_KEY}${key}`,
    JSON.stringify(value),
  )
}

export function removeSessionStorage(key: string) {
  return window.sessionStorage.removeItem(`${STORAGE_KEY}${key}`)
}
