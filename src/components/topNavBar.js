import React from 'react';

import '../stylesheets/topNavBar.css';

import CFALogo from './cfaLogo';

import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

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
			<div className="logo-container">
                <CFALogo />
            </div>

			<nav className="top-nav-group">
				<ul className="top-nav-list">
					<a className="top-nav-item">
						<li>About Us</li>
					</a>
					<a className="top-nav-item">
						<li>Donate</li>
					</a>
				</ul>
			</nav>
		</div>
	);
};

export default TopNavBar;
