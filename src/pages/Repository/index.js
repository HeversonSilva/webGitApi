import React, { Component } from 'react';
import PropTypes from 'prop-types';

import api from '../../services/api';

import { LoadingContainer, Container, Owner, LinkBack } from './styles';

export default class Repository extends Component {
  static propTypes = {
    match: PropTypes.shape({
      params: PropTypes.shape({
        profile: PropTypes.string,
      }),
    }).isRequired,
  };

  state = {
    profile: {},
    loading: true,
  };

  async componentDidMount() {
    const { match } = this.props;

    const profileLogin = decodeURIComponent(match.params.profile);

    const response = await api.get(`/users/${profileLogin}/repos`, {
      params: {
        per_page: 5,
      },
    });

    this.setState({
      profile: response.data,
      loading: false,
    });
  }

  render() {
    const { profile, loading } = this.state;

    if (loading) {
      return (
        <LoadingContainer>
          <span>L</span>
          <span>O</span>
          <span>A</span>
          <span>D</span>
          <span>I</span>
          <span>N</span>
          <span>G</span>
        </LoadingContainer>
      );
    }

    return (
      <Container>
        <LinkBack to="/">Go Back</LinkBack>
        <Owner>
          {profile.map(prof => (
            <li key={prof.id}>
              <h1>{prof.name}</h1>
              <span>{prof.language}</span>
              <p>{prof.description}</p>
            </li>
          ))}
        </Owner>
      </Container>
    );
  }
}
