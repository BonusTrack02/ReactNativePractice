/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import Main from './Main';
import MainContextAPI from './MainContextAPI';

//AppRegistry.registerComponent(appName, () => Main);
//ContextAPI 실습
AppRegistry.registerComponent(appName, () => MainContextAPI);