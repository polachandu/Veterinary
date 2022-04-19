import { createGlobalStyle } from "styled-components";
import { borderColor, themeColor } from "../../styles";

const GlobalStyles = createGlobalStyle`
.layout{
    height: 100vh;
    display: flex;
    flex-direction: column;
}
.px-0{
    padding-left: 0 !important;
    padding-right: 0 !important;
}
.mr-1{
    margin-right: 8px;
}
.mb-4px{
    margin-bottom: 4px;
}
.mb-0{
    margin-bottom: 0 !important;
}
img{
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
}
@keyframes back-arrow-anim{
    0%{
        transform: translateX(0);
    }
    50%{
        transform: translateX(-5px);
    }
    100%{
        transform: translateX(0);
    }
}
::-webkit-scrollbar{
    width: 6px;
    height: 6px;
}
::-webkit-scrollbar-track{
    background-color: ${borderColor};
    border-radius: 6px;
}
::-webkit-scrollbar-thumb{
    background-color: ${themeColor};
    border-radius: 6px;
}
`
export default GlobalStyles;