import Header from './components/Header';
import AddSong from './components/AddSong';
import SongList from './components/SongList';
import SongPlayer from './components/SongPlayer';
import { Grid } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';

function App() {
	const greaterThanMedium = useMediaQuery((theme) =>
		theme.breakpoints.up('md')
	);

	const greaterThanSmall = useMediaQuery((theme) =>
		theme.breakpoints.up('sm')
	);

	return (
		<div>
			{greaterThanSmall && <Header />}
			<Grid container spacing={2}>
				<Grid
					style={{ paddingTop: greaterThanSmall ? 80 : 20 }}
					item
					xs={12}
					md={7}
				>
					<AddSong />
					<SongList />
				</Grid>
				<Grid
					style={
						greaterThanMedium
							? {
									position: 'fixed',
									width: '100%',
									right: 0,
									top: 70,
									paddingTop: '80px',
							  }
							: {
									position: 'fixed',
									width: '100%',
									left: 0,
									bottom: 0,
							  }
					}
					item
					xs={12}
					md={5}
				>
					<SongPlayer />
				</Grid>
			</Grid>
		</div>
	);
}

export default App;
