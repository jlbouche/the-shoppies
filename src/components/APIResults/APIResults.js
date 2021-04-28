import React from "react";
import {List} from 'semantic-ui-react';

function APIResults({ movie }) {

    return (
        <List>
            <List.Item icon='video'>{movie.Search[0].Title} ({movie.Search[0].Year})</List.Item>
        </List>
    );
}

export default APIResults;