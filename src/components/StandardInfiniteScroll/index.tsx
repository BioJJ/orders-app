"use client";

import { useAuth } from "@/shared/context/AuthContextP";
import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable
} from "@tanstack/react-table";
import clsx from "clsx";
import { usePathname } from "next/navigation";
import React, { ReactNode, useCallback, useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { Table } from "./components";

type StandardInfiniteScrollProps<TData, TValue> = {
  columns: ColumnDef<TData, TValue>[];
  data: TData[] | [];
  lastPage?: number;
  fetchDataFunction: any;
  search?: string;
  handleRowClick?(original: TData, type: string): void;
  handleControlledData?(original: TData[]): void;
  hasScroll?: boolean;
  colorSelected?: (id: string) => boolean;
  withoutHeader?: boolean;
  children?: (rowData: TData, columnLength: number) => ReactNode;
  isRowColor?: boolean;
};

export function StandardInfiniteScroll<TData, TValue>({
  isRowColor = true,
  columns,
  data,
  lastPage = 1,
  fetchDataFunction,
  search = "",
  handleRowClick,
  handleControlledData,
  hasScroll,
  colorSelected = () => false,
  withoutHeader = false,
  children
}: Readonly<StandardInfiniteScrollProps<TData, TValue>>) {
  const pathname = usePathname();
  const { session } = useAuth();
  const isReportPage = pathname.includes("laudos");

  const [tableData, setTableData] = useState<TData[]>(data);
  const [expandedRows, setExpandedRows] = useState<Set<string>>(new Set());

  const [page, setPage] = useState(1);
  const [isLastData, setIsLastData] = useState(lastPage === page);
  const [ref, inView] = useInView({
    skip: page === lastPage
  });

  const table = useReactTable({
    data: tableData,
    columns,
    getCoreRowModel: getCoreRowModel()
  });

  const loadMoreData = useCallback(async () => {
    const next = page + 1;
    const loadedData = await fetchDataFunction(session?.user!, {
      page: next,
      search
    });

    if (loadedData?.data) {
      setPage(next);
      setTableData((prev) => [
        ...(prev.length ? prev : []),
        ...loadedData.data
      ]);
      setIsLastData(lastPage === next);

      handleControlledData && handleControlledData(loadedData.data);
    }
  }, [
    page,
    fetchDataFunction,
    session?.user,
    search,
    lastPage,
    handleControlledData
  ]);

  const toggleRowExpansion = (rowId: string) => {
    setExpandedRows((prev) => {
      const newExpandedRows = new Set(prev);
      if (newExpandedRows.has(rowId)) {
        newExpandedRows.delete(rowId);
      } else {
        newExpandedRows.add(rowId);
      }
      return newExpandedRows;
    });
  };

  useEffect(() => {
    if (inView && !isLastData) {
      loadMoreData();
    }
  }, [inView, loadMoreData, isLastData]);

  useEffect(() => {
    setTableData(data);
    setPage(1);
    setIsLastData(lastPage === 1);
  }, [data, lastPage]);

  const colors = ["VERMELHO", "LARANJA", "AMARELO", "VERDE", "AZUL"];
  const status = ["PENDING"];

  return (
    <Table.Root
      inViewRef={ref}
      isLoading={!!table.getRowModel().rows?.length && !isLastData}
      hasScroll={hasScroll}
    >
      {!withoutHeader && (
        <Table.Header>
          {table.getHeaderGroups().map((headerGroup) => (
            <Table.Row isHeader key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <Table.Head
                  isRowColor={isRowColor}
                  key={header.id}
                  isEmptySpace={
                    header.id.includes("Color") ||
                    header.id.includes("Status Color")
                  }
                  isCheckbox={header.id.includes("Checkbox")}
                >
                  {flexRender(
                    header.column.columnDef.header,
                    header.getContext()
                  )}
                </Table.Head>
              ))}
            </Table.Row>
          ))}
        </Table.Header>
      )}
      <Table.Body>
        {!!table.getRowModel().rows?.length &&
          table.getRowModel().rows.map((row, index) => {
            const rowOriginal = row.original as {
              id?: string;
            };
            const rowId = rowOriginal.id || "";
            return (
              <React.Fragment key={row.id}>
                <Table.Row
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                  onClick={(e: any) => {
                    const type = e.target.type;
                    handleRowClick && handleRowClick(row.original, type);
                    toggleRowExpansion(rowId);
                  }}
                  isSample={isReportPage}
                  className={clsx({
                    "bg-interlis-add-line-tables-100": colorSelected(
                      String(rowOriginal?.id)
                    )
                  })}
                >
                  {row.getVisibleCells().map((cell) => {
                    const value = cell.getValue();
                    const isColor =
                      colors.some((val) => val.includes(String(value))) ||
                      status.some((val) => val.includes(String(value)));
                    const isCheckbox = cell.column.id.includes("Checkbox");
                    return (
                      <Table.Cell
                        isRowColor={isRowColor}
                        isEmptySpace={isColor}
                        isCheckbox={isCheckbox}
                        className={clsx({
                          "min-w-[110px]": !isColor && !isCheckbox
                        })}
                        key={cell.id}
                      >
                        {flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext()
                        )}
                      </Table.Cell>
                    );
                  })}
                </Table.Row>
                {children && expandedRows.has(rowId)
                  ? children(rowOriginal as any, columns.length)
                  : null}
              </React.Fragment>
            );
          })}
        {!table.getRowModel().rows?.length && (
          <Table.Row isEmpty>
            <Table.Cell
              colSpan={columns.length + 1}
              className="h-24 text-center"
            >
              Sem Resultados
            </Table.Cell>
          </Table.Row>
        )}
      </Table.Body>
    </Table.Root>
  );
}
