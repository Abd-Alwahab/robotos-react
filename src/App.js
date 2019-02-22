import React,{ Component } from "react";
import {robots} from './robots';
import SearchBox from './SearchBox';
import CardList from './CardList';


class App extends Component {

    constructor() {
        super()
        this.state ={

            robots: [],
            searchfiled: ''

        }
    }

    componentDidMount() {
        this.setState( {robots : robots})
    }

    onSearchChange = (event) => {
        this.setState({searchfiled: event.target.value})
       
    }

    render() {

        const filterrobots = this.state.robots.filter(robot => {
            return robot.name.toLowerCase().includes(this.state.searchfiled.toLowerCase());
        })

        return (
            <div>
    
            <h1>Robots friends</h1>
            <SearchBox search={this.onSearchChange} />
            <CardList robots={filterrobots}/>
    
            </div>
        );
    }
   
}

export default App;