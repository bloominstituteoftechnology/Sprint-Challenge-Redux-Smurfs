import React, {Component} from 'react'; 
import './App.css'; 
 class Village extends Component {
    render(){
        return(
            <div>
                <ul>
                    {this.props.theSmurfs.map(item =>{
                        return(
                            <li key={item.name}>
                            <p>{item.name}{item.age}{item.height}</p>
                            </li>
                        
                        )
                    })}
                </ul>
            </div>
        )
    }
}
export default Village; 