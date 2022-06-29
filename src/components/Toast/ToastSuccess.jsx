import { toast } from "react-toastify";

const ToastSuccess = ({ message }) => {
  return toast.success(message, {
    position: "top-right",
    autoClose: 600,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
};

export default ToastSuccess;
