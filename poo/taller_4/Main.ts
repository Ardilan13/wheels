import Muestra from "./clases/Muestra";
import Servicio from "./clases/Servicio";
import Laboratorio from "./clases/Laboratorio";

const main: () => void = () => {
  const m1 = new Muestra("MSJDA333432NSA", 9);
  const m2 = new Muestra("CA82NDFI2", 11);
  const m3 = new Muestra("AIAKVDS82NDCS", 5);
  const m4 = new Muestra("IKSVDS912NDVNS83", 20);

  const s1 = new Servicio(m1);
  s1.setMuestra(m2);
  s1.setMuestra(m3);
  s1.setMuestra(m4);
  const s2 = new Servicio(m1);

  const l1 = new Laboratorio(s1);
  l1.setServicio(s2);
  l1.registrarMuestra(m1, 1);
  l1.registrarMuestra(m2, 1);

  l1.mostrarInforme();
};

main();
