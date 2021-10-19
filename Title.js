class Canasta
{
	constructor(x,y,w,h)
	{
		var options={
			isStatic:true			
			}
		this.x=x;
		this.y=y;
		this.w=w
		this.h=h
        this.image = loadImage("Canasta.png");
		this.body=Bodies.rectangle(x, y, w, h , options);
 		World.add(world, this.body);

	}
	display()
	{
			
			var titlepos=this.body.position;		

			push()
			translate(titlepos.x, titlepos.y);
			rectMode(CENTER)
			//strokeWeight(4);
			fill("lightgray");
			image(this.image,0,0,this.w, this.h);
			pop()
			
	}

}