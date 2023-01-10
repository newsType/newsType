import axios from 'axios';
import React, { useState } from 'react';
import { JSDOM } from 'jsdom';
import { Readability } from '@mozilla/readability';

const Detail = () => {
  let mykey: string = 'ed57a57944a24a7589e942ebb82eb3fd';
  let url: string =
    'https://newsapi.org/v2/everything?' +
    'q=tesla&from=2022-12-09&' +
    'sortBy=publishedAt&' +
    'apiKey=' +
    mykey;
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
  };

  return (
    <div>
      <button
        onClick={() => {
          axios
            .get(
              'naver/search.naver?where=nexearch&sm=top_hty&fbm=0&ie=utf8&query=%EC%BD%94%EC%8A%A4%ED%94%BC',
              // 'lesnumeriques/pro/ces-2023-on-a-teste-le-tunnel-anti-bouchon-d-elon-musk-n202305.html',
            )
            .then((data) => {
              console.log(data.data);
            });
          // axios.get(url).then(function (r1) {
          //   let firstResult = r1.data.articles[0];
          //   axios
          //     .get(firstResult.url, {
          //       headers: {
          //         'Access-Control-Allow-Origin': '*',
          //       },
          //     })
          //     .then(function (r2) {
          //       console.log('제발요');
          //     });
          // axios.get(firstResult.url).then(function (r2) {
          //   let dom = new JSDOM(r2.data, {
          //     url: firstResult.url,
          //   });
          //   let article = new Readability(dom.window.document).parse();
          //   if (article) {
          //     console.log(article.textContent);
          //   } else {
          //     console.log('아니진짜');
          //   }
          // });
          // });
        }}
      >
        버튼
      </button>
      ddd
    </div>
  );
};

export default Detail;
