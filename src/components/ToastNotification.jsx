import Toast from 'react-bootstrap/Toast';

const ToastNotification = () => {
  return (
    <Toast>
      <Toast.Header>
        <img src="holder.js/20x20?text=%20" className="rounded me-2" alt="" />
        <strong className="me-auto">Contact form</strong>
      </Toast.Header>
      <Toast.Body>The message is successfully send!</Toast.Body>
    </Toast>
  );
}

export default ToastNotification;