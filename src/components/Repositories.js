import React, {Component} from 'react';

class Repo extends Component {
    render() {
        return (
            <div>
                {this.props.repo.name}
                <br/>
            </div>
        )
    }
}

class Repositories extends Component {

    constructor(props) {
        super(props);
        this.state = {}
        console.log('repo');
    }


    componentDidMount() {
        fetch(this.props.url)
            .then(d => d.json())
            .then(d => {
                this.setState({
                    repos: d,
                })
            })
    }

    render() {
        if (!this.state.repos) return <p>Loading...</p>
        return (
            <div>
                {this.state.repos.map(repo =>
                    <Repo key={repo.id} repo={repo}/>
                )}

            </div>)
    }

}

export default Repositories