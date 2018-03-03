import * as WHS from "whs";
import * as THREE from "three";

export class SpriteTitleComponent extends WHS.MeshComponent {
    constructor(params = {}) {
        super(params, Object.assign(WHS.MeshComponent.defaults, {
          text: 'Hello world!',
          color: '#ffffff',
          size: 10
        }));
    }
    build() {
        this.canvas = document.createElement('canvas');
        this.ctx = this.canvas.getContext('2d');

        const {canvas, ctx} = this;
        const {text, bgColor, color, size} = this.params;


        this.canvas.width = 256;
        this.canvas.height = 256;
        ctx.font = '20pt Arial';
        ctx.fillStyle = 'red';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = 'white';
        ctx.fillRect(100, 100, canvas.width - 20, canvas.height - 20);
        ctx.fillStyle = 'black';
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillText("안녕하세요 이윤솔 입니다.", canvas.width / 2, canvas.height / 2);

        const texture = new THREE.Texture(this.canvas);
        texture.needsUpdate = true;

        const sprite = new THREE.Sprite(
        new THREE.SpriteMaterial({map: texture})
        );

        return sprite;
    }
}
