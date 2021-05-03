import React from "react";
import { Card, Image, Feed, Button, Icon, Container } from 'semantic-ui-react'

function APIResults({ movie, addNomination }) {

    let movies = movie.Search.map((d, i) => {

        return (
          <Card.Group itemsPerRow={3}>
              <Card>
                  <Card.Content>
                      <Image src={d.Poster} height={220} width={280} />
                      <Card.Header>{d.Title}</Card.Header>
                      <Card.Meta>
                          <span className='date'>{d.Year}</span>
                      </Card.Meta>
                  </Card.Content>
              </Card>
          </Card.Group>
        );
      });

    return (

        <div className='APIresults'>
            {movies}
        </div>

    );
}

export default APIResults;