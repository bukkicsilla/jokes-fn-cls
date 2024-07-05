import React from "react";
import "./Joke.css";

const JokeFn = ({ id, vote, votes, text }) => {
  return (
    <div className="Joke">
      <div className="Joke-votearea">
        <button onClick={(e) => vote(id, +1)}>+</button>
        <button onClick={(e) => vote(id, -1)}>-</button>
        {votes}
      </div>
      <div className="Joke-text">{text}</div>
    </div>
  );
};

export default JokeFn;
