import { connect } from 'react-redux';
import  Map from './../components/Map';

function mapStateToProps(state: any, Props: any){
    return {
        addressData: state.addressData,
    }
}
export default connect(mapStateToProps)(Map);