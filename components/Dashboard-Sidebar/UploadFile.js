import { useState } from 'react';
import styles from './style.module.css';

const UploadFile = ({ uploadedFile, setUploadedFile }) => {
  const [fileType, setFileType] = useState();

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const fileURL = URL.createObjectURL(file);
      setUploadedFile(fileURL);
      if (file.type.startsWith('image/')) {
        setFileType('image');
      } else if (file.type.startsWith('video/')) {
        setFileType('video');
      }
    }
  };

  return (
    <div className={styles.uploadContainer}>
      {uploadedFile && (
        <div className={styles.filePreviewContainer}>
          {fileType === 'image' ? (
            <img
              src={uploadedFile}
              alt="Uploaded Preview"
              className={styles.previewImage}
            />
          ) : fileType === 'video' ? (
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
        style={{ display: 'none' }}
        onChange={handleFileUpload}
      />
      <label htmlFor="file-upload" className={styles.uploadButton}>
        {uploadedFile ? 'Change File' : 'Upload Photos/Videos'}
      </label>
    </div>
  );
};

export default UploadFile;
