import ReactDOM from 'react-dom';
import history from '../utils/history';

const Modal = (props) => {
  const { route, header, content, actions } = props;

  return ReactDOM.createPortal(
    <div
      onClick={(e) => {
        history.push(route);
      }}
      className='ui dimmer modals visible active'
    >
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
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
    </div>,
    document.querySelector('#modal')
  );
};

export default Modal;
