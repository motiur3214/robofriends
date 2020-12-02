import React,{Component} from 'react';
import CardList from '../Components/CardList';
import SearchFriends from '../Components/SearchFriends';
import './App.css';
import Scroll from '../Components/Scroll';
import ErrorBounrey from '../Components/ErrorBoundry'
class App extends Component
{
    constructor(){
        super();
        this.state={
            robots: [],
            search: ''
        }
        
    }
    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response=>response.json())
        .then(users=>this.setState({robots:users}));
    }
    searchChange=(event)=>{
        this.setState({search:event.target.value});
    }
    
    
    render(){ 
        const {search,robots}=this.state;
        const filterBot= robots.filter(robot=>{
            
            return robot.name.toLowerCase().includes(search.toLowerCase());
            
        });  
        return !robots.length?
        <h1>Loading</h1>:
        
        (
            
            
            <div className='tc'>
            <h1>My Robofriends</h1>
            <SearchFriends searchChange={this.searchChange}/>
            <Scroll>
            <ErrorBounrey>
            <CardList robots={filterBot}/>
            </ErrorBounrey>
            </Scroll>
            </div>
            );
            
        }
        
    }
    export default App;