import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Header from "./Components/Header";
import Category from "./Components/Category";
import Course from "./Components/Course";
import Shera from "./Components/Shera";

createRoot(document.getElementById("root")).render(
   <StrictMode>
         <Header />
      <div className="relative">
            <Category />
         </div>
      <Course />
      <Shera/>
   </StrictMode>
);
