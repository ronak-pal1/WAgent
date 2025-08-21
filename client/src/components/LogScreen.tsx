const LogScreen = () => {
  return (
    <div className="w-full h-full flex flex-1 flex-col">
      <div className="flex flex-[0.92] w-full h-full"></div>
      <div className="flex flex-[0.08] h-full w-full px-4 py-2 space-x-3">
        <div className="w-full bg-white rounded-lg shadow-2xl shadow-green-500 px-6 border border-gray-100">
          <input
            type="text"
            placeholder="Give task to the agent"
            className="w-full h-full outline-none placeholder:text-neutral-400"
          />
        </div>

        <button className="bg-green-500 text-white px-7 text-sm rounded-lg font-semibold hover:bg-green-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1 whitespace-nowrap">
          Do it
        </button>
      </div>
    </div>
  );
};

export default LogScreen;
