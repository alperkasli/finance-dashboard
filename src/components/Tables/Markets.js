import React, { useState } from "react";

import useTable from "../Hooks/useTable";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import { Search, EuroSymbol, Star, ArrowDropDown, ArrowDropUp, Remove, StarBorder } from "@material-ui/icons";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
	searchInput: {
		width: "50%",
		margin: "0",
	},
	buttonGroup: {
		backgroundColor: theme.palette.background.default,
		padding: theme.spacing(1),
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
	{ id: "name", label: "Name" },
	{ id: "price", label: "Price" },
	{ id: "change", label: "Change" },
];

const rows = [
	{ id: 1, name: "BTC", price: "1232.00", change: "1.82", gainLoss: 'up', favorite: true },
	{ id: 2, name: "ETH", price: "1334.00", change: "0.52", gainLoss: 'down', favorite: true },
	{ id: 3, name: "LSK", price: "1234.00", change: "0", gainLoss: 'same', favorite: false },
	{ id: 4, name: "DASH", price: "4353.00", change: "2", gainLoss: 'up', favorite: false },
	{ id: 5, name: "XRP", price: "1341.00", change: "12", gainLoss: 'up', favorite: true },
	{ id: 6, name: "ETH", price: "141.00", change: "11", gainLoss: 'up', favorite: true },
	{ id: 7, name: "LSK", price: "15345.00", change: "9", gainLoss: 'up', favorite: false },
	{ id: 8, name: "DASH", price: "1323.00", change: "6.4", gainLoss: 'up', favorite: true },
];

const Markets = () => {
	const classes = useStyles();
	const [selectedCurrency, setSelectedCurrency] = useState("PLN");
	const [filterFn, setFilterFn] = useState({
		fn: (items) => {
			return items;
		},
	});

	const { TblContainer, TblHead, recordsAfterPagingAndSorting } = useTable(
		rows,
		headCells,
		filterFn
	);

	const handleSearch = (e) => {
		let target = e.target;
		setFilterFn({
			fn: (items) => {
				if (target.value === "") return items;
				else
					return items.filter((x) =>
						x.name.toLowerCase().includes(target.value)
					);
			},
		});
	};

	return (
		<>
			<Typography className={classes.title} variant="h5" component="h5">
				Markets: ETH/{selectedCurrency}
			</Typography>
			<Grid container spacing={1} alignItems="flex-end">
				<Grid item sm={1}>
					<Search />
				</Grid>
				<Grid item sm={4}>
					<TextField onChange={handleSearch} label="Search.." />
				</Grid>
				<Grid item sm={7}>
					<ButtonGroup
						className={classes.buttonGroup}
						color="primary"
						variant="text"
						disableElevation
					>
						<Button
							onClick={() => setSelectedCurrency("PLN")}
							variant={selectedCurrency === "PLN" && "contained"}
						>
							PLN
						</Button>
						<Button
							onClick={() => setSelectedCurrency("EUR")}
							variant={selectedCurrency === "EUR" && "contained"}
						>
							EUR
						</Button>
						<Button
							onClick={() => setSelectedCurrency("USD")}
							variant={selectedCurrency === "USD" && "contained"}
						>
							USD
						</Button>
						<Button
							onClick={() => setSelectedCurrency("BTC")}
							variant={selectedCurrency === "BTC" && "contained"}
						>
							BTC
						</Button>
					</ButtonGroup>
				</Grid>
			</Grid>

			<TblContainer>
				<TblHead />
				<TableBody>
					{recordsAfterPagingAndSorting().map((item) => (
						<TableRow key={item.id}>
							<TableCell>
								<span className={classes.centered}>
									<EuroSymbol color="primary" fontSize="small" style={{ marginRight: "5px" }} />{" "}
									{item.name}
								</span>
							</TableCell>
							<TableCell>{item.price}</TableCell>
							<TableCell>
                                <span className={classes.centered}>
                                    {item.gainLoss === 'up' ? <ArrowDropUp style={{ marginRight: "5px", color: '#008000' }}/> : item.gainLoss === 'down' ? 
                                    <ArrowDropDown color="error" style={{ marginRight: "5px" }}/> : <Remove color="disabled" style={{ marginRight: "5px" }}/>}
									{item.change} %
								</span>
                            </TableCell>
							<TableCell>
								{item.favorite ? 
								<Star style={{ color: '#E2D002'}} fontSize="small" /> : 
								<StarBorder fontSize="small" />
								}
							</TableCell>
						</TableRow>
					))}
				</TableBody>
			</TblContainer>
		</>
	);
};

export default Markets;
