import {
  faFlaskVialSolid,
  faPrescriptionBottleSolid
} from "@awesome.me/kit-7140cc018b/icons/kit/custom";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { Card } from "./Card";

export async function Cards() {
  const statusSample = 10;
  return (
    <div className="grid w-full grid-cols-4 gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
      <Card
        title="Produtos"
        icon={faFlaskVialSolid as IconDefinition}
        classNameIcon="text-interlis-icons-600"
        status="Atualizando"
        url="/products"
        count={statusSample}
      />
      <Card
        title="Pedidos"
        icon={faPrescriptionBottleSolid as IconDefinition}
        classNameIcon="text-interlis-icons-600"
        status="Atualizados"
        url="/orders"
        count={statusSample}
      />
    </div>
  );
}
