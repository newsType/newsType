import React,{useState} from 'react';
import {useGetPokemonByNameQuery } from './Api/recipeApi';

const Main = () =>{
  const { data, error, isLoading } = useGetPokemonByNameQuery();
  
  if(error){
    return <>error</>
  }
  if(isLoading){
    return <>isLoding</>
  }
  
  return(
   <div>
    <ul>
      {
        data.COOKRCP01.row.map((value,index)=>(
          <li key={index}>
            <img src={value.ATT_FILE_NO_MAIN}/>
            {value.RCP_NM}
          </li>
        ))
      }
    </ul>
   </div>
    
  )  
}



export default Main;