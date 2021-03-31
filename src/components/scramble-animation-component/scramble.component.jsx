import React from "react";

class ScrambleAnimation extends React.Component {
  constructor({InitialText,RandomText,style}) {
      
  
    super();
    this.textInput = React.createRef();
    this.state = {
      styles:style,  
      initialText: InitialText,
      randomText: RandomText,
      Message: "",
      tempArr: [],
    };
  }

  //when data is set change the current text to initialText

  componentDidMount() {
   
    
        this.shuffleText();
      
    
  }

  //Push the characters to an array only if array is empty, assign  a count variable to each of the charcter
  //using for loop reduce these count
  //if a characters count becomes zero  , asign the initial text value and append it to the text else just assign a randomText char
  //after the loop is done set state
  //we have a do loop variable wich will check if any of the values in array is zero
  //if value is zero the loop becomes true and agin call the method(which has for loop)
  //repeat until all values is zero , thus loop==false


  shuffleText = () => {
    const { Message, tempArr, initialText, randomText } = this.state;

    if (tempArr.length <= 0) {
      this.pushToArray(randomText, Message, initialText);
    } else {
      this.generateShuffleText(randomText, initialText);
    }
  };
  //

  generateShuffleText = (randomText, initialText) => {
    var { tempArr } = this.state;
    var loop=false

    var text = "";
    for (var j = 0; j < tempArr.length; j++) {
      if (tempArr[j].count > 0) {
        loop=true  
        tempArr[j].count = tempArr[j].count - 1;
        text = text + randomText[Math.floor(Math.random() * randomText.length)];
      } else {
        text = text + initialText[j];
      }
    }
    this.setState({Message:text},()=>
    {
        if(loop==true)
        {
            console.log(this.state.Message)
            setTimeout(() => {
                this.generateShuffleText(randomText, initialText)
                
            }, 100);
            
        }
       

  
    })
  };




  //
  pushToArray = (randomText, Message, initialText) => {
      var arr=[]
    arr[0] = initialText[0];
    
    for (var i = 1; i < initialText.length; i++) {
      arr[i] = {
        count: Math.floor(Math.random() * 15),
        character: Message[i],
      };
    }
    this.setState({ tempArr: arr }, () => {
      this.generateShuffleText(randomText, initialText);
    });
  };

  render() {
    return <h1 style={this.state.styles}>{this.state.Message}</h1>;
  }
}
export default ScrambleAnimation;
