import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import Table from "../Table/Table";

const Lesson = () => {
    const { singleLesson } = useLoaderData();
    console.log(singleLesson)
    return (
        <div className="max-w-7xl mx-auto">
            <table className="table">
                {/* head */}
                <thead>
                    <tr>
                        <th className="w-[20px]">S/N</th>
                        <th className="w-[40px]">Word</th>
                        <th className="w-[150px]">Meaning</th>
                        <th className="w-[150px]">Pronunciation</th>
                        <th className="w-[460px]">When To Say</th>
                        <th className="w-[460px]">Example</th>
                    </tr>
                </thead>
            </table>
            
            {
                singleLesson.map((lesson, idx) => <Table key={idx} lesson={lesson}></Table>)
            }
        </div>
    );
};

export default Lesson;
