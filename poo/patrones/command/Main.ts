import Light from "./clases/light";
import RemoteControl from "./clases/remoteControl";
import TurnOn from "./clases/turnOn";
import TurnOff from "./clases/turnOff";

const light = new Light();
const remote = new RemoteControl();

const turnOn = new TurnOn(light);
const turnOff = new TurnOff(light);

remote.setCommand(turnOn);
remote.pressButton();

remote.setCommand(turnOff);
remote.pressButton();
