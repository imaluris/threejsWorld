var scene, camera, renderer;
var cubes = [];

  init();
  


  for (i = 0; i < 9; i++) {

    this.cubes[i] = setCube(1,1,1,i,0,0);

  }

  for (i = 9; i < 18; i++) {

    this.cubes[i] = setCube(1,1,1,3,i,0);

  }

   for (i = 18; i < 29; i++) {

    this.cubes[i] = setCube(1,1,1,3,6,i);

  }

  animate();
 
 
  

  

  function init() {
 
    // Create the scene and set the scene size.
    scene = new THREE.Scene();
    var WIDTH = window.innerWidth,
        HEIGHT = window.innerHeight;

    // Create a renderer and add it to the DOM.
    renderer = new THREE.WebGLRenderer({antialias:true});
    renderer.setSize(WIDTH, HEIGHT);
    document.body.appendChild(renderer.domElement);

    camera = new THREE.PerspectiveCamera(75, WIDTH / HEIGHT, 0.1, 1000);
    camera.position.z = 5;
    scene.add(camera);

    controls = new THREE.OrbitControls(camera, renderer.domElement);
  
   
        

  }
   
    function setCube (a, b, c, x, y, z){
      var geometry = new THREE.BoxGeometry( a, b, c );
			var material = new THREE.MeshBasicMaterial( { color: 0x55B663 } );
		  var cube = new THREE.Mesh( geometry, material );
			scene.add( cube );

            cube.position.x = x;
            cube.position.y = y;
            cube.position.z = z;

return cube;


  }
    

  
  

  function animate() {
 
    // Read more about requestAnimationFrame at http://www.paulirish.com/2011/requestanimationframe-for-smart-animating/
    requestAnimationFrame(animate);

    cubes.forEach(function(cube) {
      		cube.rotation.y += 0.05;
          cube.rotation.x += 0.05;
    });

    



 
    // Render the scene.
    renderer.render(scene, camera);
    //controls.update();
 
  }

  



  