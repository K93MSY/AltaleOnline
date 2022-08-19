window.onload = () => {
    const app = new PIXI.Application({ 
      width: innerWidth, 
      height: innerHeight,                       
      backgroundColor: 0x222222,
      resolution: 1,
      autoDensity: true
    });

    const cWidth = innerWidth;
    const cHeight = innerHeight;

    const style = new PIXI.TextStyle({
        fontFamily: 'sans-serif',
        fontSize: 50,
        fill: 0xffffff,
        fontWeight: 'bold',
        dropShadowAngle:0,
        dropShadowBlur:3,
        dropShadowColor:'yellow',
        dropShadow:true,
        dropShadowAlpha:0.8,
      });
      const p = new PIXI.Text("Altale Online", style);
      p.anchor.set(0.5, 0.5);
      p.position.set(cWidth/2, cHeight/3);
      app.stage.addChild(p);

    document.body.appendChild(app.view);
  }