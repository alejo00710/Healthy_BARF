import React from 'react';
import styles from '../../styles/home/Feedback.module.css';

const Feedback = () => {
  return (
    <section className={styles.feedback}>
      <div className="container">
        <p>Esta opinión resultó útil a 232 personas, ¿Te resultó útil a ti?</p>
        <div className={styles.feedbackButtons}>
          <button className={styles.btnFeedback}>Sí</button>
          <button className={`${styles.btnFeedback} ${styles.no}`}>No</button>
        </div>
      </div>
    </section>
  );
};

export default Feedback;