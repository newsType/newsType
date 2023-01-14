import React from 'react';
import styled from 'styled-components';
import './index.css';

let Outside = styled.div`
  background: #f2f3f4;
  width: 100%;
  height: 100%;
`;
let Container = styled.div`
  width: 80vw;
  height: 100vh;
  margin: 0 auto;
  background: white;
  position: relative;
  display: block;
`;

//! 왜 이미지에 width랑 height 둘 다 명시해야 하는지 모르겠음
let MainImg = styled.img`
  margin: 0 auto;
  width: 80%;
  height: 60%;
  background-image: url('picture/detailMain.png');
  margin-top: 100px;
  background-size: cover;
`;
{
  /* <Outside>
<Container>
  <MainImg />
</Container>
</Outside> */
}

const Detail = () => {
  return (
    <div className="bg-slate-200 pb-9">
      <div className=" h-16 w-full bg-blue-600 py-4 px-52 font-bold text-xl text-white">
        Recipe Bank
      </div>
      <div className=" w-4/6 mx-auto bg-white rounded-3xl">
        <div className="w-full">
          <img
            src="http://www.foodsafetykorea.go.kr/uploadimg/cook/10_00028_1.png"
            className="mx-auto mt-10 rounded-3xl"
          ></img>
        </div>
        <div className="pt-10 pb-6 font-bold text-xl pl-7">타코야끼</div>
        <div className="flex flex-row flex-wrap py-3 pl-3 bg-white rounded-3xl">
          <img
            src="http://www.foodsafetykorea.go.kr/uploadimg/cook/10_00028_1.png"
            className=" w-36 mx-4 h-auto"
          />
          <img
            src="http://www.foodsafetykorea.go.kr/uploadimg/cook/20_00028_2.png"
            className=" w-36 mx-4 h-auto"
          />
          <img
            src="http://www.foodsafetykorea.go.kr/uploadimg/cook/20_00028_3.png"
            className=" w-36 mx-4 h-auto"
          />
        </div>
      </div>
      <div className="mt-12 w-4/6 mx-auto h-auto bg-slate-100 font-bold text-xl rounded-3xl flex flex-col">
        <div className="flex flex-row w-full relative">
          <div className="flex flex-1 px-8 py-6 h-auto justify-center text-blue-500 relative">
            <div className=" absolute border-b-4 border-blue-500 w-10 h-4 bottom-0"></div>
            재료
          </div>
          <div className="flex flex-1 px-8  py-6 h-auto justify-center relative">
            <div className=" absolute border-b-4 border-blue-500 w-14 h-4 bottom-0"></div>
            조리법
          </div>
        </div>
        {/* 여기는 재료 */}
        {/* <div className="w-full mx-auto h-auto bg-white font-bold text-xl flex flex-col relative p-5 rounded-br-3xl rounded-bl-3xl">
          <div className="font-semibold text-lg pb-6">기본 재료</div>
          <div className="font-medium text-sm flex flex-col">
            <div className="py-2">칵테일새우 20g(5마리)</div>
            <div className="py-2">새우두부계란찜</div>
            <div className="py-2">연두부 75g(3/4모)</div>
            <div className="py-2">달걀30g(1/2개)</div>
            <div className="py-2">생크림 13g(1큰술)</div>
            <div className="py-2">설탕 5g(1작은술)</div>
            <div className="py-2">무염버터</div>
            <div className="py-2">5g(1작은술)</div>
            <div className="py-2">고명</div>
            <div className="py-2">시금치 10g(3줄기)</div>
          </div>
        </div> */}

        {/* 여기는 조리방법 */}
        <div className="w-full mx-auto h-auto bg-white font-bold text-xl flex flex-col relative p-5 rounded-br-3xl rounded-bl-3xl">
          <div className="font-semibold text-lg pb-6">조리법</div>
          <div className="font-medium text-sm flex flex-col">
            <div className="pb-12">
              <div className="py-2">
                1. 손질된 새우를 끓는 물에 데쳐 건진다.
              </div>
              <img
                className="w-24"
                src="http://www.foodsafetykorea.go.kr/uploadimg/cook/10_00028_1.png"
              />
            </div>
            <div className="pb-12">
              <div className="py-2">
                2. 연두부, 달걀, 생크림, 설탕에 녹인 무염버터를 믹서에 넣고 간
                뒤 새우(1)를 함께 섞어 그릇에 담는다.
              </div>
              <img
                className="w-24"
                src="http://www.foodsafetykorea.go.kr/uploadimg/cook/20_00028_2.png"
              />
            </div>
            <div className="pb-12">
              <div className="py-2">
                3. 시금치를 잘게 다져 혼합물 그릇(2)에 뿌리고 찜기에 넣고 중간
                불에서 10분 정도 찐다.
              </div>
              <img
                className="w-24"
                src="http://www.foodsafetykorea.go.kr/uploadimg/cook/20_00028_3.png"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
