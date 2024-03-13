import React from "react";
import styled from "styled-components";

export const InfoContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 80px 150px;
  background: #f9f9f9;

  @media (max-width: 768px) {
    margin-top: 800px;
    padding: 20px;
  }
`;

export const Card = styled.div`
  background-color: #f2f2f3;
  border-radius: 10px;
  margin: 20px 5px;
  width: 40%;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  transition: all 0.3s ease-in-out;

  &:hover {
    transform: scale(1.05);
    background-color: #e4e6e7;
  }

  @media (max-width: 968px) {
    width: 100%;
    padding: 20px;
  }
`;

export const ImgContainer = styled.div`
  border-radius: 50%;
  overflow: hidden;
  width: 200px;
  height: 200px;
  align-self: center;
  border: 15px solid transparent;
  background-image: linear-gradient(
    #003174,
    #004ab3,
    #003174,
    #004ab3,
    #003174
  );
  background-clip: border-box;

  @media (max-width: 968px) {
    width: 150px;
    height: 150px;
  }
`;

export const Img = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
`;

export const TextWrapper = styled.div`
  padding: 20px;
  max-width: 100%;
`;

export const Heading = styled.h2`
  padding-top: 0;
  margin-bottom: 12px;
  font-size: 28px;
  line-height: 1.1;
  font-weight: 600;
  color: "#010606";

  @media screen and (max-width: 480px) {
    font-size: 22px;
  }
`;

export const TopLine = styled.p`
  color: #003174;
  font-size: 15px;
  line-height: 16px;
  font-weight: 700;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  margin-bottom: 16px;
`;

export const Subtitle = styled.p`
  max-width: 550px;
  margin-bottom: 35px;
  font-size: 15px;
  line-height: 25px;
  color: "#010606";
  white-space: pre-wrap;
`;
