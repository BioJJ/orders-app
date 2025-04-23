import * as jwt from 'jsonwebtoken'

export function jwtDecode(
  token: string,
  options?: jwt.DecodeOptions,
): jwt.JwtPayload {
  const decoded = jwt.decode(token, { ...options, json: true })

  if (!decoded) {
    throw new Error('provided token does not decode as JWT')
  }

  return decoded
}
