import * as WHS from "whs";
import * as THREE from "three";

import {FancyMaterialModule} from './modules/FancyMaterialModule';

import * as client from './client';
client.setDomain('/v1')

const radiusMin = 110, radiusMax = 320;
const colors = {
  green: 0x8fc999,
  blue: 0x5fc4d0,
  orange: 0xee5624,
  yellow: 0xfaff70
};

//font: WHS.Text.load('assets/NanumGothic_Regular.json'),
//font: WHS.Text.load('assets/gentilis_bold.typeface.json'),
const defaultFont = WHS.Text.load('/editor/assets/Nanum_Pen_Script_Regular2.json')
const geometry = {
  size: 30,
  height: 4,
  curveSegments: 1
};
const met = new THREE.MeshBasicMaterial({
  color: 0xffffff
})

const dynamicGeometry = new WHS.DynamicGeometryModule();

const material = new THREE.MeshStandardMaterial({
  shading: THREE.FlatShading,
  emissive: 0x270000,
  roughness: 0.9
});

const defaultSprite = new WHS.Box({
  geometry: {
    buffer: true,
    width: 100,
    height: 100,
    depth: 100
  },

  modules: [
    dynamicGeometry
  ],

  material
});

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

client.StoryController_Get_One({
  id:1,
}).then(function (response) {
  const story = response.data 
  drawStoryItem(0, 0, story);
  for(let sccIndex= 0; sccIndex < story.scenes.length; sccIndex++){
    drawStoryItem(1, sccIndex, story.scenes[sccIndex]);
    for(let frameIndex; frameIndex <story.scenes[sccIndex].frames.length;frameIndex++){
      drawStoryItem(2, frameIndex, story.scenes[sccIndex].frames[frameIndex]);
      for(let sprite of frame.spritestyles) {

      }
    }
  }
})

const drawStoryItem = function(level, index, storyItem) {
  // const particle = defaultSprite.clone();

  // console.log(particle);
  // particle.position = [level * 90, (index * 9), level * 90];
  // particle.addTo(app);

  const particleMinRadius = 50 // Min of asteroid radius.
  const particleMaxRadius = 100 // Max of asteroid radius.

  const particle = defaultSprite.clone();
  const radius = particleMinRadius + Math.random() * (particleMaxRadius - particleMinRadius);

  particle.g_({
    radiusBottom: radius,
    radiusTop: 0,
    height: particle instanceof WHS.Cylinder ? radius * 2 : radius,
    width: radius,
    depth: radius,
    radius
  });

  const mat = [
    new THREE.MeshPhongMaterial({color: colors.green, shading: THREE.FlatShading}),
    new THREE.MeshPhongMaterial({color: colors.blue, shading: THREE.FlatShading}),
    new THREE.MeshPhongMaterial({color: colors.orange, shading: THREE.FlatShading}),
    new THREE.MeshPhongMaterial({color: colors.yellow, shading: THREE.FlatShading})
  ];

  particle.material = mat[Math.floor(4 * Math.random())]; // Set custom THREE.Material to mesh.

  // Particle data.
  particle.data = {
    distance: radiusMin + Math.random() * (radiusMax - radiusMin),
    angle: Math.random() * Math.PI * 2
  };

  // Set position & rotation.
  particle.position.x = Math.cos(particle.data.angle) * particle.data.distance;
  particle.position.z = Math.sin(particle.data.angle) * particle.data.distance;
  particle.position.y = -10 * Math.random() + 4;

  particle.rotation.set(Math.PI * 2 * Math.random(), Math.PI * 2 * Math.random(), Math.PI * 2 * Math.random());

  particle.addTo(app);

  console.log(storyItem)
  if (storyItem.name == undefined) {
    storyItem.name = "";
  }
  const text = new WHS.Text({
    text: storyItem.name,
    font: defaultFont,
    
    geometry: geometry,
    material: met,
    position: [level * 190, (index * 90), 0]
  }).addTo(app);
}

window.test = function(data) {
  console.log("execute editor test()");
  console.log(data);

  new WHS.Text({
    text: data,
    font: defaultFont,
    
    geometry: geometry,
    material: met,
    position: [60, 110, 0]
  }).addTo(app);
}