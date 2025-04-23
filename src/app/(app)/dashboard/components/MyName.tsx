'use client'

// import { useAuth } from '@/shared/context/AuthContextP'

export function MyName() {
  // const { session } = useAuth()

  return (
    <div className="inline-flex flex-wrap items-baseline py-1">
      <span className="text-2xl font-bold text-interlis-fonts-300">
        Bem-Vindo&nbsp;
      </span>
      <strong className="text-2xl font-bold text-interlis-fonts-300">
        {/* {session?.user.socialName?.trim() || session?.user.name}, */}

        Jefferson Coelho
      </strong>
    </div>
  )
}
