import React from 'react'
import styled from 'styled-components'
import apple from '../../image/apple.png';
import play from '../../image/google-play.png';
import youtube from '../../image/youtube.png';


const DivFooter = styled.footer`
    width: 992px;
    padding: 68px 0;
    margin: 0 auto;

`;

const TitleP = styled.p`
    font-weight: bold;
    font-size: 16px;
    line-height: 35px;
    letter-spacing: -1.05px;
    color: #171F29;
    margin-bottom: 1px;
`;

const P = styled.p`
   font-weight: bold;
    font-size: 24px;
    line-height: 35px;
    letter-spacing: -1.05px;
    color: #171F29;
    margin-bottom: 1px;
`;

const TimeP = styled.p`
    font-weight: bold;
    font-size: 12px;
    line-height: 35px;
    letter-spacing: -1.05px;
    color: #8B95A2;
    margin-bottom: 1px;
`

const FootUl = styled.ul`
    list-style: none;
    display: flex;
    margin: 0 0 14px 0;
`;

const FootLi = styled.li`
    font-weight: bold;
    font-size: 13px;
    line-height: 19px;
    letter-spacing: -0.56875px;
    color: #171F29;
    margin: 0 30px;
    display: inline-block;
    padding-right: 10px;
    
    
` ;

const FootLeft = styled.div`
    float: left;
    width: 443px;
    position: relative;
`;


const RightTitle = styled.p`
    font-weight: bold;
    font-size: 16px;
    line-height: 23px;
    letter-spacing: -0.7px;
    color: #171F29;
    margin-bottom: 16px;
`;

const BorderDiv = styled.div`
    border-bottom: 1px solid #6D7987;
    padding-bottom: 91px;
`;

const Footerbottom = styled.div`
    padding-top: 19px;
    text-align: center;

`;

const FooterLeftP = styled.p`
    font-weight: 500;
    font-size: 13px;
    line-height: 20px;
    color: #8B95A2;
`;


const BodyDiv = styled.div`
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
`;



const Footer:React.FC = () =>{
    return (
        <footer>
                <DivFooter>
                    <FootLeft>
                        <div >
                            <TitleP>고객센터</TitleP>
                            <P>02-783-9006</P>
                            <TimeP>오전 10시 ~ 오후 5시 (주말, 공휴일 제외)</TimeP>                        
                            <div className='list-none flex'>                            
                                <ul className='flex'>
                                    <li>
                                        <img src={apple} className='w-10 m-2'/>
                                    </li>
                                    <li >
                                        <img src={play} className='w-10 m-2'/>
                                    </li>
                                    <li >
                                        <img src={youtube} className='w-10 m-2'/>
                                    </li>
                                </ul>
                            </div>
                        </div>                    
                    </FootLeft>
                    <BorderDiv>
                        <RightTitle>(주)블루 레시피</RightTitle>
                        <div>
                            <FootUl>
                                <FootLi>
                                    회사소개
                                </FootLi>
                                <FootLi>
                                    이용약관
                                </FootLi>
                                <FootLi>
                                    개인정보 처리방침
                                </FootLi>
                                <FootLi>
                                    환불정책
                                </FootLi>
                            </FootUl>
                        </div>
                        <FooterLeftP>
                            법인명(상호):(주)블루레시피 | 사업자등록번호:315-88-01684|벤처기업:제 20200301103호
                            <br/>
                            특허 제 10-2210476호 | 통신판매업신고:2020-서울영등포-3611|개인정보보호책임자:송신애
                            <br/>
                            주소:서울 강남구 테헤란로 305, 한국기술센터 21층 | 대표이사: 송신애
                            <br/>
                            제휴/협력 문의:aldkr@aldkr.com|채용문의:Job@aldkr.com
                        </FooterLeftP>                    
                    </BorderDiv>
                    <Footerbottom>
                        주식회사 블루레시피는 전자상거래 등에서의 소비자보호에 관한 법률에 따른 통신판매업과 통신판매중개업을 영위하고 있습니다.
                        <br/>
                        주식회사 블루레시피는 통신판매중개자로서 중개하는 통신판매에 관하여서는 통신판매의 당사자가 아니므로 책임을 부담하지 않습니다.
                        <br/>
                        다만, 정산/환불 등에 관한 책임을 '주식회사 블루레시피' 에서 지고 있음을 알려드립니다.
                        <br/>
                        담당자 : 이지헌 / 연락처 : 02-783-9006
                    </Footerbottom>
                </DivFooter>
        </footer>
    )
}

export default Footer;
