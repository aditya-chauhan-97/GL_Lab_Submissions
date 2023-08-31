import { type } from "os";
import { Table } from "react-bootstrap";
import IExpenseItem from "../models/expense";


type ExpenseItemsModel = {
    expenseItems: IExpenseItem[];
}

const ExpenseItems = ( {expenseItems} : ExpenseItemsModel) => {

    const convertDateObjectToString = (date: Date) => {
        const dateObj = new Date(date);

        return dateObj.getDate() + " - " + (dateObj.getMonth() + 1)
            + " - "
            + (dateObj.getFullYear());
    }

    return (
        <div>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Expense Description</th>
                        <th>Payee Name</th>
                        <th>Expense Date</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        expenseItems.map((expenseItem, index) => {
                            return (
                                <tr>
                                    <td>{index}</td>
                                    <td>{expenseItem.expenseDescription}</td>
                                    <td>{expenseItem.payeeName}</td>
                                    <td>{convertDateObjectToString(expenseItem.date)}</td>
                                    <td>{expenseItem.price}</td>
                                </tr>
                            );
                        })

                    }
                </tbody>
            </Table>
        </div>
    );
}

export {ExpenseItems}