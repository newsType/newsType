import React from 'react'
import {createApi,fetchBaseQuery}from '@reduxjs/toolkit/query/react';


export const recipeApi = createApi({    
    reducerPath:'recipeApi',
    baseQuery:fetchBaseQuery({baseUrl:'http://openapi.foodsafetykorea.go.kr/api/c9584cfd85c442aebc58/COOKRCP01/json/0/5'}),    
    endpoints: (bulider)=>({
        getPokemonByName :bulider.query({
            query:() =>`/`,
        })
    })    
})

export  const {useGetPokemonByNameQuery} = recipeApi;