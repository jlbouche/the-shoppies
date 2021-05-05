import React  from "react";
import { Link } from 'react-router-dom'
import { Image, Header, Button } from 'semantic-ui-react'

function Home() {

    return (
        
        <Button as={Link} to='/vote'>Hey</Button>

    )
}

export default Home;
