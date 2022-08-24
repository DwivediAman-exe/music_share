import React from 'react';
import { Avatar, IconButton, Typography } from '@mui/material';
import DeleteForeverTwoToneIcon from '@mui/icons-material/DeleteForeverTwoTone';
import { makeStyles } from '@mui/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

function QueuedSongList() {
	const greaterThanMedium = useMediaQuery((theme) =>
		theme.breakpoints.up('md')
	);

	const song = {
		title: 'AMAN',
		artist: 'aman',
		thumbnail: 'http://img.youtube.com/vi/--ZtUFsIgMk/0.jpg',
	};

	return (
		greaterThanMedium && (
			<div
				styles={{
					margin: '10px 0px',
				}}
			>
				<Typography color="textSecondary" variant="button">
					Queue (5)
				</Typography>
				{Array.from({ length: 5 }, () => song).map((song, i) => (
					<QueuesSong key={i} song={song} />
				))}
			</div>
		)
	);
}

const useStyles = makeStyles({
	avatar: {
		width: 44,
		height: 44,
	},
	text: {
		textOverflow: 'ellipsis',
		overflow: 'hidden',
	},
	container: {
		display: 'grid',
		gridAutoFlow: 'column',
		gridTemplateColumns: '50px auto 50px',
		gridGap: 12,
		alignItems: 'center',
		marginTop: 10,
	},
	songInfoContainer: {
		overflow: 'hidden',
		whiteSpace: 'nowrap',
	},
});

function QueuesSong({ song }) {
	const classes = useStyles();
	const { thumbnail, artist, title } = song;
	return (
		<div className={classes.container}>
			<Avatar
				src={thumbnail}
				alt="Song thumbnail"
				className={classes.avatar}
			/>
			<div className={classes.songInfoContainer}>
				<Typography variant="subtitle2" className={classes.text}>
					{title}
				</Typography>
				<Typography
					variant="body2"
					color="textSecondary"
					className={classes.text}
				>
					{artist}
				</Typography>
			</div>
			<IconButton>
				<DeleteForeverTwoToneIcon color="error" />{' '}
			</IconButton>
		</div>
	);
}

export default QueuedSongList;
