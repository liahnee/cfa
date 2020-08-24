import React from 'react';

import CFANavBar from '../components/secNavBar';
import Routes from './routes';
import CKLogo from '../assets/logos/ck-simple-logo-horiz.png';


function CFAIndex() {
  return (
    <div className="index">
        <CFANavBar menu={ckSecNav} logo={CKLogo}/>
        <Routes />
    </div>
  );
}

export default CFAIndex;


const secnav = [
	{
        menu: 'COMPUTING FOR KIDS',
        sublistImg: {
            src: "",
            href: ""
        },
        href: "",
		sublist: [
			{
				item: 'Home',
                href: '',
                class: 'c-a'
			},{
                item: 'Camps',
                href: '',
                class: 'c-b'
            },{
				item: 'About CFK',
				href: '',
                class: 'c-a'
			},{
                item: 'School Media',
                href: '',
                class: 'c-b'
            },{
                item: 'News',
                href: '',
                class: 'c-a'
            },{
                item: 'Get Involved',
                href: '',
                class: 'c-b'
            }
		]
    },
    {
        menu: 'DIGITAL SKILLS FOR ALL',
        href: "",
        sublistImg: {
            src: "",
            href: ""
        },
		sublist: [
			{
				item: 'Home',
				href: 'www.computingkids.com'
			},{
                item: 'Curriculums',
                href: 'www.computingkids.com/classes'
            }
		]
    },{
        menu: 'CFA COMPETITION',
        href: "",
        sublistImg: {
            src: "",
            href: ""
        },
		sublist: [
			{
				item: 'Home',
				href: 'www.computingkids.com'
			},{
                item: 'Curriculums',
                href: 'www.computingkids.com/classes'
            }
		]
    }
];


const ckSecNav = [
	{
        menu: 'CK Home',
        sublistImg: {
            src: "",
            href: ""
        },
        href: "",
		sublist: [
			{
				item: 'Home',
                href: '',
                class: 'c-a'
            }
		]
    },
    {
        menu: 'CAMPS',
        href: "",
        sublistImg: {
            src: "",
            href: ""
        },
		sublist: [
			{
				item: '',
				href: ''
			}
		]
    },{
        menu: 'CK News',
        href: "",
        sublistImg: {
            src: "",
            href: ""
        },
		sublist: [
		]
    },{
        menu: 'About CK',
        href: "",
        sublistImg: {
            src: "",
            href: ""
        },
		sublist: [
			{
				item: '',
				href: ''
			}
		]
    },{
        menu: 'Get Involved',
        href: "",
        sublistImg: {
            src: "",
            href: ""
        },
		sublist: [
			{
				item: '',
				href: ''
			}
		]
    }
];


