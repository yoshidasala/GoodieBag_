import React, { Component } from "react";
import candies, { fetchCandies } from "../reducers/candies";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class Candies extends Component {
  componentDidMount() {
    this.props.fetchAll();
  }

  render() {
    console.log(this.props.candies);
    return (
      <div className = 'candylist'>
        {this.props.candies.map((candy) => (
          <Link to={`/candies/${candy.id}`} key={candy.id}>
            <div className='candy row'>
              <img className='image' src={candy.imageURL} />
              <p>{candy.name}</p>
            </div>
          </Link>
        ))}
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    candies: state.candies,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchAll: () => dispatch(fetchCandies()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Candies);
