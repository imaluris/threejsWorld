            var scene = new THREE.Scene();
            scene.fog = new THREE.FogExp2( 0xcccccc, 0.002 );
            
			var camera = new THREE.PerspectiveCamera( 60, window.innerWidth/window.innerHeight, 0.1, 1000 );

			var renderer = new THREE.WebGLRenderer();
			renderer.setSize( window.innerWidth, window.innerHeight);
			document.body.appendChild( renderer.domElement );

            controls = new THREE.OrbitControls( camera );
            controls.addEventListener( 'change', render );


			var geometry11 = new THREE.BoxGeometry( 1, 1, 1 );
			var material = new THREE.MeshBasicMaterial( { color: 0x6600CC } );
			var cube11 = new THREE.Mesh( geometry11, material );
			scene.add( cube11 );

            for ( var i = 0; i < 500; i ++ ) {

                var mesh = new THREE.Mesh( geometry11, material );
                mesh.position.x = ( Math.random() - 0.5 ) * 1000;
                mesh.position.y = ( Math.random() - 0.5 ) * 1000;
                mesh.position.z = ( Math.random() - 0.5 ) * 1000;
                mesh.updateMatrix();
                mesh.matrixAutoUpdate = false;
                
                scene.add( mesh );
                

             }

            // lights

            light = new THREE.DirectionalLight( 0xffffff );
            light.position.set( 1, 1, 1 );
            scene.add( light );

            light = new THREE.DirectionalLight( 0x002288 );
            light.position.set( -1, -1, -1 );
            scene.add( light );

            light = new THREE.AmbientLight( 0x222222 );
            scene.add( light );


			




			var render = function () {
				requestAnimationFrame( render );

				mesh.rotation.x += 0.05;
				mesh.rotation.y += 0.05;



				renderer.render(scene, camera);
			};

			camera.position.z = 100;



			

			

			render();

	