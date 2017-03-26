var scene, camera, renderer;
var cubes = [];
var rings = [];

init();


ground2();
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
wall(0.8,1,6.5,10,0.5,-8.2,0x003300);//garden right
tree(10,1,-11)
wall(0.8,1,6.5,10,0.5,-14.7,0x003300);//garden right
tree(10,1,-18)
wall(0.8,1,6.5,10,0.5,-21.2,0x003300);//garden right
wall(0.8,1,6.5,-8,0.5,-8,0x003300);//garden left
tree(-7.99,1,-11)
wall(0.8,1,6.5,-8,0.5,-14.5,0x003300);//garden left
tree(-7.99,1,-18)
wall(0.8,1,6.5,-8,0.5,-21.,0x003300);//garden left
wall(6,1,0.8,-5.4,0.5,-24.6,0x003300);//garden center
tree(-3.0,1,-24.6)
wall(7,1,0.8,0.9,0.5,-24.6,0x003300);//garden center
tree(4.7,1,-24.6)
wall(6,1,0.8,7.4,0.5,-24.6,0x003300);//garden center
//lightBulb(-6,1,-8,-6,3,-8);//left
//lightBulb(-6,1,-22,-7,3,-21);//left
//lightBulb(8,1,-8, 7.5, 3.1, -6.8);//right
//lightBulb(8,1,-22, 7, 3.1, -21);//right
//lamp(8,1.5,5, 8, 3.5, 6);//right
//lamp(-6,1.5,5,-7,3.5,6);//left
//lamp(1,1.5,15,0,3.5,16);//center
moon();

//Faccia inferiore

cubes[0] = setCube(0.3,0.3,0.3,0.5,1.5,-20,0x0000ff);
cubes[1] = setCube(0.3,0.3,0.3,1,1.5,-20,0x0000ff);
cubes[2] = setCube(0.3,0.3,0.3,1.5,1.5,-20,0x0000ff);
cubes[3] = setCube(0.3,0.3,0.3,0.5,1.5,-19.5,0x0000ff);
cubes[4] = setCube(0.3,0.3,0.3,1,1.5,-19.5,0x0000ff);
cubes[5] = setCube(0.3,0.3,0.3,1.5,1.5,-19.5,0x0000ff);
cubes[6] = setCube(0.3,0.3,0.3,0.5,1.5,-19,0x0000ff);
cubes[7] = setCube(0.3,0.3,0.3,1,1.5,-19,0x0000ff);
cubes[8] = setCube(0.3,0.3,0.3,1.5,1.5,-19,0x0000ff);

//Faccia centrale

cubes[9] = setCube(0.3,0.3,0.3,0.5,2,-20,0x00ff00);
cubes[10] = setCube(0.3,0.3,0.3,1,2,-20,0x00ff00);
cubes[11] = setCube(0.3,0.3,0.3,1.5,2,-20,0x00ff00);
cubes[12] = setCube(0.3,0.3,0.3,0.5,2,-19.5,0x00ff00);
cubes[13] = setCube(0.3,0.3,0.3,1,2,-19.5,0x00ff00);
cubes[14] = setCube(0.3,0.3,0.3,1.5,2,-19.5,0x00ff00);
cubes[15] = setCube(0.3,0.3,0.3,0.5,2,-19,0x00ff00);
cubes[16] = setCube(0.3,0.3,0.3,1,2,-19,0x00ff00);
cubes[17] = setCube(0.3,0.3,0.3,1.5,2,-19,0x00ff00);

//Faccia superiore

cubes[18] = setCube(0.3,0.3,0.3,0.5,2.5,-20,0xff0000);
cubes[19] = setCube(0.3,0.3,0.3,1,2.5,-20,0xff0000);
cubes[20] = setCube(0.3,0.3,0.3,1.5,2.5,-20,0xff0000);
cubes[21] = setCube(0.3,0.3,0.3,0.5,2.5,-19.5,0xff0000);
cubes[22] = setCube(0.3,0.3,0.3,1,2.5,-19.5,0xff0000);
cubes[23] = setCube(0.3,0.3,0.3,1.5,2.5,-19.5,0xff0000);
cubes[24] = setCube(0.3,0.3,0.3,0.5,2.5,-19,0xff0000);
cubes[25] = setCube(0.3,0.3,0.3,1,2.5,-19,0xff0000);
cubes[26] = setCube(0.3,0.3,0.3,1.5,2.5,-19,0xff0000);

rings[0] = ring(0xffffff);
rings[0].rotation.x = -Math.PI/2;
rings[1] = ring(0xffffff);



//plane(0,0,0);
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
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    //renderer.shadowMapCullFrontFaces = false;
    document.body.appendChild(renderer.domElement);

    //Directional light

        var light = new THREE.DirectionalLight( 0xffffff, 1);
        light.position.set(50,40,-100);
        light.castShadow = true;
        light.shadow.camera.near = 1;
        light.shadowCameraLeft = -30;
        light.shadowCameraRight = 30;
        light.shadowCameraTop = 30;
        light.shadowCameraBottom = -30;
        scene.add( light );

        var lightHelp = new THREE.AmbientLight( 0x808080, 0.5)
        scene.add( lightHelp );
        
       var helper = new THREE.CameraHelper( light.shadow.camera );
       scene.add( helper );
    

    camera = new THREE.PerspectiveCamera(75, WIDTH / HEIGHT, 0.1, 1000);
    camera.position.x = 1;
    camera.position.y = 1;
    camera.position.z = 14;
    
    scene.add(camera);

    document.addEventListener('keydown', Keyboard, false);


    
        

  }
   
   

