
var HelloWorldLayer = cc.Layer.extend({
    sprite:null,
    ctor:function () {
        //////////////////////////////
        // 1. super init first
        this._super();
        var size = cc.winSize;
        
        var rect = new cc.DrawNode();
        var dot = new cc.DrawNode();
//        
//        rect.drawRect(cc.p(0, 0), cc.p(200, 200), cc.color(), 5, cc.color(255, 0, 0));
//        dot.drawDot(cc.p(0, 0),10,cc.color(255, 255, 255, 255));
//        
//        this.addChild(rect);
//        rect.addChild(dot);
//        
//        
//        
//        rect.setPosition(size.width/2,size.height/2);
//        dot.setPosition(10,10);
//        
//        rect.setContentSize(cc.size(100, 100));
//        rect.setAnchorPoint(cc.p(0.5, 0.5));
//        
//        this.schedule(function(){
//        	rect.setRotation(rect.getRotation()+1);
//        	//var p = dot.getPosition();
//        	var p = dot.convertToWorldSpace(cc.p(0, 0));
//        	cc.log(p.x+ "," +p.y);
//        });
        
//        //222222
//        dot.drawDot(cc.p(0, 0),10,cc.color(255, 255, 255, 255));
//        this.addChild(dot);
//        dot.setPosition(size.width/2,size.height/2);
//        
//        var angle = 0;
//        
//        this.schedule(function(f){
//        	dot.setPosition( cc.p(size.width/2 +Math.cos(angle)*100, size.height/2 +Math.sin(angle)*100));
//        	angle+=0.1;
//        });
        
        //3333使用向量
        dot.drawDot(cc.p(0, 0),10,cc.color(255, 255, 255, 255));
        this.addChild(dot);
        dot.setPosition(size.width/2,size.height/2);
        var direction = cc.p(cc.randomMinus1To1(), cc.randomMinus1To1())
        
        
        
        this.schedule(function(f){
        	var p = dot.getPosition();
        	
        	if (p.x<0 || p.x>size.width) {
        		direction.x *= -1;
        	} else if(p.y<0 || p.y>size.height) {
        		direction.y *= -1;
        	}
        	
        	dot.setPositionX(p.x + direction.x*10);
        	dot.setPositionY(p.y + direction.y*10);
        });
        
        return true;
    }
});

var HelloWorldScene = cc.Scene.extend({
    onEnter:function () {
        this._super();
        var layer = new HelloWorldLayer();
        this.addChild(layer);
    }
});

