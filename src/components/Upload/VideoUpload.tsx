
import { useState } from 'react';
import {ref, uploadBytesResumable} from "firebase/storage";
import {auth, storage} from "../Auth/firebase.ts";

export function VideoUpload() {
    const [uploadProgress, setUploadProgress] = useState<number>(0);
    const [isUploading, setIsUploading] = useState<boolean>(false);
    const [selectedFile, setSelectedFile] = useState<File | null>(null);

    const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            setSelectedFile(file);
        }
    };

    const handleUpload = async () => {
        if (!selectedFile) return;

        setIsUploading(true);
        try {
            const timeStamp = Date.now();
            const storageRef = ref(storage, `videos/users/${auth.currentUser?.email}/\
            ${new Date().getUTCDate().toString().split('T')[0]}/${selectedFile.name}_{}_${timeStamp}`);
            const uploadTask = uploadBytesResumable(storageRef, selectedFile);

            uploadTask.on('state_changed',
                (snapshot) => {
                    const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                    setUploadProgress(progress);
                },
                (error) => {
                    console.error('Upload failed:', error);
                    setIsUploading(false);
                },
                () => {
                    console.log('Upload completed');
                    setIsUploading(false);
                    setUploadProgress(0);
                    setSelectedFile(null);
                }
            );
        } catch (error) {
            console.error('Error starting upload:', error);
            setIsUploading(false);
        }
    };

    return (
        <div>
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'space-around',
                    gap: '10px',
                    padding: '10px',
                    width: '80%',
                    margin: 'auto',
                    position: 'relative',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    border: '1px solid #ccc',
                    borderRadius: '10px',
                    boxShadow: '0 0 10px #ccc',
                    textAlign: 'center',
                    fontSize: '18px',
                    fontWeight: 'bold',
                    color: '#000000',
                    backgroundColor: '#f0f0f0',
                }}>
                <div style={{
                    width: '400px',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '10px',
                    border: '1px solid #ccc',
                    borderRadius: '10px',
                    boxShadow: '0 0 10px #ccc',
                    padding: '10px',
                    textAlign: 'center',
                    cursor: 'pointer',
                    backgroundColor: '#f0f0f0',
                    color: '#000000',
                    fontSize: '18px',
                    fontWeight: 'bold',
                    transition: 'background-color 0.3s ease-in-out',
                    '&:hover': {
                        backgroundColor: '#ccc',
                    }
                }}>
                    <input
                        type="file"
                        accept="video/*"
                        onChange={handleFileSelect}
                        disabled={isUploading}
                    />
                </div>
                <div style={{ width: '200px' }}>
                    <button
                        onClick={handleUpload}
                        disabled={isUploading || !selectedFile}
                    >
                        Upload
                    </button>
                </div>
                {isUploading && (
                    <div style={{ width: '200px' }}>
                        <div style={{
                            width: '100%',
                            backgroundColor: '#f0f0f0',
                            borderRadius: '4px',
                            overflow: 'hidden'
                        }}>
                            <div
                                style={{
                                    width: `${uploadProgress}%`,
                                    backgroundColor: '#4CAF50',
                                    height: '20px',
                                    transition: 'width 0.3s ease-in-out',
                                }}
                            />
                        </div>
                        <div style={{ textAlign: 'center' }}>
                            {uploadProgress.toFixed(1)}%
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default VideoUpload;