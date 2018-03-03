import * as WHS from "whs";
import * as THREE from "three";

const defaults = Object.assign({}, WHS.MeshComponent.defaults, {
    geometry: {
        width: 100,
        height: 100,
        widthSegments: 10,
        heightSegments: 10
    }
});

const instructions = Object.assign({}, WHS.MeshComponent.instructions, {
    geometry: ['width', 'height', 'widthSegments', 'heightSegments']
});

export class SpriteBoxComponent extends WHS.MeshComponent {
    constructor(params = {}) {
        super(params, defaults, instructions);
    }
    build() {
        this.test = 1;
        
        return new THREE.Mesh(
        new THREE.BoxGeometry(31, 5, 10),
        this.applyBridge({
            material: new THREE.MeshBasicMaterial({color: 0xffffff})
        }).material,
        )
    }
}
