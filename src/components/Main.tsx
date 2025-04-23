type MainProps = {
  children: React.ReactNode;
};
export function Main({ children }: Readonly<MainProps>) {
  return (
    <main className="relative flex flex-1 max-h-[calc(100vh-110px)] max-w-[calc(100vw-70px)]">
      {children}
    </main>
  );
}
