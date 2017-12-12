import React, {Component} from 'react';
// import Github from './Github';
import BitRepositories from './BitRepositories';
import Bitbucket from "./Bitbucket";


class Home extends Component{

    constructor(props){
        super(props);
        this.state={
            repos:false,
        }

        this.getRepos = this.getRepos.bind(this);
    }

    getRepos(url){

        this.setState({
            repos:true,
            repoUrl:url,
        })

    }
    render(){
        return(
            <div>
                <h2>Home</h2>
                <br/>
                <div>
                    <Bitbucket username="arielgk" getRepos={this.getRepos}></Bitbucket>
                    { this.state.repos && this.state.repoUrl ? <BitRepositories url={this.state.repoUrl} />: ''}
                </div>
            </div>
        );
    }
}


export default Home