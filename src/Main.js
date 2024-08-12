import React from "react";
import Subject from "./Subject";
import { Container, Row } from "react-bootstrap";

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      allSubjects: {
        "Programming": "Python, JavaScript, Node.js, ES6, React, Bootstrap and more.",
        "Hardware and PC Modifications": "Core Components like the CPU, Motherboard, RAM, and GPU; and peripherals like monitors, keyboards and mice, printers and sound systems; as well as case modifications like liquid cooling.",
        "IT and Computer Networking": "Operating Systems, Network Concepts, and Security Threats and Vulnerabilities, and Scripting",
        "Cybersecurity": "Threats, Attacks, and Vulnerabilities, Security Tools and Technologies, Cryptography, Authentication and Authorization, Risk Management, Compliance and Governance and Incident Response Procedures",
        "Data Structures and Algorithms": "Arrays, Linked Lists, Stacks, Queues, Hash Tables, Trees, Graphs, Tries, Sorting Algorithms, Space and Time Complexity",
        "Databases": "Relational, Non-Relational, Database Design, Queries, NoSQL vs. SQL, Keys and Constraints",
        "Cloud": "Cloud Service Models, Cloud Deployment Models, Virtualization, Elasticity and Scalability, Identity and Access Management (IAM), Virtual Private Cloud (VPC), Load Balancing, Content Delivery Networks (CDNs), Cloud Migration",
        "Web 3": "Decentralization, Cryptocurrencies, Smart Contracts, Decentralized Finance, Decentralized Applications, Non-Fungible Tokens, Decentralized Autonomous Organizations, Interoperability, Privacy and Security, Scalability Solutions, Web 3 Browsers and Infrastructure, Tokenomics",
        "Blockchain": "Hash Functions, Public and Private Keys, Smart Contracts, Blockchain Types, Cryptocurrencies, Blockchain Use Cases and Applications",
        "Trigonometry": "Basic Definitions and Concepts, Trigonometric Functions, Right Triangle Trigonometry, Trigonometric Identities, Law of Sines and Law of Cosines, and Trigonometric Transformations",
        "Algebra": "Order of Operations, Linear Algebra, Polynomials, Quadratic Equations, Rational Expressions, Exponents and Radicals, Inequalities, Complex Numbers, Sequences and Series, and Logarithms",
        "Calculus": "Limits, Derivatives, Differential Equations, Integrals, and Improper Integrals",
        "Biology": "Cell Biology, Genetics, Evolution, Ecology, Physiology, Microbiology, Biochemistry, Developmental Biology, Behavioral Biology, Biotechnology, and Environmental Biology",
        "Chemistry": "Atomic Structure, Periodic Table, Chemical Bonding, Chemical Reactions, and Energy",
        "Physics": "Mechanics, Thermodynamics, Electromagnetism, Optics, Relativity, Nuclear Physics, Particle Physics, Astrophysics and Cosmology",
        "Engineering": "Unit Conversions, Civil Engineering, Mechanical Engineering, Electrical Engineering, Chemical Engineering, Computer Engineering, Aerospace Engineering, Industrial Engineering, Environmental Engineering, Biomedical Engineering, and Systems Engineering",
      },
    };
  }

  render() {
    return (
      <>
        <h1>Study With Me</h1>
        <p>
          A simple and easy "flashcard" style learning game created to study a range of STEM topics.
        </p>
        <Container fluid="md">
          <Row cols='auto' >
            {Object.entries(this.state.allSubjects).map(([key, value], idx) => (
                <Subject 
                  subject={key} 
                  topicsCovered={value} 
                  key={idx} 
                />
            ))}
          </Row>
        </Container>
      </>
    );
  }
}

export default Main;
