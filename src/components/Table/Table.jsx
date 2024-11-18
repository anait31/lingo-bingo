



const Table = ({ lesson }) => {
    const { example, when_to_say, Id, part_of_speech, meaning, pronunciation, word } = lesson;
    return (
        <div>
            <div className="">
                <table className="table">
                    <tbody>
                        <tr className="border-2">
                            <th className="w-[20px]">{Id}</th>
                            <td className="w-[40px]">{word}</td>
                            <td className="w-[150px]">{meaning}</td>
                            <td className="w-[150px]">{pronunciation}</td>
                            <td className="w-[460px]">{when_to_say}</td>
                            <td className="w-[460px]">{example}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Table;