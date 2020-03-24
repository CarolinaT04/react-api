import React ,{ Component } from "react";
import { Segment, Header, Grid, Image,Button } from 'semantic-ui-react'

class Characters extends Component {
    constructor(props){
        super(props);
        this.state = {  
          characters: [],
          isLoaded: false,
    
        }
      
    }
    
    //Get the rest Api 
    componentDidMount() {
    
      fetch('https://breakingbadapi.com/api/characters')
      .then(res => res.json())
      .then(json => {
        this.setState({
            isLoaded: true,
            characters: json,
        })
      }); 
    }
    
    //Rendering component with data from the Rest Api
    render() {
    
      var { isLoaded , characters } = this.state;
    
      if (!isLoaded){
         
        return <div>Loading...</div>;
      }
    
      else{
    
      return (
        <div className="charcaters">
        <Grid centered columns={3} doubling>
             {characters.map(character =>
                <Grid.Column key={character.name}>
                    <Segment>
                        <Image src={character.img} />
                        <Header as="h1">{character.occupation}</Header>
                        <p>{character.occupation}</p>
                        <p>{character.status}</p>
                        <p>{character.birthday}</p>
                        <p>{character.portrayed}</p>
                        <Button primary basic as="a" href="/">
                        Learn more</Button>
                    </Segment>
                </Grid.Column>)}
        </Grid>
    </div>
        );
      }
    }
    }
    

  export default Characters;