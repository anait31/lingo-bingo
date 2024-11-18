import { useLoaderData } from "react-router-dom";
import LessonCard from "../LessonCard/LessonCard";

const StartLearning = () => {
    const lessons = useLoaderData();
    console.log(lessons); // You should see an array of lessons here

    return (
        <div className="grid grid-cols-3 gap-8 max-w-7xl mx-auto">
            {
                lessons.map((lesson, idx) => <LessonCard key={idx} lesson={lesson}></LessonCard>)
            }
        </div>
    );
};

export default StartLearning;
