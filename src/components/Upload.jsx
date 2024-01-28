import React, { useRef, useState } from "react";
import excelIcon from "../assets/excel-icon.svg";
import uploadIcon from "../assets/upload-icon.svg";
import * as XLSX from "xlsx";
import Papa from "papaparse";
import Spinner from "./Spinner";
import Table from "./Table";

const Upload = () => {
  const inputFileRef = useRef(null);
  const [selectedFile, setSelectedFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);

  const handleDrop = (event) => {
    event.preventDefault();
    inputFileRef.current.files = event.dataTransfer.files;
    handleFileInput(event);
  };

  const handleFileInput = (event) => {
    event.preventDefault();

    const file = event.dataTransfer?.files[0] || event.target.files[0];
    if (file) {
      if (
        file.type === "text/csv" ||
        file.type ===
          "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
      ) {
        setSelectedFile(file);
      } else {
        alert(
          "Uploaded file type is not supported. Please upload a csv or excel file."
        );
      }
    }
  };

  const handleFileUpload = () => {
    if (selectedFile) {
      setLoading(true);
      if (
        selectedFile.type ===
        "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
      ) {
        const reader = new FileReader();
        reader.readAsBinaryString(selectedFile);
        reader.onload = (e) => {
          const info = e.target.result;
          const workbook = XLSX.read(info, { type: "binary" });
          const worksheetName = workbook.SheetNames[0];
          const worksheet = workbook.Sheets[worksheetName];
          const res = XLSX.utils.sheet_to_json(worksheet);
          if(res.length>0){
            if(Object.keys(res[0]).join("") === "idlinksprefixselect tagsselected tags"){
              setData(res);
            }else{
              alert("File schema is not matched");
            }
          }else {
            alert("Uploaded file is empty");
          }
          
        };
      }
      if (selectedFile.type === "text/csv") {
        Papa.parse(selectedFile, {
          header: true,
          skipEmptyLines: true,
          complete: function (result) {
            const res = result?.data
            if(result?.data.length > 0){
              if(Object.keys(res[0]).join("") === "idlinksprefixselect tagsselected tags"){
                setData(result.data);
              }else{
                alert("File schema is not matched");
              }
            }else {
              alert("Uploaded file is empty");
            }
          },
        });
      }
      setLoading(false);
      setSelectedFile(null);
    } else {
      alert("Please choose a file to upload");
    }
  };

  return (
    <section className="h-full">
      <div className="sm:h-1/2 sm:p-12">
        <h1 className="w-96 mx-auto py-8 font-semibold sm:hidden">
          Upload CSV
        </h1>
        <div
          onDrop={handleDrop}
          onDragOver={(e) => e.preventDefault()}
          className="sm:h-2/3 sm:w-1/2 h-96 shadow-xl sm:shadow-none w-96 border-dotted border-2 border-gray-200 rounded-2xl flex flex-col flex-wrap gap-6 content-center justify-center m-auto"
        >
          <img src={excelIcon} alt="excel icon" className="w-12 mx-auto" />
          <input
            type="file"
            id="fileInput"
            name="fileInput"
            accept=".csv, application/vnd.ms-excel, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
            onChange={handleFileInput}
            style={{ display: "none" }}
            ref={inputFileRef}
          />
          {selectedFile ? (
            <div className="flex flex-col gap-4 text-center">
              <p className="text-gray-400">{selectedFile.name}</p>
              <button
                onClick={() => setSelectedFile(null)}
                className="text-red-600"
              >
                Remove
              </button>
            </div>
          ) : (
            <>
              <p className="hidden sm:block text-gray-400">
                {" "}
                Drop your excel sheet here or{" "}
                <button
                  className="text-primary"
                  onClick={() => inputFileRef.current.click()}
                >
                  browse
                </button>{" "}
              </p>
              <p className="sm:hidden text-gray-400">
                {" "}
                Upload your excel sheet{" "}
                <button
                  className="text-primary"
                  onClick={() => inputFileRef.current.click()}
                >
                  here
                </button>{" "}
              </p>
            </>
          )}
        </div>
        <button
          className={`sm:w-1/2 w-96 sm:h-24 h-14 flex flex-wrap content-center justify-center mx-auto my-6 bg-primary ${data?.length ? 'opacity-40' : ''} font-semibold text-white border-none rounded-2xl`}
          onClick={handleFileUpload}
          disabled={data?.length}
        >
          {loading ? (
            <Spinner />
          ) : (
            <div className="flex">
              <img src={uploadIcon} alt="upload" />
              Upload
            </div>
          )}
        </button>
      </div>
      {data ? (
        <div className="">
          <h2 className="sm:w-11/12 mx-4 mt-14 mb-4 sm:m-4 font-semibold text-base sm:text-5xl sm:mx-auto sm:my-10 ">
            Uploads
          </h2>
          <div className="w-screen sm:w-11/12 sm:mx-auto overflow-x-scroll">
          <Table data={data} setData={setData} />
          </div>
        </div>
      ) : null}
    </section>
  );
};

export default Upload;
