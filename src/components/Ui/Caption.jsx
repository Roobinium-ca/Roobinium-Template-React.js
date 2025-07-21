import './index.scss'
import Image from "./Image.jsx";

const Caption = (props) => {
    return (
        <>
            <div className="caption">
                <Image url="images/caption.svg" alt="caption"/>
            </div>
        </>
    )
};

export default Caption;
