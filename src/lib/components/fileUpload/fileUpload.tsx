import { FC, useState, useCallback } from "react";
import { useDropzone } from "react-dropzone";
// import { storage } from '../path_to_your_firebase_file/firebase';
import { IoDocument } from "react-icons/io5";

const FileUpload = ({ name, files, setFiles }: { name: string, files: File[]; setFiles: React.Dispatch<React.SetStateAction<File[]>> }) => {
  
  const [urls, setUrls] = useState<string[]>([]);
  const [previews, setPreviews] = useState<string[]>([]);

  const onDrop = useCallback((acceptedFiles: File[]) => {
    acceptedFiles.forEach((file: File) => {
      if (files.length < 5 && file.size / 1024 <= 2560) {
        // 2.5MB limit and max of 5 files
        setFiles((prevFiles) => [...prevFiles, file]);
        setPreviews((prevPreviews) => [
          ...prevPreviews,
          URL.createObjectURL(file),
        ]);
      }
    });
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  //   const handleUpload = async () => {
  //     const newUrls: string[] = [];

  //     for (let i = 0; i < files.length; i++) {
  //       const file = files[i];
  //       const storageRef = storage.ref();
  //       const fileRef = storageRef.child(file.name);
  //       await fileRef.put(file);
  //       const url = await fileRef.getDownloadURL();
  //       newUrls.push(url);
  //     }

  //     setUrls(prevUrls => [...prevUrls, ...newUrls]);
  //   };

  return (
    <div className="flex flex-col items-center space-y-4">
      {files.length > 0 && (
        <p className="text-xs w-full mr-auto">
          You have uploaded {files.length}/5
        </p>
      )}
      {files.length < 5 && (
        <div
          {...getRootProps()}
          className="w-full h-32 border-2 border-dashed border-black flex flex-col items-center justify-center cursor-pointer"
        >
          <input {...getInputProps()} />
          {isDragActive ? (
            <p className="text-xs cursor-pointer">Drop the files here ...</p>
          ) : (
            <p className="text-xs cursor-pointer">
              Drag 'n' drop some files here, or click to select files
            </p>
          )}
        </div>
      )}
      <div className="flex gap-3 w-full flex-nowrap overflow-x-auto justify-evenly">
        {previews.map((preview, index) => {
          const file = files[index];
          const fileType = file.type.split("/")[0];

          if (fileType === "image") {
            return (
              <a
                key={index}
                href={preview}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-shrink-0 "
              >
                <img
                  src={preview}
                  alt="Preview"
                  className="w-[250px] h-[400px]  flex flex-col items-center justify-center border border-gray-300 text-xs text-center text-wrap flex-shrink-0"
                />
              </a>
            );
          } else if (fileType === "video") {
            return (
              <video
                key={index}
                src={preview}
                className="w-[250px] h-[400px] flex flex-col items-center justify-center border border-gray-300 text-xs text-center text-wrap flex-shrink-0"
                controls
              />
            );
          } else {
            return (
              <div
                key={index}
                className="w-[250px] h-[400px] flex flex-col items-center justify-center border border-gray-300 text-xs text-center text-wrap flex-shrink-0"
              >
                <IoDocument className="text-2xl" />
                <p className="text-xs overflow-wrap break-word">{file.name}</p>
              </div>
            );
          }
        })}
      </div>

      {/* <button
        className="px-4 py-2 bg-blue-500 text-white rounded"
        onClick={handleUpload}
      >
        Upload
      </button> */}
      {urls.map((url, index) => (
        <a key={index} href={url} target="_blank" rel="noopener noreferrer">
          {url}
        </a>
      ))}
    </div>
  );
};

export default FileUpload;
