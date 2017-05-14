import React from 'react';

class Modal extends React.Component {
  render() {
    const { title, message } = this.props;
    return (
      <div className="reveal tiny text-center" id="error-modal" data-reveal="">
        <h4>{title}</h4>
        <p className="lead">{message}</p>
        <button className="close-button" data-close="" aria-label="Close modal" type="button">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
    )
  }
  componentDidMount() {
    const modal = new Foundation.Reveal($('#error-modal'));
    modal.open();
  }
}

Modal.proptypes = {
  title: React.PropTypes.string,
  message: React.PropTypes.string.isRequired
}

Modal.defaultProps = {
  title: 'Something went wrong!'
}

export default Modal;
