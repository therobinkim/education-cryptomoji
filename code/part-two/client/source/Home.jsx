/* SOLUTION FILE */
import React from 'react';

import { MojiList } from './MojiList';
import { getMoji } from './services/requests';

export class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      moji: null
    };
  }

  async componentDidMount() {
    const moji = await getMoji();
    this.setState({
      isLoaded: true,
      moji
    });
  }

  render() {
    const { isLoaded, moji } = this.state;
    if (!isLoaded && !moji) {
      return <div>Searching for moji...</div>;
    } else if (isLoaded && !moji) {
      return <div>No moji found :(</div>;
    }
    return (
      <div>
        <h1>Here are all the moji:</h1>
        <MojiList moji={moji} />
      </div>
    );
  }
}
