import React from 'react'
import { Route, Link, Redirect, Switch } from 'react-router-dom'
import { Menu, Form, Grid, Divider, Segment, Header, Icon, Container, Image } from "semantic-ui-react";


function Credits(){


    return (
        <>
        <Menu inverted size='huge'>
            <Menu.Item as={Link} to='/'><Icon name='home'/>Home</Menu.Item>
            <Menu.Item as={Link} to='/vote'><Icon name='search plus'/>Search/Vote</Menu.Item>
            <Menu.Item as={Link} to='/credits' position='right'><Icon name='hand point right'/>Credits</Menu.Item>
        </Menu>
        <Header>I am the credits page!</Header>
        </>
    )
}

export default Credits