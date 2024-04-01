import { useEffect } from "react";
import { useUser, useUsers } from "../../features/hooks/useUser";
import Sidebar from "../extension/Sidebar";
import MesaggeContainer from "../messageExtentions/MesaggeContainer";
import { useLoading } from "../../features/hooks/useLoading";

function Chat() {
  const { setLoading } = useLoading();
  const profile = useUser();
  const users = useUsers();

  useEffect(() => {
    const fetching = async () => {
      setLoading(true);
      await profile();
      await users();
      setLoading(false);
    };

    fetching();

    return () => setLoading(false);
  }, []);

  return (
    <>
      <div className="flex sm:h-[450px] md:h-[550px] rounded-lg overflow-hidden bg-gray-400 bg-clip-padding backdrop-blur-lg backdrop-filter bg-opacity-0">
        <Sidebar />
        <MesaggeContainer />
      </div>
    </>
  );
}

export default Chat;
