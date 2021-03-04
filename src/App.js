import { Component } from "react";
import Section from "./components/Section/Section";
import FeedbackOptions from "./components/FeedbackOptions/FeedbackOptions";
import { FEEDBACK_OPTIONS } from "./components/data/constans";
import Statistics from "./components/Statistics/Statistics";

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleFeedback = ({ target }) => {
    const { feedback } = target.dataset;
    this.setState((prevState) => ({ [feedback]: prevState[feedback] + 1 }));
  };

  countTotalFeedbacks = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositivePercantage = () => {
    const { good } = this.state;
    const total = this.countTotalFeedbacks();
    return total ? Math.round((good / total) * 100) : 0;
  };

  render() {
    // console.log(this.state);
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedbacks();
    const positivePercantage = this.countPositivePercantage();
    return (
      <>
        <Section title="Please leavefeedback">
          <FeedbackOptions
            options={FEEDBACK_OPTIONS}
            onLeaveFeedback={this.handleFeedback}
          />
        </Section>

        <Section title="Statistics">
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercantage={positivePercantage}
          />
        </Section>
      </>
    );
  }
}

export default App;
