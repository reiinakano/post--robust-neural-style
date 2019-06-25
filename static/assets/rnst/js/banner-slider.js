(function() {

// Initialize slider
var currentStyle = 'woman';

const styleTransferSliderDiv = document.getElementById("banner-slider");
const contentHover = document.getElementById("banner-content-hover");
const contentImg = document.getElementById("banner-content");

function refreshSlider() {
  while (styleTransferSliderDiv.firstChild) {
      styleTransferSliderDiv.removeChild(styleTransferSliderDiv.firstChild);
  }
  const imgPath = '/images/rnst/style-transfer/' + 'banner_' + currentStyle + '_robust.jpg';
  const imgPathNonRobust = '/images/rnst/style-transfer/' + 'banner_' + currentStyle + '_nonrobust.jpg';
  new juxtapose.JXSlider('#banner-slider',
      [
          {
              src: imgPathNonRobust,
              label: 'Non-robust ResNet50'
          },
          {
              src: imgPath,
              label: 'Robust ResNet50'
          }
      ],
      {
          animate: true,
          showLabels: true,
          showCredits: false,
          startingPosition: "50%",
          makeResponsive: true
  });
}

refreshSlider();

$("#banner-style-select").imagepicker({
  changed: function(oldVal, newVal, event) {
    currentStyle = newVal;
    refreshSlider();
  }
});

contentHover.onmouseover = function() {
  console.log('hover');
  styleTransferSliderDiv.style.display = "none";
  contentImg.style.display = "block";
};

contentHover.onmouseleave = function() {
  console.log('leave');
  styleTransferSliderDiv.style.display = "block";
  contentImg.style.display = "none";
};

})()
