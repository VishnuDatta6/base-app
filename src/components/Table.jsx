import React from "react";
import { storedTagList } from "../utils/utilities";

const Table = ({ data, setData }) => {
  const tagcolumnList = data.map((item) => item["select tags"]);

  const tagListBuilder = (arr) => {
    let res = [];
    for (let i = 0; i < arr.length; i++) {
      const cell = arr[i].split(", ");
      for (let j = 0; j < cell.length; j++) {
        if (!res.includes(cell[j])) {
          res.push(cell[j]);
        }
      }
    }
    return res;
  };

  const derivedTagList = tagListBuilder(tagcolumnList);
  const tagList = derivedTagList.length ? derivedTagList : storedTagList

  const handleTagSelection = (id, value) => {
    setData((prevData) => {
      return prevData.map((item) => {
        if (item.id === id) {
          const selectedTagsArray = item["selected tags"]
            .split(",")
            .map((tag) => tag.trim());
          if (!selectedTagsArray.includes(value)) {
            return {
              ...item,
              "selected tags": item["selected tags"] + value + ",",
            };
          }
        }
        return item;
      });
    });
  };

  const handleTagDeletion = (id, tagToDelete) => [
    setData((prevData) => {
      return prevData.map((item) => {
        if (item.id === id) {
          const selectedTagsArray = item["selected tags"]
            .split(",")
            .map((tag) => tag.trim());

          const updatedTagsArray = selectedTagsArray.filter(
            (tag) => tag !== tagToDelete
          );

          const updatedTagsString = updatedTagsArray.join(",");

          return {
            ...item,
            "selected tags": updatedTagsString,
          };
        }
        return item;
      });
    }),
  ];

  return (
    <table className="sm:w-full font-figtree p-3 sm:px-6 bg-gray-150 text-left rounded-2xl sm:m-auto border-separate border-spacing-y-6">
      <thead>
        <tr>
          <th className="sm:w-1/10 px-4 py-2">Sl No.</th>
          <th className="sm:w-1/5 px-4 py-2">Links</th>
          <th className="sm:w-1/5 px-4 py-2">Prefix</th>
          <th className="sm:w-1/5 px-4 py-2">Add Tags</th>
          <th className="sm:w-2/5 px-4 py-2">Selected Tags</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item) => {
          return (
            <tr key={item.id}>
              <td className="bg-white rounded-lg p-4">{item.id}</td>
              <td className="bg-white p-4 text-[#5B93FF] underline">
                <a href={'http://'+item.links} target="_blank" rel="noreferrer">
                  {item.links}
                </a>
              </td>
              <td className="bg-white p-4">{item.prefix}</td>
              <td className="bg-white p-4">
                <select
                  onChange={(e) => {
                    handleTagSelection(item.id, e.target.value);
                    e.target.value = "";
                  }}
                  className="rounded-lg border-gray-300"
                >
                  <option key={0} value='' disabled>
                    Select Tags
                  </option>
                  {tagList.map((item, index) => (
                    <option  key={index+1} value={item}>
                      {item}
                    </option>
                  ))}
                </select>
              </td>
              <td className="bg-white min-h-24 flex flex-wrap p-4 rounded-lg">
                {
                //eslint-disable-next-line
                item["selected tags"]?.split(",").map((tag) => {
                  if (tag) {
                    return (
                      <span key={tag} className="bg-primary w-26 font-semibold flex items-center rounded-lg text-white gap-2 px-4 m-2 ">
                        {tag}
                        <button className="text-3xl" onClick={() => handleTagDeletion(item.id, tag)}>
                          &times;
                        </button>
                      </span>
                    );
                  }
                })}
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Table;
