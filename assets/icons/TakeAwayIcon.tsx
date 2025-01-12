import Svg, {Path} from "react-native-svg";
import {IconTypes} from "@/assets/icons/icon.types";

const TakeAwayIcon = ({active}: IconTypes) => {
    return <Svg width="20" height="40" viewBox="0 0 20 34" fill={active ? "black" : "#D8D8D8"}>
        <Path
            d="M11.0276 0.00255391C10.4786 -0.0364929 10.0024 0.376819 9.96345 0.9256L9.59994 6.04306H6.97265C6.81799 6.04306 6.66552 6.07905 6.5272 6.14818C6.41218 6.24367 2.65552 7.60201 2.05952 12.0196H0.996093C0.445984 12.0196 0 12.4655 0 13.0156V17C0 17.5501 0.445984 17.9961 0.996093 17.9961H2.10846L3.77393 31.3824C3.96046 32.8747 5.2352 34 6.7391 34H13.1827C14.6865 34 15.9613 32.8747 16.1479 31.3818L17.8134 17.9961H18.9258C19.4759 17.9961 19.9219 17.5501 19.9219 17V13.0156C19.9219 12.4655 19.4759 12.0196 18.9258 12.0196H17.8623C17.2683 7.61569 13.4997 6.23531 13.3947 6.14818C13.2564 6.07899 13.1039 6.04299 12.9492 6.04299H11.5972L11.9507 1.06671C11.9896 0.517932 11.5764 0.0415344 11.0276 0.00255391V0.00255391ZM7.20779 8.03518H9.45843L9.17541 12.0196H4.07502C4.61291 9.08214 7.15148 8.08133 7.20779 8.03518ZM8.51122 21.3476C7.45144 21.6212 6.27983 21.8491 4.6066 21.9391L4.11599 17.9961H8.74928L8.51122 21.3476ZM14.1712 31.1352C14.109 31.6327 13.6841 32.0078 13.1828 32.0078H6.73917C6.23787 32.0078 5.81293 31.6328 5.75084 31.1358L4.85316 23.9206C6.29378 23.8354 7.40124 23.6533 8.36306 23.4339L7.97133 28.9489C7.93235 29.4977 8.3456 29.9741 8.89431 30.0131C9.44542 30.0518 9.91962 29.637 9.95847 29.0901L10.3988 22.8914C11.7596 22.5033 13.0946 22.1421 15.305 22.0223L14.1712 31.1352ZM15.5546 20.0159C13.3158 20.1094 11.8483 20.428 10.5487 20.7809L10.7465 17.996H15.8059L15.5546 20.0159ZM17.9297 16.0039H1.99219V14.0117H17.9297V16.0039ZM12.7141 8.03518C12.7987 8.10464 15.2988 9.02636 15.8468 12.0196H11.1726L11.4556 8.03518H12.7141Z"
            fill={active ? "black" : "#D8D8D8"}
        />
    </Svg>
}

export default TakeAwayIcon