import React, {Component} from "react";
import { connect } from 'react-redux'

import DataTable from '../components/DataTable';

class BoundTable extends Component {

    render() {
      //  console.log(88, this.props.peopleData);
        if (this.props.peopleData.isFetching) {
          return <p>loading......</p>
        }

        return (
            <DataTable rows={this.props.peopleData.people}/>
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