import "./OfflinePage.css";

const OfflinePage = () => {
  return (
    <div className="offline-container">
      <div className="offline-card">
        <div className="icon-wrapper">
          <div className="offline-icon">📡</div>
        </div>

        <h1 className="offline-title">You Are Offline</h1>

        <p className="offline-message">
          Please check your internet connection and try again.
        </p>

        <button className="retry-btn" onClick={() => window.location.reload()}>
          Retry Connection
        </button>

        <p className="offline-status">Waiting for network connection...</p>
      </div>
    </div>
  );
};

export default OfflinePage;
