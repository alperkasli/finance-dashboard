import React from "react";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import { CallMade, CallReceived } from "@material-ui/icons";
import Grid from "@material-ui/core/Grid";
import Chip from "@material-ui/core/Chip";

import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { Button } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
	root: {
		marginBottom: theme.spacing(2),
	},
	infoContainer: {
		margin: theme.spacing(3, 3),
	},
	paper: {
        padding: theme.spacing(2),
        margin: '0'
	},
	chip: {
		backgroundColor: theme.palette.background.default,
		color: '#fff'
	}
}));

function TabPanel(props) {
	const { children, value, index, ...other } = props;

	return (
		<div
			role="tabpanel"
			hidden={value !== index}
			id={`simple-tabpanel-${index}`}
			aria-labelledby={`simple-tab-${index}`}
			{...other}
		>
			{value === index && <Box>{children}</Box>}
		</div>
	);
}

const OrderTabs = () => {
	const classes = useStyles();
	const [value, setValue] = React.useState(0);

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};

	return (
		<div className={classes.root}>
			<div>
				<Tabs
					value={value}
					onChange={handleChange}
					indicatorColor="primary"
					textColor="primary"
				>
					<Tab label="Market Order" />
					<Tab label="Limit Order" />
					<Tab label="Stop Market" />
				</Tabs>
			</div>
			<Paper>
				<TabPanel value={value} index={0}>
					<Grid container>
						<Grid item md={6}>
							<Paper className={classes.paper}>
								<Typography
									component="h5"
									variant="h5"
									style={{ marginBottom: "1rem" }}
								>
									<CallReceived style={{ marginRight: "1rem" }} />
									Quick Buy
								</Typography>
								<Grid container style={{ marginBottom: "1rem" }}>
									<Grid item md={3}>
										I want to buy{" "}
									</Grid>
									<Grid item md={3}>
										<Chip label="6.5345342" className={classes.chip} />
									</Grid>
									<Grid item md={3}>
										ETH
									</Grid>
								</Grid>
								<Grid container>
									<Grid item md={3}>
										I will pay
									</Grid>
									<Grid item md={3}>
										<Chip label="234.52342" className={classes.chip}/>
									</Grid>
									<Grid item md={3}>
										PLN
									</Grid>
									<Grid item md={3}>
										<Button variant="contained" color="primary">
											BUY
										</Button>
									</Grid>
								</Grid>
							</Paper>
						</Grid>
						<Grid item md={6}>
							<Paper className={classes.paper}>
								<Typography
									component="h5"
									variant="h5"
									style={{ marginBottom: "1rem" }}
								>
									<CallMade style={{ marginRight: "1rem" }} />
									Quick Sell
								</Typography>
								<Grid container style={{ marginBottom: "1rem" }}>
									<Grid item md={3} >
										I want to sell{" "}
									</Grid>
									<Grid item md={3}>
										<Chip label="6.5345342" className={classes.chip}/>
									</Grid>
									<Grid item md={3}>
										ETH
									</Grid>
								</Grid>
								<Grid container>
									<Grid item md={3}>
										I want to receive
									</Grid>
									<Grid item md={3}>
										<Chip label="234.52342" className={classes.chip}/>
									</Grid>
									<Grid item md={3}>
										PLN
									</Grid>
									<Grid item md={3}>
										<Button variant="contained">SELL</Button>
									</Grid>
								</Grid>
							</Paper>
						</Grid>
					</Grid>
				</TabPanel>
				<TabPanel value={value} index={1}>
					tab two
				</TabPanel>
				<TabPanel value={value} index={2}>
					tab Three
				</TabPanel>
			</Paper>
		</div>
	);
};

export default OrderTabs;
