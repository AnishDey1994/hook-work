import React from 'react';
import { Route, Switch } from 'react-router-dom';
import ComponentDemo from './widgets/component_demo/componentDemo';
import Template2_portfolio from './widgets/template2_portfolio/index';
import UXSocialMediaSidebar from './components/UX-SocialMedia-Sidebar/UXSocialMediaSidebar';
import NotFound from './components/UX-NotFound/NotFound';
import './App.scss';
import './Assets/CSS/UXCoreCSS.css';
import './Assets/CSS/UXHoverTransition.scss';
import data from './Configs/data.json';
const configString = data;
const iconList = configString.iconList;

function App() {
	return (
		<div className='hook-work-wrapper'>
			<UXSocialMediaSidebar
				iconList={iconList}
			/>
			<Switch>
				<Route exact path='/hook-work' component={props => <Template2_portfolio {...props} />} />
				<Route exact path='/demo' component={props => <ComponentDemo {...props} />} />
				<Route exact={true} path='*' component={() => <NotFound />} />
			</Switch>
		</div>
	);
}

export default App;
