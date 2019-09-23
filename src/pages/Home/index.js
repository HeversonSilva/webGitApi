import React, { Component } from 'react';
import { MdSearch } from 'react-icons/md';
import { Link } from 'react-router-dom';

import api from '../../services/api';

import { Container, LinkAssist, List, SearchBar, Form } from './styles';

export default class Home extends Component {
  state = {
    newProfile: '',
    profiles: [],
    // loading: false, TODO
  };

  componentDidMount() {
    const profiles = localStorage.getItem('profiles');

    if (profiles) {
      this.setState({ profiles: JSON.parse(profiles) });
    }
  }

  componentDidUpdate(_, prevState) {
    const { profiles } = this.state;

    if (prevState.profiles !== profiles) {
      localStorage.setItem('profiles', JSON.stringify(profiles));
    }
  }

  handleInputChange = e => {
    this.setState({ newProfile: e.target.value });
  };

  handleSubmit = async e => {
    e.preventDefault();

    const { newProfile, profiles } = this.state;

    const response = await api.get(`/users/${newProfile}`);

    const data = {
      login: response.data.login,
      avatar_url: response.data.avatar_url,
      bio: response.data.bio,
      email: response.data.email,
    };

    this.setState({
      profiles: [...profiles, data],
      newProfile: '',
    });
  };

  render() {
    const { newProfile, profiles } = this.state;

    return (
      <Container>
        <p>Its simple. Just search!</p>
        <LinkAssist to="/howto">Need Assist? </LinkAssist>
        <List>
          {profiles.map(profile => (
            <li key={profile.login}>
              <img src={profile.avatar_url} alt={profile.login} />
              <span>{profile.login}</span>
              <Link to={`/repository/${encodeURIComponent(profile.login)}`}>
                Detalhes
              </Link>
            </li>
          ))}
        </List>
        <SearchBar>
          <Form onSubmit={this.handleSubmit}>
            <input
              type="text"
              placeholder="Search a Github Profile ;)"
              value={newProfile}
              onChange={this.handleInputChange}
            />
            <button type="submit">
              <MdSearch size="24px" />
            </button>
          </Form>
        </SearchBar>
      </Container>
    );
  }
}
