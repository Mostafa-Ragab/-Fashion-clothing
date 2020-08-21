import React from 'react';
import { CusttomButtonContainer } from './custom-button.styles';

const CustomButton = ({children, ...props}) => (
  <CusttomButtonContainer {...props}>{children}</CusttomButtonContainer>
);

export default CustomButton;