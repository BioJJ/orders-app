"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/shared/context/AuthContextP";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import {
  faRightFromBracketLight,
  faUserLight
} from "@awesome.me/kit-7140cc018b/icons/kit/custom";

export default function MenuDropdown() {
  const { push } = useRouter();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const { session, signOut } = useAuth();

  const buttonRef = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handler(e: MouseEvent | TouchEvent) {
      if (buttonRef.current?.contains(e.target as Node)) {
        return;
      }
      if (!menuRef.current?.contains(e.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handler);

    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const menuItems = [
    {
      title: "Editar perfil",
      icon: faUserLight,
      handleClick: () =>
        push(`/app/meu-perfil/${session?.user.sub}?tab=myProfile`)
    },
    {
      title: "Sair",
      icon: faRightFromBracketLight,
      handleClick: signOut
    }
  ];

  const socialName = session?.user?.name?.trim();
  const name = session?.user.name?.trim();

  return (
    <div className="relative min-w-10 min-h-10">
      <button
        className="w-8 h-8 min-w-8 min-h-8"
        ref={buttonRef}
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <Image src="/avatar.png" width={32} height={32} alt="Avatar" />
      </button>

      {isOpen && (
        <div
          ref={menuRef}
          className="absolute top-10 right-0 w-[280px] bg-white rounded-lg px-4 py-7 flex flex-col gap-7 z-50 shadow-md"
        >
          <div className="flex gap-2">
            <Image
              className="w-[46px] h-[46px]"
              src="/avatar.png"
              width={46}
              height={46}
              alt="Avatar"
            />
            <div className="flex flex-col w-full gap-1 truncate">
              <h1 className="text-lg leading-[22px] font-bold text-interlis-fonts-300 truncate">
                {socialName ? socialName : name}
              </h1>
              <h2 className="text-base leading-5 truncate text-interlis-fonts-100">
                {session?.user.name}
              </h2>
            </div>
          </div>
          <div className="flex flex-col gap-3.5">
            {menuItems.map((item) => (
              <button
                key={item.title}
                onClick={item.handleClick}
                className="flex gap-3.5 px-4 py-2 rounded-lg border border-interlis-tables-300 hover:bg-interlis-tables-200 cursor-pointer items-center"
              >
                <FontAwesomeIcon
                  className="text-interlis-icons-600"
                  fontSize={24}
                  icon={item.icon as IconProp}
                />
                <span className="text-sm leading-[18px] font-bold text-interlis-fonts-300">
                  {item.title}
                </span>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
