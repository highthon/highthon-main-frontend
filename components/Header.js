import Link from 'next/link'
import styled from "styled-components"

const HeaderWrapper = styled.div`
    width: 100%;
    height: 90px;
    display: flex;
`;
const LogoWrapper = styled.div`
    width:100%;
    height:100%;
    display:flex;
    justify-content: flex-start;
    padding-left: 5%;
`;
const MenuWrapper = styled.div`
    width:100%;
    height:100%;
    display:flex;
    justify-content: flex-end;
`;
const LogoLi = styled.li`
    width:100%;
    height:100%;
    line-height:90px;
    list-style:none;
`;
const MenuLi = styled.li`
    width:100%;
    height:100%;
    float:left;
    line-height:90px;
    text-align:center;
    list-style:none;
`;
const MenuName = styled.a`
    color:#00000;
    text-decoration:none
`;
const LogoImg = styled.img`
    src: url(${props => props.src});
`;

export default () => {
    return(
        <HeaderWrapper>
            <LogoWrapper>
                <LogoLi>
                    <Link href="/"><MenuName><LogoImg src="../static/images/logo.png"/></MenuName></Link>
                </LogoLi>
            </LogoWrapper>
            <MenuWrapper>
                <MenuLi><Link href="/about"><MenuName>소개</MenuName></Link></MenuLi>
                <MenuLi><Link href="/article"><MenuName>기사</MenuName></Link></MenuLi>
                <MenuLi><Link href="/sponsor"><MenuName>후원사</MenuName></Link></MenuLi>
                <MenuLi><Link href="/apply"><MenuName>신청하기</MenuName></Link></MenuLi>
                <MenuLi><Link href="/photo"><MenuName>행사사진</MenuName></Link></MenuLi>
            </MenuWrapper>
        </HeaderWrapper>
    )
}