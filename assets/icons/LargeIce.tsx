import Svg, {Path} from "react-native-svg";
import {IconTypes} from "@/assets/icons/icon.types";

const LargeIce = ({active}: IconTypes) => {
    return <Svg width="29" height="27" viewBox="0 0 29 27" fill="none">
        <Path
            d="M10.15 13H4.14999C2.4103 13 1 14.4103 1 16.15V22.15C1 23.8897 2.4103 25.3 4.14999 25.3H10.15C11.8897 25.3 13.3 23.8897 13.3 22.15V16.15C13.3 14.4103 11.8897 13 10.15 13Z"
            stroke={active ? "black" : "#D8D8D8"} stroke-width="1.7"/>
        <Path
            d="M16.15 1H10.15C8.4103 1 7 2.41033 7 4.15002V10.15C7 11.8897 8.4103 13.3 10.15 13.3H16.15C17.8897 13.3 19.3 11.8897 19.3 10.15V4.15002C19.3 2.41033 17.8897 1 16.15 1Z"
            stroke-width="1.7" stroke={active ? "black" : "#D8D8D8"}/>
        <Path
            d="M24.15 13H18.15C16.4103 13 15 14.4103 15 16.15V22.15C15 23.8897 16.4103 25.3 18.15 25.3H24.15C25.8897 25.3 27.3 23.8897 27.3 22.15V16.15C27.3 14.4103 25.8897 13 24.15 13Z"
            stroke={active ? "black" : "#D8D8D8"} stroke-width="1.7"/>
    </Svg>

}
export default LargeIce