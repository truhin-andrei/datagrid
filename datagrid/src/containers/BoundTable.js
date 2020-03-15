import React, {Component} from "react";
import { connect } from 'react-redux'
import ReactVirtualizedTable from '../components/ReactVirtualizedTable'

class BoundTable extends Component {

    render() {
      //  console.log(88, this.props.peopleData);
        if (this.props.peopleData.isFetching) {
          return <p>loading......</p>
        }

        return (
          <ReactVirtualizedTable rows={this.props.peopleData.people}/>
        )
    }
}

const mapStateToProps = state => {
 // console.log(1, state)
    return {
      peopleData: state.peopleData
    }
  }

  export default connect(
    mapStateToProps
  )(BoundTable)