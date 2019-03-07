import React from 'react';
import '../scss/about.scss';
import Header from '../components/Header'

export default () => (
    <React.Fragment>
        <div className="about-wrap">
            <div className="about-box">
                <Header/>
                <div className="content-wrap">
                    <div className="pic-wrap">
                        <div className="pic-box">

                        </div>
                    </div>
                    <div className="descr-wrap">
                        <div className="descr-box">
                            <h3>고등학생들만의 해커톤,</h3>
                            <h1><b>HIGHTHON이란?</b></h1>
                            <br/><br/>
                            <div className="description">
                                <p>고등학생들이 더 높은 미래를 향해 힘차게 비상하자는 의미를 담고 있습니다.
                                    다양한 SW 특성화고 및 마이스터고 운영진들이 자발적으로 결성하여 기획부터 후원까지 운영하고 있습니다.
                                    친근한 분위기 속에서 다양한 학생들이 서로 네트워킹하고 상호작용할 수 있 해커톤입니다.</p>
                                <p>특히 하이톤은 비슷한 분야를 샬랴샬라 다시 수정해서 적을예정</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </React.Fragment>
)