import React, { useState } from 'react';
import { Modal, Header, Image, Button } from 'semantic-ui-react'


function Modals() {
    const [open, setOpen] = useState(false)

    return (
        <Modal
            onClose={()=> setOpen(false)}
            onOpen={() => setOpen(true)}
            open={open}
        >
            <Modal.Header>Thanks for your submission!</Modal.Header>
            <Modal.Content>
                <Modal.Description>
                    <Header>We appreciate your vote.</Header>
                    <p>
                        Please stay tuned for The Shoppies to release the final results of which movies made it to the top!
                    </p>
                </Modal.Description>
            </Modal.Content>
            <Modal.Actions>
                <Button color='black' onClick={( setOpen(false))}>
                    Go back
                </Button>
            </Modal.Actions>
        </Modal>
    )
}

export default Modals