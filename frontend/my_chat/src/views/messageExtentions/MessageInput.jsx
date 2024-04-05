import { useFormik } from "formik";
import { useSetUser } from "../../features/hooks/useUser";
import * as Yup from "yup";
import { toast } from "react-toastify";
import useSendMessage from "../../features/hooks/useSendMessage";

function MessageInput() {
  const { selectedUser } = useSetUser();

  const { sendMessage } = useSendMessage();

  const formik = useFormik({
    initialValues: {
      message: "",
    },
    onSubmit: (values) => {
      const { message } = values;
      if (!message) return;
      if (selectedUser) {
        sendMessage({ message: values.message, receiverId: selectedUser._id })
          .then((res) => {
            toast.success(res);
            formik.resetForm();
          })
          .catch((err) => {
            toast.error(err.response.message);
          });
      } else {
        toast.error("Please select a user first!");
      }
    },
  });

  return (
    <div>
      <form className="px-4 my-3" onSubmit={formik.handleSubmit}>
        <div className="w-full relative">
          <input
            type="text"
            className="border text-sm rounded-lg block w-full p-2.5 bg-gray-700 text-white border-gray-600"
            placeholder="Send a message"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.message}
            name="message"
          />
          <button
            type="submit"
            className="absolute inset-y-0 end-0 flex items-center pe-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5"
              />
            </svg>
          </button>
        </div>
      </form>
    </div>
  );
}

export default MessageInput;
