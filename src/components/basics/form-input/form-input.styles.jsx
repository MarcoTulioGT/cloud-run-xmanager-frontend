import styled, { css } from 'styled-components';

const subColor = 'grey';
const mainColor = 'grey';

const shrinkLabelStyles = css`
  top: -14px;
  font-size: 12px;
  color: ${mainColor};
`;

export const FormInputLabel = styled.label`
  color: ${subColor};
  font-size: 16px;
  font-weight: normal;
  position: absolute;
  pointer-events: none;
  left: 3px;
  top: 5px;
  transition: 300ms ease all;

  ${({ shrink }) => shrink && shrinkLabelStyles};
`;

export const Input = styled.input`
  background: none;
  background-color: white;
  color: ${subColor};
  font-size: 18px;
  padding: 5px 5px 5px 5px;
  display: block;
  width: 70%;
  border: none;
  border-radius: 0;
  border-bottom: 1px solid ${subColor};
  margin: 10px 0;

  &:focus {
    outline: none;
  }

  &:focus ~ ${FormInputLabel} {
    ${shrinkLabelStyles};
  }
`;

export const Group = styled.div`
  position: relative;
  margin: 25px 0;

  input[type='password'] {
    letter-spacing: 0.3em;
  }
`;

