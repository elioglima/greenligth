import styled from 'styled-components/native';

export const Container = styled.View`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  height: 100%;
`;

export const BaseHeader = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const BackRoute = styled.View`
  display: flex;
  flex-direction: row;
`;
export const BackRouteText = styled.Text`
  display: flex;
  font-size: 18px;
  font-weight: bold;
`;

export const Title = styled.Text`
  display: flex;
  font-size: 30px;
  font-weight: bold;
  margin-top: 5px;
`;

export const IconRight = styled.View`
  display: flex;
  margin: 5px;
`;
