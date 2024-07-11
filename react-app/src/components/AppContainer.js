import styled from 'styled-components';

const AppContainer = styled.div`
  background-image: url(${props => props.backgroundImage});
  height: 100vh;
  background-position: center;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export default AppContainer;