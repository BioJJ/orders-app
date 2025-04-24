import { BackButton } from "@/components/compositions/Button/BackButton";
import { CreateProduct } from "../components/server/CreateProduct";

export const metadata = {
  title: "Produto | Cadastro"
};

export default async function page() {
  return (
    <div className="flex flex-col flex-1 w-full gap-4">
      <div className="flex flex-col gap-1 px-4 overflow-y-auto bg-white rounded-lg py-7 h-fit">
        <div className="flex gap-5">
          <BackButton href="/products" />
          <h1 className="text-lg font-bold text-interlis-fonts-400">
            Novo Produto
          </h1>
        </div>
        <CreateProduct />
      </div>
    </div>
  );
}
