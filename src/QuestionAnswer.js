// import React from "react";
// import { Button, Modal } from "react-bootstrap";
// import { dict, questions, answers } from "./data";

// class QuestionAnswer extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       question: "",  // Stores the current question
//       answer: "",  // Stores the current answer
//       showQuestion: false,  // Controls visibility of the question
//       showAnswer: false,  // Controls visibility of the answer
//       isDone: false,  // Indicates if all questions have been reviewed
//       counter: questions.length,  // Counter to track remaining questions
//       showModal: false,  // Controls visibility of the modal
//     };
//   }



//   // Method to show the answer
//   showMeTheAnswer = () => {
//     this.setState({ showAnswer: true });
//   };

//   // Method to hide the modal
//   handleHideModal = () => {
//     this.setState({ showModal: false });
//   }

//   // Render method to display the component
//   render() {
//     return (
//       <>
        
//         {this.state.showQuestion && (
//           <>
//             {/* Modal to display the question and answer */}
//             <Modal className="modal" show={this.state.showModal} onHide={this.handleHideModal}>
//               <Modal.Header closeButton>
//               </Modal.Header>
//               {/* Display the question */}
//               <Modal.Body className="question" >{this.state.question}</Modal.Body>
//               {/* Display the answer if showAnswer is true */}
//               {this.state.showAnswer && <Modal.Body className="answer" >{this.state.answer}</Modal.Body>}
//               {/* Button to show the answer */}
//               <Button onClick={this.showMeTheAnswer}>
//                 Show Me the Answer!
//               </Button>
//             </Modal>
//           </>
//         )}
//       </>
//     );
//   }
// }

// export default QuestionAnswer;
