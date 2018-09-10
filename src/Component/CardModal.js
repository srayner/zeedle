import React from "react";

class CardModal extends React.Component {
  render() {
    return (
        <div>
            <form>
                <span>Title</span>
                <input type="text" name="title" />
                <span>Decription</span>
                <input type="textarea" name="description" />
            </form>
        </div>
    );
  }
}

export default CardModal;
