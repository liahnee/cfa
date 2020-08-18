import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAt, faQuestion, faUsers, faNewspaper, faHandsHelping } from '@fortawesome/free-solid-svg-icons';

import '../stylesheets/cfa/home.css';

import TopBanner from './banner_intro';
import DSFA from '../assets/banner_images/6.png';
import ListCompanies from '../components/listCompanies';
import Card from '../components/card';

import CFK1 from '../assets/card_images/cfk-1.png';
import CFK2 from '../assets/card_images/cfk-2.png';
import CFK3 from '../assets/card_images/cfk-3.png';

const CFAHome = (props) => {
	return (
		<div className="cfa-home">
			<TopBanner text={''} />
			<div className="banner-intro-box">
				<div> <FontAwesomeIcon icon={faHandsHelping} size="2x"/> <span>Volunteer</span>  </div>
				<div> <FontAwesomeIcon icon={faNewspaper} size="2x"/> <span>Our News</span>  </div>
				<div> <FontAwesomeIcon icon={faUsers} size="2x"/> <span>Teams</span>  </div>
				<div> <FontAwesomeIcon icon={faQuestion} size="2x"/> <span>Support</span>  </div>
				<div> <FontAwesomeIcon icon={faAt} size="2x"/> <span>Contact</span>  </div>
			</div>
			<div className="empty-div" />
			<div id="cfk-banner" className="banner">
				<div className="banner-container">
					<div className="header">
						<span>Computing for Kids</span>
						<p className="banner-desc">
							<em>
								Shaping Students.<br />Shaping Future.
							</em>
						</p>
					</div>
					<div className="desc col3">
						{cfkCards.map((card) => (
							<Card icon={card.icon} img={card.img} title={card.title} desc={card.desc} />
						))}
					</div>
				</div>
			</div>
			<div id="dsfa-banner" className="banner dsfa">
				<div className="banner-container">
					<div className="header">
						<span>Digital Skills for All</span>
					</div>
				</div>
			</div>
			<div className="banner">
				<div className="dsfa-youth">
					<div>
						<p>
							<span className="emphasized">Digital Youth Academy</span> <br />
							<br />
							&nbsp;is our initiative to provide underserved youth ages 16-24 with the Computer Science
							skills they need to succeed in entry level technology job opportunities.
						</p>
						<span className="span-button">Learn More</span>
					</div>
					<figure id="dsfa-banner-img" class="border">
						<img src={DSFA} alt="students on computer" />
					</figure>
				</div>
			</div>

			<div id="cfa-c-banner" className="banner cfa-c">
				<div className="banner-container">
					<div className="header">
						<span>CFA Competition</span>
						<p className="banner-desc"> </p>
					</div>
					<div className="desc col3" />
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

const cfkCards = [
	{
		icon: {
			icon: '',
			color: 'blue',
			size: 'lg'
		},
		img: {
			src: CFK1,
			alt: 'writing of skill and hands'
		},
		title: 'Skill of the 21st Century',
		desc:
			'Computer programming will be a sought-after skill for future jobs and internship opportunities. Kids who feel confident with coding can harness that technology in any career they choose.'
	},
	{
		icon: {
			icon: '',
			color: '',
			size: ''
		},
		img: {
			src: CFK2,
			alt: 'resilience written on post-it'
		},
		title: 'Enhances problem-solving skills',
		desc: 'Coding helps kids learn problem-solving skills and logic. It engages different parts of their brains and teaches kids to think sequentially while allowing them to be creative. Kids start to break down large problems into smaller parts to be able to solve them effectively.'
	},
	{
		icon: {
			icon: '',
			color: '',
			size: 'people looking at computer'
		},
		img: {
			src: CFK3,
			alt: ''
		},
		title: 'Builds resilience in children',
		desc: 'Coding presents kids with a challenge and teaches them to not give up in the face of adversity (or a code gone wrong). Bouncing back from failure fosters resilience in them!'
	}
];

const coli = [
	{
		title: 'Funders and Donors',
		logos: [
			'https://ecdev.blob.core.windows.net/public/client/seattle/images/seattle-logo.png',
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
