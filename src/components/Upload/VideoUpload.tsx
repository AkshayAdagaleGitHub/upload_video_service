import React, { useState } from 'react';
import {uploadFileAndSaveMetadata} from "./UploadService.tsx";

const VideoUpload = () => {

    const [file, setFile] = useState(null);

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        if (e.target.files && e.target.files.length > 0) {
            setFile(e.target.files[0]);
        }
    }

    const handleUpload = () => {
        if (file) {
            // Implement your upload logic here, for example with Firebase Storage
            // Example: uploadFile(file);
            const videoID = Date.now().toString() + file.name + Math.random().toString();
            uploadFileAndSaveMetadata(file,{videoID})
            alert(`Uploading ${file.name}`);
        }
    };

    return (
        <div>
            <h2>Upload Video</h2>
            <input type="file" accept="video/*" onChange={handleFileChange} />
            <button onClick={handleUpload} disabled={!file}>
                Upload
            </button>
        </div>
    );
};

export default VideoUpload;


// const [video, setVideo] = useState('');
// const [error, setError] = useState('');
// const [progress, setProgress] = useState(0);
// const [url, setUrl] = useState('');
// const [isUploading, setIsUploading] = useState(false);
// const [isUploaded, setIsUploaded] = useState(false);
// const [isCompleted, setIsCompleted] = useState(false);
// const [isFailed, setIsFailed] = useState(false);
// const [message, setMessage] = useState('');
// const [isPaused, setIsPaused] = useState(false);
// const [isPlaying, setIsPlaying] = useState(false);
// const [isStopped, setIsStopped] = useState(false);
// const [isBuffering, setIsBuffering] = useState(false);
// const [isSeeking, setIsSeeking] = useState(false);
// const [isMuted, setIsMuted] = useState(false);
// const [volume, setVolume] = useState(1);
// const [duration, setDuration] = useState(0);
// const [currentTime, setCurrentTime] = useState(0);
// const [playbackRate, setPlaybackRate] = useState(1);
// const [canPlay, setCanPlay] = useState(false);
// const [canPlayThrough, setCanPlayThrough] = useState(false);
// const [hasLoadedMetadata, setHasLoadedMetadata] = useState(false);
// const [hasStartedLoading, setHasStartedLoading] = useState(false);
// const [hasEnded, setHasEnded] = useState(false);
// const [isLive, setIsLive] = useState(false);
// const [isEnded, setIsEnded] = useState(false);
// const [isWaiting, setIsWaiting] = useState(false);
// const [isStalled, setIsStalled] = useState(false);
// const [isInterrupted, setIsInterrupted] = useState(false);
// const [isTypeSupported, setIsTypeSupported] = useState(false);