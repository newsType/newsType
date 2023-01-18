import React, { useEffect, useState } from 'react';
import './index.css';
import { useGetPokemonByNameQuery } from './components/Api/recipeApi';

const Detail = () => {
  const [foodData, setFoodData] = useState();
  const { data, error, isLoading } = useGetPokemonByNameQuery();
  const [isIngre, setIsIngre] = useState(true);
  // const [foodRecipe, setFoodRecipe] = useState([
  //   foodData.MANUAL01,
  //   foodData.MANUAL02,
  //   foodData.MANUAL03,
  //   foodData.MANUAL04,
  //   foodData.MANUAL05,
  //   foodData.MANUAL06,
  //   foodData.MANUAL07,
  // ]);

  const onClickToggle = () => {
    setIsIngre(!isIngre);
  };

  const imgArray = [
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

  const DetailRecipe = () => {
    let [aa, setAaa] = useState(data.COOKRCP01.row[0]);
    console.log(aa.MANUAL01);
    return (
      <div className="w-full mx-auto h-auto bg-white font-bold text-xl flex flex-col relative p-5 rounded-br-3xl rounded-bl-3xl">
        <div className="font-semibold text-lg pb-6">조리법</div>
        <div className="font-medium text-sm flex flex-col">
          <div className="pb-12">
            <div className="py-2">
              {data.COOKRCP01.row[0].MANUAL01.slice(0, -1)}
            </div>
            <img className="w-24" src={data.COOKRCP01.row[0].MANUAL_IMG01} />
          </div>
          <div className="pb-12">
            <div className="py-2">
              {data.COOKRCP01.row[0].MANUAL02.slice(0, -1)}
            </div>
            <img className="w-24" src={data.COOKRCP01.row[0].MANUAL_IMG02} />
          </div>
          <div className="pb-12">
            <div className="py-2">
              {data.COOKRCP01.row[0].MANUAL03.slice(0, -1)}
            </div>
            <img className="w-24" src={data.COOKRCP01.row[0].MANUAL_IMG03} />
          </div>
          {data.COOKRCP01.row[0].MANUAL04 === '' ? null : (
            <div className="pb-12">
              <div className="py-2">{data.COOKRCP01.row[0].MANUAL04}</div>
              <img className="w-24" src={data.COOKRCP01.row[0].MANUAL_IMG04} />
            </div>
          )}
        </div>
      </div>
    );
  };

  const DetailIngre = () => {
    let ingreData = data.COOKRCP01.row[0].RCP_PARTS_DTLS.split(', ');
    return (
      <div className="w-full mx-auto h-auto bg-white font-bold text-xl flex flex-col relative p-5 rounded-br-3xl rounded-bl-3xl">
        <div className="font-semibold text-lg pb-6">기본 재료</div>
        <div className="font-medium text-sm flex flex-col">
          {ingreData.map((ingreData, key) => {
            return (
              <div className=" py-1" key={key}>
                {ingreData}
              </div>
            );
          })}
        </div>
      </div>
    );
  };

  const DetailPicture = () => {
    return (
      <div className=" w-4/6 mx-auto bg-white rounded-3xl">
        <div className="w-full">
          <img
            src={data.COOKRCP01.row[1].ATT_FILE_NO_MAIN}
            className="mx-auto mt-10 rounded-3xl"
          ></img>
        </div>
        <div className="pt-10 pb-6 font-bold text-xl pl-7">
          {data.COOKRCP01.row[1].RCP_NM}
        </div>
        <div className="flex flex-row flex-wrap py-3 pl-3 bg-white rounded-3xl">
          <img
            src={data.COOKRCP01.row[1].MANUAL_IMG01}
            className=" w-36 mx-4 h-auto my-3"
          />
          <img
            src={data.COOKRCP01.row[1].MANUAL_IMG02}
            className=" w-36 mx-4 h-auto my-3"
          />
          <img
            src={data.COOKRCP01.row[1].MANUAL_IMG03}
            className=" w-36 mx-4 h-auto my-3"
          />
        </div>
      </div>
    );
  };
  if (error) {
    return <>error</>;
  }
  if (isLoading) {
    return <>isLoding</>;
  }

  return (
    <div className="bg-slate-200 pb-9">
      <DetailPicture />
      <div className="mt-12 w-4/6 mx-auto h-auto bg-slate-100 font-bold text-xl rounded-3xl flex flex-col">
        <div className="flex flex-row w-full relative">
          <div
            className="flex flex-1 px-8 py-6 h-auto justify-center relative cursor-pointer"
            onClick={onClickToggle}
          >
            {isIngre === false ? null : (
              <div className=" absolute border-b-4 border-blue-500 w-10 h-4 bottom-0"></div>
            )}
            재료
          </div>
          <div
            className="flex flex-1 px-8  py-6 h-auto justify-center relative cursor-pointer"
            onClick={onClickToggle}
          >
            {isIngre === false ? (
              <div className=" absolute border-b-4 border-blue-500 w-14 h-4 bottom-0"></div>
            ) : null}
            조리법
          </div>
        </div>
        {isIngre === true ? <DetailIngre /> : <DetailRecipe />}
      </div>
    </div>
  );
};

export default Detail;
