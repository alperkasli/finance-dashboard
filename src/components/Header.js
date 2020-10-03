import React from "react";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import {
	EuroSymbol,
	ArrowDropDown,
	RoundedCorner,
	DataUsage,
	Person,
} from "@material-ui/icons";
import IconButton from "@material-ui/core/IconButton";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";

const useStyles = makeStyles((theme) => ({
	container: {
		display: "flex",
		flexWrap: "wrap",
		alignItems: "center",
	},
	dataContainer: {
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		margin: theme.spacing(0, 2),
	},
	dataContainerRight: {
		marginLeft: theme.spacing(2),
	},
	paper: {
		padding: theme.spacing(2, 1),
		backgroundColor: theme.palette.background.default,
	},
}));

const menuOptions = [
	"menu item 1",
	"menu item 2",
	"menu item 3",
	"menu item 4",
];
const Header = () => {
	const classes = useStyles();
	const [anchorEl, setAnchorEl] = React.useState(null);
	const open = Boolean(anchorEl);

	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};
	return (
		<div className={classes.container}>
			<div className={classes.dataContainer}>
				<EuroSymbol />
				<div className={classes.dataContainerRight}>
					<span>
						<b>2.3453534.123 PLN</b>
					</span>{" "}
					<br />
					<small>Last Trade Price</small>
				</div>
			</div>
			<div className={classes.dataContainer}>
				<DataUsage />
				<div className={classes.dataContainerRight}>
					<span style={{ color: "#008000" }}>
						<b>+24.78%</b>
					</span>{" "}
					<br />
					<small>Price (24h)</small>
				</div>
			</div>
			<div className={classes.dataContainer}>
				<RoundedCorner />
				<div className={classes.dataContainerRight}>
					<span>
						<b>6.76325313 ETH</b>
					</span>{" "}
					<br />
					<small>Volume (24h)</small>
				</div>
			</div>
			<Paper
				className={classes.paper}
				style={{ marginLeft: "auto", marginRight: "1rem" }}
			>
				<div className={classes.dataContainer}>
					<RoundedCorner />
					<div className={classes.dataContainerRight}>
						<span>
							<b>6.76325313</b> ETH
						</span>{" "}
						<br />
						<b>840.13</b> PLN
					</div>
				</div>
			</Paper>
			<Paper className={classes.paper}>
				<div className={classes.dataContainer}>
					<Person />
					<div className={classes.dataContainerRight}>
						<b>Mateusz Piatek</b> <br />
						<b style={{ color: "#008000" }}>Verified</b>
					</div>
					<IconButton
						aria-label="more"
						aria-controls="menu-dropdown"
						aria-haspopup="true"
						onClick={handleClick}
					>
						<ArrowDropDown />
					</IconButton>
					<Menu
						id="menu-dropdown"
						anchorEl={anchorEl}
						keepMounted
						open={open}
						onClose={handleClose}
					>
						{menuOptions.map((option) => (
							<MenuItem key={option} onClick={handleClose}>
								{option}
							</MenuItem>
						))}
					</Menu>
				</div>
			</Paper>
		</div>
	);
};

export default Header;
