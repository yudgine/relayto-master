import angular from 'angular';

let componentsModule = angular.module('app.components', []);

import FontsList from './fonts-list/fonts-list.component';
componentsModule.component('fontsList', FontsList);

import FontPreview from './font-preview/font-preview.component';
componentsModule.component('fontPreview', FontPreview);

import TopBar from './top-bar/top-bar.component';
componentsModule.component('topBar', TopBar);

export default componentsModule;
