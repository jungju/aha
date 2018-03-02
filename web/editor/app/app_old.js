import * as WHS from "whs";
import * as THREE from "three";

import {FancyMaterialModule} from './modules/FancyMaterialModule';
import {BasicComponent} from './components/BasicComponent';

import * as client from './client';
client.setDomain('/v1')

const radiusMin = 110, // Min radius of the asteroid belt.
  radiusMax = 320, // Max radius of the asteroid belt.
  particleCount = 900, // Ammount of asteroids.
  particleMinRadius = 0.1, // Min of asteroid radius.
  particleMaxRadius = 4, // Max of asteroid radius.
  planetSize = 50; // Radius of planet.

const colors = {
  green: 0x8fc999,
  blue: 0x5fc4d0,
  orange: 0xee5624,
  yellow: 0xfaff70
};

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

const space = new WHS.Group();
space.addTo(app);
space.rotation.z = Math.PI / 12;

const planet = new WHS.Tetrahedron({
  geometry: {
    radius: planetSize,
    detail: 2
  },

  material: new THREE.MeshStandardMaterial({
    color: 0xee5624,
    shading: THREE.FlatShading,
    roughness: 0.9,
    emissive: 0x270000
  })
});

//planet.addTo(space);

// LIGHTS.
new WHS.AmbientLight({
  color: 0x663344,
  intensity: 2
}).addTo(app);

new WHS.DirectionalLight({
  color: 0xffffff,
  intensity: 1.5,
  distance: 800,

  shadow: {
    mapSize: {
      width: 2048,
      height: 2048
    },

    camera: {
      left: -800,
      right: 800,
      top: 800,
      bottom: -800,
      far: 800
    }
  },

  position: {
    x: 300,
    z: 300,
    y: 100
  }
}).addTo(app);

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

const s2 = new WHS.Box({
  geometry: {
    buffer: true,
    width: 10,
    height: 10,
    depth: 10
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
    radiusBottom: 10,
    height: 10
  },

  modules: [
    dynamicGeometry
  ],

  material
});

const s4 = new WHS.Sphere({
  geometry: {
    buffer: true,
    radius: 10
  },

  modules: [
    dynamicGeometry
  ],

  material
});

const asteroids = new WHS.Group();
asteroids.addTo(space);

// Materials.
const mat = [
  new THREE.MeshPhongMaterial({color: colors.green, shading: THREE.FlatShading}),
  new THREE.MeshPhongMaterial({color: colors.blue, shading: THREE.FlatShading}),
  new THREE.MeshPhongMaterial({color: colors.orange, shading: THREE.FlatShading}),
  new THREE.MeshPhongMaterial({color: colors.yellow, shading: THREE.FlatShading})
];

// for (let i = 0; i < particleCount; i++) {
//   const particle = [s1, s2, s3, s4][Math.ceil(Math.random() * 3)].clone(),
//     radius = particleMinRadius + Math.random() * (particleMaxRadius - particleMinRadius);

//   particle.g_({
//     radiusBottom: radius,
//     radiusTop: 0,
//     height: particle instanceof WHS.Cylinder ? radius * 2 : radius,
//     width: radius,
//     depth: radius,
//     radius
//   });

//   particle.material = mat[Math.floor(4 * Math.random())]; // Set custom THREE.Material to mesh.

//   // Particle data.
//   particle.data = {
//     distance: radiusMin + Math.random() * (radiusMax - radiusMin),
//     angle: Math.random() * Math.PI * 2
//   };

//   // Set position & rotation.
//   particle.position.x = Math.cos(particle.data.angle) * particle.data.distance;
//   particle.position.z = Math.sin(particle.data.angle) * particle.data.distance;
//   particle.position.y = -10 * Math.random() + 4;

//   particle.rotation.set(Math.PI * 2 * Math.random(), Math.PI * 2 * Math.random(), Math.PI * 2 * Math.random());

//   particle.addTo(asteroids);
// }

// // Animating rotating shapes around planet.
// const particles = asteroids.children;
console.log(asteroids);

// const animation = new WHS.Loop(() => {
//   for (let i = 0, max = particles.length; i < max; i++) {
//     const particle = particles[i];

//     particle.data.angle += 0.02 * particle.data.distance / radiusMax;

//     particle.position.x = Math.cos(particle.data.angle) * particle.data.distance;
//     particle.position.z = Math.sin(particle.data.angle) * particle.data.distance;

//     particle.rotation.x += Math.PI / 60;
//     particle.rotation.y += Math.PI / 60;
//   }

//   planet.rotation.y += 0.005;
// });

// app.addLoop(animation);

// animation.start();

// Start rendering.
app.start();


client.StoryController_Get_All({}).then(function (response) {
  console.log(response.data) 

  const text = new WHS.Text({
    //var name = response.data[0].Name;
    text: "프로젝트",
    font: WHS.Text.load('assets/Nanum_Pen_Script_Regular2.json'),
    //font: WHS.Text.load('assets/NanumGothic_Regular.json'),
    //font: WHS.Text.load('assets/gentilis_bold.typeface.json'),
    
    geometry: {
      size: 30,
      height: 15,
      curveSegments: 6
    },
  
    material: new THREE.MeshBasicMaterial({
      color: 0xffffff
    }),
  
    position: [-150, 0, 0]
  }).addTo(app);

  new WHS.Text({
    //var name = response.data[0].Name;
    text: "만들기",
    font: WHS.Text.load('assets/Nanum_Pen_Script_Regular2.json'),
    //font: WHS.Text.load('assets/NanumGothic_Regular.json'),
    //font: WHS.Text.load('assets/gentilis_bold.typeface.json'),
    
    geometry: {
      size: 30,
      height: 15,
      curveSegments: 6
    },
  
    material: new THREE.MeshBasicMaterial({
      color: 0xffffff
    }),
  
    position: [-40, 0, 0]
  }).addTo(app);

  // const animation = new WHS.Loop(() => {
  //   for (let i = 0, max = response.data.length+2; i < max; i++) {
  //     const particle = particles[i];
  
  //     particle.data.angle += 0.02 * particle.data.distance / radiusMax;
  
  //     particle.position.x = Math.cos(particle.data.angle) * particle.data.distance;
  //     particle.position.z = Math.sin(particle.data.angle) * particle.data.distance;
  
  //     particle.rotation.x += Math.PI / 60;
  //     particle.rotation.y += Math.PI / 60;
  //   }
  
  //   planet.rotation.y += 0.005;
  // });
  
  // app.addLoop(animation);
  
  // animation.start();

  
  
})
// const text = new WHS.Text({
//   text: '윤솔이 사랑해요~',
//   font: WHS.Text.load('assets/Nanum_Pen_Script_Regular.json'),

//   geometry: {
//     size: 30,
//     height: 15,
//     curveSegments: 6
//   },

//   material: new THREE.MeshBasicMaterial({
//     color: 0xffffff
//   }),

//   position: [-150, 0, 0]
// }).addTo(app);

// const app = new App([
//   new ElementModule(document.getElementById('app')),
//   new SceneModule(),
//   new DefineModule('camera', new PerspectiveCamera({
//     position: {
//       z: -15
//     }
//   })),
//   new RenderingModule({bgColor: 0x000001}),
//   new OrbitControlsModule()
// ]);

// app.add(new BasicComponent({
//   modules: [
//     new FancyMaterialModule(app)
//   ]
// }));

// app.start();
