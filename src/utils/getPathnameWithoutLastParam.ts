export function getPathnameWithoutLastParam(pathname: string) {
  const splittedPath = pathname.split('/')
  splittedPath.pop()
  return splittedPath.join('/')
}
