import React from "react";
import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import FAQItem from "./FAQItem";
import './Faq.css'


function FAQ() {
  const [faqs, setFaqs] = useState([
    {
      question: "What is a cryptic hunt?",
      answer:
        "A cryptic hunt is an online multiplayer event that involves players having to follow a trail of leads and clues to get to a question's answer. These answers aren't directly available on the internet, and each question generally takes a great deal of patience and mental prowess to solve.",
      open: false,
    },
    {
      question: "Do I need to  to participate in the cryptic hunt?",
      answer: "No, the cryptic hunt is completely free for everyone.",
      open: false,
    },
    {
      question: "Who can participate?",
      answer:
        "Everyone is welcome to participate, be it, students, professionals or aliens from a different planet!",
      open: false,
    },
    {
      question: "Where can I find updates?",
      answer:
        "We have an active Discord for communication. Join our discord server for updates",
      open: false,
    },
    {
      question: "How many members do we need in a team?",
      answer:
        "You can participate solo or in a team with at max 3 members.",
      open: false,
    },
    {
      question: "Do I need any previous experience?",
      answer:
        "Not at all! We’re a beginner friendly competition and our team is here to assist you through the way!",
      open: false,
    },
    
  ]);

  const toggleFAQ = (index) => {
    setFaqs(
      faqs.map((faq, i) => {
        if (i === index) {
          faq.open = !faq.open;
        } else {
          faq.open = false;
        }
        return faq;
      })
    );
  };

  return (
    <Container fluid className="sponsor-section" id="about">
      <Container>
        <h1 className="white"
          style={{
            fontSize: "2.5rem",
            fontWeight: "600",
            letterSpacing: "0.5rem",
            paddingBottom: "3rem",
            color:"white",
          }}
        >
         FREQUENTLY ASKED QUESTIONS
        </h1>
        <Row>
          <div className="gallery">
            <div className="faqs">
              {faqs.map((faq, index) => (
                <FAQItem
                  faq={faq}
                  index={index}
                  key={index}
                  toggleFAQ={toggleFAQ}
                />
              ))}
            </div>
          </div>
          <Col md={12} className="home-about-social">
            <h1
              style={{
                fontSize: "2.5rem",
                fontWeight: "600",
                letterSpacing: "0.5rem",
                paddingBottom: "1rem",
              }}
            ></h1>
              
                
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default FAQ;
