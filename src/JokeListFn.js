import React, { useState, useEffect } from "react";
import axios from "axios";
import JokeFn from "./JokeFn";
import "./JokeList.css";

const JokeListFn = ({ numJokesToGet = 5 }) => {
  const [jokes, setJokes] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(
    function () {
      async function getJokes() {
        let j = [...jokes];
        let seenJokes = new Set();
        try {
          while (j.length < numJokesToGet) {
            let res = await axios.get("https://icanhazdadjoke.com", {
              headers: { Accept: "application/json" },
            });
            let { ...jokeObj } = res.data;

            if (!seenJokes.has(jokeObj.id)) {
              seenJokes.add(jokeObj.id);
              j.push({ ...jokeObj, votes: 0 });
            } else {
              console.error("duplicate found!");
            }
          }
          setJokes(j);
          setIsLoading(false);
        } catch (err) {
          console.error(err);
        }
      }

      if (jokes.length === 0) getJokes();
    },
    [jokes]
  );

  const generateNewJokes = () => {
    setIsLoading({ isLoading: true });
    setJokes([]);
  };

  const vote = (id, delta) => {
    setJokes((prevJokes) =>
      prevJokes.map((joke) =>
        joke.id === id ? { ...joke, votes: joke.votes + delta } : joke
      )
    );
  };
  const reset = (id) => {
    setJokes((prevJokes) =>
      prevJokes.map((joke) => (joke.id === id ? { ...joke, votes: 0 } : joke))
    );
  };
  if (isLoading) {
    return (
      <div className="loading">
        <i className="fas fa-4x fa-spinner fa-spin" />
      </div>
    );
  }
  let sortedJokes = [...jokes].sort((a, b) => b.votes - a.votes);
  return (
    <div className="JokeList">
      <button className="JokeList-getmore" onClick={generateNewJokes}>
        Get New Jokes
      </button>

      {sortedJokes.map(({ joke, id, votes }) => (
        <JokeFn
          text={joke}
          key={id}
          id={id}
          votes={votes}
          vote={vote}
          reset={reset}
        />
      ))}
    </div>
  );
};

export default JokeListFn;
