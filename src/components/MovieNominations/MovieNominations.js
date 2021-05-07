import React from 'react';
import { Card, Image, Button, Container } from 'semantic-ui-react'

function MovieNominations({movieNomination, removeNomination}) {

    
    let nominatedMovies = movieNomination.map((d, i) => {

        return (
              <Card centered >
                {d.Poster==='N/A' ?
                    <Image src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5_u6G-llwL_q6X0VotcnOlk3UX7wHyRHEFw&usqp=CAU' rounded/>:
                    <Image src={d.Poster} rounded/>
                }
                  <Card.Content>
                      <Card.Header>{d.Title}</Card.Header>
                      <Card.Meta>
                          <span className='date'>{d.Year}</span>
                      </Card.Meta>
                      <Button content="Remove" icon="cancel" key={i} onClick={() => removeNomination(i)}/>
                  </Card.Content>
              </Card>
        );
      });

    return (
        
        <Card.Group stackable>
            {nominatedMovies}
        </Card.Group>

    );
    
}

export default MovieNominations;