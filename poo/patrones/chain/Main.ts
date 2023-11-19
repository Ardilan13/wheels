import {
  Handler,
  Level1Support,
  Level2Support,
  Level3Support,
} from "./handler";

const level1 = new Level1Support();
const level2 = new Level2Support();
const level3 = new Level3Support();

level1.setSuccessor(level2);
level2.setSuccessor(level3);

level1.handleRequest("problema simple");
level1.handleRequest("problema grave");
