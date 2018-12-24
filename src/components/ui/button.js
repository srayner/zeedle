import styled from "styled-components";

// Default grey button
export const Button = styled.button`
  border: 1px solid #6c757d;
  border-radius: 4px;
  margin: 0;
  padding: 8px 16px;
  font-size: 14px;
  text-decoration: none;
  color: #212529;
  background: #6c757d;
  font-family: "Roboto", sans-serif;
  line-height: 1.2;
  white-space: nowrap;
  cursor: pointer;
`;

// Green success button
export const SuccessButton = styled(Button)`
  background-color: #37b223;
  border-color: #28a745;
  color: #212529;
`;

// Red danger button
export const DangerButton = styled(Button)`
  background-color: #c82333;
  border-color: #bd2130;
  color: #212529;
`;

export const GrayButton = styled.button`
  border: none;
  border-radius: 4px;
  margin: 0 4px;
  padding: 0 8px;
  width: 32px;
  font-size: 14px;
  color: #999;
  background-color: transparent;
  font-family: "Roboto", sans-serif;
  line-height: 1.2;
  white-space: nowrap;
  cursor: pointer;
  flex-shrink: 0;

  :hover {
    background-color: #ccc;
    color: #666;
  }
`;

export const CloseButton = styled(GrayButton)`
  :hover {
    background-color: transparent;
    color: #666;
  }
  :focus {
    outline: none;
  }
`;

export const TightCloseButton = styled(CloseButton)`
  padding: 0;
  margin: 0;
  width: 18px;
`;

export const LargeCloseButton = styled.button`
  border: none;
  border-radius: 50%;
  margin: 0 4px;
  padding: 0 8px;
  width: 32px;
  height: 32px;
  font-size: 20px;
  color: #999;
  background-color: transparent;
  font-family: "Roboto", sans-serif;
  line-height: 1.2;
  white-space: nowrap;
  cursor: pointer;
  position: absolute;
  top: 8px;
  right: 6px;

  :hover {
    background-color: #ccc;
    color: #666;
  }

  :focus {
    outline: none;
  }
`;
