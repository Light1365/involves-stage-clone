import { IoChatbox } from "react-icons/io5";
import { IoIosChatboxes } from "react-icons/io";
import { IoIosChatbubbles } from "react-icons/io";

const ChatIcon = () => {
  return (
    <div>
      <button className="flex flex-row text-white items-center justify-center fixed bottom-4 right-4 bg-blue-500 shadow-md shadow-gray-400 rounded-full w-20 h-20 transition ease-in-out hover:scale-110">
        <IoIosChatboxes style={{ width: 40, height: 40 }} />
      </button>
      <button className="flex flex-row text-white items-center justify-center fixed bottom-4 right-24 bg-blue-500 shadow-md shadow-gray-400 rounded-full w-20 h-20 transition ease-in-out hover:scale-110">
        <IoChatbox style={{ width: 40, height: 40 }} />
      </button>
      <button className="flex flex-row text-white items-center justify-center fixed bottom-24 right-24 bg-blue-500 shadow-md shadow-gray-400 rounded-full w-20 h-20 transition ease-in-out hover:scale-110">
        <IoIosChatbubbles style={{ width: 40, height: 40 }} />
      </button>
    </div>
  );
};

export default ChatIcon;
