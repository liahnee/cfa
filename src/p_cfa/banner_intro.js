import React from 'react';
import DefaultBg from '../assets/banner_images/1.png';

const Banner = (props) => {
	const styleBg = () => {
		const backgroundImage = props.bg ? props.bg : '';
		const backgroundSize = props.bgSize ? props.bgSize : 'cover';
		const height = props.bgHeight ? props.bgHeight : 'calc(100vh - 6rem)';
		return { height };
	};

	const styleText = () => {
		const font = props.font ? props.font : 'Roboto';
		return { fontFamily: font, padding: '2rem' };
	};

	return (
		<div className="banner-intro">
			<div className="banner-intro-background" />
			<div className="banner-text">
				<div class="banner-button" />
			</div>
		</div>
	);
};

export default Banner;
