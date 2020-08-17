import React from 'react';
import TopBanner from './banner_intro';
import DSFA from '../assets/banner_images/6.png';
import ListCompanies from '../components/listCompanies';

import '../stylesheets/cfa/mainBanner.css';
import '../stylesheets/cfa/home.css';

const coli = [
	{
		title: 'Funders and Donors',
		logos: [
			'http://www.computingforall.org/wp-content/uploads/2020/07/partner-SEAOCD.png',
			'http://www.computingforall.org/wp-content/uploads/2020/07/partner-SEAIT.png',
			'http://www.computingforall.org/wp-content/uploads/2020/07/CCW_Logo_Color-RGB.jpg',
			'http://www.computingforall.org/wp-content/uploads/2015/02/msft.jpg',
			'http://www.digitalskillsforall.org/wp-content/uploads/2019/05/smartsheet-1.png',
			'http://www.computingforall.org/wp-content/uploads/2020/07/partner-greenroom.png'
		]
	},
	{
		title: 'Employer Partners',
		logos: [
			'http://www.computingforall.org/wp-content/uploads/2020/07/partner-tmobile.png',
			'http://www.computingforall.org/wp-content/uploads/2020/07/partner-BOA.png',
			'http://www.computingforall.org/wp-content/uploads/2020/07/partner-SEAIT.png',
			'http://www.digitalskillsforall.org/wp-content/uploads/2019/03/indigo-slate-color.png',
			'http://www.digitalskillsforall.org/wp-content/uploads/2019/03/BIgFish-color.png',
			'http://www.digitalskillsforall.org/wp-content/uploads/2019/03/Tableau.png',
			'http://www.digitalskillsforall.org/wp-content/uploads/2019/03/Tableau.png'
		]
	},
	{
		title: 'Endorsers',
		logos: [
			'http://www.computingforall.org/wp-content/uploads/2015/04/WTIA.jpg',
			'http://www.computingforall.org/wp-content/uploads/2015/04/Washington-STEM.png',
			'http://www.computingforall.org/wp-content/uploads/2016/12/UW-Allen-School.png',
			'http://www.computingforall.org/wp-content/uploads/2015/04/sigcse-logo-400.png',
			'http://www.computingforall.org/wp-content/uploads/2015/04/acm-400.png',
			'http://www.computingforall.org/wp-content/uploads/2015/04/IEEE-Computer-Society.jpg'
		]
	}
];

const CFAHome = (props) => {
	return (
		<div className="cfa-home">
			<TopBanner text={''} />
			<div className="banner-intro-box">
				<div> <i id="fb-i" class="material-icons">facebook</i> </div>
				<div> <i id="youtube-i" class="fab fa-youtube"></i> </div>
				<div> <i id="twitter-i" class="fab fa-twitter"></i> </div>
				<div> 4 </div>
				<div> 5 </div>
			</div>
            <div className="empty-div">
            </div>
			<div id="cfk-banner" className="banner">
				<div className="banner-container">
					<div className="header">
						<span>Computing for Kids</span>
						<quote />
					</div>
					<div />
				</div>
			</div>
			<div id="dsfa-banner" className="banner dsfa">
				<div className="banner-container">
					<div className="header">
						<span>Digital Skills for All</span>
						<quote />
					</div>
				</div>
			</div>
			<div id="cfa-c-banner" className="banner dsfa">
				<div className="banner-container">
					<div className="header">
						<span>CFA Competition</span>
						<quote />
					</div>
				</div>
			</div>
			<div>
				{coli.map((p) => {
					return <ListCompanies title={p.title} logos={p.logos} />;
				})}
			</div>
		</div>
	);
};

export default CFAHome;

{
	/* <img src={DSFA} alt="students on computer"/> */
}
