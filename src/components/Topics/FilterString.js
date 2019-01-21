import React, { Component } from 'react';

class FilterStringComponent extends Component{
    constructor(){
        super();

        this.state = {
            unfilteredArray: ['array', 'of', 'strings'],
            userInput: '',
            filteredArray: []
        }

    }

    updateUserInput(val) {
        this.setState({
          userInput: val
        })
      }

    filtered(userInput){
        var unfiltered = this.state.unfilteredArray
        var filtered = [];
        for(let i = 0; i < unfiltered.length; i++){
            if(unfiltered.includes(userInput)){
                filtered.push(unfiltered[i])
            }
        }
        this.setState({filteredArray: filtered})
    }


    render(){
        let {userInput, unfilteredArray, filteredArray} =  this.state;
        return(
            <div className="puzzleBox filterStringPB"> 
                <h4>Filter String</h4>
                <button onClick={(e) => this.filtered(userInput)} className="confirmationButton">Filter</button>
                <input onChange={(e) => this.updateUserInput(e.target.value)} className="inputLine"></input>
                <span className="puzzleText">Original: {JSON.stringify(unfilteredArray)}</span>
                <span className="resultsBox filterStringRB">Filtered: {JSON.stringify(filteredArray)}</span>
            </div>
        )
    }
}
  
export default FilterStringComponent