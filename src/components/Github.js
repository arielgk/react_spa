import React, {Component} from 'react';


const urlForUsername = username => `https://api.github.com/users/${username}`

class Github extends Component {

    constructor(props) {
        super(props);
        this.state = {}
    }


    componentDidMount() {
        fetch(urlForUsername(this.props.username))
            .then(d => d.json())
            .then(d => {
                this.setState({
                    githubData: d,
                })
            })
        this.getReposHandler = this.getReposHandler.bind(this);
    }

    getReposHandler() {
        this.props.getRepos(this.state.githubData.repos_url);
    }

    render() {
        if (!this.state.githubData) return <p>Loading...</p>
        return (

            <div>
                <h2>{this.state.githubData.name}</h2>
                <img src={this.state.githubData.avatar_url} alt=""/>
                <br/>
                <div className="repobutton" onClick={this.getReposHandler}> Get Repos</div>
            </div>
        )
    }
}


export default Github