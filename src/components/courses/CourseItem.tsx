import {FC} from "react";
import {CoursesModel} from "../../models/coursesModel";

interface CourseItemProps {
    course: CoursesModel;
}

const CourseItem: FC<CourseItemProps> = ({course}) => {
    return (
        <div>
            <hr/>
            <h3>{course.title}</h3>
            <p>Тривалість: {course.monthDuration} місяців ({course.hourDuration} годин)</p>
            <p>Модулі: {course.modules.join(", ")}</p>
        </div>
    );
};

export default CourseItem;




