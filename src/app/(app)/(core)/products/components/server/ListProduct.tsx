import { notFound } from "next/navigation";
import { ProductTable } from "../client/ProductTable";
import { getInitialProductsAction } from "../../specifications/product.actions";

type ListPatientProps = {
  filterParam: {
    query: string;
    queryWithoutPage: string;
  };
};

export async function ListProduct({ filterParam }: Readonly<ListPatientProps>) {
  const products = await getInitialProductsAction(filterParam.query);

  if (!products) {
    notFound();
  }

  return (
    <ProductTable data={products.data} search={filterParam.queryWithoutPage} />
  );
}
