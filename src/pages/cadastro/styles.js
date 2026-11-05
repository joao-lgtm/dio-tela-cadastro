import styled from 'styled-components';

export const Container = styled.main`
  width: 100%;
  max-width: 80%;
  margin: 0 auto;
  margin-top: 120px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 40px;

  @media (max-width: 768px) {
    flex-direction: column;
    max-width: 100%;
    padding: 0 16px;
    margin-top: 48px;
  }
`;

export const Column = styled.div`
  flex: 1;
`;

export const Wrapper = styled.div`
  max-width: 300px;

  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

export const Title = styled.h2`
  font-family: 'Open Sans', sans-serif;
  font-weight: 700;
  font-size: 32px;
  line-height: 44px;
  max-width: 90%;
  color: #ffffff;

  @media (max-width: 768px) {
    font-size: 24px;
    line-height: 32px;
    max-width: 100%;
  }
`;

export const TitleCadastro = styled.p`
  font-family: 'Open Sans', sans-serif;
  font-weight: 700;
  font-size: 32px;
  line-height: 44px;
  margin-bottom: 8px;
`;

export const SubtitleCadastro = styled.p`
  font-family: 'Open Sans', sans-serif;
  font-size: 18px;
  line-height: 25px;
  margin-bottom: 35px;
`;

export const TermsText = styled.p`
  font-family: 'Open Sans', sans-serif;
  font-size: 14px;
  line-height: 19px;
  margin-top: 20px;
  color: #ffffff;
`;

export const LoginText = styled.p`
  font-family: 'Open Sans', sans-serif;
  font-weight: 700;
  font-size: 14px;
  line-height: 19px;
  margin-top: 20px;

  a {
    color: #23dd7a;
    text-decoration: none;
    &:hover { text-decoration: underline; }
  }
`;

export const ApiError = styled.p`
  color: #ff6b8a;
  font-size: 13px;
  margin: -8px 0 16px;
`;
