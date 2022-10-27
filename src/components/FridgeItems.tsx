import * as React from 'react';
import { IFormFields } from "../interfaces/ProductInfo"
import Button from "./componentElements/Form/Button";
import "../index.css";
import { Pagination } from "@mui/material";

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
    const [rowsPerPage, setRowsPerPage] = React.useState(window.innerWidth < 800 ? 3 : 9);
    const handleChangePage = (event: unknown, newPage: number) => {
        setPage(newPage);

    };
    const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRowsPerPage(+event.target.value);
        setPage(1);

    };

    return (
        <div className="fridge-items--container">
            <h2>My Fridge</h2>
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
            </table>
            <div className="mui-pagination--container">
                <Pagination
                    count={Math.ceil(products.length / rowsPerPage)}
                    page={page}
                    sx={{ '& > *': { border: 1, borderColor: 'primary.main', color: 'primary.main', padding: 1 } }}
                    onChange={handleChangePage}
                // rowsPerPage={rowsPerPage}
                // onRowsPerPageChange={handleChangeRowsPerPage}
                />
            </div>
        </div>
    );
};

export default FridgeItems;
