import { AuthContextProvider } from "@/shared/context/AuthContextP";

type RootLayoutProvidersProps = {
  children: React.ReactNode;
};

export function RootLayoutProvider({
  children
}: Readonly<RootLayoutProvidersProps>) {
  return <AuthContextProvider>{children}</AuthContextProvider>;
}
