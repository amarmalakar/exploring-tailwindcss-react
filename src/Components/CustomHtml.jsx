import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const CustomHtml = ({ code }) => {
    const params = useParams()
    // console.log(code.JavaScriptCode);
    const [jsCode, setJsCode] = useState(null);

    useEffect(() => {
        if (!code.JavaScriptCode) {
            setJsCode(null)
        } else {
            // let jsCodeString = code.JavaScriptCode;
            // let jsCodeDecode = new Function(jsCodeString);
            // console.log(jsCodeDecode);
            // jsCodeDecode()
            // setJsCode(jsCodeDecode);
            setJsCode(code.JavaScriptCode)
        }
    }, [params])
    // console.log(jsCode);
    return (
        <div>
            <div
                dangerouslySetInnerHTML={ { __html: code.code } }
            ></div>
            <script>{jsCode}</script>
            {/* <div dangerouslySetInnerHTML={ { __html: jsCode } }></div> */}
        </div>
    )
}

export default CustomHtml
