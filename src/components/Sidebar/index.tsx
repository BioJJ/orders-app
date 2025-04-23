"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { LogoutButton } from "./LogoutButton";
import { Menu } from "./Menu";
import { cn } from "@/utils/cn";
import { getSidebarItems } from "@/utils/getSidebarItems";
import { useSidebar } from "@/shared/context/SidebarContext";

export function Sidebar() {
  const pathname = usePathname();
  const { isSidebarOpen, handleToggleOpenSidebar, handleCloseSidebar } =
    useSidebar();

  const menuList = getSidebarItems();

  useEffect(() => {
    if (window.innerWidth < 1440) {
      handleCloseSidebar();
    }
  }, [pathname, handleCloseSidebar]);

  return (
    <>
      <button
        id="overlay"
        className={cn({
          "fixed inset-0 z-20 bg-black opacity-75 cursor-default 2xl:hidden":
            isSidebarOpen,
          hidden: !isSidebarOpen
        })}
        type="button"
        onClick={handleToggleOpenSidebar}
        aria-label="Close Modal Overlay"
      />
      <aside
        className={cn(
          "h-screen bg-white fixed 2xl:relative flex flex-col justify-between px-[5px] overflow-y-auto pb-6 pt-4",
          {
            "min-w-[224px] max-w-[224px] z-[21]": isSidebarOpen,
            "w-[70px]": !isSidebarOpen
          }
        )}
      >
        <div className="flex flex-col gap-2">
          <div className="flex items-center justify-center">
            {isSidebarOpen && (
              <Link href={"/dashboard"}>
                <Image
                  src="/logo-orders.jpg"
                  width={160}
                  height={40}
                  alt="Logo orders"
                  priority
                />
              </Link>
            )}
            {!isSidebarOpen && (
              <Image
                className="h-10"
                src="/logo-orders.jpg"
                width={28}
                height={40}
                alt="Logo orders"
                priority
              />
            )}
          </div>
          <Menu data={menuList as any} />
        </div>
        <div className="flex flex-col gap-2">
          <LogoutButton />
        </div>
      </aside>
    </>
  );
}
