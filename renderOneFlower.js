// import * as THREE from 'three';

/** module to take flower meshes and output one image of flower, usable for testing/game */
var scene = new THREE.Scene();
// var camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );
let width = 10; let height=10;
var camera = new THREE.OrthographicCamera( width / - 2, width / 2, height / 2, height / - 2, 0.01, 1000 );

var renderer = new THREE.WebGLRenderer({alpha:true});
renderer.setSize( 250, 250);
document.body.appendChild( renderer.domElement );

var geometry = new THREE.BoxGeometry( 1, 1, 1 );
var material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
var mesh = new THREE.Mesh( geometry, material );
scene.add( mesh );

camera.position.z = 5;

var animate = function () {
    requestAnimationFrame( animate );

    mesh.rotation.x += 0.01;
    mesh.rotation.y += 0.01;

    renderer.render( scene, camera );
};

animate();