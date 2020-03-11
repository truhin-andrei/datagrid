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
        console.log(this.props);
        
        return (
            <DataTable />
        )
    }
}

const mapStateToProps = state => {
    return {
      people: state
    }
  }


  
  export default connect(
    mapStateToProps
  )(BoundTable)