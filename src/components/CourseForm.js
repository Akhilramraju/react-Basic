import React from "react";
import TextInput from "./common/TextInput";

function CourseForm(props){
    return(

        <form>
           <TextInput
               id={"title"}
               label={"title"}
               onChange={props.onChange}
               name={"title"}
               value={props.course.category}

           />

            <div className="form-group">
                <label htmlFor="author">Author</label>
                <div className="field">
                    <select
                        id="author"
                        name="authorId"
                        onChange={props.onChange}
                        value={props.course.authorId || ""}
                        className="form-control"
                    >
                        <option value="" />
                        <option value="1">Cory House</option>
                        <option value="2">Scott Allen</option>
                    </select>
                </div>
            </div>

            <TextInput
                id={"category"}
                label={"category"}
                onChange={props.onChange}
                name={"category"}
                value={props.course.category}

            />

            <input type="submit" value="Save" className="btn btn-primary" />
        </form>
    );

}

export default CourseForm;