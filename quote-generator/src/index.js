import React from 'react';
import ReactDOM from 'react-dom';

const quote = ['Lorem ipsum dolor sit amet',
'consectetur adipiscing elit.',
'Nam non neque at tortor varius eleifend sit amet ut sem.',
'Vivamus id venenatis justo, non commodo ante'
];

function Display (props){
return (
<div>
<div>
<p style={{color: props.color, backgroundColor: 'white'}}>{props.quote}</p>
</div>
</div>
);
}

class Buttons extends React.Component {
constructor(props){
super(props);
this.handleQuote = this.handleQuote.bind(this);
}

handleQuote(){
this.props.onClick();
}

render(){
return (
<button onClick={this.handleQuote}> New quote </button>
);
}
}

class App extends React.Component {
constructor(props){
super(props);
this.state = {
quote: "i'm a placeholder",
color: 'rgb(66, 209, 245)',
}
this.newQuote = this.newQuote.bind(this);
}

newQuote(){
this.setState({ quote: quote[2]})
}

render (){
return (
<div style={{backgroundColor: this.state.color}}>
<Display
quote={this.state.quote}
color={this.state.color}
/>
<Buttons onClick={this.newQuote}/>
</div>
);
}
}

ReactDOM.render(
<App />,
document.getElementById('root')
);