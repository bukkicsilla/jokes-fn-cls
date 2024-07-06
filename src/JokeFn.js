import React from "react";
import "./Joke.css";

const JokeFn = ({ id, vote, reset, votes, text }) => {
  return (
    <div className="Joke">
      <div className="Joke-votearea">
        <button onClick={(e) => vote(id, +1)}>
          <i className="fas fa-thumbs-up" />
        </button>
        <button onClick={(e) => vote(id, -1)}>
          <i className="fas fa-thumbs-down" />
        </button>
        <button onClick={(e) => reset(id)}>
          <i className="fas fa-meh" />
        </button>
        {votes}
      </div>
      <div className="Joke-text">{text}</div>
    </div>
  );
};

export default JokeFn;
