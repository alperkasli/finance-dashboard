import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import { makeStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import {
	KeyboardArrowLeft,
	KeyboardArrowRight,
	AspectRatio,
	ArrowDropDown,
	CompareArrows,
	Edit,
} from "@material-ui/icons";
import CandlestickChart from "./CandlestickChart";

const useStyles = makeStyles((theme) => ({
	topItemsContainer: {
		display: "flex",
		flexWrap: "wrap",
	},
	buttonGroup: {
		backgroundColor: theme.palette.background.default,
		padding: theme.spacing(1),
	},
	dataContainer: {
		display: "flex",
		alignItems: "center",
		height: "100%",
		marginLeft: theme.spacing(1),
	},
	centered: {
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
	},
}));

const timeRanges = ["1h", "3h", "1d", "3d", "7d", "1m", "all"];

const ChartContainer = () => {
	const classes = useStyles();
	const [selectedTimeRange, setSelectedTimeRange] = useState("1d");

	return (
		<Grid container>
			<Grid item sm={12}>
				<Grid container spacing={1}>
					<Grid item>
						<IconButton color="default">
							<Edit />
						</IconButton>
					</Grid>
					<Grid item>
						<ButtonGroup
							className={classes.buttonGroup}
							color="primary"
							variant="text"
							size="small"
							disableElevation
						>
							{timeRanges.map((time) => (
								<Button
									key={time}
									onClick={() => setSelectedTimeRange(time)}
									variant={selectedTimeRange === time && "contained"}
								>
									{time}
								</Button>
							))}
						</ButtonGroup>
					</Grid>
					<Grid item>
						<div className={classes.dataContainer}>
							<span>
								Open: <b>2456.5</b>
							</span>
						</div>
					</Grid>
					<Grid item>
						<div className={classes.dataContainer}>
							<span>
								High: <b>2756.5</b>
							</span>
						</div>
					</Grid>
					<Grid item>
						<div className={classes.dataContainer}>
							<span>
								Low: <b>1456.5</b>
							</span>
						</div>
					</Grid>
					<Grid item>
						<div className={classes.dataContainer}>
							<span>
								Close: <b>1156.5</b>
							</span>
						</div>
					</Grid>
					<Grid item style={{ marginLeft: "auto" }}>
						<div className={classes.centered}></div>
						<IconButton color="default">
							<CompareArrows />
							<ArrowDropDown />
						</IconButton>
					</Grid>
					<Grid item>
						<div className={classes.centered}></div>
						<IconButton color="default">
							<KeyboardArrowLeft />
						</IconButton>
					</Grid>
					<Grid item>
						<div className={classes.centered}></div>
						<IconButton color="default">
							<KeyboardArrowRight />
						</IconButton>
					</Grid>
					<Grid item>
						<div className={classes.centered}></div>
						<IconButton color="default">
							<AspectRatio />
						</IconButton>
					</Grid>
				</Grid>
			</Grid>
			<Grid item sm={12}>
                <CandlestickChart />
            </Grid>
		</Grid>
	);
};

export default ChartContainer;
