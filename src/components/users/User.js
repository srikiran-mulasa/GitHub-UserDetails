import React, { Component, Fragment } from 'react';
import Spinner from '../layout/Spinner';
import Repos from '../repos/Repos';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';


class User extends Component {
    componentDidMount() {
        this.props.getUser(this.props.match.params.login);
        this.props.getUserRepos(this.props.match.params.login);
    }

    static propTypes = {
        loading: PropTypes.bool,
        user: PropTypes.object.isRequired,
        repos: PropTypes.array.isRequired,
        getUser: PropTypes.func.isRequired,
        getUserRepos: PropTypes.func.isRequired
    }

    render() {
        const {
            login,
            // id,
            // node_id,
            avatar_url,
            // gravatar_id,
            // url,
            html_url,
            // followers_url,
            // following_url,
            // gists_url,
            // starred_url,
            // subscriptions_url,
            // organizations_url,
            // repos_url,
            // events_url,
            // received_events_url,
            // type,
            site_admin,
            name,
            company,
            blog,
            location,
            // email,
            hireable,
            bio,
            public_repos,
            public_gists,
            followers,
            following,
            // created_at,
            // updated_at
        } = this.props.user;

        const { loading, repos } = this.props;

        if (loading) return <Spinner />
        return (
            <Fragment>
                <Link to="/" className="btn btn-light">
                    Back to search
                </Link>
                Hireable:{' '}
                {hireable ? (<i className="fas fa-check text-success" />)
                    :
                    (<i className="fas fa-times-circle text-danger" />)}

                <div className="card grid-2">
                    <div className="all-center">
                        <img src={avatar_url} className="round-img" alt="" style={{ Width: '150px' }} />
                        <h1>{name}</h1>
                        <p>location: {location}</p>
                    </div>
                    <div>
                        {bio && (<Fragment>
                            <h3>Bio</h3>
                            <p>{bio}</p>
                        </Fragment>)}
                        <a href={html_url} className="btn btn-dark my-1">
                            Visit Github Profile
                        </a>
                        <ul>
                            <li>
                                {login && <Fragment>
                                    <strong>Username: </strong> {login}
                                </Fragment>}
                            </li>
                            <li>
                                {login && <Fragment>
                                    <strong>company: </strong> {company}
                                </Fragment>}
                            </li>
                            <li>
                                {login && <Fragment>
                                    <strong>Website: </strong> {blog}
                                </Fragment>}
                            </li>
                            <li>
                                {login && <Fragment>
                                    <strong>Site admin: </strong> {site_admin}
                                </Fragment>}
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="card text-center">
                    <div className="badge badge-primary">
                        Followers: {followers}
                    </div>
                    <div className="badge badge-success">
                        Following: {following}
                    </div>
                    <div className="badge badge-light">
                        Public Repo: {public_repos}
                    </div>
                    <div className="badge badge-dark">
                        Public Gists: {public_gists}
                    </div>
                </div>
                <Repos repos={repos} />
            </Fragment>
        )
    }
}

export default User