function ground2(){

//Create a plane that receives shadows (but does not cast them)
            var planeGeometry = new THREE.PlaneBufferGeometry( 400,400);
            var planeMaterial = new THREE.MeshLambertMaterial( { color: 0x00ff00, side: THREE.DoubleSide } )
            var plane = new THREE.Mesh( planeGeometry, planeMaterial );
            plane.receiveShadow = true;
            scene.add( plane );

            plane.position.x = 0;
            plane.position.y = 0;
            plane.position.z = 0;

            plane.rotation.x =  Math.PI / 2;
            
            
}

  function wall(a,b,c,x,y,z,color){

			var geometry = new THREE.BoxGeometry( a, b, c ); //a = width, b = height, c = depth
			var material = new THREE.MeshLambertMaterial( { color: color } );
			var wall = new THREE.Mesh( geometry, material );
			scene.add( wall );

            wall.position.x = x;
            wall.position.y = y;
            wall.position.z = z;

            wall.castShadow = true;
            wall.receiveShadow = true;

            
        }
  
function ring(color){

      var geometry = new THREE.TorusBufferGeometry( 1.5, 0.1, 16, 100 );
      var material = new THREE.MeshLambertMaterial( { color: color } );
      var torus = new THREE.Mesh( geometry, material );
      scene.add( torus );

      torus.position.x = 1;
      torus.position.y = 2;
      torus.position.z = -19.5;

            torus.castShadow = true;
            torus.receiveShadow = true;
      

      return torus;

} 

function lightBulb(x,y,z,a,b,c){


        cylinder = new THREE.Mesh(new THREE.CylinderGeometry(0.1, 0.1, 2, 100, 100, false), new THREE.MeshPhongMaterial({color: 0x000000}));
        cylinder.castShadow = true;
        cylinder.receiveShadow = false;
		    scene.add(cylinder);

        cylinder.position.x = x;
        cylinder.position.y = y;
        cylinder.position.z = z;



        var geometry = new THREE.SphereGeometry(0.3,32,32);
			  var material = new THREE.MeshLambertMaterial( { color: 0xFFFF99 } );
        var sphere = new THREE.Mesh( geometry, material );
        scene.add( sphere );

        sphere.position.x = x;
        sphere.position.y = 2;
        sphere.position.z = z;

            sphere.castShadow = true;
            sphere.receiveShadow = false;

        var light = new THREE.PointLight( 0xffffff, 1, 20);
        light.position.set( a, b, c );
        scene.add( light );



}

function lamp(x,y,z,a,b,c){


        cylinder = new THREE.Mesh(new THREE.CylinderGeometry(0.1, 0.1, 3, 100, 100, false), new THREE.MeshPhongMaterial({color: 0x000000}));
		    scene.add(cylinder);

        cylinder.position.x = x;
        cylinder.position.y = y;
        cylinder.position.z = z;

            cylinder.castShadow = true;
            cylinder.receiveShadow = false;

        var geometry = new THREE.SphereGeometry(0.3,32,32);
			  var material = new THREE.MeshLambertMaterial( { color: 0xFFFF99 } );
        var sphere = new THREE.Mesh( geometry, material );
        scene.add( sphere );

        sphere.position.x = x;
        sphere.position.y = 3;
        sphere.position.z = z;

        sphere.castShadow = true;
        sphere.receiveShadow = false;

        var light = new THREE.PointLight( 0xffffff, 1, 20);
        light.position.set( a, b, c );
        
        scene.add( light );


}

function moon(){

      var geometry = new THREE.SphereGeometry(10,32,32);
			var material = new THREE.MeshBasicMaterial( { color: 0xFFFF99 } );
      var moon = new THREE.Mesh( geometry, material );
        moon.position.x = 50;
        moon.position.y = 40;
        moon.position.z = -100;
        
        scene.add(moon);

}

function setCube (a, b, c, x, y, z, color){
      var geometry = new THREE.BoxGeometry( a, b, c );
			var material = new THREE.MeshLambertMaterial( { color: color } );
		  var cube = new THREE.Mesh( geometry, material );
			scene.add( cube );

            cube.position.x = x;
            cube.position.y = y;
            cube.position.z = z;

            cube.castShadow = true;
            cube.receiveShadow = true;

      return cube;


  }

		function column(x,y,z){

		cylinder = new THREE.Mesh(new THREE.CylinderGeometry(0.2, 0.2, 2), new THREE.MeshLambertMaterial({color: 0x333333}));
        
        
        cylinder.position.x = x;
        cylinder.position.y = y;
        cylinder.position.z = z;

		    scene.add(cylinder);

        cylinder.castShadow = true;
        cylinder.receiveShadow = true;

}

function tree(x,y,z){

		cone = new THREE.Mesh(new THREE.CylinderGeometry(0, 1, 3, 50, 100, false), new THREE.MeshLambertMaterial({color: 0x003300}));
        cone.position.x = x;
        cone.position.y = 3.5;
        cone.position.z = z;
		scene.add(cone);

    cone.castShadow = true;
    cone.receiveShadow = true;

    cylinder = new THREE.Mesh(new THREE.CylinderGeometry(0.35, 0.35, 2, 100, 100, false), new THREE.MeshLambertMaterial({color: 0x422515}));
        cylinder.position.x = x;
        cylinder.position.y = y;
        cylinder.position.z = z;
		scene.add(cylinder);

    cylinder.castShadow = true;
    cylinder.receiveShadow = true;



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

    cubes.forEach(function(cube) {
      		cube.rotation.y += 0.05;
          cube.rotation.x += 0.05;
    });

    rings.forEach(function(torus) {
      		torus.rotation.x += 0.05;
          torus.rotation.y += 0.07;
    });

    //torus.rotation.x +=0.05;
 
    
    renderer.render(scene, camera);
    

    
 
  }

			
