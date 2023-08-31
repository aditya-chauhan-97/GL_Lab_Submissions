import { useEffect, useState } from "react";
import { getAllExpenseItems } from "../services/expense";
import { Container } from "react-bootstrap";
import { ExpenseItems } from "./ExpenseItems";
import IExpenseItem from "../models/expense";
import { ExpenseByPayee } from "./ExpenseByPayee";

const ExpenseTrackerApp = () => {


    const [expenseItems,setExpenseItems] = useState<IExpenseItem[]>([]);

    useEffect( () => {
        const getAllExpenseItemsInvoker = async() => {
            const response = await getAllExpenseItems();
            setExpenseItems( response );
        }

        getAllExpenseItemsInvoker();
    }

    )

    return (
        <Container>
            <h2>Expense Tracker App</h2>
            <ExpenseItems expenseItems={expenseItems}></ExpenseItems>
            <ExpenseByPayee expenseItems={expenseItems}></ExpenseByPayee>
        </Container>
    );
};

export default ExpenseTrackerApp;