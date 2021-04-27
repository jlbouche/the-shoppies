import React from "react";
import {List} from 'semantic-ui-react';

export default function APIResults({ movie }) {
    return (
        <List>
            <List.Item icon='video'>{movie.Title}{movie.Year}</List.Item>
        </List>
    );
}