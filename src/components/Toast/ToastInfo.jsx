import { toast } from "react-toastify";

const ToastInfo = ({ message }) => {
  return toast.info(message, {
    position: "top-right",
    autoClose: 600,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
};

export default ToastInfo;
