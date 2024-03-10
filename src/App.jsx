import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./assets/components/Header/Header";
import Courses from "./assets/components/Courses/Courses";
import Sidebar from "./assets/components/Sidebar/Sidebar";
import toast, { ToastBar, Toaster } from "react-hot-toast";

function App() {
  const [count, setCount] = useState(0);

  const [bookmark, setBookmark] = useState([]);

  const addToBookmark = course => {

    const existingCourse = bookmark.filter(item => item.id === course.id)
  
    console.log('Existing Course', existingCourse);
    if(existingCourse.length === 0){
      const newBookmarks = [...bookmark, course];
      setBookmark(newBookmarks);
    } else{
      toast.error("Course Already Exists")
    }
    
  };
  

  return (
    <>
      <Header></Header>
      <Toaster></Toaster>
      <div className="md:flex max-w-7xl mx-auto">
        <Courses addToBookmark={addToBookmark}></Courses>
        <Sidebar bookmark={bookmark}></Sidebar>
      </div>
    </>
  );
}

export default App;
