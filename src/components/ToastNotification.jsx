import Toast from 'react-bootstrap/Toast';

const ToastNotification = ({ closeToast }) => {
  return (
    <Toast onClick={closeToast}>
      <Toast.Header>
        <img src="holder.js/20x20?text=%20" className="rounded me-2" alt="" />
        <strong className="me-auto">Contact form</strong>
      </Toast.Header>
      <Toast.Body>The message is successfully sent!</Toast.Body>
    </Toast>
  );
}

export default ToastNotification;