import { Component, append, render } from "../../src/core";
import { Button } from "../button/button";
import { IComponent } from "../../src/interfaces";
import { app } from "../../src/main";
import { removeChildren } from "../../utils/removeChildren";

import './expireWindow.css'

export class ExpireWindow implements IComponent {
  private component: Component;
  private timerWrapper: Component;
  private timer;
  private time: number = 13;
  private hereBtn: Button;
  private logoutBtn: Button;

  constructor() {
    this.timerWrapper = new Component({
        tagName: 'div',
        className: 'timer',
        textContent: `${this.time}`
    })

    this.timerFunc();

    this.hereBtn = new Button({
        className: 'here-btn',
        textContent: 'HERE',
        events: {
            click: () => {
                if(this.timer){                    
                    clearInterval(this.timer);
                }
            }
        }
    })

    this.logoutBtn = new Button({
        className: 'logout-btn',
        textContent: 'LOGOUT',
        events: {
            click: () => {
                removeChildren(app);

                alert('Goodbye');
            }
        }
    })

    const buttonsWrapper = new Component({
        tagName: 'div',
        className: 'buttons-wrapper',
        children: [this.getHereBtn(), this.getLogoutBtn()]
    })

    this.component = new Component({
        tagName: 'div',
        className: 'expireWindow',
        children: [this.getTimerWrapper(), buttonsWrapper.getComponent()]
    })
  }

  private timerFunc(){
    this.timer = setInterval(() => {

        this.time--;        
        
        if (this.time === 0) {
            clearInterval(this.timer);
            
            setTimeout(() =>{
                removeChildren(app);

                alert('Goodbye');
            }, 1000)
        }

        this.getTimerWrapper().textContent = `${this.time}`
        
    }, 1000);
  }

  getTimerWrapper(){
    return this.timerWrapper.getComponent()
  }

  getHereBtn(){
    return this.hereBtn.getComponent()
  }

  getLogoutBtn(){
    return this.logoutBtn.getComponent()
  }

  getComponent(): HTMLElement {
    return this.component.getComponent();
  }
}