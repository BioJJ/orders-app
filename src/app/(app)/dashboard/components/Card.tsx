"use client";

import { useRouter } from "next/navigation";
import "react-loading-skeleton/dist/skeleton.css";
import { KeyboardEvent } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { IconDefinition } from "@fortawesome/pro-solid-svg-icons";

interface ICard {
  title: string;
  icon: IconDefinition;
  classNameIcon: string;
  status: string;
  url: string;
  count?: number;
}

export function Card({
  title,
  icon,
  classNameIcon,
  status,
  url,
  count
}: Readonly<ICard>) {
  const router = useRouter();

  console.log(`${url}?page=1&status_sample_name=${status}`);

  return (
    <div
      onClick={() => router.push(`${url}`)}
      className="flex flex-col px-6 py-4 rounded-lg shadow-sm cursor-pointer bg-interlis-cards-100 hover:drop-shadow-lg h-28"
      tabIndex={1}
    >
      <span className="text-lg text-left text-interlis-fonts-300 whitespace-nowrap">
        {title}
      </span>
      <div className="inline-flex items-center h-full gap-4">
        <div className="w-8 h-8">
          <FontAwesomeIcon
            icon={icon as IconProp}
            size="2x"
            className={classNameIcon}
          />
        </div>

        <div className="w-full">
          <span className="p-0 text-right text-[32px]/[38px] text-interlis-fonts-400">
            {count ?? 0}
          </span>
        </div>
      </div>
    </div>
  );
}
