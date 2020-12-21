import React, { Component } from 'react';
import AdminNav from './AdminNav';
import Guidelines  from './Guidelines';
class AdminGuidelines extends Component {
    state = {  }
    render() { 
        return ( <div>
            <AdminNav />
            <Guidelines />
        </div> );
    }
}
 
export default AdminGuidelines;