import { faRightFromBracket } from "@fortawesome/pro-light-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { useSidebar } from "@/shared/context/SidebarContext";
import { cn } from "@/utils/cn";

export function LogoutButton() {
  const { isSidebarOpen } = useSidebar();

  return (
    <button
      type="button"
      className={cn(
        "flex items-center w-full group justify-between gap-1 px-[5px] hover:bg-[#4338CA] rounded-[40px]",
        {
          "justify-center px-[22px] py-3.5": !isSidebarOpen,
          "py-1.5 pl-4 pr-2": isSidebarOpen
        }
      )}
    >
      <div className="flex items-center gap-2">
        <div className="flex items-center justify-center w-4 h-4">
          <FontAwesomeIcon
            className="group-hover:text-white text-[#4338CA]"
            size={isSidebarOpen ? "sm" : "lg"}
            icon={faRightFromBracket as IconProp}
          />
        </div>
        <span
          className={cn("group-hover:text-white text-sm", {
            inline: isSidebarOpen,
            hidden: !isSidebarOpen
          })}
        >
          Sair
        </span>
      </div>
    </button>
  );
}
