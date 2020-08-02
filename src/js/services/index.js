import angular from 'angular';

// Create the module where our functionality can attach to
let servicesModule = angular.module('app.services', []);


import FontsService from './fonts.service';
servicesModule.service('Fonts', FontsService);



export default servicesModule;
