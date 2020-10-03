import React, { useState } from "react";

import clsx from "clsx";
import Drawer from "@material-ui/core/Drawer";
import Divider from "@material-ui/core/Divider";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import ThemeIcon from "@material-ui/icons/Brightness4";
import MenuIcon from "@material-ui/icons/Menu";
import { makeStyles } from "@material-ui/core/styles";
import {
	useGlobalDispatchContext,
	useGlobalStateContext,
} from "../context/globalContext";

const drawerWidth = 240;
const useStyles = makeStyles((theme) => ({
	root: {
		display: "flex",
	},
	drawer: {
		width: drawerWidth,
		flexShrink: 0,
		whiteSpace: "nowrap",
	},
	drawerOpen: {
		width: drawerWidth,
		transition: theme.transitions.create("width", {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.enteringScreen,
		}),
	},
	drawerClose: {
		transition: theme.transitions.create("width", {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.leavingScreen,
		}),
		overflowX: "hidden",
		width: theme.spacing(7) + 1,
		[theme.breakpoints.up("sm")]: {
			width: theme.spacing(9) + 1,
		},
	},
}));

const LeftNav = () => {
	const classes = useStyles();
	// const open = false;
	const [open, setOpen] = useState(false);
	const dispatch = useGlobalDispatchContext();
	const { currentTheme } = useGlobalStateContext();

	const toggleTheme = () => {
		if (currentTheme === "dark") {
			dispatch({ type: "TOGGLE_THEME", theme: "light" });
		} else {
			dispatch({ type: "TOGGLE_THEME", theme: "dark" });
		}
	};

	const handleExpandDrawer = () => {
		setOpen(!open);
	};

	return (
		<Drawer
			variant="permanent"
			className={clsx(classes.drawer, {
				[classes.drawerOpen]: open,
				[classes.drawerClose]: !open,
			})}
			classes={{
				paper: clsx({
					[classes.drawerOpen]: open,
					[classes.drawerClose]: !open,
				}),
			}}
		>
			<Divider />
			<List>
				<ListItem button onClick={handleExpandDrawer}>
					<ListItemIcon>
						<MenuIcon />
					</ListItemIcon>
					<ListItemText primary="Minimize Drawer" />
				</ListItem>
				<ListItem button onClick={toggleTheme}>
					<ListItemIcon>
						<ThemeIcon />
					</ListItemIcon>
					<ListItemText primary="Toggle Theme" />
				</ListItem>
				<Divider />

				{["item1", "item2", "item3", "item4"].map((text, index) => (
					<ListItem button key={text}>
						<ListItemIcon>
							{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
						</ListItemIcon>
						<ListItemText primary={text} />
					</ListItem>
				))}
			</List>
			<Divider />
			<List>
				{["item5", "item6", "item7"].map((text, index) => (
					<ListItem button key={text}>
						<ListItemIcon>
							{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
						</ListItemIcon>
						<ListItemText primary={text} />
					</ListItem>
				))}
			</List>
		</Drawer>
	);
};

export default LeftNav;
