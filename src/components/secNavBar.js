import React from 'react';

const createMenu = item => {
    let className = "sec-nav-item";
    if (item.className) {
        className += (" " + item.className);  
    };
    const href = item.href ? item.href : null;
    const id = item.id ? item.id : null;

    const menu = <a className={className} href={href} id={id}> <li> {item.menu}  </li></a>;

    return menu;
}

const createSublist = itemList => {
    if (itemList.length < 1 ) {
        return null;
    };

    let className = "sec-nav-sublist-item";
    if (itemList.class){
        className.concat(" ", itemList.class);
    }

    return <a className={className} href={itemList.href}> <li>{itemList.item}</li></a>

}

const SecNavBar = (props) => {
	return (
		<div className="sec-nav-bar">
			<img src={props.logo} className="sec-logo" />

			<nav className="sec-nav-group">
				<ul className="sec-nav-list">
					{props.menu.map((item) =>  createMenu(item))}
				</ul>
			</nav>
		</div>
	);
};

export default SecNavBar;

