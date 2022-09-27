import React, { useState } from 'react';
import TablePagination from '@mui/material/TablePagination';

const Pagination = ({ setPage1, setRowsPerPage1, label, count }) => {

    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);

    const handleChangePage = (event, newPage) => {
        // console.log("handleChangePage")
        setPage(newPage);
    };


    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);

        setRowsPerPage1(parseInt(event.target.value, 10));
        setPage1(0);
    };


    return (
        <TablePagination
            component="div"
            rowsPerPageOptions={[3, 6]}
            count={count}
            page={page}
            onPageChange={handleChangePage}
            labelRowsPerPage={label}
            rowsPerPage={rowsPerPage}
            onRowsPerPageChange={handleChangeRowsPerPage}
        />
    )
}

export default Pagination