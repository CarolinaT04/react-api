import React ,{ Component } from "react";
import { Segment, Header, Grid, Image,Button } from 'semantic-ui-react'

class Episodes extends Component {
    constructor(props){
        super(props);
        this.state = {  
          episodes: [],
          isLoaded: false,
    
        }
      
    }
    
    //Get the rest Api 
    componentDidMount() {
    
      fetch('https://breakingbadapi.com/api/episodes')
      .then(res => res.json())
      .then(json => {
        this.setState({
            isLoaded: true,
            episodes: json,
        })
      }); 
    }
    
    //Rendering component with data from the Rest Api
    render() {
    
      var { isLoaded , episodes } = this.state;
    
      if (!isLoaded){
         
        return <div>Loading...</div>;
      }
    
      else{
    
      return (
        <div className="episodes">
        <Grid centered columns={3} doubling>
             {episodes.map(episode =>
                <Grid.Column key={episode.title}>
                    <Segment>
                        <Header as="h1">{episode.season}</Header>
                        <p>{episode.air_date}</p>
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