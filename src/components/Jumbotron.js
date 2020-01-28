import React from "react";
import { Jumbotron as Jumbo, Container } from "react-bootstrap";
import styled from "styled-components";
import Allee from "../assets/AlleeView.jpg";

const JumboTron = () => {
  const Styles = styled.div`
    .jumbo {
      background: url(${Allee}) no-repeat;
      background-size: cover;
      color: #000;
      height: 300px;
      z-index: -2;
    }
    // .overlay {
    //   color: red;
    //   background-color: #000;
    // }
  `;

  return (
    <Styles>
      <Jumbo fluid className="jumbo">
        <div className="overlay">
          <Container>
            <h2>Learn from the best...</h2>
            <p>
              Jennifer (Laura Prepon, Orange is the New Black) is turning 30 and
              her best friend Stan is throwing her a party. But she is in no
              mood to celebrate. She just left her job, as well
            </p>
          </Container>
        </div>
      </Jumbo>
    </Styles>
  );
};

export default JumboTron;
