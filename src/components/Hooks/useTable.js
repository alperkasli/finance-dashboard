import React, { useState } from "react";
import {
	Table,
	TableHead,
	TableRow,
	TableCell,
	makeStyles,
	TablePagination,
	TableSortLabel,
} from "@material-ui/core";
import TableContainer from "@material-ui/core/TableContainer";

const useStyles = makeStyles((theme) => ({
	table: {
		"& tbody td": {
			paddingTop: theme.spacing(1),
			paddingBottom: theme.spacing(1),
		},
		"& tbody tr:hover": {
			backgroundColor: theme.palette.type === "light" ? "#191736 !important" : "#303030 !important",
			cursor: "pointer",
		},
		"& tbody tr:nth-child(odd)": {
			backgroundColor: theme.palette.type === "light" ? "#191736 !important" : "#303030 !important",
		},
		"& th": {
			borderBottom: 'none'
		}
	},
}));

export default function useTable(records, headCells, filterFn) {
	const classes = useStyles();

	const [order, setOrder] = useState();
	const [orderBy, setOrderBy] = useState();

	const TblContainer = (props) => (
		<TableContainer>
			<Table className={classes.table}>{props.children}</Table>
		</TableContainer>
	);

	const TblHead = (props) => {
		const handleSortRequest = (cellId) => {
			const isAsc = orderBy === cellId && order === "asc";
			setOrder(isAsc ? "desc" : "asc");
			setOrderBy(cellId);
		};

		return (
			<TableHead>
				<TableRow>
					{headCells.map((headCell) => (
						<TableCell
							key={headCell.id}
							sortDirection={orderBy === headCell.id ? order : false}
						>
							{headCell.disableSorting ? (
								headCell.label
							) : (
								<TableSortLabel
									active={true}
									direction={orderBy === headCell.id ? order : "asc"}
									onClick={() => {
										handleSortRequest(headCell.id);
									}}
								>
									{headCell.label}
								</TableSortLabel>
							)}
						</TableCell>
					))}
				</TableRow>
			</TableHead>
		);
	};


	const TblPagination = () => (
		<TablePagination
			component="div"
			count={records.length}
		/>
	);

	function stableSort(array, comparator) {
		const stabilizedThis = array.map((el, index) => [el, index]);
		stabilizedThis.sort((a, b) => {
			const order = comparator(a[0], b[0]);
			if (order !== 0) return order;
			return a[1] - b[1];
		});
		return stabilizedThis.map((el) => el[0]);
	}

	function getComparator(order, orderBy) {
		return order === "desc"
			? (a, b) => descendingComparator(a, b, orderBy)
			: (a, b) => -descendingComparator(a, b, orderBy);
	}

	function descendingComparator(a, b, orderBy) {
		if (b[orderBy] < a[orderBy]) {
			return -1;
		}
		if (b[orderBy] > a[orderBy]) {
			return 1;
		}
		return 0;
	}

	const recordsAfterPagingAndSorting = () => {
		return stableSort(
			filterFn.fn(records),
			getComparator(order, orderBy)
		);
	};

	return {
		TblContainer,
		TblHead,
		TblPagination,
		recordsAfterPagingAndSorting,
	};
}
