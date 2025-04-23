"use client";

import React, { ReactNode } from "react";
import { usePathname, useRouter } from "next/navigation";
import { breadcrumbLabels } from "@/utils/breadcrumbLabels";

type BreadCrumbProps = {
  homeElement: ReactNode;
  listClasses?: string;
  activeClasses?: string;
  separator: ReactNode;
};

const Separator = ({ separator }: { separator: ReactNode }) => {
  return <span className="text-sm text-interlis-fonts-100">{separator}</span>;
};

export const BreadCrumb = ({
  homeElement,
  listClasses,
  activeClasses,
  separator
}: BreadCrumbProps) => {
  const currentPath = usePathname();
  const pathSegments = currentPath.split("/");

  const { push } = useRouter();
  const navigateTo = (url: string) => push(url);

  const breadcrumbData = breadcrumbLabels(currentPath);
  const pathLabels = breadcrumbData?.url.split("/");

  const generatePath = (index: number): string => {
    const generatedPath = pathSegments
      .slice(0, pathSegments.length - (pathLabels!.length - 1 - index))
      .join("/");

    if (
      !breadcrumbData?.canBack ||
      (!breadcrumbData?.basePathAccessible &&
        generatedPath === breadcrumbData?.baseUrl)
    ) {
      return currentPath;
    }

    return generatedPath;
  };

  return (
    <div>
      <ul className="flex items-center">
        <li
          className={
            pathLabels ? listClasses : `${listClasses} ${activeClasses}`
          }
        >
          <span onClick={() => navigateTo("/dashboard")}>
            {homeElement}
          </span>
        </li>

        {pathLabels?.map((segment: any, index: number) => {
          const path = generatePath(index);
          return (
            <React.Fragment key={index}>
              <Separator separator={separator} />

              <li
                className={
                  index !== pathLabels.length - 1
                    ? listClasses
                    : `${listClasses} ${activeClasses}`
                }
                onClick={() => navigateTo(path)}
              >
                <span>{segment}</span>
              </li>
            </React.Fragment>
          );
        })}
      </ul>
    </div>
  );
};
