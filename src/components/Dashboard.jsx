import React, { useEffect, useState } from "react";

const Dashboard = () => {
  const [savedData, setSavedData] = useState(null);

  useEffect(() => {
    const localStorageKey = "saved";
    const storedData = localStorage.getItem(localStorageKey);
    if (storedData) {
      setSavedData(JSON.parse(storedData));
    }
  }, []);

  const handleClearData = ()=>{
    localStorage.removeItem("saved")
    setSavedData(null);
  }

  if (!savedData) {
    return (
      <div className="w-4/5 m-auto">
        <h1 className="text-center font-figtree font-bold text-3xl m-11">
          No files saved
        </h1>
      </div>
    );
  }
  return (
    <div className="w-screen overflow-x-scroll sm:w-4/6 sm:mx-auto">
    <button className="text-white bg-primary p-2 m-2 rounded-lg font-figtree font-semibold" onClick={handleClearData}>Clear Data</button>
    <table className="sm:mt-6 font-figtree p-3 sm:px-6 bg-gray-150 text-left rounded-2xl sm:m-auto border-separate border-spacing-y-6">
      <thead>
        <tr>
          <th className="sm:w-1/10 px-4 py-2">Sl No.</th>
          <th className="sm:w-1/5 px-4 py-2">Links</th>
          <th className="sm:w-1/5 px-4 py-2">Prefix</th>
          <th className="sm:w-1/2 px-4 py-2">Selected Tags</th>
        </tr>
      </thead>
      <tbody>
        {savedData.map((item) => {
          return (
            <tr key={item.id}>
              <td className="bg-white rounded-lg p-4">{item.id}</td>
              <td className="bg-white p-4 text-[#5B93FF] underline">
                <a
                  href={"http://" + item.links}
                  target="_blank"
                  rel="noreferrer"
                >
                  {item.links}
                </a>
              </td>
              <td className="bg-white p-4">{item.prefix}</td>
              <td className="bg-white min-h-24 flex flex-wrap p-4 rounded-lg">
                {
                  //eslint-disable-next-line
                  item["selected tags"]?.split(",").map((tag) => {
                    if (tag) {
                      return (
                        <span
                          key={tag}
                          className="bg-primary w-26 flex items-center font-semibold rounded-lg text-white px-4 m-2"
                        >
                          {tag}
                        </span>
                      );
                    }
                  })
                }
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
    </div>
  );
};

export default Dashboard;
