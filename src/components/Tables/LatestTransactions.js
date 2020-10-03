import React from "react";

import useTable from "../Hooks/useTable";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import { makeStyles } from "@material-ui/core/styles";
import { ArrowDropDown, ArrowDropUp, Remove } from "@material-ui/icons";
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
	{ id: "when", label: "When" },
];

const rows = [
	{
		id: 1,
		ratePln: "2314.66",
		amountEth: "0.036734",
		when: "37 sec",
		gainLoss: "up",
	},
	{
		id: 2,
		ratePln: "3452.42",
		amountEth: "0.012734",
		when: "12 sec",
		gainLoss: "down",
	},
	{
		id: 3,
		ratePln: "1634.24",
		amountEth: "0.098734",
		when: "41 sec",
		gainLoss: "same",
	},
	{
		id: 4,
		ratePln: "6634.24",
		amountEth: "0.098734",
		when: "41 sec",
		gainLoss: "up",
	},
	{
		id: 5,
		ratePln: "4634.24",
		amountEth: "0.048734",
		when: "11 sec",
		gainLoss: "up",
	},
	{
		id: 6,
		ratePln: "3634.24",
		amountEth: "0.058734",
		when: "21 sec",
		gainLoss: "up",
	},
	{
		id: 7,
		ratePln: "9834.24",
		amountEth: "0.098734",
		when: "51 sec",
		gainLoss: "down",
	},
];

const LatestTransactions = () => {
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
			<Typography className={classes.title} variant="h5" component="h5">
				Latest Transactions
			</Typography>

			<TblContainer>
				<TblHead />
				<TableBody>
					{recordsAfterPagingAndSorting().map((item) => (
						<TableRow key={item.id}>
							<TableCell>
								<span className={classes.centered}>
									{item.gainLoss === "up" ? (
										<ArrowDropUp
											style={{ marginRight: "5px", color: "#008000" }}
										/>
									) : item.gainLoss === "down" ? (
										<ArrowDropDown
											color="error"
											style={{ marginRight: "5px" }}
										/>
									) : (
										<Remove color="disabled" style={{ marginRight: "5px" }} />
									)}
									{item.ratePln}
								</span>
							</TableCell>
							<TableCell>{item.amountEth}</TableCell>
							<TableCell>{item.when}</TableCell>
						</TableRow>
					))}
				</TableBody>
			</TblContainer>
		</>
	);
};

export default LatestTransactions;
