/* jshint module: true */

import { AppRegistry, StatusBarIOS } from 'react-native';

let App = require('./app/app');

StatusBarIOS.setStyle('light-content');

AppRegistry.registerComponent('IdeaOfTheWeek', () => App);
