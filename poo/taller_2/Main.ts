import Carro from "./clases/Carro";

const main: () => void = () => {
  const carro = new Carro("Toyota", 2006);
  const carro1 = new Carro("Mercedes", 2020, 255, 0, 180);

  console.log(carro, carro1);
};

main();
