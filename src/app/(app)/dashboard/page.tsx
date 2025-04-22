import { Cards } from "./components/Cards";
import { MyName } from "./components/MyName";

export default function Dashboard() {
  return (
    <div className="flex flex-col w-full gap-y-4">
      <MyName />

      <Cards />
    </div>
  );
}
