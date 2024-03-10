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
  const [creditHour, setCreditHour] = useState(20);
  const [totalCreditHour, setTotalCreditHour] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  const addToBookmark = (course) => {
    const existingCourse = bookmark.filter((item) => item.id === course.id);

    // console.log("Existing Course", existingCourse);
    if (existingCourse.length === 0) {
      const totalCreditHours = creditHour - course.credit_hour;
      const plusCreditHours = totalCreditHour + course.credit_hour;
      const newPrice = totalPrice + course.price;
      if (creditHour <= 0) {
        toast.error("Your credit is over");
      } else {
        const newBookmarks = [...bookmark, course];
        setBookmark(newBookmarks);
        setCreditHour(totalCreditHours);
        setTotalCreditHour(plusCreditHours);
        setTotalPrice(newPrice);
      }
    } else {
      toast.error("Course Already Exists");
    }
  };

  return (
    <>
      <Header></Header>
      <Toaster></Toaster>
      <div className="md:flex max-w-7xl mx-auto">
        <Courses addToBookmark={addToBookmark}></Courses>
        <Sidebar
          bookmark={bookmark}
          creditHour={creditHour}
          totalPrice={totalPrice}
          totalCreditHour={totalCreditHour}
        ></Sidebar>
      </div>
    </>
  );
}

export default App;
