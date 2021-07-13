import ReactDOM from 'react-dom';

const Modal = (props) => {
  const { onDismiss, header, content, actions } = props;

  const modal = (
    <div onClick={onDismiss} className='ui dimmer modals visible active'>
      <div
        onClick={(e) => e.stopPropagation()}
        className='ui standard modal visible active'
      >
        <div className='header'>{header}</div>
        <div className='content'>{content}</div>
        <div className='actions'>
          {/* <button onClick={mainFunction} className='ui primary button'>
          {mainAction}
        </button>
        <button className='ui button'>cancel</button> */}
          {actions}
        </div>
      </div>
    </div>
  );

  return ReactDOM.createPortal(modal, document.querySelector('#modal'));
};

export default Modal;
