


      var scene = new THREE.Scene();
			var camera = new THREE.PerspectiveCamera( 60, window.innerWidth/window.innerHeight, 0.1, 1000 );

			var renderer = new THREE.WebGLRenderer();
			renderer.setSize( window.innerWidth, window.innerHeight);
			document.body.appendChild( renderer.domElement );

			controls = new THREE.OrbitControls( camera );
    	controls.addEventListener( 'change', render );


			

			var geometry00 = new THREE.BoxGeometry( 1, 1, 1 );
			var material = new THREE.MeshBasicMaterial( { color: 0x6600CC } );
			var cube00 = new THREE.Mesh( geometry00, material );
			scene.add( cube00 );

			var geometry01 = new THREE.BoxGeometry( 1, 1, 1 );
			var material = new THREE.MeshBasicMaterial( { color: 0x6600CC } );
			var cube01 = new THREE.Mesh( geometry01, material );
			scene.add( cube01 );

			var geometry02 = new THREE.BoxGeometry( 1, 1, 1 );
			var material = new THREE.MeshBasicMaterial( { color: 0x6600CC } );
			var cube02 = new THREE.Mesh( geometry02, material );
			scene.add( cube02 );

			var geometry10= new THREE.BoxGeometry( 1, 1, 1 );
			var material = new THREE.MeshBasicMaterial( { color: 0x6600CC } );
			var cube10 = new THREE.Mesh( geometry10, material );
			scene.add( cube10 );

			var geometry11 = new THREE.BoxGeometry( 1, 1, 1 );
			var material = new THREE.MeshBasicMaterial( { color: 0x6600CC } );
			var cube11 = new THREE.Mesh( geometry11, material );
			scene.add( cube11 );

			var geometry12 = new THREE.BoxGeometry( 1, 1, 1 );
			var material = new THREE.MeshBasicMaterial( { color: 0x6600CC } );
			var cube12 = new THREE.Mesh( geometry12, material );
			scene.add( cube12 );

			var geometry20 = new THREE.BoxGeometry( 1, 1, 1 );
			var material = new THREE.MeshBasicMaterial( { color: 0x6600CC } );
			var cube20 = new THREE.Mesh( geometry20, material );
			scene.add( cube20 );

			var geometry21 = new THREE.BoxGeometry( 1, 1, 1 );
			var material = new THREE.MeshBasicMaterial( { color: 0x6600CC } );
			var cube21 = new THREE.Mesh( geometry21, material );
			scene.add( cube21 );

			var geometry22 = new THREE.BoxGeometry( 1, 1, 1 );
			var material = new THREE.MeshBasicMaterial( { color: 0x6600CC } );
			var cube22 = new THREE.Mesh( geometry22, material );
			scene.add( cube22 );

			cube00.position.x = -1.7;
			cube00.position.y = 1.7;

			cube01.position.y = 1.7;

			cube02.position.x = 1.7;
			cube02.position.y = 1.7;

			cube10.position.x = -1.7;

			cube12.position.x = 1.7;

			cube20.position.x = -1.7;
			cube20.position.y = -1.7;

			

			cube21.position.y = -1.7;

			cube22.position.x = 1.7;
			cube22.position.y = -1.7;

			//faccia2

			var geometrysec00 = new THREE.BoxGeometry( 1, 1, 1 );
			var material = new THREE.MeshBasicMaterial( { color: 0x33FFCC } );
			var cubesec00 = new THREE.Mesh( geometrysec00, material );
			scene.add( cubesec00 );

			var geometrysec01 = new THREE.BoxGeometry( 1, 1, 1 );
			var material = new THREE.MeshBasicMaterial( { color: 0x33FFCC } );
			var cubesec01 = new THREE.Mesh( geometrysec01, material );
			scene.add( cubesec01 );

			var geometrysec02 = new THREE.BoxGeometry( 1, 1, 1 );
			var material = new THREE.MeshBasicMaterial( { color: 0x33FFCC } );
			var cubesec02 = new THREE.Mesh( geometrysec02, material );
			scene.add( cubesec02 );

			var geometrysec10= new THREE.BoxGeometry( 1, 1, 1 );
			var material = new THREE.MeshBasicMaterial( { color: 0x33FFCC } );
			var cubesec10 = new THREE.Mesh( geometrysec10, material );
			scene.add( cubesec10 );

			var geometrysec11 = new THREE.BoxGeometry( 1, 1, 1 );
			var material = new THREE.MeshBasicMaterial( { color: 0x33FFCC } );
			var cubesec11 = new THREE.Mesh( geometrysec11, material );
			scene.add( cubesec11 );

			var geometrysec12 = new THREE.BoxGeometry( 1, 1, 1 );
			var material = new THREE.MeshBasicMaterial( { color: 0x33FFCC } );
			var cubesec12 = new THREE.Mesh( geometrysec12, material );
			scene.add( cubesec12 );

			var geometrysec20 = new THREE.BoxGeometry( 1, 1, 1 );
			var material = new THREE.MeshBasicMaterial( { color: 0x33FFCC } );
			var cubesec20 = new THREE.Mesh( geometrysec20, material );
			scene.add( cubesec20 );

			var geometrysec21 = new THREE.BoxGeometry( 1, 1, 1 );
			var material = new THREE.MeshBasicMaterial( { color: 0x33FFCC } );
			var cubesec21 = new THREE.Mesh( geometrysec21, material );
			scene.add( cubesec21 );

			var geometrysec22 = new THREE.BoxGeometry( 1, 1, 1 );
			var material = new THREE.MeshBasicMaterial( { color: 0x33FFCC } );
			var cubesec22 = new THREE.Mesh( geometrysec22, material );
			scene.add( cubesec22 );

			cubesec00.position.x = -1.7;
			cubesec00.position.y = 1.7;
			cubesec00.position.z = -1.7;

			cubesec01.position.y = 1.7;
			cubesec01.position.z = -1.7;

			cubesec02.position.x = 1.7;
			cubesec02.position.y = 1.7;
			cubesec02.position.z = -1.7;

			cubesec10.position.x = -1.7;
			cubesec10.position.z = -1.7;

			cubesec11.position.z = -1.7;

			cubesec12.position.x = 1.7;
			cubesec12.position.z = -1.7;

			cubesec20.position.x = -1.7;
			cubesec20.position.y = -1.7;
			cubesec20.position.z = -1.7;

			cubesec21.position.z = -1.7;
			cubesec21.position.y = -1.7;

			cubesec22.position.x = 1.7;
			cubesec22.position.y = -1.7;
			cubesec22.position.z = -1.7;

			//faccia3

			var geometryter00 = new THREE.BoxGeometry( 1, 1, 1 );
			var material = new THREE.MeshBasicMaterial( { color: 0x000099 } );
			var cubeter00 = new THREE.Mesh( geometryter00, material );
			scene.add( cubeter00 );

			var geometryter01 = new THREE.BoxGeometry( 1, 1, 1 );
			var material = new THREE.MeshBasicMaterial( { color: 0x000099 } );
			var cubeter01 = new THREE.Mesh( geometryter01, material );
			scene.add( cubeter01 );

			var geometryter02 = new THREE.BoxGeometry( 1, 1, 1 );
			var material = new THREE.MeshBasicMaterial( { color: 0x000099 } );
			var cubeter02 = new THREE.Mesh( geometryter02, material );
			scene.add( cubeter02 );

			var geometryter10= new THREE.BoxGeometry( 1, 1, 1 );
			var material = new THREE.MeshBasicMaterial( { color: 0x000099 } );
			var cubeter10 = new THREE.Mesh( geometryter10, material );
			scene.add( cubeter10 );

			var geometryter11 = new THREE.BoxGeometry( 1, 1, 1 );
			var material = new THREE.MeshBasicMaterial( { color: 0x000099 } );
			var cubeter11 = new THREE.Mesh( geometryter11, material );
			scene.add( cubeter11 );

			var geometryter12 = new THREE.BoxGeometry( 1, 1, 1 );
			var material = new THREE.MeshBasicMaterial( { color: 0x000099 } );
			var cubeter12 = new THREE.Mesh( geometryter12, material );
			scene.add( cubeter12 );

			var geometryter20 = new THREE.BoxGeometry( 1, 1, 1 );
			var material = new THREE.MeshBasicMaterial( { color: 0x000099 } );
			var cubeter20 = new THREE.Mesh( geometryter20, material );
			scene.add( cubeter20 );

			var geometryter21 = new THREE.BoxGeometry( 1, 1, 1 );
			var material = new THREE.MeshBasicMaterial( { color: 0x000099 } );
			var cubeter21 = new THREE.Mesh( geometryter21, material );
			scene.add( cubeter21 );

			var geometryter22 = new THREE.BoxGeometry( 1, 1, 1 );
			var material = new THREE.MeshBasicMaterial( { color: 0x000099 } );
			var cubeter22 = new THREE.Mesh( geometryter22, material );
			scene.add( cubeter22 );

			cubeter00.position.x = -1.7;
			cubeter00.position.y = 1.7;
			cubeter00.position.z = 1.7;

			cubeter01.position.y = 1.7;
			cubeter01.position.z = 1.7;

			cubeter02.position.x = 1.7;
			cubeter02.position.y = 1.7;
			cubeter02.position.z = 1.7;

			cubeter10.position.x = -1.7;
			cubeter10.position.z = 1.7;

			cubeter11.position.z = 1.7;

			cubeter12.position.x = 1.7;
			cubeter12.position.z = 1.7;

			cubeter20.position.x = -1.7;
			cubeter20.position.y = -1.7;
			cubeter20.position.z = 1.7;

			cubeter21.position.z = 1.7;
			cubeter21.position.y = -1.7;

			cubeter22.position.x = 1.7;
			cubeter22.position.y = -1.7;
			cubeter22.position.z = 1.7;



			var render = function () {
				requestAnimationFrame( render );


				//faccia1
				cube00.rotation.x += 0.05;
				cube00.rotation.y += 0.05;

				cube01.rotation.x += 0.05;
				cube01.rotation.y += 0.05;

				cube02.rotation.x += 0.05;
				cube02.rotation.y += 0.05;
			
				cube10.rotation.x += 0.05;
				cube10.rotation.y += 0.05;

				cube11.rotation.x += 0.05;
				cube11.rotation.y += 0.05;

				cube12.rotation.x += 0.05;
				cube12.rotation.y += 0.05;

				cube20.rotation.x += 0.05;
				cube20.rotation.y += 0.05;

				cube21.rotation.x += 0.05;
				cube21.rotation.y += 0.05;

				cube22.rotation.x += 0.05;
				cube22.rotation.y += 0.05;

				//faccia2

				cubesec00.rotation.x += 0.05;
				cubesec00.rotation.y += 0.05;

				cubesec01.rotation.x += 0.05;
				cubesec01.rotation.y += 0.05;

				cubesec02.rotation.x += 0.05;
				cubesec02.rotation.y += 0.05;
			
				cubesec10.rotation.x += 0.05;
				cubesec10.rotation.y += 0.05;

				cubesec11.rotation.x += 0.05;
				cubesec11.rotation.y += 0.05;

				cubesec12.rotation.x += 0.05;
				cubesec12.rotation.y += 0.05;

				cubesec20.rotation.x += 0.05;
				cubesec20.rotation.y += 0.05;

				cubesec21.rotation.x += 0.05;
				cubesec21.rotation.y += 0.05;

				cubesec22.rotation.x += 0.05;
				cubesec22.rotation.y += 0.05;


				//faccia3

				cubeter00.rotation.x += 0.05;
				cubeter00.rotation.y += 0.05;

				cubeter01.rotation.x += 0.05;
				cubeter01.rotation.y += 0.05;

				cubeter02.rotation.x += 0.05;
				cubeter02.rotation.y += 0.05;
			
				cubeter10.rotation.x += 0.05;
				cubeter10.rotation.y += 0.05;

				cubeter11.rotation.x += 0.05;
				cubeter11.rotation.y += 0.05;

				cubeter12.rotation.x += 0.05;
				cubeter12.rotation.y += 0.05;

				cubeter20.rotation.x += 0.05;
				cubeter20.rotation.y += 0.05;

				cubeter21.rotation.x += 0.05;
				cubeter21.rotation.y += 0.05;

				cubeter22.rotation.x += 0.05;
				cubeter22.rotation.y += 0.05;


				renderer.render(scene, camera);
			};
			camera.position.z = 8;



			camera.lookAt(new THREE.Vector3(0, 0, 0))

			

			render();

