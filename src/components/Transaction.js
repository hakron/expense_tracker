import React, {useContext} from 'react';
import { GlobalContext } from '../context/GlobalState'

export const Transaction = ({ transaction }) => {
	const {deleteTransaction} = useContext(GlobalContext)
    const sign = transaction.amount < 0 ? '-' : '+'
    const absoluteAmount = Math.abs(transaction.amount);
	return (
		<li className={transaction.amount < 0 ? 'minus' : 'plus'}>
            {transaction.text} <span>{sign}${absoluteAmount}</span>
			<button className="delete-btn" onClick={() => deleteTransaction(transaction.id)}>x</button>
		</li>
	);
};
