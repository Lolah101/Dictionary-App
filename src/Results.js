import React from "react";

import Meanings from "./Meanings";

export default function Results(props) {
  if (props.results) {
    return (
      <div className="Results">
        <h2>{props.results.word}</h2>
        <span className="phonetic">/{props.results.phonetic}/</span>
        {props.results && props.results.meanings ? (
          props.results.meanings.map(function (meaning, index) {
            return <div key={index}>
              <Meanings meaning={meaning}/>
            </div>;
          })
        ) : (
          <div>Loading...</div>
        )}
      </div>
    );
  } else {
    return null;
  }
}
