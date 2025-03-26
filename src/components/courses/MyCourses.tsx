import {FC} from "react";
import CourseItem from "./CourseItem";
import {coursesArrayHome} from "../../data/coursesArr";

const MyCourses: FC = () => {
    return (
        <div>
            <h2>Мої курси</h2>
            {
                coursesArrayHome.map((course, index) => (
                    <CourseItem key={index} course={course}/>
                ))
            }
        </div>
    );
};

export default MyCourses;