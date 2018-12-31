import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const ColourSwatch = styled.div`
  width: 225px;
  height: 125px;
  border-radius: 8px;
  background-color: ${props => props.colour};
  margin-top: 20px;
`;

const ColourPalette = props => {
  const swatches = props.colours.map((colour, index) => {
    return (
      <ColourSwatch
        key={index}
        colour={colour}
        onClick={() => props.onClick(colour)}
      />
    );
  });
  return <Container>{swatches}</Container>;
};

export default ColourPalette;
