import React from 'react';
import Head from 'next/head';

import '../scss/_index.scss';

export default () => (
  <React.Fragment>
    <Head>
      <title>하이톤 신청하기</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta name="og:title" content="5회 하이톤:여행" />
      <meta name="og:description" content="고등학생을 위한, 고등학생에 의한, 고등학생의 해커톤! 하이톤에 오신것을 환영합니다!" />
      <meta name="og:image" content="/static/IU3.jpg"/> 
    </Head>
    <div>Hello World</div>
  </React.Fragment>
);