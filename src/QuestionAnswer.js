import React from "react";
import { Button, Modal } from "react-bootstrap";
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
      showModal: false,
    };
  }

  getRandomQandA = () => {
    this.setState({
      counter: this.state.counter - 1,
      showAnswer: false,
      showModal: true,
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

  handleHideModal = () => {
    this.setState({ showModal: false });
  }

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
            <Modal className="modal" show={this.state.showModal} onHide={this.handleHideModal}>
              <Modal.Header closeButton>
              </Modal.Header>
              <Modal.Body className="question" >{this.state.question}</Modal.Body>
              {this.state.showAnswer && <Modal.Body className="answer" >{this.state.answer}</Modal.Body>}
              <Button onClick={this.showMeTheAnswer}>
                Show Me the Answer!
              </Button>
            </Modal>
          </>
        )}
      </>
    );
  }
}

export default QuestionAnswer;
