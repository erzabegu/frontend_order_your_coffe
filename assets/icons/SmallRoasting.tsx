import Svg, {Path} from "react-native-svg";
import {IconTypes} from "@/assets/icons/icon.types";

const SmallRoasting = ({active}: IconTypes) => {
    return <Svg width="51" height="27" viewBox="0 0 21 27" fill="none">
        <Path
            d="M8.47998 0C11.351 7.987 5.00697 8.27002 1.50897 13.348C-0.926031 16.885 -1.33702 24.667 7.44098 26.706C3.74898 24.696 2.95597 18.862 6.94897 15.208C5.91797 18.751 7.81199 21.022 10.193 20.189C12.527 19.372 14.043 21.107 14.003 23.081C13.976 24.441 13.566 25.489 12.117 26.253C12.117 26.253 20.128 24.667 20.128 16.568C20.128 11.64 15.89 10.957 18.023 6.82602C15.48 7.05202 14.602 8.773 14.851 11.612C15.015 13.481 13.128 14.765 11.734 13.906C10.601 13.209 10.64 11.835 11.624 10.819C13.72 8.656 14.55 3.71 8.47998 0Z"
            fill={active ? "black" : "#D8D8D8"}/>
    </Svg>
}

export default SmallRoasting