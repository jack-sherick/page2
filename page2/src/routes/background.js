console.log("By Jack Sherick");

const BALL_CONSTANT = 5;

let Engine = Matter.Engine,
    Render = Matter.Render,
    World = Matter.World,
    Bodies = Matter.Bodies,
    Bounds = Matter.Bounds,
	Events = Matter.Events

let engine = Engine.create();

let render = Render.create({
    element: document.body,
    engine: engine,
    options: {
      wireframes: false,
			width: window.innerWidth,
			height: window.innerHeight,
            background: 'transparent'
    }
});

engine.world.gravity.y = 0;

pElements = []

for (let i = 0; i < BALL_CONSTANT; ++i) {
    pElements[i] = Matter.Bodies.circle(Math.random() * window.innerWidth, Math.random() * window.innerHeight, 60, {
        inertia: Infinity,
        friction: 0,
        frictionAir: 0
    });

    Matter.Body.setVelocity(pElements[i], {
        x: ((Math.pow(-1, Math.floor(Math.random() * 2)))) * Math.random() * 3,
        y: ((Math.pow(-1, Math.floor(Math.random() * 2)))) * Math.random() * 3
    });

    World.add(engine.world, pElements[i]);
}

let leftWall = Matter.Bodies.rectangle(0, window.innerHeight/2, 2, window.innerHeight, {
	render: {
		visible: false
	},
	isStatic: true,
	inertia: Infinity
});
let rightWall = Matter.Bodies.rectangle(window.innerWidth, window.innerHeight/2, 2, window.innerHeight, {
	render: {
		visible: false
	},
	isStatic: true,
	inertia: Infinity
});
let bottomWall = Matter.Bodies.rectangle(window.innerWidth/2, window.innerHeight, window.innerWidth, 2, {
	render: {
		visible: false
	},
	isStatic: true,
	inertia: Infinity
});
let topWall = Matter.Bodies.rectangle(window.innerWidth/2, 0, window.innerWidth, 2, {
	render: {
		visible: false
	},
	isStatic: true,
	inertia: Infinity
});

World.add(engine.world, [leftWall, rightWall, bottomWall, topWall])

setInterval(function() {
	for (let i = 0; i < BALL_CONSTANT; ++i) {
		if (pElements[i].velocity.x > 7) {
			Matter.Body.setVelocity(pElements[i], {
				x: 7
			})
		}
		if (pElements[i].velocity.y > 7) {
			Matter.Body.setVelocity(pElements[i], {
				y: 7
			})
		}
		if (pElements[i].velocity.x < -7) {
			Matter.Body.setVelocity(pElements[i], {
				x: -7
			})
		}
		if (pElements[i].velocity.y < -7) {
			Matter.Body.setVelocity(pElements[i], {
				y: -7
			})
		}
	}
}, 1000/60);

Events.on(engine, "collisionStart", function(event) {
    const pairs = event.pairs;

	for (let i = 0, j = pairs.length; i != j; ++i) {

		Matter.Body.setVelocity(pairs[i].bodyA, {
			x: -1 * pairs[i].bodyA.velocity.x * Math.random() * 2,
			y: -1 * pairs[i].bodyA.velocity.y * Math.random() * 2
		});
		Matter.Body.setVelocity(pairs[i].bodyB, {
			x: -1 * pairs[i].bodyB.velocity.x * Math.random() * 2,
			y: -1 * pairs[i].bodyB.velocity.y * Math.random() * 2
		});

	}
});

Engine.run(engine);

Render.run(render);
