import React from "react";
import PropTypes from "prop-types";

import { Button as ButtonElm, Icon } from "semantic-ui-react";

export default function Button({ text, onClick }) {
  //The first button is a standard button.
  //The second button has a subtle appearance.
  //The third button can animate to show additional or hidden content. For example adding events..
  return (
    <>
      <ButtonElm onClick={onClick} color="orange">
        {text}
      </ButtonElm>

      <ButtonElm onClick={onClick} basic color="orange">
        {text}
      </ButtonElm>

      <ButtonElm color="orange" onClick={onClick} animated>
        <ButtonElm.Content visible>Ajout d'événement</ButtonElm.Content>
        <ButtonElm.Content hidden>
          <Icon name="calendar plus" />
        </ButtonElm.Content>
      </ButtonElm>
    </>
  );
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};
