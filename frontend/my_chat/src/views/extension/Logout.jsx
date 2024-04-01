import { useLoading } from "../../features/hooks/useLoading";
import { useLogout } from "../../features/hooks/useAuth";

function Logout() {
  const logout = useLogout();
  const { setLoading } = useLoading();
  const handleLogout = () => {
    setLoading(true);
    logout();
    setLoading(false);
  };
  return (
    <div className="mt-auto pl-auto ">
      <svg
        className="w-6 h-6 text-gray-800 cursor-pointer dark:text-white"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="none"
        viewBox="0 0 24 24"
        onClick={handleLogout}
      >
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M16 12H4m12 0-4 4m4-4-4-4m3-4h2a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3h-2"
        />
      </svg>
    </div>
  );
}

export default Logout;
