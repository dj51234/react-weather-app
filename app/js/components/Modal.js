import React from 'react';
import ReactDOM from 'react-dom';
import ReactDOMServer from 'react-dom/server';

class Modal extends React.Component {
  render() {
    return (
      <div></div>
    )
  }
  componentDidMount() {
    const { title, message } = this.props;
    const modalContent = (
      <div className="reveal tiny text-center" id="error-modal" data-reveal="">
        <h4>{title}</h4>
        <p className="lead">{message}</p>
        <button className="close-button" data-close="" aria-label="Close modal" type="button">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
    );
    const $modal = $(ReactDOMServer.renderToString(modalContent));
    $(ReactDOM.findDOMNode(this)).html($modal);
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
