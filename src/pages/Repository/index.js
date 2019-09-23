import React, { Component } from 'react';
import PropTypes from 'prop-types';

import api from '../../services/api';

import { LoadingContainer, Container } from './styles';

export default class Repository extends Component {
  static propTypes = {
    match: PropTypes.shape({
      params: PropTypes.shape({
        profileLogin: PropTypes.string,
      }),
    }).isRequired,
  };

  state = {
    profileRepos: {},
    loading: true,
  };

  async componentDidMount() {
    const { match } = this.props;

    const profileLogin = decodeURIComponent(match.params.profiles);

    const response = await api.get(`/users/${profileLogin}/repos`, {
      params: {
        per_page: 10,
      },
    });

    this.setState({
      profileRepos: response.data,
      loading: false,
    });
  }

  render() {
    const { profileRepos, loading } = this.state;

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

    return <Container>{/* <Owner /> */}</Container>;
  }
}
