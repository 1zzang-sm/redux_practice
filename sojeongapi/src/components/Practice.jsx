import React from "react";
import { connect } from "react-redux";

function Practice({ abc }) {
  return <div>연습용{abc}</div>;
}
const mapStateToProps = ({ count }) => {
  return {
    abc: count,
  };
};

export default connect(mapStateToProps)(Practice);
