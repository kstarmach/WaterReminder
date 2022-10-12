import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const ReminderModal = ({ increase, toggle, modal }) => {
    return (
        <Modal isOpen={modal} toggle={toggle} size="xl" centered>
            <ModalHeader toggle={toggle}>Water Reminder</ModalHeader>
            <ModalBody>
                <video controls autoPlay loop muted height="100%" width="100%">
                    <source src='media/WaterReminder.mp4' type='video/mp4' />
                </video>
            </ModalBody>
            <ModalFooter>
                <Button color="primary" onClick={increase}>
                    <i className="bi bi-cup-straw"></i> Drinking
                </Button>{' '}
                <Button color="secondary" onClick={toggle}>
                    Cancel
                </Button>
            </ModalFooter>
        </Modal>
    )
}

export default ReminderModal