import React from "react";
import Button from "react-bootstrap/Button";
import { dict, questions, answers } from "./data";

class QuestionAnswer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      question: "",
      answer: "",
      showQuestion: false,
      showAnswer: false,
      isDone: false,
      counter: questions.length,
    };
  }

  getRandomQandA = () => {
    this.setState({
      counter: this.state.counter - 1,
      showAnswer: false,
    });
    if (this.state.counter <= 0) {
      this.setState({
        showQuestion: false,
        isDone: true,
      });
    } else {
      let idx = Math.floor(Math.random() * questions.length);
      this.setState({ showQuestion: true });
      while (dict[idx]) {
        idx = Math.floor(Math.random() * questions.length);
      }
      dict[idx] = true;
      this.setState({
        question: questions[idx],
        answer: answers[idx],
      });
    }
  };

  showMeTheAnswer = () => {
    this.setState({ showAnswer: true });
  };

  render() {
    return (
      <>
        {this.state.isDone ? (
          "You have completed the review!"
        ) : (
          <Button variant="secondary" onClick={this.getRandomQandA}>
            Gimme a Review Question!
          </Button>
        )}
        {this.state.showQuestion && (
          <>
            <p>{this.state.question}</p>
            <Button onClick={this.showMeTheAnswer}>Show Me the Answer!</Button>
            {this.state.showAnswer && <p>{this.state.answer}</p>}
          </>
        )}
      </>
    );
  }
}

export default QuestionAnswer;
