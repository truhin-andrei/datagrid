import React, {Component} from "react";
import { connect } from 'react-redux'

import DataTable from '../components/DataTable';



class BoundTable extends Component {

    componentDidMount(){
        // const {store} = this.props;
        // console.log(store.getState())
        // store.subscribe(() => console.log(15, store.getState()))
        //store.dispatch(FETCH_DATA)
    }
    render() {
        console.log(this.props.peopleData);
        
        return (
            <DataTable />
        )
    }
}

const mapStateToProps = state => {
  console.log(1, state)
    return {
      peopleData: state.peopleData
    }
  }


  
  export default connect(
    mapStateToProps
  )(BoundTable)