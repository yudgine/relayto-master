import angular from 'angular';

let componentsModule = angular.module('app.components', []);

import FontsList from './fonts-list/fonts-list.component';
componentsModule.component('fontsList', FontsList);

import FontPreview from './font-preview/font-preview.component';
componentsModule.component('fontPreview', FontPreview);

export default componentsModule;
