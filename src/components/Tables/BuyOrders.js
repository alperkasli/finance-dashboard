import React from "react";

import useTable from "../Hooks/useTable";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import { makeStyles } from "@material-ui/core/styles";
import {
	ShoppingCart,
} from "@material-ui/icons";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
	titleContainer: {
		display: "flex",
		justifyContent: "space-between",
	},
	descriptionContainer: {
		display: "flex",
		justifyContent: "space-between",
		margin: "5px auto",
	},
	title: {
		marginBottom: theme.spacing(1),
	},
	centered: {
		display: "flex",
		alignItems: "center",
	},
}));

const headCells = [
	{ id: "ratePln", label: "Rate PLN" },
	{ id: "amountEth", label: "Amount ETH" },
	{ id: "pricePln", label: "Price PLN" },
];

const rows = [
	{
		id: 1,
		ratePln: "2345.67",
		amountEth: "0.05234",
		pricePln: "12345.67",
		gainLoss: "up",
	},
	{
		id: 2,
		ratePln: "2345.67",
		amountEth: "0.05234",
		pricePln: "12345.67",
		gainLoss: "up",
	},
	{
		id: 3,
		ratePln: "2345.67",
		amountEth: "0.05234",
		pricePln: "12345.67",
		gainLoss: "up",
	},
	{
		id: 4,
		ratePln: "2345.67",
		amountEth: "0.05234",
		pricePln: "12345.67",
		gainLoss: "up",
	},
	{
		id: 5,
		ratePln: "2345.67",
		amountEth: "0.05234",
		pricePln: "12345.67",
		gainLoss: "up",
	},
	{
		id: 6,
		ratePln: "2345.67",
		amountEth: "0.05234",
		pricePln: "12345.67",
		gainLoss: "up",
	},
	{
		id: 7,
		ratePln: "2345.67",
		amountEth: "0.05234",
		pricePln: "12345.67",
		gainLoss: "up",
	},
];

const BuyOrders = () => {
	const classes = useStyles();

	const { TblContainer, TblHead, recordsAfterPagingAndSorting } = useTable(
		rows,
		headCells,
		{
			fn: (items) => items,
		}
	);

	return (
		<>
			<div className={classes.titleContainer}>
				<Typography className={classes.title} variant="h5" component="h5">
					Buy Orders
				</Typography>
				<span>
					Total: <b>8782.223</b> ETH
				</span>
			</div>

			<TblContainer>
				<TblHead />
				<TableBody>
					{recordsAfterPagingAndSorting().map((item) => (
						<TableRow key={item.id}>
							<TableCell style={{ color: '#008000'}}>{item.ratePln}</TableCell>
							<TableCell>{item.amountEth}</TableCell>
							<TableCell>{item.pricePln}</TableCell>
							<TableCell>
								<ShoppingCart fontSize="small" />
							</TableCell>
						</TableRow>
					))}
				</TableBody>
			</TblContainer>
		</>
	);
};

export default BuyOrders;
