import Carro from "./clases/Carro";

const main: () => void = () => {
  const carro = new Carro("Toyota", 2006);
  const carro1 = new Carro("Mercedes", 2020, 255, 0, 180);
  const carro2 = new Carro("Chevrolet", 2016, 255, 0, 180, 23, "Bucaramanga");

  console.log(carro, carro1, carro2);
};

main();
