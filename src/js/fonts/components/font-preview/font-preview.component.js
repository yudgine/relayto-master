class FontPreviewCtrl {
  constructor($scope) {
    "ngInject";
  }

  importLink(font) {
    if (!font) return;
      const fname = font.family.split(" ").join("+");
      const css = `@import url('https://fonts.googleapis.com/css?family=${fname}');`;

      const head = document.head || document.getElementsByTagName("head")[0];
      const  style = document.createElement("style");

      head.appendChild(style);

      style.type = "text/css";
      if (style.styleSheet) {
        // This is required for IE8 and below.
        style.styleSheet.cssText = css;
      } else {
        style.appendChild(document.createTextNode(css));
      }
  }

  fontStyle(font) {
    return {'font-family': font.family}
  }
}

let FontPreview = {
  bindings: {
    font: "=",
  },
  controller: FontPreviewCtrl,
  templateUrl: "fonts/components/font-preview/font-preview.html",
};

export default FontPreview;
