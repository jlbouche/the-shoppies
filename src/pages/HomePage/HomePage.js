import React  from "react";
import { Link } from 'react-router-dom'
import { Image, Header, Button, Modal, Container } from 'semantic-ui-react'

function Home() {

    return (
        <Modal
            trigger={
                <Image 
                    src='https://i.imgur.com/e5gQATX.jpg' 
                    fluid
                />
            }
        >
            <Modal.Header>Welcome to The Shoppies!</Modal.Header>
            <Modal.Content image>
            <Image size='huge' src='https://i.pinimg.com/originals/19/51/31/195131e8ca7a2c8a536ea159334a4216.gif' wrapped />
            <Modal.Description>
                <Header>Cast your vote</Header>
                <p>
                After years of waiting, Shopify is proud to announce the release of The Shoppies!<br/>
                We're collecting votes from movie lovers around the world as to which movies are
                truly the best of the best. Users can
                search through our extensive movie database for your favorite films,
                nominate them, and stay tuned for the final results on The Shoppies!
                </p>
            </Modal.Description>
            </Modal.Content>
            <Modal.Actions>
            <Button
                as={Link} to='/vote'
                content="Let's go!"
                labelPosition='right'
                icon='video'
                color='blue'
            />
            </Modal.Actions>
        </Modal>
    )
}

export default Home;
