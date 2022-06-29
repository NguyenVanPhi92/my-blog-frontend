import { toast } from "react-toastify";

const Toast = ({ message }) => {
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

export default Toast;
