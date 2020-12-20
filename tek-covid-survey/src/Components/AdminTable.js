import React, { Component } from 'react';
import AdminNav from './AdminNav';
import AdminTable  from './AdminTable1';
class AdminTables extends Component {
    state = {  }
    render() { 
        return ( <div>
            <AdminNav />
            <AdminTable />
        </div> );
    }
}
 
export default AdminTables;