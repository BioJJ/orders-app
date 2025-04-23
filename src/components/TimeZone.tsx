'use client'

import { useEffect } from 'react'
import { useLocalStorage } from 'react-use'

interface ITimeZoneProps {
  timeZone: string
}

export const TIME_ZONE_KEY = 'time_zone'

export function TimeZone({ timeZone }: Readonly<ITimeZoneProps>) {
  const [_, setTimeZone] = useLocalStorage(TIME_ZONE_KEY, timeZone)

  useEffect(() => {
    setTimeZone(timeZone)
  }, [setTimeZone, timeZone])

  return null
}
