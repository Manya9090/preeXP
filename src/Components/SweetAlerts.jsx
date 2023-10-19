import Swal from "sweetalert2";

export const SweetAlerts = (Id) => {
  return {
    SweetAlert(type = "success" | "error" | "info", message, props) {
      return Swal.fire({
        icon: type,
        target: Id,
        heightAuto: false,
        showConfirmButton: false,
        text: message,
        width: "330px",
        timer: 3000,
        ...props,
      });
    },
    SweetPrompt(type = "question" | "warning", message, props) {
      return Swal.fire({
        icon: type,
        target: Id,
        heightAuto: false,
        text: message,
        width: "330px",
        showCancelButton: true,
        cancelButtonText: "Cancel",
        denyButtonText: "Continue",
        confirmButtonText: "Confirm",
        ...props,
      });
    },
  };
};
