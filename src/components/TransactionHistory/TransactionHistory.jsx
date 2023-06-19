import { Table } from "./TransactionHistory.styled"
import PropTypes from "prop-types"

export const TransactionHistory = ({ items }) => {
    return (
        <Table>
            <thead>
               <tr>
                 <th>Type</th>
                 <th>Amount</th>
                 <th>Currency</th>
               </tr>
            </thead>
            
             <tbody>
             
                {items.map(({ id, type, amount, currency }) => {
                    return (
                        <tr key={id}>
                          <td>{type}</td>
                          <td>{amount}</td>
                          <td>{currency}</td>
                        </tr>
                    )
                })}

             </tbody>
        </Table>
    )
}

TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(PropTypes.object).isRequired,
}