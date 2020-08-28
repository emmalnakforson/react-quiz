import React, { Component } from 'react';


// state data for 3 counters
const data = [
  { id: 1, value: 0 },
  { id: 2, value: 0 },
  { id: 3, value: 0 },
  //{ id: 4, value: 0 },
];

// Counter Component
class Counter extends Component {
  render() {

    const { value, increplus, decreplus  } = this.props;
    return (
      //<div>
        // function onIncrement(value){
           //data.includes(true)
      //value = {this.render} 
         //}
    //</div>
      <div className="counter">
        <b>{value}</b>
        <div className="counter-controls">
          <button tap = {decreplus} className="button is-danger is-small">-</button>
          <button tap = {increplus} className="button is-success is-small">+</button>
        </div>
      </div>
    );
  }
}


class App extends Component {
  constructor(props, context) {
    super(props, context);
    this.state= {
    //data (props, context);
    data: [{id:1, value: 0},
           {id: 2, value:0},
           {id:3, value:0},
           {id:4, value:0},
   ]

  }
}

onIncrement = (id) => {
  this.setState(previousState => ({ data: previousState.data.map(
    m => m.id === id? {id:m.id, value: m.value++}: m
  )}) )
//(counter,increment) => {
 // const createdValue = counter.value + increment;
  //this.setState(
   // {
    //  data: data.map (item => {item.value = item.id === counter.id?createdValue:
      //item.value;
   // return item;})
   // }
  //)
}
onDecrement = (id) => {
  this.setState(previousState => ({ data: previousState.data.map(
    m => m.id === id? {id:m.id, value: m.value--}: m
  )}) )
}

  render() {
    return (
      <div>
        {this.state.data.map((counter) => (
          <Counter //key={counter.id} value={counter.value} />
          increplus = {() => this.onIncrement(counter.id)}
          decreplus = {() => this.onDecrement(counter.id)}
          key = {counter.id} value = {counter.value}/>
          ))
        }

      </div>
    );
  }
}

export default App;
