import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "../Button";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

type SubmitFormButtonProps = {
  isSubmitting: boolean;
  title?: string;
  disabled?: boolean;
  icon?: IconProp;
};

export function SubmitFormButton({
  isSubmitting,
  title = "Salvar",
  disabled = false,
  icon
}: SubmitFormButtonProps) {
  return (
    <Button.Root
      id="submit-form"
      type="submit"
      variant="success"
      size="sm"
      disabled={isSubmitting || disabled}
    >
      {icon && <FontAwesomeIcon icon={icon as IconProp} />}
      <Button.Text text={title} />
    </Button.Root>
  );
}
