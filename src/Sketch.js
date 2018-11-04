import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

export default function sketch (p) {
  let variation = 'default';
  let canvasWidth = 600;
  let canvasHeight = 600;
  let translateCanvas_y = 0.45;
  let color_a = '#FFF200';
  let color_b ='#FF006E';
  let color_c ='#EA00FF';
  let color_d ='#00AEFF';
  let taco = {
    x: 0.35,
    y: 0.38,
    spacing: 70
  };
  let bell = {
    x: 0.1,
    y: 0.62,
    spacing: 72
  };
  let mini = false;
  var pre = { // p for Presets
    canvasWidth: 600,
    canvasHeight: 600,
    color_a: 57,
    color_b: 334,
    color_c: 295,
    color_d: 199,
    bellCircles: 6,
    fontSize: 100,
    logoWidth: 400,
    logoHeight: 400,
    strokeWidth: 7,
    bgcolor: {
      h: 0,
      s: 0,
      l: 10
    }
  }

  var akzidenz;
  p.preload = function() {
    akzidenz = p.loadFont('./fonts/akzidenz.ttf');
  }

  p.setup = function () {

  p.createCanvas(pre.canvasWidth, pre.canvasHeight);
  //p.setAttributes('antialias', true);

};

  p.myCustomRedrawAccordingToNewPropsHandler = function (props) {
    if (props.variation === 'mini'){
      variation = 'mini';
      canvasWidth = 230;
      canvasHeight = 230;
      translateCanvas_y = 0.73;
      mini = true;
    } else if (props.variation === 'wide') {
      variation = 'wide';
      canvasWidth = 1200;
      canvasHeight = 400;
      translateCanvas_y = 0.6;
      taco.x = 1.05;
      taco.y = -0.05;
      bell.x = -0.5;
      bell.y = -0.05;
    } else {
      variation = 'default';
      canvasWidth = 600;
      canvasHeight = 600;
      translateCanvas_y = 0.45;
      taco = {
        x: 0.35,
        y: 0.38,
        spacing: 70
      };
      bell = {
        x: 0.1,
        y: 0.62,
        spacing: 63
      };
    }
    if (props.colora) {
    color_a = props.colora;
    color_b = props.colorb;
    color_c = props.colorc;
    color_d = props.colord;
  }

  };

  p.drawText = function( message,  fontXPos,  fontYPos,  charSpacing){
    for (var i = 0; i < message.length; i++) {
      var spacing = charSpacing;
      if(message.charAt(i) == 'T') {
       spacing = charSpacing * 0.7;
      } else if(message.charAt(i) == 'A') {
      spacing = charSpacing * 0.9;
      } else if(message.charAt(i) == 'E') {
      spacing = charSpacing * 0.88;
      } else if(message.charAt(i) == 'L') {
      spacing = charSpacing * 0.8;
      } else {
       spacing = charSpacing;
      }
      p.text(message.charAt(i),fontXPos,fontYPos);
      fontXPos += spacing;
    }
  }

  p.draw = function () {

    //p.resizeCanvas(pre.canvasWidth, pre.canvasHeight);

    p.angleMode(p.DEGREES);
    p.translate(p.width/2, p.height*translateCanvas_y);

    p.ellipseMode(p.CENTER);
    p.background(pre.bgcolor.h, pre.bgcolor.s, pre.bgcolor.l);

    p.push();

      p.rotate(-27);


    p.noStroke();
    p.fill(color_b);
    p.ellipse(0, -pre.logoHeight*0.4, pre.logoHeight*0.07, pre.logoHeight*0.07);


    p.angleMode(p.RADIANS);
    var radius=pre.logoWidth*0.4;
    var numPoints=500;
    var angle=1.3*p.PI/numPoints;
    p.push();
    p.translate(pre.logoWidth * 0.01, -pre.logoHeight*0.11);
    p.rotate(p.TWO_PI / 15);
    p.strokeWeight(pre.strokeWidth);
    for(var i=0;i<numPoints;i++)
    {
      var inter = p.map(i, numPoints - radius, numPoints + radius, 0.3, 0.7);
      (i > numPoints / 3) ? p.stroke(color_a) : p.stroke(color_b);
      p.point(radius*p.sin(angle*i),(radius*p.cos(angle*i))*0.4);
    }
    p.pop();

    p.noFill();
    p.stroke(color_c);
    p.strokeWeight(pre.strokeWidth);

    p.fill(pre.bgcolor.h, pre.bgcolor.s, pre.bgcolor.l);

    for(var i = 0; i < pre.bellCircles; i++){
        p.ellipse(0, -pre.logoHeight*0.26 + i * (pre.logoHeight*0.3 / pre.bellCircles), pre.logoWidth*(0.3 + i * (pre.logoWidth*0.00005)) - (i == 0 ? pre.logoWidth*0.05 : 0) + (i == pre.bellCircles - 1 ? pre.logoWidth*0.05 : 0), pre.logoHeight*0.12);
        p.beginShape();
        p.endShape();
    }



    var angle=0.7*p.PI/numPoints;
    p.push();
    p.translate(pre.logoWidth * 0.01, -pre.logoHeight*0.11);
    p.rotate(p.TWO_PI / 15);
    for(var i=0;i<numPoints;i++)
    {
      var inter = p.map(i, numPoints - radius, numPoints + radius, 0.3, 0.7);
      p.stroke(color_d);
      p.point(-radius*p.sin(angle*i),(radius*p.cos(angle*i))*0.4);
    }
    p.pop();

    p.noStroke();
    p.fill(color_a);
    p.ellipse(0, pre.logoHeight*0.05, pre.logoHeight*0.10, pre.logoHeight*0.10);

    p.pop();

    p.push();
    p.scale(1, 0.8);
    p.textFont(akzidenz);
    p.textAlign(p.CENTER);
    p.textSize(42);
    p.fill(pre.bgcolor.h, pre.bgcolor.s, pre.bgcolor.l);
    p.text('T', -pre.logoWidth*0.012, pre.logoHeight*0.02, pre.logoHeight*0.1, pre.logoHeight*0.1)
    p.pop();

    p.textFont(akzidenz);
    p.fill('#fff');
    p.textSize(pre.fontSize);
    p.push();
    p.scale(1, 0.8);

    p.textAlign(p.CENTER);

    p.drawText('TACO', 0-pre.logoWidth*taco.x, pre.logoHeight*taco.y,  taco.spacing);
    p.drawText('BELL', 0-pre.logoWidth*bell.x, pre.logoHeight*bell.y,  bell.spacing);
    p.pop();
  };

  p.windowResized = function () {
    p.resizeCanvas(canvasWidth, canvasHeight);
  };
};
