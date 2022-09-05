import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #37794a;
  position: relative;
`;

export const Map = styled.div`
  gap: 20px;
`;

export const East = styled.div`
  position: absolute;
  right: 40px;
  display: flex;
`;

export const West = styled.div`
  position: absolute;
  left: 40px;
  display: flex;
`;

export const North = styled.div`
  position: absolute;
  top: 20px;
`;

export const South = styled.div`
  position: absolute;
  bottom: 20px;
  background-color: gray;
`;
