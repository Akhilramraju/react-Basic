import React,{useState} from "react";
import CourseForm from "./CourseForm";


const ManageCoursePage = props => {
    const [course,setCourse] = useState({
        id:null,
        slug:"",
        title:"",
        authorId:null,
        category:""
    });
function handleChange({target}){
  const updatedCourse ={...course,[target.name]:target.value};

  setCourse(updatedCourse);
}
    return(

        <>
            <h2>Manage Course</h2>
            <CourseForm course={course} onChange={handleChange}/>
            {/*<Prompt when={true} message={"Are you sure you want to leave?"} /> */}
            {props.match.params.slug}
        </>
    );
}

export default ManageCoursePage;