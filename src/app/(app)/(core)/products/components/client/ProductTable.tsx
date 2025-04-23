"use client";

import { CustomTableHeader } from "@/components/compositions/CustomTableHeader";

import { StandardInfiniteScroll } from "@/components/StandardInfiniteScroll";
import { Product } from "@/services/models/product.types";
import { ColumnDef } from "@tanstack/react-table";
import { getProductsAction } from "../../specifications/product.actions";
import { usePathname, useRouter } from 'next/navigation'

type PatientTableProps = {
  data: any[];
  search?: string;
};

export function ProductTable({ data, search }: Readonly<PatientTableProps>) {
  const pathname = usePathname();
  const { push } = useRouter();
  const columns: ColumnDef<Product>[] = [
    {
      accessorKey: "name",
      header: () => CustomTableHeader("Product")
    },
    {
      accessorKey: "price",
      header: () => CustomTableHeader("Price")
    },
    {
      accessorKey: "quantity_stock",
      header: () => CustomTableHeader("stockQuantity")
    },
    {
      accessorKey: "category",
      header: () => CustomTableHeader("Category")
    }
  ];

  function handleRowClick(original: Product) {
    push(`${pathname}/${original.id}`);
  }
  return (
    <StandardInfiniteScroll
      data={data}
      columns={columns}
      fetchDataFunction={getProductsAction}
      search={search}
      handleRowClick={handleRowClick}
    />
  );
}
