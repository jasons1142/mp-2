import styled from "styled-components";
import {Joke} from "../interfaces/Jokes.ts";

const JokesContainerDiv = styled.div`
    display: flex;
    flex-flow: row wrap;    
    align-items: center;
    background-color: blue;
`;

const JokesDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: 60%;
    padding: 2%;
    margin: 1%;
    font: small-caps bold calc(3px + 2vw) 'Roboto', serif;
    text-align: center;
`;

export default function JokeContent(props : { data: Joke[] } ){

    return (
        
        <JokesContainerDiv>
            {
                props.data.map((joke: Joke) =>
                    <JokesDiv key = {joke.id}>
                        <h1>{joke.type}</h1>
                        <p>{joke.setup}</p>
                        <p>{joke.punchline}</p>
                    </JokesDiv>
                )
            }
        </JokesContainerDiv>
    );

}
