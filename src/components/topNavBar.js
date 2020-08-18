import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../stylesheets/topNavBar.css';

import CFALogo from './cfaLogo';
const TopNavBar = (props) => {
	const [ anchorEl, setAnchorEl ] = React.useState(null);

	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};

	return (
		<div className="top-nav-bar">
			<CFALogo />

			<nav className="top-nav-group">
				<ul className="top-nav-list">
					<a className="top-nav-item">
						<li>
							<FontAwesomeIcon icon={[ 'fab', 'facebook' ]} color="#3b5998" size="2x" />
						</li>
					</a>
					<a className="top-nav-item">
						<li>
							<FontAwesomeIcon icon={[ 'fab', 'youtube' ]} color="#c4302b" size="2x"  />
						</li>
					</a>
					<a className="top-nav-item">
						<li>
							<FontAwesomeIcon icon={[ 'fab', 'twitter' ]} color="#00acee" size="2x" />
						</li>
					</a>
					<a className="top-nav-item">
						<li>ABOUT US</li>
					</a>
					<a className="top-nav-item">
						<li>DONATE</li>
					</a>
				</ul>
			</nav>
		</div>
	);
};

export default TopNavBar;
