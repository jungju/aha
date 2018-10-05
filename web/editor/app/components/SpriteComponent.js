import * as WHS from "whs";
import * as THREE from "three";

import {SpriteBoxComponent} from './SpriteBoxComponent';
import {SpriteTitleComponent} from './SpriteTitleComponent';
import {SpriteDescriptionComponent} from './SpriteDescriptionComponent';

const defaultFont = WHS.Text.load('assets/Nanum_Pen_Script_Regular2.json')

export  class SpriteComponent {
    constructor(params = {}) {
        //this.spriteBox = new SpriteBoxComponent(this);
        this.spriteTitle = new SpriteTitleComponent(Object.assign(params, {text:"!!!!!", font:defaultFont}));
        //this.spriteDescription = new SpriteDescriptionComponent(this);

        //return { 'mesh': new WHS.Group(this.spriteBox, this.spriteTitle, this.spriteDescription), 'component': this };
        return { 'mesh': this.spriteTitle, 'component': this };
    }
}