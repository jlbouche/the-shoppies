import React from "react";
import { Card, Image, Button } from 'semantic-ui-react'

function APIResults({ movie, addNomination, movieNomination }) {


    let top6= movie.Search.slice(0,6)
    let nominatedMovies = movieNomination.map((d, i) => {
      return (d.Title)
    })
    let movies = top6.map((d, i) => {

        return (
              <Card centered>
                {d.Poster==='N/A' ?
                <Image src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5_u6G-llwL_q6X0VotcnOlk3UX7wHyRHEFw&usqp=CAU' rounded/>:
                <Image src={d.Poster} rounded/>
                }
                  <Card.Content>
                      <Card.Header>{d.Title}</Card.Header>
                      <Card.Meta>
                          <span className='date'>{d.Year}</span>
                      </Card.Meta>
                      {nominatedMovies.includes(d.Title) ? null 
                      : nominatedMovies.length===5 ? null : 
                      <Button content="Nominate" icon="video" key={i} 
                        onClick={() => addNomination(d)}
                        />
                      }
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