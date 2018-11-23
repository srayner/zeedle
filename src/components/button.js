import styled from "styled-components";

export const Button = styled.button`
  border: 1px solid #28a745;
  border-radius: 4px;
  margin: 0 4px;
  padding: 8px 16px;
  font-size: 14px;
  text-decoration: none;
  color: #fff;
  background: #37b223;
  font-family: "Roboto", sans-serif;
  line-height: 1.2;
  white-space: nowrap;
  cursor: pointer;
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
