import React from "react";
import { Card, Image, Feed, Button, Icon } from 'semantic-ui-react'

function APIResults({ movie, addNomination }) {


    return (
        <Card.Group itemsPerRow={3}>
            <Card>
                <Card.Content>
                <Image src={movie.Search[0].Poster} height={220} width={180} />
                    <Card.Header>{movie.Search[0].Title}</Card.Header>
                    <Card.Meta>
                        <span className='date'>{movie.Search[0].Year}</span>
                    </Card.Meta>
                    <Button content='Nominate' icon='video' onClick={addNomination}/>
                </Card.Content>
            </Card>
            {movie.Search[1] ? 
            <Card>
                <Card.Content>
                <Image src={movie.Search[1].Poster} height={220} width={180} />
                    <Card.Header>{movie.Search[1].Title}</Card.Header>
                    <Card.Meta>
                        <span className='date'>{movie.Search[1].Year}</span>
                    </Card.Meta>
                    <Button content='Nominate' icon='video' onClick={addNomination}/>
                </Card.Content>
            </Card> : null }
            {movie.Search[2] ?
            <Card>
                <Card.Content>
                <Image src={movie.Search[2].Poster} height={220} width={180} />
                    <Card.Header>{movie.Search[2].Title}</Card.Header>
                    <Card.Meta>
                        <span className='date'>{movie.Search[2].Year}</span>
                    </Card.Meta>
                    <Button content='Nominate' icon='video' onClick={addNomination}/>
                </Card.Content>
            </Card>: null }
            {movie.Search[3] ?
            <Card>
                <Card.Content>
                <Image src={movie.Search[3].Poster} height={220} width={180} />
                    <Card.Header>{movie.Search[3].Title}</Card.Header>
                    <Card.Meta>
                        <span className='date'>{movie.Search[3].Year}</span>
                    </Card.Meta>
                    <Button content='Nominate' icon='video' onClick={addNomination}/>
                </Card.Content>
            </Card>: null }
            {movie.Search[4] ?
            <Card>
                <Card.Content>
                <Image src={movie.Search[4].Poster} height={220} width={180} />
                    <Card.Header>{movie.Search[4].Title}</Card.Header>
                    <Card.Meta>
                        <span className='date'>{movie.Search[4].Year}</span>
                    </Card.Meta>
                    <Button content='Nominate' icon='video' onClick={addNomination}/>
                </Card.Content>
            </Card> : null }
            {movie.Search[5] ?
            <Card>
                <Card.Content>
                <Image src={movie.Search[5].Poster} height={220} width={180} />
                    <Card.Header>{movie.Search[5].Title}</Card.Header>
                    <Card.Meta>
                        <span className='date'>{movie.Search[5].Year}</span>
                    </Card.Meta>
                    <Button content='Nominate' icon='video' onClick={addNomination}/>
                </Card.Content>
            </Card> : null }
        </Card.Group>
    );
}

export default APIResults;