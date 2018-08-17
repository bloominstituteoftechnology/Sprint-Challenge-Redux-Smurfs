import React, {Component} from 'react'; 
import './App.css'; 

class Village extends Component {
    render(){
        return(
            <div>
                <ul>
                    {this.props.village.map(item =>{
                        return(
                            <li key={item.name}>
                            <p>{item.name}</p>
                            <p>{item.age}</p>
                            <p>{item.height}</p>
                            </li>
                        
                        )
                    })}
                </ul>
            </div>
        )
    }
}
export default Village; 