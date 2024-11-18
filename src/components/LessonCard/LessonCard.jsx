import { Link } from "react-router-dom";

const LessonCard = ({ lesson }) => {
    const { image_url, Id, Lesson_no } = lesson;
    return (
        <div className="relative">
            <Link to={`/start-learning/${Lesson_no}`}>
                <img className="h-full rounded-md" src={image_url} alt="" />
                <h2 className="absolute bottom-3 left-40 font-bold text-2xl">Lesson - {Lesson_no}</h2>
            </Link>
        </div>
    );
};

export default LessonCard;