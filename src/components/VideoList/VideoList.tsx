import React, { useEffect, useState } from 'react';

const VideoList = () => {
    const [videos, setVideos] = useState<string[]>([]); // Replace string[] with your video data type

    useEffect(() => {
        // Fetch the list of videos from your storage or database here
        // Example: fetchVideos();
        setVideos([
            'video1.mp4',
            'video2.mp4',
            // Replace with actual video data
        ]);
    }, []);

    return (
        <div style={{
            background: "gray",
            textAlign: 'center',
            display: 'flex',
            flexDirection: 'column',
            gap: '10px',
            padding: '10px',
            width: '40%',
            margin: 'auto',
            position: 'relative',
            top: '50%',
        }}>
            <h2>Video List</h2>
            <ul style={{
                listStyle: 'none',
                padding: '0',
                margin: '0',
                height: '100%',
                overflow: 'auto',
                border: '1px solid #ccc',
                borderRadius: '10px',
                boxShadow: '0 0 10px #ccc',
                textAlign: 'left',
                gap: '10px',
                fontSize: '18px',
                color: 'white',
                backgroundColor: 'black',
            }}>
                {videos.map((video, index) => (
                    <li key={index}>{video}</li>
                ))}
            </ul>
        </div>
    );
};

export default VideoList;