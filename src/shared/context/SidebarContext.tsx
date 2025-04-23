"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState
} from "react";

type SidebarContextType = {
  isSidebarOpen: boolean;
  showNested: {
    [key: string]: boolean;
  };
  toggleNested: (title: string, isFirstMenu: boolean) => void;
  handleToggleOpenSidebar: () => void;
  handleCloseSidebar: () => void;
  handleOpenSidebar: () => void;
};

export const SidebarContext = createContext({} as SidebarContextType);

type SidebarContextProviderProps = {
  children: React.ReactNode;
};

export function SidebarProvider({
  children
}: Readonly<SidebarContextProviderProps>) {
  const [showNested, setShowNested] = useState<{ [key: string]: boolean }>({});
  const [isSidebarOpen, setIsSidebarOpen] = useState(() => {
    if (typeof window !== "undefined" && window.innerWidth < 1440) return false;

    return true;
  });

  function handleToggleOpenSidebar() {
    setIsSidebarOpen((prev) => !prev);
  }

  const handleCloseSidebar = useCallback(() => {
    setIsSidebarOpen(false);
  }, []);

  const handleOpenSidebar = useCallback(() => {
    setIsSidebarOpen(true);
  }, []);

  const toggleNested = useCallback(
    (tag: string, isFirstMenu: boolean) => {
      if (!isSidebarOpen) return;

      if (isFirstMenu) {
        setShowNested({ [tag]: !showNested[tag] });
      } else {
        setShowNested({ ...showNested, [tag]: !showNested[tag] });
      }
    },
    [isSidebarOpen, showNested]
  );

  useEffect(() => {
    setShowNested({});
  }, [isSidebarOpen]);

  const value = useMemo(
    () => ({
      isSidebarOpen,
      showNested,
      handleToggleOpenSidebar,
      handleCloseSidebar,
      handleOpenSidebar,
      toggleNested
    }),
    [
      isSidebarOpen,
      showNested,
      handleCloseSidebar,
      handleOpenSidebar,
      toggleNested
    ]
  );

  return (
    <SidebarContext.Provider value={value}>{children}</SidebarContext.Provider>
  );
}

export function useSidebar() {
  return useContext(SidebarContext);
}
