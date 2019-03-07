import React from 'react';
import '../scss/sponsor.scss';
import Header from '../components/Header'
import SponsorItem from '../components/SponsorItem'

const sponsors = [
    {
        name : '넥슨',
        img : '/static/images/sponsors/nexon.png'
    },
    {
        name : '넥슨',
        img : '/static/images/sponsors/nexon.png'
    },
    {
        name : '넥슨',
        img : '/static/images/sponsors/nexon.png'
    },
    {
        name : '넥슨',
        img : '/static/images/sponsors/nexon.png'
    },
    {
        name : '넥슨',
        img : '/static/images/sponsors/nexon.png'
    },
    {
        name : '넥슨',
        img : '/static/images/sponsors/nexon.png'
    },
    {
        name : '넥슨',
        img : '/static/images/sponsors/nexon.png'
    },
    {
        name : '넥슨',
        img : '/static/images/sponsors/nexon.png'
    }
];
export default () => (
    <React.Fragment>
        <div className="sponsor-wrap">
            <div className="sponsor-box">
                <Header/>
                <div className="content-wrap">
                    <div className="sponsor-item-wrap">
                        {
                            sponsors.map(sponsor => <SponsorItem src={sponsor.img} name={sponsor.name}/>)
                        }
                    </div>
                </div>
            </div>
        </div>
    </React.Fragment>
)