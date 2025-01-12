import {IconTypes} from "@/assets/icons/icon.types";
import Svg, {Path} from "react-native-svg";

const SmallIce = ({active}: IconTypes) => {
    return <Svg width="15" height="15" viewBox="0 0 15 15" fill="none">
        <Path
            d="M10.15 1H4.14999C2.4103 1 1 2.41033 1 4.15002V10.15C1 11.8897 2.4103 13.3 4.14999 13.3H10.15C11.8897 13.3 13.3 11.8897 13.3 10.15V4.15002C13.3 2.41033 11.8897 1 10.15 1Z"
            stroke={active ? "black" : "#D8D8D8"} stroke-width="1.7"/>
    </Svg>
}
export default SmallIce