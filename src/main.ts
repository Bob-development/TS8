import { ExpireWindow } from "../components/expireWindow/expireWindow";
import { append } from "./core";

import './style.css'


export const app = document.querySelector("#app");

const expireWindow = new ExpireWindow();

setTimeout(()=>{
  console.log('huy');
  
  append(app, expireWindow.getComponent())
}, 3000)
