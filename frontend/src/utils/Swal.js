import Swal from "sweetalert2";

const swalSuccess = (title, message) => {
  Swal.fire({
    icon: "success",
    title: title || "Success",
    text: message || "Operation completed successfully",
    showConfirmButton: false,
    timer: 2500,
  });
};

const swalError = (title, message) => {
  Swal.fire({
    icon: "error",
    title: title || "Error",
    text: message || "An error occurred",
    showConfirmButton: false,
    timer: 2500,
  });
};

export { swalSuccess, swalError };
