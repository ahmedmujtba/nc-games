import { useState } from "react";
import { useParams } from "react-router-dom";
import { patchVotes } from "../utils/api";

export default function Votes({ singleReview, setSingleReview }) {
  const { review_id } = useParams();
  const [voteCount, setVoteCount] = useState(singleReview.review.votes);
  console.log(singleReview);
  const [votedUp, setVotedUp] = useState(false);
  const [votedDown, setVotedDown] = useState(false);
  const [isError, setIsError] = useState(false);
  const upVote = { inc_votes: 1 };
  const downVote = { inc_votes: -1 };
  const handleAddVote = () => {
    setIsError(false);
    setVotedUp(true);
    setVotedDown(false);
    setVoteCount(voteCount + 1);
    patchVotes(review_id, upVote).catch(() => {
      setIsError(true);
    });
  };
  const handleDeleteVote = () => {
    setIsError(false);
    setVotedDown(true);
    setVotedUp(false);
    setVoteCount(voteCount - 1);
    patchVotes(review_id, downVote).catch(() => {
      setIsError(true);
    });
  };
  return (
    <section className="votes">
      <p className="votes-total">Votes: {voteCount}</p>
      <button className="upvote-button" onClick={handleAddVote}>
        Add Vote
      </button>
      <button className="downvote-button" onClick={handleDeleteVote}>
        Delete Vote
      </button>
      <br></br>
      {isError && <p>Oops your vote didn't add</p>}
    </section>
  );
}
