import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getAppData } from '../../actions';
import { Route, Switch } from 'react-router-dom';
import TablePage from '../presentation/TablePage';
import GamePage from '../presentation/GamePage';
import styles from '../../styles/main.scss';

class App extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount(){
    this.props.getAppDataDispatcher();
  };

  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" render={(props) => <TablePage {...props} {...this.props} />} />
          <Route path="/:slug" render={(props) => <GamePage {...props} {...this.props} />} />
        </Switch>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getAppDataDispatcher: () => dispatch(getAppData())
  };
};

const mapStateToProps = (state, ownProps) => {
    const { games, ui } = state;
    return {
        games,
        ui
    };
}; 

export default connect(mapStateToProps, mapDispatchToProps)(App); 
