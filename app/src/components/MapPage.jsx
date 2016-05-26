'use strict';

import React, {Component} from 'react';
import {Map, Dashboard, Footer, LoadingSpinner, ErrorModal} from '../containers';

class App extends Component {

  render() {
    return (
      <div>
        { this.props.loading && <LoadingSpinner/> }
        { this.props.error && <ErrorModal text={this.props.error} /> }
        <Map
          zoom={this.props.zoom}
          latLng={[this.props.lat, this.props.lng]}
          year={this.props.year}
          selectedArea={this.props.area}
          setSelectedArea={this.props.setSelectedArea}
          setLatLng={this.props.setLatLng}
          setZoom={this.props.setZoom}
        />
        <Dashboard
          selectedArea={this.props.area}
          setSelectedArea={this.props.setSelectedArea}
        />
        <Footer/>
      </div>
    );
  }

}

export default App;