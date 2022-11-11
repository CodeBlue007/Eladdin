import { addEvents } from "./component/addEvents.js";
import { registerForm } from "./component/eventFn/registerForm.js";
import {renderUser} from "./component/renderUser.js";



function main(){
  renderUser();
  addEvents();
}

main();

