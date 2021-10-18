import { connect } from "react-redux";
import React, { Component } from "react";
import { fetchSingleCandy } from "../reducers/singleCandy";

class SingleCandy extends React.Component {
  async componentDidMount() {
    await this.props.loadSingleCandy(this.props.match.params.candyId);
  }
  render() {
    return (
      <div className='singlecandy'>
        <div className = "candycontainer"><div>
          {" "}
          <img className='image' src={this.props.singlecandy.imageURL} />
        </div>
        <h3> CANDY: {this.props.singlecandy.name}</h3>
        <h3> DESCRIPTION: {this.props.singlecandy.description}</h3>
        <h3> QUANTITY: {this.props.singlecandy.quantity}</h3></div>

        <div>
          {" "}
          <button>ADD CANDY</button>
        </div>

        <br></br>
        <div>
          {" "}
          <button> REMOVE CANDY</button>
        </div>
      </div>
    );
  }
}

const mapStateToprops = (state) => {
  return { singlecandy: state.singleCandy };
};

const mapDispatchToProps = (dispatch) => {
  return { loadSingleCandy: (candyId) => dispatch(fetchSingleCandy(candyId)) };
};

export default connect(mapStateToprops, mapDispatchToProps)(SingleCandy);
