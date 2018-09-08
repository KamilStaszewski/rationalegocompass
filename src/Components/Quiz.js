import React, { Component } from 'react';
import { connect } from 'react-redux';
import Result from './Result';
import { fadeIn } from 'react-animations';
import { StyleSheet, css } from 'aphrodite';

class Answers extends Component {
    constructor(props) {
        super(props)

        this.state = {
            index: 0,
            answers: {
                user: 'Marcin K',
                answers: {
                    question1: true,
                    question2: true,
                    question3: true,
                    question4: true,
                    question5: true,
                },
                weight: {
                    question1: 1,
                    question2: 1,
                    question3: 1,
                    question4: 1,
                    question5: 1,
                    question6: 1,
                    question7: 1,
                    question8: 1,
                    question9: 1,
                    question10: 1,
                },
                dateAnswerd: new Date().toLocaleDateString()
            },
            disableBtn: false,
            scoreEgo: 0,
            scoreMind: 0,
            styleNext: false
        }
    }

    onChange = (e) => {
        // tak samo jak przy handle yes z question, kopiowanie obiektu, obiekt ma byc nadpisywany i wygladac tak samo jak w state
        let inputValue = { [`question${this.state.index+1}`]: Number(e.target.value) }
        this.setState({
            answers: {
                user: this.state.answers.user,
                answers: this.state.answers.answers,
                weight: { ...this.state.answers.weight, ...inputValue },
                dateAnswerd: this.state.answers.dateAnswerd
                }
            })
        }

    handleNext = () => {
        this.setState({
            index: this.state.index + 1,
            disableBtn: false,
            styleNext: true
        })
        setTimeout(() => {
            this.setState({styleNext: false});
          }, 1000)
    }

    handleYes = () => {

        let qs = { [`question${this.state.index + 1}`]: true }
        // weight sie nie zapisuje gdy nie ruszy sie inputem, bo go jest tylko kopiowany, value z inputu nie jest w ogole pobierany

        this.setState({
            answers: {
                user: this.state.answers.user,
                answers: { ...this.state.answers.answers, ...qs },
                dateAnswerd: this.state.answers.dateAnswerd,
                weight: {...this.state.answers.weight},
            },
            disableBtn: true,
            scoreEgo: this.state.scoreEgo + this.props.questions[this.state.index].egoYes * this.state.answers.weight[`question${this.state.index + 1}`],
            scoreMind: this.state.scoreMind + this.props.questions[this.state.index].mindYes * this.state.answers.weight[`question${this.state.index + 1}`]
        }, () => {
            this.props.sendAnswers(this.state.answers)
        });
    }

    handleNo = () => {

        let qs = { [`question${this.state.index + 1}`]: false }

        this.setState({
            answers: {
                user: this.state.answers.name,
                answers: { ...this.state.answers.answers, ...qs },
                weight: {...this.state.answers.weight},
                dateAnswered: this.state.answers.dateAnswered
            },
            disableBtn: true,
            scoreEgo: this.state.scoreEgo + this.props.questions[this.state.index].egoNo * this.state.answers.weight[`question${this.state.index + 1}`],
            scoreMind: this.state.scoreMind + this.props.questions[this.state.index].mindNo * this.state.answers.weight[`question${this.state.index + 1}`]
        }, () => {
            this.props.sendAnswers(this.state.answers)
        });
    }

    render() {
        let scoreEgo = this.state.scoreEgo
        let scoreMind = this.state.scoreMind 
        const qstyles = StyleSheet.create({
            fadeIn: {
              animationName: fadeIn,
              animationDuration: '1.5s'
            }})
            let style;
            if (this.state.styleNext) {
              style = css(qstyles.fadeIn);
            }
        return (
            <div>
                {this.props.questions.length === this.state.index ?
                    <div className={css(styles.start)}>
                        <Result scoreEgo={scoreEgo} 
                                scoreMind={scoreMind}
                                />
                    </div>
                    :
                    <div>
                        <h1 className={css(styles.h1)}>Rational Ego Compass</h1>
                        <h2 className={css(styles.h2)}>{this.state.index+1}/{this.props.questions.length}</h2>
                        <h3 className={style}>{this.props.questions[this.state.index].question}</h3>
                        <div className={css(styles.buttons_container)}>
                            <button onClick={this.handleYes}
                                className={css(styles.answerBtn)}
                                disabled={this.state.disableBtn}>Zgadzam się</button>
                            <button onClick={this.handleNo}
                                className={css(styles.answerBtn)}
                            disabled={this.state.disableBtn}>Nie zgadzam się</button>
                        </div>
                        <div className={css(styles.compass)}>
                            <label for="volume" className="input-range">Jak istotna jest dla Ciebie ta kwestia?</label>
                            <input type="range"
                                name={`points${this.state.index + 1}`} 
                                min="0" 
                                max="3"
                                value={this.state.answers.weight[`question${this.state.index + 1}`]}
                                onChange={this.onChange} />
                        </div>
                        <div className="nextContainer">
                        <button onClick={this.handleNext}
                                    className="buttonNext">
                                    <span>Dalej </span>
                            </button>
                        </div>
                    </div>}
            </div>

        )
    }
}

const styles = StyleSheet.create({
    result: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: `100%`
    },
    h1: {
        fontFamily: `Pontano Sans, sans-serif`,
        textAlign: 'center',
        transitionDuration: `2s`,
        transition: `all 2s`,
        fontSize: 40,
        textTransform: 'uppercase', 
        paddingTop: 30
    },
    h2:{
        fontFamily: `Donegal One, sans-serif`,
        textAlign: 'center',
        padding: 30,
        paddingBottom: 0,
        fontSize: 20
    },
    buttons_container: {
        display: 'flex',
        justifyContent: 'center' 
    },
    answerBtn: {
        ':after': {
            content: "",
            background: '#94DBE0',
            display: 'block',
            position: 'absolute',
            paddingTop: `300%`,
            paddingLeft: `350%`,
            marginLeft: `-20px!important`,
            marginTop: `-120%`,
            opacity: 0,
            transition: `all 0.9s`
        },
        ':active:after': {
            padding: 0,
            margin: 0,
            opacity: 1,
            transition: '0s'
        }
    },
    compass: {
        display: 'flex',
        justifyContent: 'center',
        padding: 50
    }
  });


function getAnswers(data) {
    return {
        type: "SET ANSWERS",
        payload: data
    }
}



function mapDispatchToProps(dispatch) {
    return {
        sendAnswers: (data) => {
            dispatch(getAnswers(data))
        }

    }
}

function mapStateToProps(state) {
    return {
        questions: state.questions
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Answers);