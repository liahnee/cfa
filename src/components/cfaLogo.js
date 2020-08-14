import React from 'react';

import Logo from '../assets/logos/logo_CFA_l.png';

const CFALogo = (props) => {
	return (
		<div class="cfa-logo">
			<a class="cfa-logo-link" href="/cfa">
				<img class="cfa-logo-img" src={Logo} />
			</a>
		</div>
	);
};

export default CFALogo;

// wrap with HOC that returns Logo in vertical mid on CFA pages and on top for CKA and DSFA