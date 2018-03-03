import * as WHS from "whs";
import * as THREE from "three";

export class BasicComponent2 extends WHS.MeshComponent {
  build() {
    return new THREE.Mesh(
      new THREE.IcosahedronGeometry(31, 5),
      this.applyBridge({
        material: new THREE.MeshBasicMaterial({color: 0xffffff})
      }).material,
    )
  }
}
