import React from 'react';
import Head from 'next/head';
import Header from '../components/Header'
import '../scss/_index.scss';

export default () => (
    <React.Fragment>
        <Head>
            <title>하이톤 신청하기</title>
            <meta name="viewport" content="initial-scale=1.0, width=device-width"/>
            <meta name="og:title" content="5회 하이톤:여행"/>
            <meta name="og:description" content="고등학생을 위한, 고등학생에 의한, 고등학생의 해커톤! 하이톤에 오신것을 환영합니다!"/>
            <meta name="og:image" content="/static/IU3.jpg"/>
        </Head>
        <div className="home-wrap">
            <Header/>
            <div className="content-wrap">
                <div className="title-pic-wrap">
                    <div className="title-wrap">
                        <div className="title-box">
                            <h3>고등학생들만의 해커톤,</h3>
                            <h1>HIGHTHON</h1>
                        </div>
                    </div>
                    <div className="pic-preview-wrap">
                        <div className="pic-preview-box">

                        </div>
                    </div>
                </div>
                <div className="modal-wrap">
                    <div className="modal-box">
                        <div className="modal-header">
                            <h1>제5회  <b>HIGHTHON:TRIP</b></h1>
                        </div>
                        <div className="modal-content">
                            <h1>올해 겨울,</h1>
                            <h1>다함께 하이톤으로</h1>
                            <h1>여행을 떠나볼까요?</h1>
                        </div>
                        <div className="modal-footer">
                            <div className="info-wrap">
                                <div className="person-info">
                                    <h1>참가인원</h1>
                                    <h2>80명</h2>
                                </div>
                                <div className="pay-info">
                                    <h1>참가비</h1>
                                    <h2>5,000원</h2>
                                </div>
                            </div>
                            <div className="button-wrap">
                                <button className="inquiry-btn">신청조회</button>
                                <button className="apply-btn">참가하기</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </React.Fragment>
);