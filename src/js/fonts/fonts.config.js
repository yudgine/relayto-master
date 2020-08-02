function FontsConfig($stateProvider) {
  'ngInject';

  $stateProvider
  .state('app.fonts', {
    url: '/',
    controller: 'FontsCtrl',
    controllerAs: '$ctrl',
    templateUrl: 'fonts/fonts.html',
    title: 'Fonts'
  });

};

export default FontsConfig;
