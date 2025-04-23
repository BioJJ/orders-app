import { HTMLAttributes, forwardRef } from "react";

import "../StandardInfiniteScroll.css";
import { cn } from "@/utils/cn";

type TableRowProps = {
  isHeader?: boolean;
  isEmpty?: boolean;
  color?: string;
  statusSample?: string;
  isSample?: boolean;
} & HTMLAttributes<HTMLTableRowElement>;

export const TableRow = forwardRef<HTMLTableRowElement, TableRowProps>(
  (
    {
      className,
      isHeader,
      isEmpty,
      statusSample,
      color = "AMARELO",
      isSample,
      ...props
    },
    ref
  ) => {
    const canceled: Set<string> = new Set([
      "CANCELED",
      "NEW_SAMPLE",
      "REPRINTED"
    ]);

    const status = statusSample?.toUpperCase();
    const isCanceled = canceled.has(String(status)) && isSample;

    return (
      <tr
        ref={ref}
        className={cn(
          isCanceled ? "CustomLineThrough text-red-500" : "",
          className,
          {
            "text-left border-b-2 border-b-interlis-tables-200": isHeader,
            "": isEmpty,
            "border-b-2 bg-interlis-tables-50 border-b-interlis-tags-200 hover:bg-interlis-tags-200 cursor-pointer":
              !isHeader && !isEmpty
          }
        )}
        {...props}
      />
    );
  }
);

TableRow.displayName = "TableRow";
