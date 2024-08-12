import React from "react";
import {Card, Button, Modal} from "react-bootstrap";
import { dict, programmingQuestions, programmingAnswers } from './data.js';

class Subject extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedSubject: '', // Stores the value of the subject selected
      showModal: false, // Controls visibility of the modal
      allQuestions: [], // Stores all the Questions to the Selected Subject
      allAnswers: [], // Stores all the Answers to the Selected Subject
      isDone: false,  // Indicates if all questions have been reviewed
      question: "",  // Stores the current question
      answer: "",  // Stores the current answer
      showQuestion: false,  // Controls visibility of the question
      showAnswer: false,  // Controls visibility of the answer
      counter: programmingQuestions,  // Counter to track remaining questions
      // counter: this.state ? this.state.allQuestions.length : 0,  // Counter to track remaining questions
      showQandA: false, // Controls visibility of the question and answer
    };
  }

  selectSubject = (subject) => {
    console.log("subject selected: ", subject);
    
    this.setState({
      selectedSubject: subject,
      // allQuestions: data[`${subject}Questions`],
      // allAnswers: data[`${subject}Answers`],
      allQuestions: programmingQuestions,
      allAnswers: programmingAnswers,
      showModal: true, // Show the modal
    });

    // populate the modal with data matching the requested subject
  }

    // Method to get a random question and answer
    getRandomQandA = () => {
      this.setState({
        counter: this.state.counter - 1,  // Decrease the counter
        showAnswer: false,  // Hide the answer
      });
  
      // Check if all questions have been reviewed
      if (this.state.counter <= 0) {
        this.setState({
          showQuestion: false, // Stop showing the question
          isDone: true,  // Mark as done
        });
      } else {
        // Generate a random index for a question
        let questions = this.state.allQuestions;
        let idx = Math.floor(Math.random() * questions.length);
        this.setState({ showQuestion: true });

        // Ensure the question hasn't been shown before
        while (dict[idx]) {
          idx = Math.floor(Math.random() * questions.length);
        }
        dict[idx] = true;  // Mark this question as shown
  
        let answers = this.state.allAnswers;
        // Set the question and answer in the state
        this.setState({
          question: questions[idx],
          answer: answers[idx],
          showQandA: true,
        });
      }
    };

  // Method to show the modal
  showModal = () => {
    this.setState({ showModal: true });
  }

  // Method to hide the modal
  handleHideModal = () => {
    this.setState({ showModal: false });
  }

  // Method to show the answer
  showMeTheAnswer = () => {
    this.setState({ showAnswer: true });
  };
  
  render() {
    console.log('this.state.question: ', this.state.question)
    console.log('this.state.answer: ', this.state.answer)
    return (
      <>
        <Card style={{ width: "18rem" }} bg="info" border="primary" className='card'>
          <Card.Title className="cardTitle" >{this.props.subject}</Card.Title>
          <Card.Body>
            <Card.Text className="cardText" >
              Topics covered: {this.props.topicsCovered}
            </Card.Text>
            
            <Button
              size="lg"
              variant="primary"
              onClick={() => this.selectSubject(this.props.subject)}
            >
              Study this Subject
            </Button>
            
          </Card.Body>
        </Card>

            {this.state.showModal && (
              <>

              {/* Modal to display the question and answer */}
              <Modal className="modal" show={this.state.showModal} onHide={this.handleHideModal}>
                <Modal.Header closeButton>
                  {this.state.isDone ? (
                  // Display a message when all questions have been reviewed
                  "You have completed the review!"
                  ) : (
                  // Display a button to get a new review question
                  <Button variant="secondary" onClick={this.getRandomQandA}>
                    Get a new Review Question!
                  </Button>
                  )}
                </Modal.Header>

              {this.state.showQandA && (
                <>
                {/* Display the question */}
                <Modal.Body className="question" >{this.state.question}</Modal.Body>
                                
                {/* Button to show the answer */}
                <Button onClick={this.showMeTheAnswer}>
                  Show Me the Answer!
                </Button>

                {/* Display the answer if showAnswer is true */}
                {this.state.showAnswer && <Modal.Body className="answer" >{this.state.answer}</Modal.Body>}
                </>
              )}
                
              </Modal>
              </>
            )}
      </>
    );
  }
}

export default Subject;
