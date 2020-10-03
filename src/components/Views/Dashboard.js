import React from "react";

import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import LeftNav from "../LeftNav";
import Markets from "../Tables/Markets";
import MyOrders from "../Tables/MyOrders";
import LatestTransactions from "../Tables/LatestTransactions";
import BuyOrders from "../Tables/BuyOrders";
import SellOrders from "../Tables/SellOrders";
import Header from "../Header";
import OrderTabs from "../OrderTabs";
import ChartContainer from "../ChartContainer";

const useStyles = makeStyles((theme) => ({
	root: {
		display: "flex",
	},
	content: {
		flexGrow: 1,
		padding: theme.spacing(1, 3),
		// height: "100vh",
	},
	paper: {
		padding: theme.spacing(3),
        display: "flex",
        flexDirection: 'column',
        marginBottom: theme.spacing(3)
	},
}));

const Dashboard = () => {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<LeftNav />
			<main className={classes.content}>
				<Grid container spacing={3}>
					<Grid item md={4}>
						<Paper className={classes.paper}>
							<Markets />
						</Paper>
						<Paper className={classes.paper}>
							<MyOrders />
						</Paper>
						<Paper className={classes.paper}>
							<LatestTransactions />
						</Paper>
					</Grid>
					<Grid item md={8}>
                        <Paper className={classes.paper}>
                            <Header />
                        </Paper>
                        <Paper className={classes.paper}>
                            <ChartContainer />
                        </Paper>

                        <OrderTabs />

                        <Grid container>
                            <Grid item md={6}>
                                <Paper className={classes.paper}>
                                    <BuyOrders />
                                </Paper>
                            </Grid>
                            <Grid item md={6}>
                                <Paper className={classes.paper}>
                                    <SellOrders />
                                </Paper>
                            </Grid>
                        </Grid>
					</Grid>
				</Grid>
			</main>
		</div>
	);
};

export default Dashboard;
