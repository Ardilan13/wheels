"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_router_dom_1 = require("react-router-dom");
const react_1 = require("@ionic/react");
const react_router_1 = require("@ionic/react-router");
const Home_1 = __importDefault(require("./pages/Home"));
/* Core CSS required for Ionic components to work properly */
require("@ionic/react/css/core.css");
/* Basic CSS for apps built with Ionic */
require("@ionic/react/css/normalize.css");
require("@ionic/react/css/structure.css");
require("@ionic/react/css/typography.css");
/* Optional CSS utils that can be commented out */
require("@ionic/react/css/padding.css");
require("@ionic/react/css/float-elements.css");
require("@ionic/react/css/text-alignment.css");
require("@ionic/react/css/text-transformation.css");
require("@ionic/react/css/flex-utils.css");
require("@ionic/react/css/display.css");
/* Theme variables */
require("./theme/variables.css");
(0, react_1.setupIonicReact)();
const App = () => (<react_1.IonApp>
    <react_router_1.IonReactRouter>
      <react_1.IonRouterOutlet>
        <react_router_dom_1.Route exact path="/home">
          <Home_1.default />
        </react_router_dom_1.Route>
        <react_router_dom_1.Route exact path="/">
          <react_router_dom_1.Redirect to="/home"/>
        </react_router_dom_1.Route>
      </react_1.IonRouterOutlet>
    </react_router_1.IonReactRouter>
  </react_1.IonApp>);
exports.default = App;
