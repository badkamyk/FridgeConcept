import * as React from "react";
import { ChangeEvent, useRef } from "react";
import "../styles/Form.css";
import Input from "./componentElements/Form/Input";
import Select from "./componentElements/Form/Select";
import Button from "./componentElements/Form/Button";
import { IFormFields } from "../interfaces/ProductInfo";
import { measureData } from "../utils/units";
import { v4 as uuidv4 } from 'uuid';

const Form = ({
    products,
    setProducts,
    edit,
    resetEdit
}: {
    products: IFormFields[];
    setProducts: (product: (IFormFields | { amount: number; chosenMeasure: string; measureTypes?: string[] | undefined; id: string; productName: string; })[] | ((prevProducts: IFormFields[]) => IFormFields[])) => void;
    edit?: IFormFields;
    resetEdit: (edit: IFormFields | undefined) => void;
}) => {
    const [formData, setFormData] = React.useState<IFormFields>({
        productName: "",
        measureTypes: measureData,
        chosenMeasure: measureData[0],
        amount: 0,
        id: uuidv4()
    });
    const productInput = useRef<HTMLInputElement>(null);

    if (edit) {
        if (formData.id !== edit.id) {
            productInput.current?.focus();
            setFormData({ ...edit, measureTypes: measureData });
        }
    }

    const handleChange = (
        e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
    ) => {
        const { name, value } = e.target;
        setFormData((prevFormData) => {
            return {
                ...prevFormData,
                [name]: value

            };
        });
    };

    const handleAmountChange = (
        e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
    ) => {
        const { name, value } = e.target;
        setFormData((prevFormData) => {
            return {
                ...prevFormData,
                [name]: parseInt(value, 10),

            };
        });
    };

    const productExists = (id: string) => {
        return products.find((product) => product.id === id);
    }

    const editProducts = (prevProducts: IFormFields[], id: string) => {
        return prevProducts.map((product) => {
            if (product.id === id) {
                return formData;
            }
            return product;
        });
    }

    const setNewProducts = (prevProducts: IFormFields[], formData: IFormFields[], edit?: IFormFields) => {
        if (edit) {
            return editProducts(prevProducts, edit.id);
        }
        return [...prevProducts, ...formData];
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const removedMeasureTypes = structuredClone(formData);
        delete removedMeasureTypes.measureTypes;
        setProducts((prevProducts: IFormFields[]) => setNewProducts(prevProducts, [removedMeasureTypes], edit));
        resetEdit(undefined);
        resetForm();
    };

    const resetForm = () => {
        setFormData({
            productName: "",
            measureTypes: measureData,
            chosenMeasure: measureData[0],
            amount: 0,
            id: uuidv4(),
        });
    }

    return (
        <form onSubmit={handleSubmit}>
            <Input
                placeholder={"Type in product name"}
                id="productName"
                name="productName"
                type="text"
                label={"Product name"}
                ref={productInput}
                value={formData.productName}
                onChange={handleChange}
            />

            <Input
                placeholder={"Type in amount"}
                id="amount"
                // min="1"
                max="100000"
                label={"Amount"}
                name="amount"
                type="number"
                value={formData.amount.toString()}
                onChange={handleAmountChange}
            />
            <Select
                id="measure"
                label="Choose measure type"
                name="chosenMeasure"
                value={formData.chosenMeasure}
                list={formData.measureTypes}
                onChange={handleChange}
            />
            <Button text={edit ? "Edit product" : "Add product to fridge"} className="form--btn" />
        </form>
    );
};

export default Form;
