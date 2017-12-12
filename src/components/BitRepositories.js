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

class BitRepositories extends Component {

    constructor(props) {
        super(props);
        this.state = {}
    }


    componentDidMount() {
        fetch(this.props.url.href)
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
                {this.state.repos.values.map(repo =>
                    <Repo key={repo.uuid} repo={repo}/>
                )}

            </div>)
    }

}

export default BitRepositories