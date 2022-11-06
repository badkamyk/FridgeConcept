import * as React from 'react';
import { IFormFields } from "../interfaces/ProductInfo"
import Button from "./componentElements/Form/Button";
import "../index.css";
import { Pagination } from "@mui/material";
import { useEffect } from "react";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


const FridgeItems = ({
    products,
    handleEdit,
    handleRemove
}: {
    products: IFormFields[];
    handleEdit: (e: React.MouseEvent<HTMLButtonElement>, id: string) => void;
    handleRemove: (e: React.MouseEvent<HTMLButtonElement>, id: string) => void;
}) => {
    // set pagination for products with react mui
    const [page, setPage] = React.useState(1);
    // const [rowsPerPage, setRowsPerPage] = React.useState(window.innerWidth <= 1000 ? 3 : 9);
    const [rowsPerPage, setRowsPerPage] = React.useState(window.innerWidth <= 1000 ? 3 : 9);
    const handleChangePage = (event: unknown, newPage: number) => {
        setPage(newPage);

    };


    function createData(
        id: string,
        product: string,
        amount: number,
        unit: string,
    ) {
        return { id, product, amount, unit };
    }

    const rows = products.map((product) => {
        return createData(product.id, product.productName, product.amount, product.chosenMeasure)
    });

    const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRowsPerPage(+event.target.value);
        setPage(1);

    };

    useEffect(() => {
        window.addEventListener("resize", () => {
            setRowsPerPage(window.innerWidth <= 1000 ? 3 : 9)
        }
        )
        return () => {
            window.removeEventListener("resize", () => {
                setRowsPerPage(window.innerWidth <= 1000 ? 3 : 9)
            })
        }
    }, [])


    return (
        <div className="fridge-items--container">
            {/* <h2>My Fridge</h2>
            <table>
                <thead>
                    <tr>
                        <th>Product</th>
                        <th>Amount</th>
                        <th>Unit</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {products.slice((page - 1) * rowsPerPage, page * rowsPerPage).map((product) => (
                        <tr key={product.id}>
                            <td>{product.productName}</td>
                            <td>{product.amount}</td>
                            <td>{product.chosenMeasure}</td>
                            <td>
                                <Button
                                    onClick={(e) => handleEdit(e, product.id)}
                                    text={<i className='fa fa-pencil'></i>} className={"form--icons"}
                                />
                                <Button
                                    onClick={(e) => handleRemove(e, product.id)}
                                    text={<i className="fa fa-trash-o"></i>} className={"form--icons"}
                                />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table> */}
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 510, backgroundColor: "#242424", borderRadius: ".6em" }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell align="left">Product</TableCell>
                            <TableCell align="left">Amount&nbsp;(g)</TableCell>
                            <TableCell align="left">Unit&nbsp;(g)</TableCell>
                            <TableCell align="left">Actions&nbsp;(g)</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.slice((page - 1) * rowsPerPage, page * rowsPerPage).map((row) => (
                            <TableRow
                                key={row.id}
                            >
                                <TableCell sx={{}} align="left">{row.product}</TableCell>
                                <TableCell align="left">{row.amount}</TableCell>
                                <TableCell align="left">{row.unit}</TableCell>
                                <TableCell align="left">
                                    <Button
                                        onClick={(e) => handleEdit(e, row.id)}
                                        text={<i className='fa fa-pencil'></i>} className={"form--icons"}
                                    />
                                    <Button
                                        onClick={(e) => handleRemove(e, row.id)}
                                        text={<i className="fa fa-trash-o"></i>} className={"form--icons"}
                                    />
                                </TableCell>
                            </TableRow>
                        ))}

                    </TableBody>
                </Table>
            </TableContainer>
            <div className="mui-pagination--container">
                <Pagination
                    count={Math.ceil(products.length / rowsPerPage)}
                    page={page}
                    onChange={handleChangePage}
                    defaultPage={1}
                    color="primary"
                    size="medium"
                />
            </div>
        </div>
    );
};

export default FridgeItems;
