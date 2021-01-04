import React, { Component } from "react";
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
import Collapse from '@material-ui/core/Collapse';
import Button from '@material-ui/core/Button';
import { Link } from "react-router-dom";
import { IconButton, Box, Typography } from "@material-ui/core";
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';

function Row(props) {
    const { row } = props
    // for(const [i, res] of row.entries()){
    //     console.log(res.id)        
    // }
    const [open, setOpen] = React.useState(false)

    const headerStyles = {
        fontSize: 14,
        fontWeight: "bold",
    }
    const bodyStyles = {
        fontSize: 14
    }

    return (
        row.map((obj)=>
        <React.Fragment>
            <TableRow>
                <TableCell style={bodyStyles} align="center">{obj.id}</TableCell>
                <TableCell style={bodyStyles} align="center">{obj.name}</TableCell>
                <TableCell style={bodyStyles} align="center">{obj.score}</TableCell>
                <TableCell style={bodyStyles} align="center">
                    {obj.score < 10 ? 
                        "Danger"
                     : obj.score < 20 ? 
                        "Medium risk" :
                            "Out of danger"
                    }
                </TableCell>
                <TableCell style={bodyStyles} align="center">
                    <Link to={`/adminguidelines/${obj.id}`}>
                        <button className="button">Show</button>
                    </Link>
                </TableCell>
                <TableCell style={bodyStyles} align="center"><button className="button">Show</button></TableCell>
                <TableCell style={bodyStyles} align="center">
                    <IconButton aria-label="expand row" size="small" onClick={() => setOpen(!open)}>
                        {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                    </IconButton>
                </TableCell>
            </TableRow>
            <TableRow>
            <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
                <Collapse in={open} timeout="auto" unmountOnExit>
                    <Box margin={1}>
                        <Typography className="heading-center" align="center" variant="h6" gutterBottom component="div">
                            Responses
                  </Typography>
                        <Table size="small">
                            <TableHead>
                                <TableRow>
                                    <TableCell style={headerStyles} align="left">Question 1</TableCell>
                                    <TableCell style={headerStyles} align="left">Question 2</TableCell>
                                    <TableCell style={headerStyles} align="left">Question 3</TableCell>
                                    <TableCell style={headerStyles} align="left">Question 4</TableCell>
                                    <TableCell style={headerStyles} align="left">Question 5</TableCell>
                                    <TableCell style={headerStyles} align="left">Question 6</TableCell>
                                    <TableCell style={headerStyles} align="left">Question 7</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                <TableCell style={bodyStyles} align="left">{obj.q1}</TableCell>
                                <TableCell style={bodyStyles} align="left">{obj.q2}</TableCell>
                                <TableCell style={bodyStyles} align="left">{obj.q3}</TableCell>
                                <TableCell style={bodyStyles} align="left">{obj.q4}</TableCell>
                                <TableCell style={bodyStyles} align="left">{obj.q5}</TableCell>
                                <TableCell style={bodyStyles} align="left">{obj.q6}</TableCell>
                                <TableCell style={bodyStyles} align="left">{obj.q7}</TableCell>

                            </TableBody>
                        </Table>
                    </Box>
                </Collapse>
            </TableCell>
        </TableRow>
        </React.Fragment>
        )
    )
}

class AdminTable extends Component {
    constructor() {
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


    componentDidMount() {
        fetch("http://localhost:8080/api/user")
            .then(response => response.json())
            .then(data => {
                this.setState({
                    tableData: data
                }, () => console.log(data))
            })
    }

    render() {
        const { tableData, rowsPerPage, page } = this.state;
        const count = [tableData]
        const emptyRows = rowsPerPage - Math.min(rowsPerPage, count.length - page * rowsPerPage);

        const headerStyles = {
            fontSize: 14,
            fontWeight: "bold",
        }

        const bodyStyles = {
            fontSize: 14
        }

        return (
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
                                    <TableCell style={headerStyles} align="center">Employee Id</TableCell>
                                    <TableCell style={headerStyles} align="center">Employee Name</TableCell>
                                    <TableCell style={headerStyles} align="center">Survey Score</TableCell>
                                    <TableCell style={headerStyles} align="center">Status</TableCell>
                                    <TableCell style={headerStyles} align="center">Show Guidelines</TableCell>
                                    <TableCell style={headerStyles} align="center">Change Sitting Plan</TableCell>
                                    <TableCell style={headerStyles} align="center">Show Responses</TableCell>

                                </TableRow>
                            </TableHead>

                            <TableBody>
                                {count.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row1) => (
                                    <Row row={tableData} />
                                ))}
                            </TableBody>
                        </Table>
                        <TableFooter style={{ float: "right" }}>
                            <TableRow>
                                <TablePagination
                                    rowsPerPageOptions={[1, 5]}
                                    colSpan={3}
                                    count={count.length}
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
