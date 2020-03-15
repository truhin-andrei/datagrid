import React, {Component} from "react";
import { connect } from 'react-redux'
import ReactVirtualizedTable from '../components/ReactVirtualizedTable'
import {

  searchText, sortNumber
} from '../actions/actions'

class BoundTable extends Component {

    render() {
   //  console.log(88, this.props.onSearch);
        if (this.props.peopleData.isFetching) {
          return <p>loading......</p>
        }

        return (
          <ReactVirtualizedTable 
          rows={this.props.peopleData.filteredPeople || this.props.peopleData.people} 
          onSearch={this.props.onSearch}
          onSort={this.props.onSort}
          direction={this.props.direction}
          />
          
        )
    }
}

// const searchText = (text) => {

// }

const mapStateToProps = state => {
  console.log(1, state)
    return {
      peopleData: state.peopleData,
      direction: state.peopleData.direction
    }
  }

  const mapDispatchToProps = (dispatch, ownProps) => {
    return {
      onSearch: (ownProps) => {
       return dispatch(searchText(ownProps))
      },
      onSort: (ownProps) => {
        return dispatch(sortNumber(ownProps))
       },
    }
  }

  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(BoundTable)