import React from 'react';
import { Card, Image, Button } from 'semantic-ui-react'

function MovieNominations({movieNomination, removeNomination}) {

    let nominatedMovies = movieNomination.map((d, i) => {

        return (
              <Card>
                  <Card.Content>
                      <Image src={d.Poster} height={220} width={280} />
                      <Card.Header>{d.Title}</Card.Header>
                      <Card.Meta>
                          <span className='date'>{d.Year}</span>
                      </Card.Meta>
                      <Button content="Remove nomination" icon="video" key={i} onClick={() => removeNomination(i)}/>
                  </Card.Content>
              </Card>
        );
      });

    return (

        <Card.Group itemsPerRow={3}>
            {nominatedMovies}
        </Card.Group>

    );
    
}

export default MovieNominations;