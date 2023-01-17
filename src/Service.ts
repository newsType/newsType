// createApi를 import하기위해 React 엔트리 포인트 사용
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// base URL과 엔드포인트들로 서비스 정의
export const foodApi = createApi({
  reducerPath: 'foodApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://openapi.foodsafetykorea.go.kr/api/',
  }),
  endpoints: (builder) => ({
    getFoodApi: builder.query({
      query: (name) => `pokemon/${name}`,
    }),
  }),
});

// 정의된 엔드포인트에서 자동으로 생성된 훅을 함수형 컴포넌트에서 사용하기 위해 export
export const { useGetFoodApiQuery } = foodApi;
