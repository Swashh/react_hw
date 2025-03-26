import {FC} from "react";
import {coursesType} from "../../models/courses.tsx";

type MyCoursesType = {
    coursesTitleArray: coursesType
}

const MyCourses: FC<MyCoursesType> = ({coursesTitleArray}) => {
    return (
        <div>
            <h2>{coursesTitleArray}</h2>
        </div>
    );
};

export default MyCourses;