import { connect } from 'react-redux';
import  AddressData from './../components/AddressData';

function mapStateToProps(state: any, Props: any){
    return {
        addressData: state.addressData,
    }
}
export default connect(mapStateToProps)(AddressData);