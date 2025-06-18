import { useState } from "react";
import { useQuestionContext } from "../context/QuestionContext/useQuestion";
import { logAnswers } from "../utils/utils";
import styles from "../assets/styles/styles.module.css";

export const Home = () => {
  const context = useQuestionContext();
  const user = context?.user;
  const questions = context?.questions;

  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);

  if (!user || !questions) return null;

  function handleAnswer(answer: "yes" | "no") {
    const newAnswers = [...answers, answer];
    setAnswers(newAnswers);
    setCurrent(current + 1);

    if (newAnswers.length === questions?.length) {
      logAnswers(questions, newAnswers);
    }
  }

  return (
    <>
      <header className={styles.header}>
        <div className={styles.headerContent}>
          <img src={"/images/logo.png"} alt="Medexpress Logo" className={styles.logo} />

          <h1>Consultation Service</h1>
          <p>
            Welcome, {user.firstName} {user.lastName}
          </p>
        </div>
      </header>

      <main className={styles.main}>
        {current < questions.length ? (
          <div className={styles.questionCard}>
            <h2>
              Question {current + 1} of {questions.length}
            </h2>
            <p>{questions[current].question}</p>
            <div className={styles.buttonGroup}>
              <button
                className={styles.button}
                onClick={() => handleAnswer("yes")}
              >
                Yes
              </button>
              <button
                className={styles.button}
                onClick={() => handleAnswer("no")}
              >
                No
              </button>
            </div>
          </div>
        ) : (
          <div className={styles.questionCard}>
            <h2>Thank you!</h2>
            <p>
              Your answers have been recorded and will be reviewed by a doctor.
            </p>
          </div>
        )}
      </main>

      <footer className={styles.footer}>
        <div className={styles.footerContent}>
          <div>
            <h3>Contact Us</h3>
            <p>Email: medexpress.support.com</p>
            <p>Phone: (555) 123-4567</p>
          </div>
          <div>
            <h3>Legal</h3>
            <p>Consultation Service</p>
            <p>Privacy Policy | Terms of Service</p>
          </div>
        </div>
      </footer>
    </>
  );
};