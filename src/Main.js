import React from "react";
import Student from "./Student";
import QuestionAnswer from "./QuestionAnswer";
import { Container, Row } from "react-bootstrap";

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      allStudents: [
        "McCall",
        "Ian",
        "Layton",
        "Taytum",
        "Marissa",
        "Mason",
        "Daniel",
      ],
    };
  }

  render() {
    return (
      <>
        <h1>Extra Credit Game Show</h1>
        <p>
          This is the exam-review game show where YOU get a chance to win Extra Credit Points!
        </p>
        <QuestionAnswer />
        <Container fluid="md">
          <Row cols='auto' >
              {this.state.allStudents.map((student, idx) => (
                <Student student={student} key={idx} />
              ))}
          </Row>
        </Container>
      </>
    );
  }
}

export default Main;
