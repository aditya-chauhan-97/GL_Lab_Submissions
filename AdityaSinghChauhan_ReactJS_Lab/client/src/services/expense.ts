import axios from "axios";
import IExpenseItem from "../models/expense";

const getAllExpenseItems = async () => {

    const GET_EXPENSE_ITEMS_URL = 'http://localhost:4000/expenses'

    const response = await axios.get<IExpenseItem[]>(GET_EXPENSE_ITEMS_URL);
    return response.data;
}

export {getAllExpenseItems};