'use strict';

import React, {Component} from 'react';
import ReactCSSTransitionGroup  from 'react-addons-css-transition-group';
import { Button, YearSelector } from '../containers';

import styles from '../../styles/components/dashboard.scss';

class Dashboard extends Component {

  showYearSelector() {
    if(!this.props.yearlyPercentage) return false;

    let noData = true;
    for(let i = 0, j = this.props.yearlyPercentage.length; i < j; i++) {
      if(this.props.yearlyPercentage[i].percentage > 0) {
        noData = false;
        break;
      }
    }
    return !noData && this.props.mode !== 'editing';
  }

  onClickFirstButton() {
    if(this.props.mode === 'editing') {
      this.props.setAction('cancel');
      this.props.setMode(null);
    } else {
      this.props.setSelectedArea(null);
    }
  }

  onClickSecondButton() {
    if(this.props.mode === 'editing') {
      this.props.setAction('save');
      this.props.setMode(null);
    } else {
      this.props.setMode('editing');
    }
  }

  render() {
    const intro = <div key="intro" className={styles.intro}>
        <Button classes={[ styles.button ]} color="primary" click={() => this.props.setMode('drawing')}>
          <svg className={styles.icon} title="Draw"><use xlinkHref="#drawIcon" x="0" y="0" /></svg>
        </Button>
        <p className={styles.text}>Draw a bounding box to start</p>
      </div>;

    const tools = <div key="tools" className={styles.tools}>
        <div className={styles.buttons}>
          <Button
            classes={[ styles.button ]}
            click={this.onClickFirstButton.bind(this)}
          >
            Cancel
          </Button>
          <Button
            classes={[ styles.button ]}
            click={this.onClickSecondButton.bind(this)}
          >
            {this.props.mode === 'editing' ? 'Save' : 'Edit'}
          </Button>
        </div>
        { this.showYearSelector() && <YearSelector year={this.props.year} setYear={this.props.setYear} /> }
      </div>;

    return (
      <div className={styles.dashboard}>
        <ReactCSSTransitionGroup
          transitionName="dashboard"
          transitionAppear={true}
          transitionAppearTimeout={200}
          transitionEnterTimeout={200}
          transitionLeaveTimeout={200}
        >
          {this.props.selectedArea ? tools : intro}
        </ReactCSSTransitionGroup>
      </div>
    );
  }

}

export default Dashboard;
