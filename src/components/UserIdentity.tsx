import { SignIn } from "@/services/models/auth.types";

type UserIdentityProps = {
  user: SignIn;
};

export function UserIdentity({ user }: Readonly<UserIdentityProps>) {
  const name = user!.name;
  const group = user!.sub;

  return (
    <div className="flex flex-col w-full gap-1 text-right truncate">
      <h1
        key={`${Math.random()}:${name}`}
        className="text-lg leading-[22px] font-bold text-interlis-fonts-300 truncate"
      >
        {name}
      </h1>
      <h2 className="text-base leading-5 truncate text-interlis-fonts-100">
        {group}
      </h2>
    </div>
  );
}
