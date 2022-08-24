import { AppBar, Toolbar, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import HeadphonesTwoToneIcon from '@mui/icons-material/HeadphonesTwoTone';
import React from 'react';

const useStyles = makeStyles((theme) => ({
	title: {
		marginLeft: theme.spacing(2),
	},
}));

export default function Header() {
	const classes = useStyles();

	return (
		<div>
			<AppBar position="fixed" color="primary">
				<Toolbar>
					<HeadphonesTwoToneIcon />
					<Typography
						className={classes.title}
						variant="h6"
						component="h1"
					>
						Music Share
					</Typography>
				</Toolbar>
			</AppBar>
		</div>
	);
}
