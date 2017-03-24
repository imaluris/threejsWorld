var scene, camera, renderer;

init();
animate();
wall(0.3,1,6,1,0,-1,0x55B663);
wall(0.3,1,7,-1,0,-1.5,0x55B663);
wall(8,1,0.3,3,0,-4.85,0x55B663);
wall(4,1,0.3,3,0,-3.85,0x55B663);
wall(0.3,1,6,5,0,-1,0x55B663);
wall(0.3,1,7,7,0,-1.5,0x55B663);

function init(){


      scene = new THREE.Scene();
			camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );

			renderer = new THREE.WebGLRenderer();
			renderer.setSize( window.innerWidth, window.innerHeight);
			document.body.appendChild( renderer.domElement );

      camera.position.z = 3;

      document.addEventListener('keydown', Keyboard, false);

			//controls = new THREE.OrbitControls( camera );
    	//controls.addEventListener( 'change', render );

      
}

			function wall(a,b,c,x,y,z,color){

			var geometry = new THREE.BoxGeometry( a, b, c ); //a = width, b = height, c = depth
			var material = new THREE.MeshBasicMaterial( { color: color } );
			var wall = new THREE.Mesh( geometry, material );
			scene.add( wall );

            wall.position.x = x;
            wall.position.y = y;
            wall.position.z = z;

            
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
        


			


			function animate() {
 
    // Read more about requestAnimationFrame at http://www.paulirish.com/2011/requestanimationframe-for-smart-animating/
    requestAnimationFrame(animate);
 
    // Render the scene.
    renderer.render(scene, camera);
    //controls.update();
 
  }


		





			


        



