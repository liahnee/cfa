import React from 'react';
import DefaultBg from '../assets/banner_images/1.png';

const Banner = props => {

    const styleBg = () => {
        const backgroundImage = props.bg ? props.bg : `url(${DefaultBg}`;
        const backgroundSize = props.bgSize ? props.bgSize : "cover";
        const height = props.bgHeight ? props.bgHeight : "calc(100vh - 6rem)";
        return {backgroundImage, backgroundSize, height, content: ""};
    }

    const styleText = () => {
        const font = props.font? props.font : "Roboto";
        return {fontFamily: font, padding: "2rem"};
    }

    return (
        <div className="banner_intro banner" style={styleBg()}>
            {/* <div className="banner-text" style={styleText()}>
                {props.text}
            </div> */}
        </div>
    )
};

export default Banner;