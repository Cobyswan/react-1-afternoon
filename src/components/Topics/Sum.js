import React, { Component } from 'react';

class SumComponent extends Component {
    constructor() {
        super();
        
        this.state = {
            number1: 0,
            number2: 0,
            sum: null
        }
    
    }

    updateNumber1(num){
        this.setState({number1: parseInt(num, 10)})
    }
    
    updateNumber2(num){
        this.setState({number2: parseInt(num, 10)})
    }

    addNumbers(num1, num2){
        if(isNaN(num1) || isNaN(num2)){
            this.setState({
                sum: 'Not a number'
            })
        }
        else{
            this.setState({sum: num1 + num2})
        }
    }



    render(){
        let {number1, number2} = this.state
        return(
            <div className="puzzleBox sumPB">
                <h4>Sum</h4>
                <input onChange={(e) => this.updateNumber1(e.target.value)} className="inputLine" placeholder='Enter number'></input>
                <input onChange={(e) => this.updateNumber2(e.target.value)} className="inputLine" placeholder='Enter number'></input>
                <button onClick={() => this.addNumbers(number1, number2)} className="confirmationButton">Check</button>
                <span  className="resultsBox">Sum: {this.state.sum}</span>
            </div>
        )
    }
}
  
export default SumComponent