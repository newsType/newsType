import React from 'react'
import styled from 'styled-components'
import bell from '../../image/bell.png'
import user from '../../image/user.png'
import img from '../../image/header_img.webp'

const HeaderDiv  = styled.header`
    font-family: "Noto Sans KR";
    height: 377px;
    background-repeat: no-repeat;
    background-size: 100%;
    background-position:center bottom;
`;

const HeaderDiv_wrap = styled.div`
    display: flex;
    justify-content: space-around;
    background-color: rgb(0,0,0,0.2);

`;

const HeaderContent = styled.div`
    position: relative;
    float: right;
    display: flex;
    display: inline-block;
    margin-top: 25.25px;
`;

const HeaderUl = styled.ul`
    display: flex;
    line-height: 9px;
    align-items: center;
    font-weight: 500;
    font-family: '';
    justify-content: flex-end;
    color: #fff;    
`;

const HeaderLi = styled.li`
    padding: 24px;
    font-size: 14px;
    font-family: "Noto Sans KR";
    
`;

const HeaderLogo = styled.div`
    width: max-content;
    text-decoration: none;
    margin-top: 30px;
    font-size: 1.5rem;
    line-height: 29px;
    letter-spacing: -0.25px;
    display: flex;
    align-items: center;
    color: #fff;
`;
const HeaderLIimg = styled.li`
    filter:invert(100%);
    padding: 24px;
    font-size: 14px;
`;

const HeaderunderDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

const HeaderunderP = styled.p`
    display: flex;
    justify-content: center;
    font-size: 5rem;
    font-weight: 700;
    line-height: 72px;
    letter-spacing: -2.1875px;
    color: #fff;
    text-shadow: 0px 2px 12px rgb(0 0 0 / 26%);
    transition: all .5s;
    margin-top: 25px;

`;

const Header:React.FC = () =>{
    return (
        <HeaderDiv style={{backgroundImage:`url(${img})`}}> 
            <HeaderDiv_wrap>
                <HeaderLogo>
                    RecipeBank
                </HeaderLogo>
                <HeaderContent>
                    <HeaderUl>
                        <HeaderLi >
                            News
                        </HeaderLi>
                        <HeaderLi>
                            Youtube
                        </HeaderLi>
                        <HeaderLi>
                            Lab
                        </HeaderLi>
                        <HeaderLIimg>
                            <img src={bell}/>
                        </HeaderLIimg>
                        <HeaderLIimg>
                            <img src={user}/>
                        </HeaderLIimg>
                    </HeaderUl>
                </HeaderContent>
            </HeaderDiv_wrap>
            <HeaderunderDiv>
                <HeaderunderP>프로를 위한 프리미엄 레시피</HeaderunderP>
            </HeaderunderDiv>
        </HeaderDiv>
    )
}

export default Header;