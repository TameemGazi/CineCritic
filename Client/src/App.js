import React, { useState, useEffect, useRef } from 'react';
import './App.css';

function App() {
  const [showReviewForm, setShowReviewForm] = useState(false);
  const [earnedAIA, setEarnedAIA] = useState(() => {
    const storedEarnedAIA = localStorage.getItem('earnedAIA');
    return parseInt(storedEarnedAIA) || 0;
  });
  const [reviews, setReviews] = useState(() => {
    const storedReviews = localStorage.getItem('reviews');
    return JSON.parse(storedReviews) || [];
  });
  const reviewsEndRef = useRef(null);

  useEffect(() => {
    localStorage.setItem('earnedAIA', earnedAIA);
  }, [earnedAIA]);

  useEffect(() => {
    localStorage.setItem('reviews', JSON.stringify(reviews));
  }, [reviews]);

  useEffect(() => {
    if (reviewsEndRef.current) {
      reviewsEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [reviews]);

  const submitReview = () => {
    setShowReviewForm(true);
  };

  const handleReviewSubmit = (e) => {
    e.preventDefault();
    const movieTitle = e.target.movieTitle.value;
    const rating = e.target.rating.value;
    const review = e.target.review.value;
    const newReview = { movieTitle, rating, review };
    setReviews([...reviews, newReview]);
    setEarnedAIA(earnedAIA + 10);
    setShowReviewForm(false);
    e.target.reset();
    alert(`Your review for "${movieTitle}" has been submitted and you earned tokens!`);
  };

  const handleWithdraw = () => {
    alert('Withdraw your earned AIA coins!');
  };

  const connectWallet = () => {
    alert('Wallet connected!');
  };

  return (
    <div className="App">
      <header>
        <h1>Movie Review Rewards</h1>
        <nav>
          <ul>
            <li><a href="#movies">Movies</a></li>
            <li><a href="#reviews">Reviews</a></li>
            <li><a href="#profile">Profile</a></li>
          </ul>
        </nav>
        <button className="connect-wallet-btn" onClick={connectWallet}>Connect Wallet</button>
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
      <section id="reviews">
        <h2>Your Reviews</h2>
        {reviews.map((review, index) => (
          <div className="movie-card" key={index}>
            <h3>{review.movieTitle}</h3>
            <p>Rating: {review.rating} ⭐</p>
            <p>{review.review}</p>
          </div>
        ))}
        <div ref={reviewsEndRef} />
      </section>
    </div>
  );
}

export default App;
