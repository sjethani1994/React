import Swal from "sweetalert2";

const swalSuccess = (title, message) => {
  Swal.fire({
    icon: "success",
    title: title || "Success",
    text: message || "Operation completed successfully",
    showConfirmButton: false,
    timer: 1500, // Auto close after 1.5 seconds
  });
};

const swalError = (title, message) => {
  Swal.fire({
    icon: "error",
    title: title || "Error",
    text: message || "An error occurred",
    showConfirmButton: false,
    timer: 1500, // Auto close after 1.5 seconds
  });
};

export { swalSuccess, swalError };
