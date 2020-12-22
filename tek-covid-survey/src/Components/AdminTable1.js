import React, {Component}from "react";
import './AdminMasterTable.css';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableFooter from '@material-ui/core/TableFooter';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import { Link } from "react-router-dom";

class AdminTable extends Component{
    constructor(){
        super()
        this.state = {
            tableData: [],
            page: 0,
            rowsPerPage: 1,
        }
        this.handleChangePage = this.handleChangePage.bind(this)
        this.handleChangeRowsPerPage = this.handleChangeRowsPerPage.bind(this)
    }
    handleChangePage = (event, page) => {
        this.setState({ page });
      };
    
      handleChangeRowsPerPage = event => {
        this.setState({ rowsPerPage: event.target.value });
      };
    

    componentDidMount(){
        fetch("http://localhost:8080/api/user")
        .then(response => response.json())
        .then(data => {
            this.setState({
                tableData: data
            }, () => console.log(data))
    })
    }

    render(){
        const { tableData, rowsPerPage, page } = this.state;
        const emptyRows = rowsPerPage - Math.min(rowsPerPage, tableData.length - page * rowsPerPage);

          const headerStyles = {
              fontSize: 14,
              fontWeight: "bold",
          }

          const bodyStyles = {
              fontSize: 14
          }

        return(
            <div className="admin-table">
            <form>
                <div className="heading-center">
                    <h2 className="h22">Admin Master Table</h2>
                </div>

                <TableContainer component={Paper}>
                    <Table>
                        <TableHead>
                            <TableRow>
                                {/* <TableCell style={headerStyles}>S.No.</TableCell> */}
                                <TableCell style={headerStyles}>Employee Name</TableCell>
                                <TableCell style={headerStyles}>Question&nbsp;1</TableCell>
                                <TableCell style={headerStyles}>Question&nbsp;2</TableCell>
                                <TableCell style={headerStyles}>Question&nbsp;3</TableCell>
                                <TableCell style={headerStyles}>Question&nbsp;4</TableCell>
                                <TableCell style={headerStyles}>Question&nbsp;5</TableCell>
                                <TableCell style={headerStyles}>Question&nbsp;6</TableCell>
                                <TableCell style={headerStyles}>Question&nbsp;7</TableCell>
                                <TableCell style={headerStyles}>Show Guidelines</TableCell>
                            </TableRow>
                        </TableHead>

                        <TableBody>
                            {tableData.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => (
                                <TableRow >
                                    {/* <TableCell style={bodyStyles}>{row.id}</TableCell> */}
                                    <TableCell style={bodyStyles}>{tableData[0]}</TableCell>
                                    <TableCell style={bodyStyles}>{tableData[1]}</TableCell>
                                    <TableCell style={bodyStyles}>{tableData[2]}</TableCell>
                                    <TableCell style={bodyStyles}>{tableData[3]}</TableCell>
                                    <TableCell style={bodyStyles}>{tableData[4]}</TableCell>
                                    <TableCell style={bodyStyles}>{tableData[5]}</TableCell>
                                    <TableCell style={bodyStyles}>{tableData[6]}</TableCell>
                                    <TableCell style={bodyStyles}>{tableData[7]}</TableCell>
                                    <TableCell>
                                    <Link to="/adminguidelines">
                                        <button className="button">Show</button>
                                    </Link>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                    <TableFooter style={{float: "right"}}>
                        <TableRow>
                            <TablePagination
                                rowsPerPageOptions={[1, 5]}
                                colSpan={3}
                                count={tableData.length}
                                rowsPerPage={rowsPerPage}
                                page={page}                    
                                onChangePage={this.handleChangePage}
                                onChangeRowsPerPage={this.handleChangeRowsPerPage}
                            />
                        </TableRow>
                   </TableFooter>
                </TableContainer>
                
            </form>
            </div>
        )
    }
}
export default AdminTable;
