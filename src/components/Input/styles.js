import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  margin-bottom: 20px;
`;

export const InputContainer = styled.div`
  width: 100%;
  height: 30px;
  border-bottom: 1px solid ${({ $hasError }) => ($hasError ? '#FF6B8A' : '#3B3450')};
  display: flex;
  align-items: center;
  transition: border-color 0.2s;

  &:focus-within {
    border-color: ${({ $hasError }) => ($hasError ? '#FF6B8A' : '#E4105D')};
  }
`;

export const IconContainer = styled.div`
  margin-right: 10px;
  display: flex;
  color: #8647ad;
`;

export const InputText = styled.input`
  background-color: transparent;
  color: #ffffff;
  flex: 1;
  border: 0;
  outline: 0;
  height: 30px;

  &::placeholder {
    color: #a5a5a5;
  }
`;

export const ErrorText = styled.p`
  color: #ff6b8a;
  font-size: 12px;
  margin-top: 4px;
`;
