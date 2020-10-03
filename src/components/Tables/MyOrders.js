import React from "react";

import useTable from "../Hooks/useTable";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import Button from "@material-ui/core/Button";
import Chip from "@material-ui/core/Chip";
import { makeStyles } from "@material-ui/core/styles";
import {
	Remove,
	Cancel,
	RadioButtonUnchecked,
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
	{ id: "rate", label: "Rate" },
	{ id: "amountEth", label: "Amount ETH" },
	{ id: "pricePln", label: "Price PLN" },
];

const rows = [
	{
		id: 1,
		rate: "0.31242",
		amountEth: "29.13214",
		pricePln: "2.3542",
		gainLoss: "up",
	},
	{
		id: 2,
		rate: "0.123314",
		amountEth: "21.3131",
		pricePln: "5.62",
		gainLoss: "down",
	},
	{
		id: 3,
		rate: "0.85434",
		amountEth: "12.12324",
		pricePln: "1.23",
		gainLoss: "up",
	},
	{
		id: 4,
		rate: "0.12341",
		amountEth: "12.12324",
		pricePln: "1.23",
		gainLoss: "up",
	},
	{
		id: 5,
		rate: "0.45352",
		amountEth: "14.12324",
		pricePln: "2.23",
		gainLoss: "up",
	},
	{
		id: 6,
		rate: "0.64735",
		amountEth: "42.2341",
		pricePln: "6.23",
		gainLoss: "same",
	},
];

const MyOrders = () => {
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
					MyOrders
				</Typography>
				<Chip clickable label="View All" />
			</div>

			<TblContainer>
				<TblHead />
				<TableBody>
					{recordsAfterPagingAndSorting().map((item) => (
						<TableRow key={item.id}>
							<TableCell>
								<span className={classes.centered}>
									{item.gainLoss === "up" ? (
										<RadioButtonUnchecked
											fontSize="small"
											style={{ marginRight: "5px" }}
										/>
									) : item.gainLoss === "down" ? (
										<Remove fontSize="small" style={{ marginRight: "5px" }} />
									) : (
										<Remove
											fontSize="small"
											color="disabled"
											style={{ marginRight: "5px" }}
										/>
									)}
									{item.rate}
								</span>
							</TableCell>
							<TableCell>{item.amountEth}</TableCell>
							<TableCell>
								<span className={classes.centered}>{item.pricePln}</span>
							</TableCell>
							<TableCell>
								<Cancel fontSize="small" />
							</TableCell>
						</TableRow>
					))}
				</TableBody>
			</TblContainer>

			<div className={classes.descriptionContainer}>
				<Button variant="text" className={classes.centered}>
					<Remove fontSize="small" />
					Limit Offer
				</Button>
				<Button variant="text" className={classes.centered}>
					<RadioButtonUnchecked fontSize="small" />
					Stop Offer
				</Button>
			</div>
		</>
	);
};

export default MyOrders;
