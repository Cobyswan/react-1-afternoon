import React, { Component } from 'react';

class PalindromeComponent extends Component {
    constructor(){
        super();

        this.state = {
            userInput: '',
            palindrome: ''
        }
    }

    updateUserInput(val){
        this.setState({userInput: val})
    }

    checkPalindrome(input){
        console.log(input)
        console.log(Array.from(input).reverse().toString())
        let isPalindrome;
        if(input === Array.from(input).reverse().join('')){
            isPalindrome = 'true';
        }
        else{
            isPalindrome = 'false';
        }
        this.setState({palindrome: isPalindrome})
    }


     render(){
        let {userInput, palindrome} = this.state;
        return(
             <div className="puzzleBox filterStringPB">
                 <h4>Palindrome</h4>
                 <input onChange={(e) => this.updateUserInput(e.target.value)} className="inputLine" placeholder='Enter palindrome'></input>
                 <button onClick={(e) => this.checkPalindrome(userInput)} className="confirmationButton">Check</button>
                 <span className="resultsBox">Palindrome: {palindrome}</span>
             </div>
         )
     }
}
  
export default PalindromeComponent