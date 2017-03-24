var scene, camera, renderer;

init();


plane(0,0,0);
wall(0.3,2,5,-6.9,1,-0.5,0x003300);
wall(0.3,2,8.5,-8.25,1,-0.5,0x003300);
wall(8,2,0.3,6.4,1,3.85,0x003300);
wall(8,2,0.3,-4.4,1,3.85,0x003300);
wall(16,2,0.3,1,1,1.85,0x003300);
wall(16,2,0.3,1,1,-2.85,0x003300);
wall(0.3,2,5,8.9,1,-0.5,0x003300);
wall(0.3,2,8.5,10.25,1,-0.5,0x003300);
wall(0.3,2,4,-0.3,1,12,0x003300);
wall(0.3,2,4,2.3,1,12,0x003300);
wall(2.9,2,0.3,1,1,14,0x003300);//
wall(8,2,0.3,6.4,1,-4.85,0x003300);
wall(8,2,0.3,-4.4,1,-4.85,0x003300);
wall(0.3,2,2,-0.3,1,-5.7,0x003300);
wall(0.3,2,2,2.3,1,-5.7,0x003300);
wall(0.3,2,6,6.3,1,7,0x003300);
wall(0.3,2,6,-4.3,1,7,0x003300);
column(-0.3, 1, -7.5)
column(-0.3, 1, -9.5)
column(-0.3, 1, -11.5)
column(-0.3, 1, -13.5)
column(2.3, 1, -7.5)
column(2.3, 1, -9.5)
column(2.3, 1, -11.5)
column(2.3, 1, -13.5)
wall(3,0.3,7.2,1,2,-10.5,0x333333);//tetto
wall(4.3,2,0.3,-2.3,1,10,0x003300);
wall(4.3,2,0.3,4.3,1,10,0x003300);
wall(8,2,0.3,1,1,8,0x003300);
wall(0.3,2,3,4.85,1,6.5,0x003300);
wall(0.3,2,3,-2.85,1,6.5,0x003300);
wall(0.8,1,6.5,10.25,0.5,-8,0x003300);//garden right
tree(10.25,1,-11)
wall(0.8,1,6.5,10.25,0.5,-14.6,0x003300);//garden right
tree(10.25,1,-18)
wall(0.8,1,6.5,10.25,0.5,-21.2,0x003300);//garden right
wall(0.8,1,6.5,-8.25,0.5,-8,0x003300);//garden left
tree(-8.25,1,-11)
wall(0.8,1,6.5,-8.25,0.5,-14.6,0x003300);//garden left
tree(-8.25,1,-18)
wall(0.8,1,6.5,-8.25,0.5,-21.2,0x003300);//garden left
wall(5,1,0.8,-5.9,0.5,-24.6,0x003300);//garden center
tree(-3.0,1,-24.6)
wall(7,1,0.8,0.8,0.5,-24.6,0x003300);//garden center
tree(4.7,1,-24.6)
wall(6,1,0.8,7.4,0.5,-24.6,0x003300);//garden center

star();
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
    
    scene.add(camera);

    document.addEventListener('keydown', Keyboard, false);

    camera.position.y = 0.3;
    camera.position.x = 1;
    camera.position.z = 13;
    
        

  }
   
    function plane (x, y, z){
            // plane
            var geometry = new THREE.PlaneGeometry( 400,400 );
            var material = new THREE.MeshBasicMaterial( { color: 0x66CC33, side: THREE.DoubleSide } );
            var ground = new THREE.Mesh( geometry, material );

            ground.position.y = -1.9; //lower it 
			ground.rotation.x = -Math.PI/2; //-90 degrees around the xaxis 
			//IMPORTANT, draw on both sides 

			ground.position.x = x;
            ground.position.y = y;
            ground.position.z = z;

			scene.add(ground); 

            

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

		function column(x,y,z){

		cylinder = new THREE.Mesh(new THREE.CylinderGeometry(0.2, 0.2, 2), new THREE.MeshBasicMaterial({color: 0x333333}));
        
        
        cylinder.position.x = x;
        cylinder.position.y = y;
        cylinder.position.z = z;
		scene.add(cylinder);

}

function tree(x,y,z){

		cone = new THREE.Mesh(new THREE.CylinderGeometry(0, 1, 3, 50, 100, false), new THREE.MeshBasicMaterial({color: 0x003300}));
        cone.position.x = x;
        cone.position.y = 3.5;
        cone.position.z = z;
		scene.add(cone);

    cylinder = new THREE.Mesh(new THREE.CylinderGeometry(0.4, 0.4, 2, 100, 100, false), new THREE.MeshBasicMaterial({color: 0x422515}));
        cylinder.position.x = x;
        cylinder.position.y = y;
        cylinder.position.z = z;
		scene.add(cylinder);



}

function star(){

			var geometry = new THREE.SphereGeometry(1,8,6);
			var material = new THREE.MeshBasicMaterial( { color: 0xFFFF99 } );

            for ( var i = 0; i < 1000; i ++ ) {

                var mesh = new THREE.Mesh( geometry, material );
                mesh.position.x = ( Math.random() - 0.5 ) * 3000;
                mesh.position.y = ( Math.random()) * 3000;
                mesh.position.z = ( Math.random() - 0.5 ) * 3000;
                mesh.updateMatrix();
                mesh.matrixAutoUpdate = false;
                
                scene.add( mesh );
                

             }



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
			else if(event.keyCode == 38)//up arrow
              camera.rotation.x += speed;
			else if(event.keyCode == 40)//down arrow
              camera.rotation.x -= speed;
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

			
