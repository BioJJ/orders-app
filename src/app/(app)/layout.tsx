import { Header } from "@/components/Header";
import { Main } from "@/components/Main";
import { AppLayoutProvider } from "@/components/Providers/AppLayoutProvider";
import { Sidebar } from "@/components/Sidebar";
import { TimeZone } from "@/components/TimeZone";
import { Versions } from "@/components/Versions";

export default async function Layout({
  children
}: {
  readonly children: React.ReactNode;
}) {
  const currentTime = new Date().toLocaleString("pt-BR", {
    timeZone: "America/Manaus"
  });
  return (
    <AppLayoutProvider>
      <div className="relative flex w-full">
        <Sidebar />
        <div className="flex flex-col w-full min-h-screen overflow-x-hidden px-4 gap-4 py-4 ml-[66px] 2xl:ml-0">
          <Header />
          <Main>{children}</Main>
        </div>
        <Versions />
      </div>
      <TimeZone timeZone={currentTime} />
    </AppLayoutProvider>
  );
}
