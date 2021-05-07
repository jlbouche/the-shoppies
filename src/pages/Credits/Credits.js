import React from 'react'
import { Route, Link, Redirect, Switch } from 'react-router-dom'
import { Menu, Segment, Card, Header, Icon, Container, Image } from "semantic-ui-react";


function Credits(){

    const creditsArr = [
        {
            image: 'https://s3.amazonaws.com/ionic-marketplace/omdb-search/icon.png',
            header: 'OMDb API',
            meta: 'The Open Movie Database',
            description: 'The OMDb API is a free RESTful web service to obtain movie information'
        },
        {
            image: 'https://i.imgur.com/426iOQe.png',
            header: 'Technologies',
            meta: 'JavaScript, React, SemanticUI, HTML/CSS'
        },
        {
            image: 'https://cdn.shopify.com/assets/images/logos/shopify-bag.png',
            header: 'Shopify',
            meta: 'Thanks for the tech challenge!'
        }
    ]

    let credits = creditsArr.map((d, i) => {

        return (
              <Card >
                <Image src={d.image} />
                  <Card.Content>
                      <Card.Header>{d.header}</Card.Header>
                      <Card.Meta>
                          <span className='date'>{d.meta}</span>
                      </Card.Meta>
                  </Card.Content>
              </Card>
        );
      });


    return (
        <>
        <Menu inverted size='huge'>
            <Menu.Item as={Link} to='/'><Icon name='home'/>Home</Menu.Item>
            <Menu.Item as={Link} to='/vote'><Icon name='search plus'/>Search/Vote</Menu.Item>
            <Menu.Item as={Link} to='/credits' position='right'><Icon name='hand point right'/>Credits</Menu.Item>
        </Menu>
        <Segment vertical>
            <Image centered rounded src='https://i.imgur.com/WKDkoXP.gif?noredirect'/>
            <Header inverted textAlign='center'>Just kidding... I also had help from:</Header>
        </Segment>
        <Segment vertical>
        <Card.Group stackable centered>
            {credits}
        </Card.Group>
        </Segment>
        </>
    )
}

export default Credits