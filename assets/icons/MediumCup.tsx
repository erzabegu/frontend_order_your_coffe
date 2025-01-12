import Svg, {Path} from "react-native-svg";
import {IconTypes} from "@/assets/icons/icon.types";

const MediumCup = ({active}: IconTypes) => {
    return <Svg width="24" height="31" viewBox="0 0 24 31" fill="none">
        <Path
            d="M21.8333 4.42807H21.7475L21.7746 4.13211C21.7752 4.12564 21.7757 4.11918 21.7762 4.11271C21.8605 2.91346 21.4774 1.72683 20.7513 0.938462C20.1939 0.333244 19.4726 0 18.7201 0C18.7197 0 18.7194 0 18.7191 0L5.0311 0.00555911C4.27845 0.00586123 3.5568 0.339589 2.99907 0.94523C2.27288 1.7339 1.88933 2.92053 1.97307 4.11954C1.97355 4.12601 1.97409 4.13247 1.97463 4.13894L2.00163 4.43508C0.883825 4.52082 0 5.46756 0 6.61987V7.9633C0 9.17186 0.971992 10.1551 2.16673 10.1551H2.52334L4.34953 30.1769C4.39206 30.6433 4.77884 31 5.24178 31H5.2422L18.4959 30.9942C18.9586 30.994 19.345 30.6375 19.3877 30.1715L21.2225 10.1552H21.8333C23.028 10.1552 24 9.17192 24 7.96336V6.61993C24 5.41131 23.028 4.42807 21.8333 4.42807ZM4.31035 2.18074C4.46255 2.01548 4.71128 1.81837 5.03176 1.81825L18.7198 1.81275H18.7201C19.0401 1.81275 19.2884 2.00925 19.4403 2.17415C19.8318 2.59918 20.0367 3.27178 19.9893 3.97494L19.9478 4.42807H3.8007L3.76008 3.98268C3.71307 3.27939 3.91849 2.60638 4.31035 2.18074ZM18.3058 22.3412H5.43454L4.72281 14.5383H19.021L18.3058 22.3412ZM6.05894 29.1869L5.59989 24.154H18.1397L17.6788 29.1818L6.05894 29.1869ZM19.1872 12.7256H4.55747L4.32301 10.1552H19.4228L19.1872 12.7256ZM22.208 7.96336C22.208 8.17237 22.0399 8.34241 21.8333 8.34241H2.16679C1.96017 8.34241 1.79208 8.17237 1.79208 7.96336V6.61993C1.79208 6.41092 1.96017 6.24088 2.16679 6.24088H21.8332C22.0398 6.24088 22.2079 6.41092 22.2079 6.61993V7.96336H22.208Z"
            fill={active ? "black" : "#D8D8D8"}/>
    </Svg>

}

export default MediumCup