import angular from 'angular';

// Create the module where our functionality can attach to
let fontsModule = angular.module('app.fonts', []);

// Include our UI-Router config settings
import FontsConfig from './fonts.config';
fontsModule.config(FontsConfig);


// Controllers
import FontsCtrl from './fonts.controller';
fontsModule.controller('FontsCtrl', FontsCtrl);


export default fontsModule;
