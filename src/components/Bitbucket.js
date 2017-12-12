import React, {Component} from 'react';


const urlForUsername = username => `https://api.bitbucket.org/2.0/users/${username}`

class Bitbucket extends Component {

    constructor(props) {
        super(props);
        this.state = {}
    }


    componentDidMount() {
        fetch(urlForUsername(this.props.username))
            .then(d => d.json())
            .then(d => {
                this.setState({
                    bitbucketData: d,
                })
            })
        this.getReposHandler = this.getReposHandler.bind(this);
    }

    getReposHandler() {
        this.props.getRepos(this.state.bitbucketData.links.repositories);
    }

    render() {
        if (!this.state.bitbucketData) return <p>Loading...</p>
        return (

            <div>
                <h2>{this.state.bitbucketData.username}</h2>
                <img src={this.state.bitbucketData.links.avatar.href} alt=""/>
                <br/>
                <div className="repobutton" onClick={this.getReposHandler}> Get Repos</div>
            </div>
        )
    }
}


export default Bitbucket