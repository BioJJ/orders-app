import { SidebarProvider } from "@/shared/context/SidebarContext";

type AppLayoutProvidersProps = {
  children: React.ReactNode;
};

export function AppLayoutProvider({
  children
}: Readonly<AppLayoutProvidersProps>) {
  return <SidebarProvider>{children}</SidebarProvider>;
}
