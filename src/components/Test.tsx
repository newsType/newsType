import React,{useEffect,useState} from 'react';
import axios from 'axios';

export default function Test() {        
    const [data,setData] = useState('');

    
    useEffect(() => {
        const apiGet =  async() =>{
            const client_id = 'Oye8CbZD3pb_0z2dEyJ7';
            const client_Secret = '1orjThSpaX';
            try{
                const response = await axios.get('/v1/search/news.json',{
                    params:{
                        query:'코로나',
                        display:100
                    },
                headers: {
                    'Content-Type': 'application/json',
                    'X-Naver-Client-Id': client_id,
                    'X-Naver-Client-Secret': client_Secret
               }
            });
            console.log("통과");
            setData(response.data);
        }catch(e){
            console.log(e);
        }                                     
    };
        apiGet();
    }, []);    
    console.log(data);
  return (
    <div>
    
    </div>
  )
}

