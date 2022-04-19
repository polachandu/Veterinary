import { BackIcon } from "../icons/back-icon";
import { BackArrowWrapper, Header, HeaderLeftWrapper } from "./header-components";

export default function TopHeader() {
    return (
        <Header>
            <BackArrowWrapper title="Go Back">
                <BackIcon />
            </BackArrowWrapper>
            <HeaderLeftWrapper>
                <h3 className="title">Admin</h3>
            </HeaderLeftWrapper>
        </Header>
    )
}