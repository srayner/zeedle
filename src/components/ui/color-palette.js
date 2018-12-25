import React from "react";
import styled from "styled-components";

Container = styled.div`
  display: flex;
`;

ColourSwatch = styled.div`
  width: 250;
  height: 125;
  border-radius: 3px;
`;

ColourPalette = () => {
  const swatches = props.colours.map(colour => {
    return <ColourSwatch colour={colour} />;
  });
  return <Container>{swatches}</Container>;
};

export default ColourPalette;
