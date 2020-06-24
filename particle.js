class Particle
{
    constructor(x, y)
    {
        var options = {
            restitution:0.4
        }
        this.body = Bodies.circle(x, y, this.radius,options);
        this.radius = radius;
        this.color = color(random(0,255), random(0,255), random(0, 255));
        World.add(world, this.body);
    }

    display()
    {
        var pos = this.body.position;
        var angle = this.body.angle;

        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        ellipseMode(RADIUS);
        strokeWeight(1);
        fill(this.color );
        ellipse(0, 0, this.radius);
        pop();
    }
}