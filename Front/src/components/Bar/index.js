import styled, { keyframes,css } from 'styled-components';

const loading = keyframes`
from  {width: 0%}
to {widht: ${props => `${props.nivel}%`}}
`;

const Bar = styled.div `

  margin: 5px;
  padding: 3px;
  border: 2px black solid;
  background: ghostwhite;
  position: relative;
  height: 12px;
  width: auto;

  ::after{
  background: black;
  content: '';
  position: absolute;
  left: 0; top: 0; bottom: 0
  animation: ${loading} 6s ease-in-out;
  width: ${props => `${props.nivel}%`};
  }
  
  `;

  export  {Bar};