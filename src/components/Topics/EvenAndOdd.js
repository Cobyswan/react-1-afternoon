import React, { Component } from 'react';

class EvenAndOddComponent extends Component {
    constructor(props){
        super();
        
        this.state = {
            evenArray: [],
            oddArray: [],
            userInput: ''
        }
    }

    updateUserInput(val) {
        this.setState({
          userInput: val
        })
      }

    splitStrings(userInput){
        var arr = userInput.split(',');
        var evens = [];
        var odds = [];
        for(let i = 0; i < arr.length; i++){
            if(arr[i] % 2 === 0){
                evens.push(parseInt(arr[i], 10))
            }
            else{
                odds.push(parseInt(arr[i], 10))
            }
        }
        this.setState({evenArray: evens, oddArray: odds})
    }
    
    render() {
        const { evenArray, oddArray, userInput } = this.state
        return (
        <div className="puzzleBox evenAndOddPB">
            <h4>Evens and Odds</h4>
            <input placeholder='Enter numbers seperated by ","' onChange={(e) => this.updateUserInput(e.target.value)} className="inputLine"></input>
            <button onClick={(e) => this.splitStrings(userInput)} className="confirmationButton">Split</button>
            <span className="resultsBox">Evens: {JSON.stringify(evenArray)}</span>
            <span className="resultsBox">Odds: {JSON.stringify(oddArray)}</span>
        </div>
        )
    }
}
  
export default EvenAndOddComponent
  


