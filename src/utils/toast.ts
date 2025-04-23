import { toast, Id } from "react-toastify";

export function updateSuccessToast(toastId: Id, message: string) {
  return toast.update(toastId, {
    render: message,
    type: "success",
    isLoading: false,
    autoClose: 3000
  });
}

export function updateErrorToast(toastId: Id, message: string) {
  return toast.update(toastId, {
    render: message,
    type: "error",
    isLoading: false,
    autoClose: 3000
  });
}

export function updateWarningToast(toastId: Id, message: string) {
  return toast.update(toastId, {
    render: message,
    type: "warning",
    isLoading: false,
    autoClose: 3000
  });
}

export function updateNewToast(toastId: Id, message: string) {
  return toast.update(toastId, {
    render: message,
    type: "default",
    isLoading: false,
    autoClose: 3000
  });
}
