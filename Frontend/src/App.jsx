import "./App.css";
// import { useState, useEffect } from "react";
// import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
// import SignupPage from "./pages/Signup";
// import LoginPage from "./pages/Login";
// import Home from "./pages/Home";
// import Recipe from "./pages/Recipe";
// import Profile from "./pages/Profile";
// import About from "./pages/About";
// import Help from "./pages/Help";
// import NotFoundPage from "./pages/404page";
// import { initializeApp } from "./auth";
// import BackgroundAudio from "./components/BackgroundAudio";

function App() {
  // const [isLogin, setIsLogin] = useState(false);
  // const toggleLogin = () => {
  //   console.log("Toggling login");
  //   setIsLogin(true);
  // };
  // const toggleLogout = () => {
  //   console.log("Toggling logout");
  //   setIsLogin(false);
  //   localStorage.removeItem("token");
  //   if(localStorage.getItem("userData")){
  //     localStorage.removeItem("userData");
  //   }
  // };
  // useEffect(() => {
  //   const checkToken = async () => {
  //     const res = await initializeApp();
  //     console.log(res);
  //     if (res.message === "Protected") {
  //       setIsLogin(true);
  //     } else {
  //       setIsLogin(false);
  //       console.log(res.message);
  //     } // Call this function on app load
  //   };
  //   checkToken();
  // }, []);

  return (
    // <BrowserRouter>
    //   <Routes>
    //     {isLogin ? (
    //       <>
    //         <Route path='/' element={<Home onLogout={toggleLogout} />} />
    //         <Route path='/recipe/:id' element={<Recipe />} />
    //         <Route path='/profile' element={<Profile />} />
    //         <Route path='/about' element={<About />} />
    //         <Route path='/help' element={<Help/>} />
    //         <Route path='*' element={<NotFoundPage />} />
    //       </>
    //     ) : (
    //       <>
    //         <Route
    //           path='/login'
    //           element={<LoginPage onLogin={toggleLogin} />}
    //         />
    //         <Route path='/signup' element={<SignupPage />} />
    //       </>
    //     )}
    //     {!isLogin && <Route path='*' element={<Navigate to='/login' />} />}
    //   </Routes>
    //   <BackgroundAudio />
    // </BrowserRouter>
    <div className='App flex flex-col items-center justify-between h-screen gap-2 bg-gradient-to-tr from-[#f0e7cb] to-[#e89e27]'>
      <div className="flex flex-col items-center justify-center h-full">
        <h1 className='text-8xl font-semibold'>Welcome to FoodTube</h1>
        <p className='text-2xl mt-8'>
          Your desired social media platform for all your food recipe needs!
        </p>
        <h3 className='text-4xl mt-16'>Project under development... 🚧</h3>
        <p className='text-xl mt-8'>Stay tuned for updates!</p>
      </div>
      <div className="footer mb-10">
        <span className="font-medium">@FoodTube.me</span> All rights reserved
      </div>
    </div>
  );
}
export default App;
