import React, {Component} from 'react';


export default class Get extends Component{
  constructor(props){
    super(props);
    this.getSmurfs = this.getSmurfs.bind(this);
  }
  componentDidMount(){
    this.props.smurfs.getSmurfs();
  }
  getSmurfs(){
    this.props.smurfs.getSmurfs();
  }
  render(){
    let smurfs = this.props.smurfs.info.smurfs
    return (
     <div>
     <button onClick={this.getSmurfs}>get smurfs</button>
      {
        this.props.smurfs.info.smurfs.map( (e,i)=>{
          return(
            <div key={i}>
              <p>{e.name}</p>
              <p>{e.age}</p>
              <p>{e.height}</p>
            </div>
          );
        })
      }
    </div>
    );
  }
}
