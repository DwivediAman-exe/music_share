import React, { useState } from 'react';
import { Link } from '@mui/icons-material';
import {
	Button,
	Dialog,
	DialogActions,
	DialogContent,
	DialogTitle,
	InputAdornment,
	TextField,
} from '@mui/material';
import { makeStyles } from '@mui/styles';
import ShareTwoToneIcon from '@mui/icons-material/ShareTwoTone';

const useStyles = makeStyles((theme) => ({
	container: {
		display: 'flex',
		alignItems: 'center',
	},
	urlInput: {
		margin: theme.spacing(1),
	},
	addSongButton: {
		margin: theme.spacing(1),
	},
	dialog: {
		textAlign: 'center',
	},
	thumbnail: {
		width: '90%',
	},
}));

export default function AddSong() {
	const classes = useStyles();
	const [dialog, setDialog] = useState(false);

	function handleCloseDialog() {
		setDialog(false);
	}

	return (
		<div className={classes.container}>
			<Dialog
				className={classes.dialog}
				open={dialog}
				onClose={handleCloseDialog}
			>
				<DialogTitle>Edit Song Details</DialogTitle>
				<DialogContent>
					<img
						src="https://cdna.artstation.com/p/assets/images/images/028/238/296/large/ahmed-ali-render2-mix.jpg?1593878952"
						alt="Song thumbnail"
						className={classes.thumbnail}
					/>
					<TextField
						margin="dense"
						name="title"
						label="Title"
						variant="standard"
						fullWidth
					/>
					<TextField
						margin="dense"
						name="artist"
						label="Artist"
						variant="standard"
						fullWidth
					/>
					<TextField
						margin="dense"
						name="thumbnail"
						label="Thumbnail"
						variant="standard"
						fullWidth
					/>
				</DialogContent>
				<DialogActions>
					<Button onClick={handleCloseDialog} color="secondary">
						Cancel
					</Button>
					<Button variant="outlined" color="primary">
						Add song
					</Button>
				</DialogActions>
			</Dialog>
			<TextField
				className={classes.urlInput}
				placeholder=" Add youtube or SoundCloud Url"
				fullWidth
				variant="standard"
				margin="normal"
				type="url"
				InputProps={{
					startAdornment: (
						<InputAdornment position="start">
							<Link />
						</InputAdornment>
					),
				}}
			/>
			<Button
				className={classes.addSongButton}
				onClick={() => setDialog(true)}
				variant="contained"
				color="primary"
				endIcon={<ShareTwoToneIcon />}
			>
				Add
			</Button>
		</div>
	);
}
