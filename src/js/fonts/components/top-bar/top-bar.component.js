
class TopBarCtrl {
  
    constructor($scope) {
      'ngInject';
    }

  }

  let TopBar = {
    bindings: {
      listConfig: '='
    },
    controller: TopBarCtrl,
    templateUrl: 'fonts/components/top-bar/top-bar.html'
  };
   
  export default TopBar;
  
