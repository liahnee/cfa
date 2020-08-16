import React from 'react';

import Logo from '../assets/logos/logo_CFA_l.png';

const CFALogo = (props) => {
	return (
		<div className="cfa-logo">
			<a className="cfa-logo-link" href="/cfa">
				<img className="cfa-logo-img" src={Logo} alt="CFA logo"/>
			</a>
		</div>
	);
};

export default CFALogo;

// wrap with HOC that returns Logo in vertical mid on CFA pages and on top for CKA and DSFA