import * as WHS from "whs";
import * as THREE from "three";

const geometry = {
    size: 30,
    height: 4,
    curveSegments: 1,
    center:1,
};
const met = new THREE.MeshBasicMaterial({
    color: 0xffffff
})

export class SpriteTitleComponent extends WHS.MeshComponent {
    constructor(params = {}) {
        super(params);
    
        this.build(params);
        // super.wrap().then((obj) => {
        //   obj.rotation.set(Math.PI / 180 * -90, 0, 0);
        // });
      }
    build(params = {}) {
        const promise = new Promise((resolve) => {
            var loader = new THREE.FontLoader();

            console.log(this)
            const base = this
            const font = loader.load( 'assets/Nanum_Pen_Script_Regular2.json', function ( font ) {

                console.log(this)
                base.native = new THREE.Mesh(
                    new THREE.TextGeometry( "test", { // Object.
                        size: 12,
                        height: 50,
                        curveSegments: 12,
                        font: font,
                        bevelEnabled: false,
                        bevelThickness: 10,
                        bevelSize: 8
                    }),
                )

                //this.native = ms
                resolve();
            });
        });
        super.wait(promise);
        return promise;
    }
}
