import "./LoadingPage.css";

const LoadingPage = () => {
  return (
    <div className="loading-container">
      <div className="loading-card">
        <div className="spinner-wrapper">
          <div className="spinner"></div>
        </div>

        <h1 className="loading-title">Loading...</h1>

        <p className="loading-text">
          Please wait while we prepare something amazing for you.
        </p>

        <div className="loading-dots">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </div>
  );
};

export default LoadingPage;
