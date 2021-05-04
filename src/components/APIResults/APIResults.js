import React from "react";
import { Card, Image, Button } from 'semantic-ui-react'

function APIResults({ movie, addNomination, movieNomination }) {


    let top6= movie.Search.slice(0,6)
    let movies = top6.map((d, i) => {

        return (
              <Card raised>
                  <Card.Content>
                      <Image src={d.Poster} />
                      <Card.Header>{d.Title}</Card.Header>
                      <Card.Meta>
                          <span className='date'>{d.Year}</span>
                      </Card.Meta>
                      <Button content="Nominate" icon="video" key={i} 
                        onClick={() => addNomination(d)}
                        />
                  </Card.Content>
              </Card>
        );
      });

    return (

        <Card.Group stackable>
            {movies}
        </Card.Group>

    );
}

export default APIResults;