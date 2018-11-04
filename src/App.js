import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import P5Wrapper from 'react-p5-wrapper';
import sketch from './Sketch.js';
import { RadioGroup, RadioButton } from 'react-radio-buttons';
import { Panel as ColorPickerPanel } from 'rc-color-picker';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      variation: 'default',
      color_a: '#FFF200',
      color_b: '#FF006E',
      color_c: '#EA00FF',
      color_d: '#00AEFF',
      bellCircles: 6,
      bgcolor: {
          h: 0,
          s: 0,
          l: 10
        }
      }

    this.onVariationChange = this.onVariationChange.bind(this);
    this.colorChangeA = this.colorChangeA.bind(this);
    this.colorChangeB = this.colorChangeB.bind(this);
    this.colorChangeC = this.colorChangeC.bind(this);
    this.colorChangeD = this.colorChangeD.bind(this);

  }

  colorChangeA(obj) {
    this.setState({
      color_a: obj.color
    });
    console.log(obj);
  }

  colorChangeB(obj) {
    this.setState({
      color_b: obj.color
    })
  }


  colorChangeC(obj) {
    this.setState({
      color_c: obj.color
    })
  }

  colorChangeD(obj) {
    this.setState({
      color_d: obj.color
    });
  }


  onVariationChange(value) {
    this.setState({
      variation: value,
    });
    var event = document.createEvent('HTMLEvents');
    event.initEvent('resize', true, false);
    window.dispatchEvent(event);
  }

  render() {
    return (
      <div className="App">
        <div className="App-settings">
          <RadioGroup onChange={ this.onVariationChange }>
            <RadioButton value="default">
              Default
            </RadioButton>
            <RadioButton value="wide">
              Wide
            </RadioButton>
            <RadioButton value="mini">
              Mini
            </RadioButton>
          </RadioGroup>

          <ColorPickerPanel enableAlpha={false} color={this.state.color_a} mode="HSB" onChange={this.colorChangeA} />
          <ColorPickerPanel enableAlpha={false} color={this.state.color_b} mode="HSB" onChange={this.colorChangeB} />
          <ColorPickerPanel enableAlpha={false} color={this.state.color_c} mode="HSB" onChange={this.colorChangeC} />
          <ColorPickerPanel enableAlpha={false} color={this.state.color_d} mode="HSB" onChange={this.colorChangeD} />

      </div>
        <div className="App-content">
          <P5Wrapper sketch={sketch} variation={this.state.variation} colora={this.state.color_a}  colorb={this.state.color_b} colorc={this.state.color_c} colord={this.state.color_d}/>
        </div>
      </div>
    );
  }
}

export default App;
