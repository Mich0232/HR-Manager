import { render } from 'lit-html';
import { library, dom } from "@fortawesome/fontawesome-svg-core";
import { faHome, faChartLine, faUsers, faUserAstronaut, faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons/";

library.add(faHome, faChartLine, faUsers, faUserAstronaut, faAngleLeft, faAngleRight);
dom.watch();


import App from './containers/App';
import '../style/main.scss';

render(App(), document.getElementById('app'));
