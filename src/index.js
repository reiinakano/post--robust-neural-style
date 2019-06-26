import VisualTOC                      from './diagrams/VisualTOC.html';

import ColabLink                      from './components/ColabLink.html';

// eagerly initialize vtoc  as it's above the fold
const tocNav = document.getElementById('vtoc');
const visualTOC = new VisualTOC({target: tocNav});

// lazily initialize any diagram below the fold. E.G:
// {
//   const figure = document.getElementById('StyleTransferExamples');
//   figure.addEventListener("ready", function() {
//     const styleTransferExamples = new StyleTransferExamples({target: figure});
//   });
// }

function addColabLink() {
  const className = "add-colab-link";
  const elements = document.getElementsByClassName(className);
  for (const element of elements) {
    const data = {
      target: element, 
      data: { 
        url: "https://colab.research.google.com/github/reiinakano/adversarially-robust-neural-style-transfer/blob/master/Robust_Neural_Style_Transfer.ipynb" 
      }
    };
    const colabLink = new ColabLink(data);
  }
}

addColabLink();
