// import {coursesAndDurationArray} from "../../data/coursesAndDurationArr.tsx";
import {FC} from "react";
import {coursesAndDurationType} from "../../models/coursesAndDuration.tsx";

type MyCoursesAndDurationType = {
    coursesAndDurationArray: coursesAndDurationType
}

const MyCoursesDuration: FC<MyCoursesAndDurationType> = ({coursesAndDurationArray}) => {
    return (
        <div>
            <h2>Назва курсу - {coursesAndDurationArray.title}</h2>
            <h2>Кількість місяців занять - {coursesAndDurationArray.monthDuration}</h2>
        </div>
    );
};

export default MyCoursesDuration;