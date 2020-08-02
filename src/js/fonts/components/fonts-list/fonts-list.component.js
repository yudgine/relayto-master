
class FontsListCtrl {
  
    constructor(Fonts, $scope) {
      'ngInject';
      this._fonts = Fonts;
      this.getFonts();  
    }

    getFonts() {
      this._fonts.get().then((fonts) => {
        this.fontsLoaded = true;
        this.fonts = fonts.items
      } );
    }

  }

  let FontsList = {
    bindings: {
      listConfig: '='
    },
    controller: FontsListCtrl,
    templateUrl: 'fonts/components/fonts-list/fonts-list.html'
  };
   
  export default FontsList;
  
