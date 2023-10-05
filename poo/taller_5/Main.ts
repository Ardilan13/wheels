import Circulo from "./clases/Circulo";
import Figura from "./clases/Figura";
const main: () => void = () => {
  var figs = [];
  figs[0] = new Circulo(10, 5, 6);
  for (var i: number = 0; i < figs.length; i++) {
    const fig: Figura = figs[i];
    console.log(fig.toString());
  }
};

main();
