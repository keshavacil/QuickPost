import { useState } from "react";
import styles from "./style.module.css";
import ErrorModal from "./ErrorModal";

const UploadFile = ({ uploadedFile, setUploadedFile }) => {
  const [fileType, setFileType] = useState();
  const [error, setError] = useState(null);
  const [isErrorModalVisible, setIsErrorModalVisible] = useState(false);

  const handleFileUpload = (e) => {
    const file = e.target.files[0];

    if (file) {
      setError(null);
      if (file.type.startsWith("image/")) {
        if (file.size > 104857600) { 
          setError("Image file size exceeds the limit of 100MB.");
          setIsErrorModalVisible(true);
          return;
        }
        setFileType("image");
      } else if (file.type.startsWith("video/")) {
        if (file.size > 1073741824) { 
          setError("Video file size exceeds the limit of 1024MB.");
          setIsErrorModalVisible(true);
          return;
        }
        setFileType("video");
      } else {
        setError("Invalid file type. Please upload an image or video.");
        setIsErrorModalVisible(true);
        return;
      }
      const fileURL = URL.createObjectURL(file);
      setUploadedFile(fileURL);

      if (file.type.startsWith("image/")) {
        setFileType("image");
      } else if (file.type.startsWith("video/")) {
        setFileType("video");
      } else {
        setError("Invalid file type. Please upload an image or video.");
        setIsErrorModalVisible(true);
      }
    }
  };

  const closeErrorModal = () => {
    setIsErrorModalVisible(false);
  };

  return (
    <div className={styles.uploadContainer}>
      {isErrorModalVisible && (
        <ErrorModal message={error} onClose={closeErrorModal} />
      )}

      {uploadedFile && (
        <div className={styles.filePreviewContainer}>
          {fileType === "image" ? (
            <img
              src={uploadedFile}
              alt="Uploaded Preview"
              className={styles.previewImage}
            />
          ) : fileType === "video" ? (
            <video
              src={uploadedFile}
              controls
              className={styles.previewVideo}
            />
          ) : null}
        </div>
      )}

      <input
        type="file"
        id="file-upload"
        accept="image/*,video/*"
        style={{ display: "none" }}
        onChange={handleFileUpload}
        aria-describedby="file-upload-help"
      />
      <label htmlFor="file-upload" className={styles.uploadButton}>
        {uploadedFile ? "Change File" : "Upload Photos/Videos"}
      </label>
      <p id="file-upload-help" className={styles.uploadHelpText}>
        Only image and video files are allowed. Max file size: 100MB.
      </p>
    </div>
  );
};

export default UploadFile;
