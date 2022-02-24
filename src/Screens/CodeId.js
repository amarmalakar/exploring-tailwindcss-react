import { Link, useParams } from "react-router-dom"
import CustomHtml from "../Components/CustomHtml";
import htmlData from "../htmlData";

const CodeId = () => {
    const params = useParams()
    // console.log(params.codeId, htmlData);

    const currentCode = htmlData.find(code => code.id == params.codeId)
    
    return (
        <div className="p-4">
            <ul className="bg-teal-600 dark:bg-gray-600 flex space-x-4 px-4 py-2 mb-4">
                {htmlData.map(data => (
                    <li key={data.id}>
                        <Link
                            to={`/more/${data.id}`}
                            className="text-white"
                        >{data.name}</Link>
                    </li>
                ))}
            </ul>

            <CustomHtml code={currentCode} />
            
        </div>
    )
}

export default CodeId