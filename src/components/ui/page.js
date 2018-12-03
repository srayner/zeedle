import styled from "styled-components";

const Page = styled.div`
  position: absolute;
  top: 42px;
  right: 8px;
  bottom: 8px;
  left: 8px;
  display: flex;
  align-items: flex-start;
  flex-wrap: nowrap;
  overflow-x: auto;
  overflow-y: hidden;

  ::-webkit-scrollbar {
    height: 12px;
    width: 12px;
  }
  ::-webkit-scrollbar-button {
    display: block;
    height: 5px;
    width: 5px;
  }
  ::-webkit-scrollbar-track {
    background: transparent;
  }
  ::-webkit-scrollbar-thumb {
    background: rgba(0, 0, 0, 0.15);
    border-radius: 6px;
  }
  ::-webkit-scrollbar-track-piece {
    background: rgba(0, 0, 0, 0.15);
    //border-radius: 6px;
  }
`;

export default Page;
