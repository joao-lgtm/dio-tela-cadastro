import React from 'react';
import { Controller } from 'react-hook-form';

import { Wrapper, InputContainer, InputText, IconContainer, ErrorText } from './styles';

const Input = ({ leftIcon, name, control, errorMessage, ...rest }) => {
  return (
    <Wrapper>
      <InputContainer $hasError={!!errorMessage}>
        {leftIcon ? <IconContainer>{leftIcon}</IconContainer> : null}
        <Controller
          name={name}
          control={control}
          render={({ field }) => (
            <InputText
              {...field}
              {...rest}
              aria-label={rest.placeholder}
              aria-invalid={!!errorMessage}
            />
          )}
        />
      </InputContainer>
      {errorMessage ? <ErrorText>{errorMessage}</ErrorText> : null}
    </Wrapper>
  );
};

export { Input };
