import React, { Component } from 'react';

class FilterObjectComponent extends Component {
    constructor(){
        super();

        this.state = {
            unfilteredArray: [{name: 'Coby', age: 24}, {name: 'Jake', relation: 'Cousin'}, {name: 'Lysette', gender: 'Female'}],
            userInput: '',
            filteredArray: []
        }
    }

    updateUserInput(val) {
        this.setState({
          userInput: val
        })
      }

    filter(input){
        var people = this.state.unfilteredArray;
        let filtered = []

        for(let i = 0; i < people.length; i++){
            if(people[i].hasOwnProperty(input)){
                filtered.push(people[i])
            }
        }
        this.setState({filteredArray: filtered})
    }


    render(){
        let {userInput, unfilteredArray, filteredArray} = this.state
        return(
          <div  className="puzzleBox filterObjectPB">
              <h4>Filter Object</h4>
              <button onClick={(e) => this.filter(userInput)} className="confirmationButton">Filter</button>
              <input onChange={(e) => this.updateUserInput(e.target.value)} className="inputLine"></input>
              <span className="puzzleText">Original: {JSON.stringify(unfilteredArray)}</span>
              <span className="resultsBox filterObjectRB">Filtered: {JSON.stringify(filteredArray)}</span>
          </div>  
        )
    }
}
  
export default FilterObjectComponent