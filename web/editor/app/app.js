import * as WHS from "whs";
import * as THREE from "three";

import {FancyMaterialModule} from './modules/FancyMaterialModule';

import * as client from './client';
client.setDomain('/v1')

import {BasicComponent} from './components/BasicComponent';
import {BasicComponent2} from './components/BasicComponent2';
//import {SpriteComponent} from './components/SpriteComponent';
import {SpriteComponent} from './components/SpriteComponent';
//import {BasicComponent,Basic2Component} from './components/Basic2Component';



//import * as client from './client';
//client.setDomain('/v1')

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
  //new WHS.OrbitControlsModule(),
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
    radius: 50
  },

  modules: [
    dynamicGeometry
  ],

  material
});

const s2 = new WHS.Box({
  geometry: {
    buffer: true,
    width: 50,
    height: 50,
    depth: 50
  },

  modules: [
    dynamicGeometry
  ],

  material
});

const s3 = new WHS.Cylinder({
  geometry: {
    buffer: true,
    radiusTop: 0,
    radiusBottom: 50,
    height: 50
  },

  modules: [
    dynamicGeometry
  ],

  material
});

const s4 = new WHS.Sphere({
  geometry: {
    buffer: true,
    radius: 50
  },

  modules: [
    dynamicGeometry
  ],

  material
});


// const particle = s1.clone()
// particle.addTo(app);


const bc = new BasicComponent({
  modules: [
    new FancyMaterialModule(app)
  ],
  position: [130, 40, 0]
}).addTo(app);

new BasicComponent({
  modules: [
    new FancyMaterialModule(app)
  ],
  position: [-130, 40, 0]
}).addTo(app);

new SpriteComponent({
  position: [60, 40, 0]
}).mesh.addTo(app);

// const bc2 = new BasicComponent2({
//   modules: [
//     new FancyMaterialModule(app)
//   ],
//   position: [90, 10, 0]
// }).addTo(app);

// client.StoryController_Get_All({}).then(function (response) {
//   console.log(response.data) 
//   //font: WHS.Text.load('assets/NanumGothic_Regular.json'),
//   //font: WHS.Text.load('assets/gentilis_bold.typeface.json'),
//   const font1 = WHS.Text.load('assets/Nanum_Pen_Script_Regular2.json')
//   const geometry = {
//     size: 30,
//     height: 4,
//     curveSegments: 1
//   };
//   const met = new THREE.MeshBasicMaterial({
//     color: 0xffffff
//   })

//   for(let sc of response.data) {
//     // const text = new WHS.Text({
//     //   text: response.data[0].name,
//     //   font: font1,
      
//     //   geometry: geometry,
//     //   material: met,
//     //   position: [-150, 0, 0]
//     // }).addTo(app);
    
//     for(let scc of sc.scenes){
//       const particle = s1.clone()
//       particle.addTo(app);

//       // const particle = s1.clone()
//       // particle.addTo(app);

//       const text = new WHS.Text({
//         text: scc.Name,
//         font: font1,
        
//         geometry: geometry,
//         material: met,
//         position: [-130, 40, 0]
//       }).addTo(app);
//     }
//   }
// })