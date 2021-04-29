import React from "react";
import { Card, Image, Feed, Button, Icon } from 'semantic-ui-react'

function APIResults({ movie }) {

    return (
        <Card>
            <Card.Content>
                <Card.Header>Movie search results:</Card.Header>
            </Card.Content>
            <Card.Content>
                <Feed>
                    <Feed.Event>
                        <Image src={movie.Search[0].Poster} size='small' floated='left' />
                        <Feed.Content>
                            {movie.Search[0].Title}
                            {movie.Search[0].Year}
                            <Button>
                                <Icon name='video'/>
                                Nominate
                            </Button>
                        </Feed.Content>
                    </Feed.Event>
                </Feed>
            </Card.Content>
        </Card>
    );
}

export default APIResults;