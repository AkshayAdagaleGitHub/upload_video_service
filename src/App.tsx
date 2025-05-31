import React from 'react';
import { AuthProvider, useAuth } from "./components/Auth/AuthProvider";
import SignUp from "./components/Auth/SignUp";
import Login from "./components/Auth/Login";
import VideoUpload from "./components/Upload/VideoUpload";
import SignOut from "./components/Auth/SignOut";

const AppContent = () => {
  const { currentUser } = useAuth();

    return (
        <div className="App"
            style={{
                background: '#f5f5f5',
                height: '100vh',
                width: '100vw',
                position: 'relative',
                overflow: 'hidde'
            }}
        >
            {currentUser ? (
                <div
                    className="home-page"
                    style={{
                        background: "black",
                        textAlign: 'center',
                        padding: '100px',
                        paddingTop: '100px',
                        paddingBottom: '100px',
                        paddingLeft: '100px',
                        paddingRight: '100px',
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        margin: 'auto',
                        width: '80%',
                        height: '50%',
                        border: '1px solid #ccc',
                        borderRadius: '10px',
                        boxShadow: '0 0 10px #ccc'
                    }}
                >
                    <h1>Welcome, {currentUser.email}!</h1>
                    <div style={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '20px',
                        margin: 'auto',
                        border: '1px solid #ccc',
                        borderRadius: '10px',
                        boxShadow: '0 0 10px #ccc',
                        textAlign: 'center',
                        fontSize: '18px',
                        fontWeight: 'bold',
                        color: '#000000',
                        backgroundColor: '#f0f0f0',
                        padding: '10px',
                        paddingTop: '60px',
                        paddingRight: '60px',
                        paddingBottom: '20px',
                        paddingLeft: '20px',
                        position: 'relative',
                    }}>
                        <VideoUpload />
                        {/*<VideoList />*/}
                        <div>
                            <SignOut/>
                        </div>
                    </div>
                </div>
            ) : (
                <div className="login-page"
                     style={{
                         background: "black",
                         textAlign: 'center',
                         padding: '100px',
                         paddingTop: '100px',
                         paddingBottom: '100px',
                         paddingLeft: '100px',
                         paddingRight: '100px',
                         position: 'absolute',
                         top: '50%',
                         left: '50%',
                         transform: 'translate(-50%, -50%)',
                         margin: 'auto',
                         width: '80%',
                         height: '50%',
                         border: '1px solid #ccc',
                         borderRadius: '10px',
                         boxShadow: '0 0 10px #ccc'
                }}>
                    <h1>Welcome to Video Upload Service!</h1>
                    <h3>Please sign up or login to continue.</h3>
                    <div
                        style={{
                            display: 'flex',
                            justifyContent: 'space-around',
                            gap: '10px'
                    }}>
                        <SignUp />
                        <Login />
                    </div>
                </div>
            )}
        </div>
    );
};

const App: React.FC = () => {
    return (
        <AuthProvider>
            <AppContent />
        </AuthProvider>
    );
};

export default App;



// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
//
// function App() {
//   const [count, setCount] = useState(0)
//
//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.tsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }
//
// export default App
