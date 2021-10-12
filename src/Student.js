import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

class Student extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      correctAnswerCounter: 0,
      extraCreditCounter: 0,
    };
  }

  tallyCorrectAnswer = () => {
    this.setState({
      correctAnswerCounter: this.state.correctAnswerCounter + 1,
    })

    if (this.state.correctAnswerCounter === 3){
      this.setState({
        extraCreditCounter: this.state.extraCreditCounter + 1,
        correctAnswerCounter: 0
      })
    }
  }

  render() {
    return (
      <>
        <Card style={{ width: "20rem" }} bg="info" border="primary" className='card'>
          <Card.Title className="cardTitle" >Keep Track of Your Points!</Card.Title>
          <Button size="lg" variant="primary" onClick={this.tallyCorrectAnswer}>{this.props.student}</Button>
          <Card.Body>
            <Card.Text className="cardText" >
              Review Q's Answered Correctly: {this.state.correctAnswerCounter}
            </Card.Text>
            <Card.Text className="cardText" >
              Extra Credit Points Earned: {this.state.extraCreditCounter}
            </Card.Text>
          </Card.Body>
        </Card>
      </>
    );
  }
}

export default Student;
