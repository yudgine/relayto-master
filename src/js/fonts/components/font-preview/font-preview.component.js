
class FontPreviewCtrl {
  
    constructor($scope) {
      'ngInject';
    }

  }

  let FontPreview = {
    bindings: {
      font: '='
    },
    controller: FontPreviewCtrl,
    templateUrl: 'fonts/components/font-preview/font-preview.html'
  };
   
  export default FontPreview;
  
