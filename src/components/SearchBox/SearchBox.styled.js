import styled from '@emotion/styled';
import { HiSearch } from 'react-icons/hi';

export const Form = styled.form`
  display: inline-flex;
  align-items: center;
  position: relative;
  margin-top: 20px;

  text-transform: uppercase;
`;

export const Input = styled.input`
  padding: 8px 32px 8px 8px;
  width: 400px;
  border-radius: 4px;
  font: inherit;
  border-color: rgba(0, 0, 0, 0.3);
`;

export const Icon = styled(HiSearch)`
  width: 20px;
  height: 20px;
  position: absolute;
  right: 6px;
`;

export const Button = styled.button`
  padding: 8px 32px 8px 8px;
  border-radius: 4px;
  border-color: rgba(0, 0, 0, 0.3);
  font: inherit;
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
  transition: transform 200ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    color: white;
    background-color: #336fb3df;
  }
`;
