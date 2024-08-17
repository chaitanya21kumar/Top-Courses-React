import React from "react";
import Navbar from "./components/Navbar";
import Filter from "./components/Filter";
import Cards from "./components/Cards";
import {apiUrl,filterData} from "./data";
import {useState} from "react";
import Spinner from "./components/Spinner";
import { useEffect } from "react";
import { toast } from "react-toastify";

const App = () => {

  const [courses,setCourses] = useState([]);
  const [loading,setLoading] = useState(true);
  const [category,setCategory] = useState(filterData[0].title);

  async function fetchData(){
    // setLoading(true);
    try{
      let response=await fetch(apiUrl);
      let output=await response.json();
      // output
      setCourses(output.data);



    }
    catch(error){
      toast.error("Failed to fetch data", error);
    }
    setLoading(false);
  }

  useEffect(()=>{
    fetchData();
  },[])


  return (
    <div className="w-screen min-h-screen flex flex-col bg-bgDark2">
      <div>
        <Navbar />
      </div>

      <div>
      <div className="bg-bgDark2">
        <Filter filterData={filterData} category={category} setCategory={setCategory}  />
      </div>
      <div className="w-11/12 max-w-[1200px] 
        mx-auto flex flex-wrap justify-center items-center min-h-[50vh]">
        {
          loading ? (<Spinner/>) : (<Cards courses={courses} category={category} />) 
        }
        {/* <Cards courses={courses} /> */}
      </div>
      </div>
      
    </div>
  );
};

export default App;
