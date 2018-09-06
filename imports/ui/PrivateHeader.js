import React from "react";
import { Accounts } from "meteor/accounts-base";
import PropTypes from "prop-types";

const PrivateHeader = props => {
  return (
    <div>
      <p>{props.title}</p>
      <button onClick={() => Accounts.logout()}> back to login </button>
    </div>
  );
};

PrivateHeader.propTypes = {
  title: PropTypes.string.isRequired
};

export default PrivateHeader;
