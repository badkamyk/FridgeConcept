import * as React from 'react';
import { IFormFields } from "../interfaces/ProductInfo"
import Button from "./componentElements/Form/Button";

const FridgeItems = ({
    products,
    handleEdit,
    handleRemove
}: {
    products: IFormFields[];
    handleEdit: (e: React.MouseEvent<HTMLButtonElement>, id: string) => void;
    handleRemove: (e: React.MouseEvent<HTMLButtonElement>, id: string) => void;
}) => {
    return (
        <>
            <p style={{textAlign: "center", marginTop: "3em"}}>Recently added products: </p>
            {products.map((product: IFormFields) => {
                return (
                    <div
                        style={{ textAlign: "center", marginTop: "3em" }}
                        key={product.id}
                    >
                        <p>
                            {product.productName} {product.amount} {product.chosenMeasure}
                        </p>
                        <Button onClick={(e) => handleEdit(e, product.id)} btnText="Edit" />
                        <Button
                            onClick={(e) => handleRemove(e, product.id)}
                            btnText="Remove"
                        />
                    </div>
                );
            })}
        </>
    );
};

export default FridgeItems;
