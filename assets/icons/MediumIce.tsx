import Svg, {Path} from "react-native-svg";
import {IconTypes} from "@/assets/icons/icon.types";

const MediumIce = ({active}: IconTypes) => {
    return <Svg width="31" height="23" viewBox="0 0 31 23" fill="none" >
        <Path
            d="M26.15 9H20.15C18.4103 9 17 10.4103 17 12.15V18.15C17 19.8897 18.4103 21.3 20.15 21.3H26.15C27.8897 21.3 29.3 19.8897 29.3 18.15V12.15C29.3 10.4103 27.8897 9 26.15 9Z"
            stroke={active ? "black" : "#D8D8D8"} stroke-width="1.7"/>
        <Path
            d="M10.15 1H4.14999C2.4103 1 1 2.41033 1 4.15002V10.15C1 11.8897 2.4103 13.3 4.14999 13.3H10.15C11.8897 13.3 13.3 11.8897 13.3 10.15V4.15002C13.3 2.41033 11.8897 1 10.15 1Z"
            stroke={active ? "black" : "#D8D8D8"} stroke-width="1.7"/>
    </Svg>
}

export default MediumIce