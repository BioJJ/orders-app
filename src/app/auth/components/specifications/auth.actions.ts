'use server'

import { signIn } from "@/services/adapter/auth"
import { SignInDto } from "@/services/models/auth.types"

export async function signInAction(body: SignInDto) {
  try {
    const res = await signIn(body)

    return {
      res,
      message: 'Logado com sucesso',
      ok: true,
    }
  } catch (err) {
    const message = (err as Error).message
    return {
      ok: false,
      message,
    }
  }
}
