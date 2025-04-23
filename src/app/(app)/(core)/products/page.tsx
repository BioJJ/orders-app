import { ListProduct } from "./components/server/ListProduct";
import { RegisterPageButton } from "@/components/compositions/Button/RegisterPageButton";
import { NewSearch } from "@/components/compositions/NewSearch";
import { createQueryParams } from "@/utils/createQueryParams";

type Props = {
  searchParams: { [key: string]: string | string[] | undefined };
};

export const metadata = {
  title: "Products"
};

export default async function page({ searchParams }: Props) {
  const defaultSearchValue = searchParams.name ? String(searchParams.name) : "";
  const customSearchParams = {
    ...searchParams,
    type: "patients"
  };
  const query = createQueryParams(customSearchParams);

  return (
    <div className="flex flex-col flex-1 gap-4 px-4 overflow-y-auto bg-white rounded-lg py-7">
      <div className="flex items-center">
        <div className="flex gap-4">
          <NewSearch
            hasAdvancedFilter
            searchParam="name"
            defaultValue={defaultSearchValue}
            isClearable
          ></NewSearch>
          <RegisterPageButton href="/products/cadastro" />
        </div>
      </div>
      <ListProduct filterParam={query} />
    </div>
  );
}
