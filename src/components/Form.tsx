import * as React from "react";
import { ChangeEvent, useRef } from "react";
import "../styles/Form.css";
import Input from "./componentElements/Form/Input";
import Select from "./componentElements/Form/Select";
import Button from "./componentElements/Form/Button";
import { IFormFields } from "../interfaces/ProductInfo";
import { fluids, solids } from "../utils/units";
import { v4 as uuidv4 } from 'uuid';


const Form = ({
    products,
    setProducts,
    edit,
    resetEdit
}: {
    products: IFormFields[];
    setProducts: (
        product: ((prevProducts: IFormFields[]) => IFormFields[]) | []
    ) => void;
    edit?: IFormFields;
    resetEdit: (edit: IFormFields | undefined) => void;
}) => {
    const [formData, setFormData] = React.useState<IFormFields>({
        productName: "",
        texture: "fluid",
        measureTypes: fluids,
        chosenMeasure: fluids[0],
        amount: 0,
        id: uuidv4()
    });
    const productInput = useRef<HTMLInputElement>(null);

    if (edit) {
        if (formData.id !== edit.id) {
            productInput.current?.focus();
            setFormData(edit);
        }
    }

    const handleChange = (
        e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
    ) => {
        const { name, value } = e.target;
        setFormData((prevFormData) => {
            return {
                ...prevFormData,
                chosenMeasure:
                    name === "texture"
                        ? value === "fluid"
                            ? "ml"
                            : "kg"
                        : prevFormData.chosenMeasure,
                [name]: name === "amount" ? +value : value,
                measureTypes:
                    name === "texture"
                        ? value === "fluid"
                            ? fluids
                            : solids
                        : prevFormData.measureTypes,
            };
        });
    };

    const productExists = (id: string) => {
        return products.find((product) => product.id === id);
    }

    const editProduct = (prevProducts: IFormFields[], id: string) => {
        return prevProducts.map((product) => {
            if (product.id === id) {
                return formData;
            }
            return product;
        });
    }


    const setNewProducts = (prevProducts: IFormFields[], formData: IFormFields[], edit?: IFormFields) => {
        if (edit) {
            return editProduct(prevProducts, edit.id);
        }
        return [...prevProducts, ...formData];
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (productExists(formData.id)) {
            // setNewProducts(products, [formData], edit);
            setProducts((prevProducts) => setNewProducts(prevProducts, [formData], edit));
            resetEdit(undefined);
        } else {
            setProducts((prevProducts: IFormFields[]) => setNewProducts(prevProducts, [formData]));
        }
        setFormData({
            productName: "",
            texture: "fluid",
            measureTypes: fluids,
            chosenMeasure: fluids[0],
            amount: 0,
            id: uuidv4(),
        });
    };

    return (
        <form onSubmit={handleSubmit}>
            <Input
                placeholder={"Type in product name"}
                id="productName"
                name="productName"
                type="text"
                ref={productInput}
                value={formData.productName}
                onChange={handleChange}
            />

            <Input
                placeholder={"Type in amount"}
                id="amount"
                max="100000"
                name="amount"
                type="number"
                value={formData.amount}
                onChange={handleChange}
            />

            <Select
                id="texture"
                placeholder="Choose product type"
                name="texture"
                value={formData.texture}
                onChange={handleChange}
            />
            <Select
                id="measure"
                placeholder="Choose measure type"
                name="chosenMeasure"
                value={formData.chosenMeasure}
                measureTypes={formData.measureTypes}
                onChange={handleChange}
            />
            <Button btnText={edit ? "Edit product" : "Add product to fridge"} btnClass="form--btn" />
        </form>
    );
};

export default Form;
