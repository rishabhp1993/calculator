import React, { PureComponent } from 'react'
import Display from './Display'
import Buttons from './Buttons'

export default class Calculator extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            previousValue: "",
            currentValue: "",

        }
        this.registerClick = this.registerClick.bind(this);
    }
    registerClick(input) {

        this.setState({ previousValue: this.state.previousValue + this.state.currentValue, currentValue: input });
        if (input === "=") {
            this.setState({
                currentValue: eval(this.state.previousValue + this.state.currentValue),
                previousValue: ""})

            }
            else if(input==="C")
            {
                this.setState(
                    {
                        currentValue:"",
                        previousValue:""
                    }
                )
            }
    }

        render() {
            return (
                <div>
                    <Display value={this.state.previousValue + this.state.currentValue}></Display>
                    <Buttons registerClickMethod={this.registerClick}></Buttons>
                </div>
            )
        }
    }
