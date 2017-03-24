var scene, camera, renderer;

init();

animate();
plane(0,0,0);
cube(1,1,1,1,0.5,1.5);
cube(1,1,1,3,0.5,1.5);


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

    document.addEventListener('keydown', Keyboard, false);

    camera.position.z = 20;
    //camera.position.y = -10;
    //camera.position.x = 1;
    //camera.rotation.x = 1.5;
    
        

  }
   
    function plane (x, y, z){
            // plane
            var geometry = new THREE.PlaneGeometry( 20,20 );
            var material = new THREE.MeshBasicMaterial( { color: 0x0000ff, side: THREE.DoubleSide } );
            var mesh = new THREE.Mesh( geometry, material );
            scene.add( mesh );

            mesh.position.x = x;
            mesh.position.y = y;
            mesh.position.z = z;

            mesh.rotation.x = 1.58;

            

  }

  function cube(a,b,c,x,y,z){
            //cube
            var geometry = new THREE.BoxGeometry( a, b, c );
            var material = new THREE.MeshBasicMaterial( { color: 0x55B663 } );
            var cube = new THREE.Mesh( geometry, material );
            scene.add( cube );

            cube.position.x = x;
            cube.position.y = y;
            cube.position.z = z;
  }

  function Keyboard(){

            var speed = 0.1;

            if(event.keyCode == 65) //A
              camera.position.x -= speed;
            else if(event.keyCode == 68) //D
              camera.position.x += speed;
            else if(event.keyCode == 83) //S
              camera.position.z += speed;
            else if(event.keyCode == 87) //W
              camera.position.z -= speed;
            else if(event.keyCode == 37)//left arrow
              camera.rotation.y += speed;
            else if(event.keyCode == 39)//right arrow
              camera.rotation.y -= speed;
  }
 

    // Add OrbitControls so that we can pan around with the mouse.
    controls = new THREE.OrbitControls(camera, renderer.domElement);
  
  function animate() {
 
    // Read more about requestAnimationFrame at http://www.paulirish.com/2011/requestanimationframe-for-smart-animating/
    requestAnimationFrame(animate);
 
    // Render the scene.
    renderer.render(scene, camera);
    //controls.update();
 
  }
 
