import React from "react";
import { connect } from "react-redux";

import { deleteSmurf } from "../actions";

// const SmurfCard = props => {
//     return (
//         <section>
//             <div className="first-line">
//                 <img
//                     className="delX"
//                     src="./images/Red_x.png"
//                     alt="Delete"
//                 />
//                 <img
//                     className="editBtn"
//                     src="./images/pencil.png"
//                     alt="Edit"
//                 />
//                 <h2>{props.smurf.name}</h2>
//             </div>
//             <p><strong>Age:</strong> {props.smurf.age} smurf years</p>
//             <p><strong>Height:</strong> {props.smurf.height}</p>
//         </section>
//     );
// }

class SmurfCard extends React.Component {
    deleteHandler = () => {
        this.props.deleteSmurf(this.props.smurf.id);
    }

    render() {
        return (
            <section>
                <div className="first-line">
                    <img
                        className="delX"
                        src="./images/Red_x.png"
                        alt="Delete"
                        onClick={this.deleteHandler}
                    />
                    <img
                        className="editBtn"
                        src="./images/pencil.png"
                        alt="Edit"
                    />
                    <h2>{this.props.smurf.name}</h2>
                </div>
                <p><strong>Age:</strong> {this.props.smurf.age} smurf years</p>
                <p><strong>Height:</strong> {this.props.smurf.height}</p>
            </section>
        );
    }
}

export default connect(
    null,
    { deleteSmurf }
)(SmurfCard);