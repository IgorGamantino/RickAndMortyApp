import styled from "styled-components/native"


export const Container = styled.View`
  width: 327px;
  flex-direction: row;
  border-radius: 20px;
  min-height: 114px;
  height:"100%";
  background-color: #F5FAF7;
  margin-bottom: 10px;
`;

export const Image = styled.Image`
  width: 114px;
  height: 114px;

  border-top-left-radius: 20px;
  border-bottom-left-radius: 20px;
`;

export const Content = styled.View`
  padding: 10px;
  align-items: flex-start;
  justify-content: center;
  gap: 6px;
`;

export const  Name = styled.Text`

  font-size: 15px;
  font-weight: 600;
`;

export const  Status= styled.Text`

 font-size: 12px;
`;

export const  Species= styled.Text`
 font-size: 12px;
 `;


export const Gender = styled.Text`
  font-size: 12px;

`;

export const Location = styled.Text`
   font-size: 12px;

`;