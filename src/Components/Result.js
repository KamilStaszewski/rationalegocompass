import React, { Component } from 'react';
import {XYPlot, MarkSeries, XAxis, YAxis, VerticalGridLines, HorizontalGridLines, LabelSeries} from 'react-vis';
import 'react-vis/dist/style.css';
import { fadeIn } from 'react-animations';
import { StyleSheet, css } from 'aphrodite';
import {
    HashRouter,
    Route,
    Link,
    Switch,
    NavLink,
    } from 'react-router-dom';
import Quiz from './Quiz';

class Result extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         start: false
      }
    }

    startAgain = () => {
        this.setState({
            start: true
        })
    }
    
    
    render() {
        const {scoreEgo, scoreMind} = this.props
        const myData = [
            {x: scoreEgo, y: scoreMind, label: `Ego: ${scoreEgo} Reason: ${scoreMind}`, style: {fontSize: 25, fontFamily: 'Pontano Sans', fontWeight: 900}} 
        ];
        const margin = {
            top: 10,
            bottom: 10,
            left: 10,
            right: 10
          };

        const WIDTH = 500;
        const HEIGHT = 500;
        const qstyles = StyleSheet.create({
            fadeIn: {
              animationName: fadeIn,
              animationDuration: '1.5s'
            }})
    
      const startAgain = this.state.start
      return (
        <div className={css(qstyles.fadeIn)}>
            {startAgain ? (
                <Quiz />
            ) 
            :
            (
                <div>
                <XYPlot
                width={500}
                height={500}
                xDomain={[-100, 100]}
                yDomain={[-100, 100]}>
                <VerticalGridLines />
                <HorizontalGridLines />
                <XAxis top={(HEIGHT - margin.top) / 2} />
                <YAxis left={(WIDTH - margin.left - margin.right) / 2}/>
                <MarkSeries
                    className="mark-series-example"
                    sizeRange={[5, 20]}
                    color="yellow"
                    data={myData}
                     />
                <LabelSeries
                    animation
                    allowOffsetToBeReversed
                    data={myData}
                    marginTop={30}
                    color="white"
                    />
            </XYPlot>
            <div className="startAgain">
            <button onClick={this.startAgain} style={{marginLeft: 75}}>Spróbuj jeszcze raz</button>
            </div>
            </div>
            )
            }
        </div>
      )
    }
    
}

export default Result