import React, { useState } from 'react';
import './App.css';

function App() {
  const [showReviewForm, setShowReviewForm] = useState(false);
  const [earnedAIA, setEarnedAIA] = useState(0);

  const submitReview = () => {
    setShowReviewForm(true);
  };

  const handleReviewSubmit = (e) => {
    e.preventDefault();
    const movieTitle = e.target.movieTitle.value;
    const rating = e.target.rating.value;
    const review = e.target.review.value;

    // Simulate sending the review to the blockchain and earning tokens
    alert(`Your review for "${movieTitle}" has been submitted and you earned tokens!`);

    // Simulate earning tokens
    setEarnedAIA(earnedAIA + 10);

    // Hide the form
    setShowReviewForm(false);

    // Reset form
    e.target.reset();
  };

  const handleWithdraw = () => {
    alert('Withdraw your earned AIA coins!');
    // Simulate withdraw logic
  };

  return (
    <div className="App">
      <header>
        <h1>🎬 Movie Review Rewards</h1>
        <nav>
          <ul>
            <li><a href="#movies">Movies</a></li>
            <li><a href="#reviews">Reviews</a></li>
            <li><a href="#profile">Profile</a></li>
          </ul>
        </nav>
      </header>

      <section id="movies">
        <h2>Top Movies</h2>
        <div className="movie-card">
          <h3>Movie Title</h3>
          <p>Genre: Action</p>
          <p>Release Date: 2024-10-20</p>
          <p>Rating: ⭐⭐⭐⭐⭐</p>
          <p>Synopsis: A thrilling action-packed movie...</p>
          <button onClick={submitReview}>Submit Review</button>
        </div>
      </section>

      {showReviewForm && (
        <section id="review-form">
          <h2>Submit Your Review</h2>
          <form onSubmit={handleReviewSubmit}>
            <label htmlFor="movieTitle">Movie Title:</label>
            <input type="text" id="movieTitle" name="movieTitle" required /><br />
            <label htmlFor="rating">Rating:</label>
            <input type="number" id="rating" name="rating" min="1" max="5" required /><br />
            <label htmlFor="review">Your Review:</label>
            <textarea id="review" name="review" required></textarea><br />
            <button type="submit">Submit & Earn Tokens</button>
          </form>
        </section>
      )}

      <section id="rewards">
        <h2>Your Rewards</h2>
        <p>You have earned: <strong>{earnedAIA} AIA coins</strong></p>
        {earnedAIA > 0 && <button onClick={handleWithdraw}>Withdraw AIA</button>}
      </section>
    </div>
  );
}

export default App;
