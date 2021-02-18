//-- | (- _ -) | -- I am boilderplate code, don't look at me

import { TrackballControls } from './TrackballControls.js';

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );   

const scene = new THREE.Scene();
scene.background = new THREE.Color(0xffffff)
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
const controls = new TrackballControls( camera, renderer.domElement );

//-- | (- _ -) | -- I am boilderplate code, don't look at me

//----------------Starting from here, it should make sense

const geometry = new THREE.BoxGeometry(1, 1, 1)
const material = new THREE.MeshPhongMaterial( { color: 0x00ffff})
const cube = new THREE.Mesh(geometry, material)
scene.add(cube)

const light = new THREE.AmbientLight(0xffffff)
const directionalLight = new THREE.DirectionalLight(0xffffff)
scene.add(light)
scene.add(directionalLight)

light.intensity = 0.5
camera.position.z = 5
directionalLight.position.z = 5

//----------------Don't go beyond this

animate();

function animate() {

    controls.update();
	requestAnimationFrame( animate );
	
	renderer.render( scene, camera );
}