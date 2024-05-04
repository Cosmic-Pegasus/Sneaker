import React, { Component } from 'react'
import Preview from './Preview';

export class PreviewAPI extends Component {
    Details = [];
    constructor() {
        super();
        console.log("I am a constructor");
        this.state = {
            Details: this.Details,
            loading: true
        };
    }
    async componentDidMount() {
        let url = `http://127.0.0.1:5000${this.props.category}`;
        this.setState({ loading: true })
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({ Details: parsedData.Details, loading: false })
        console.log(parsedData)
    }
    render() {
        return (<>  {this.state.Details.map((element) => {
            return <Preview key={Preview}
                Brand={element.Brand}
                description={element.description}
                Name={element.Name}
                Rate={element.Rate}        
            />
        })}
        </>

        )
    }
}

export default PreviewAPI