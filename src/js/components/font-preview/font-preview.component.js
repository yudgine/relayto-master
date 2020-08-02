
class FontPreviewCtrl {
  
    constructor($scope) {
      'ngInject';

      $scope.font = this.font;
      console.log(this.font);
    }

  }

  let FontPreview = {
    bindings: {
      font: '='
    },
    controller: FontPreviewCtrl,
    templateUrl: 'components/font-preview/font-preview.html'
  };
   
  export default FontPreview;
  
