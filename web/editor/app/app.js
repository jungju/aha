import * as WHS from "whs";
import * as THREE from "three";

import {FancyMaterialModule} from './modules/FancyMaterialModule';
import {BasicComponent} from './components/BasicComponent';

import * as client from './client';
client.setDomain('/v1')

const app = new WHS.App([
  new WHS.ElementModule(),
  new WHS.SceneModule(),
  new WHS.DefineModule('camera', new WHS.PerspectiveCamera({
    position: new THREE.Vector3(0, 100, 400),
    far: 2000,
    fov: 75,
    near: 1
  })),
  new WHS.RenderingModule({
    bgColor: 0x2a3340,

    renderer: {
      antialias: true,
      shadowmap: {
        type: THREE.PCFSoftShadowMap
      }
    }
  }, {shadow: true}),
  new WHS.OrbitControlsModule(),
  new WHS.ResizeModule()
]);

app.start();

const dynamicGeometry = new WHS.DynamicGeometryModule();
const material = new THREE.MeshStandardMaterial({
  shading: THREE.FlatShading,
  emissive: 0x270000,
  roughness: 0.9
});
const s1 = new WHS.Dodecahedron({
  geometry: {
    buffer: true,
    radius: 10
  },
  modules: [
    dynamicGeometry
  ],
  material
});

client.StoryController_Get_All({}).then(function (response) {
  console.log(response.data) 
  //font: WHS.Text.load('assets/NanumGothic_Regular.json'),
  //font: WHS.Text.load('assets/gentilis_bold.typeface.json'),
  const font1 = WHS.Text.load('assets/Nanum_Pen_Script_Regular2.json')
  const geometry = {
    size: 30,
    height: 4,
    curveSegments: 1
  };
  const met = new THREE.MeshBasicMaterial({
    color: 0xffffff
  })

  for(let sc of response.data) {
    const text = new WHS.Text({
      text: response.data[0].Name,
      font: font1,
      
      geometry: geometry,
      material: met,
      position: [-150, 0, 0]
    }).addTo(app);
    for(let scc of sc.Scenes){
      const particle = s1.clone()
      particle.addTo(app);
    }
  }
})