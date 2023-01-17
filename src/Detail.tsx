import React, { useEffect, useState } from 'react';
import './index.css';
import axios from 'axios';
import { useGetPokemonByNameQuery } from './components/Api/recipeApi';

const Detail = () => {
  const [foodData, setFoodData] = useState<any | {}>({});
  const { data, error, isLoading } = useGetPokemonByNameQuery();
  const [foodimg, setFoodImg] = useState([]);
  const imgArray: string[] = [
    'MANUAL_IMG01',
    'MANUAL_IMG02',
    'MANUAL_IMG03',
    'MANUAL_IMG04',
    'MANUAL_IMG05',
    'MANUAL_IMG06',
    'MANUAL_IMG07',
    'MANUAL_IMG08',
    'MANUAL_IMG09',
    'MANUAL_IMG10',
    'MANUAL_IMG11',
    'MANUAL_IMG12',
    'MANUAL_IMG13',
    'MANUAL_IMG14',
    'MANUAL_IMG15',
    'MANUAL_IMG16',
    'MANUAL_IMG17',
    'MANUAL_IMG18',
    'MANUAL_IMG19',
    'MANUAL_IMG20',
  ];

  useEffect(() => {
    console.log(data);
  }, []);
  return (
    <div className="bg-slate-200 pb-9">
      <div className=" w-4/6 mx-auto bg-white rounded-3xl">
        <div className="w-full">
          <img
            src="http://www.foodsafetykorea.go.kr/uploadimg/cook/10_00028_1.png"
            className="mx-auto mt-10 rounded-3xl"
          ></img>
        </div>
        <div className="pt-10 pb-6 font-bold text-xl pl-7">
          {foodData ? foodData.RCP_NM : null}
        </div>
        <div className="flex flex-row flex-wrap py-3 pl-3 bg-white rounded-3xl">
          {imgArray.map((value, key) => (
            <>
              <>{foodData.MANUAL_IMG + { value }}</>
              <img
                src={foodData.MANUAL_IMG + { value }}
                className=" w-36 mx-4 h-auto my-3"
                key={key}
              />
            </>
          ))}
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
            {foodData.RCP_PARTS_DTLS}
            <div className="py-2">칵테일새우 20g(5마리)</div>
            <div className="py-2">새우두부계란찜</div>
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
