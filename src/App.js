import Header from './components/Header';
import AddSong from './components/AddSong';
import SongList from './components/SongList';
import SongPlayer from './components/SongPlayer';
import { Grid } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme';

function App() {
	return (
		<ThemeProvider theme={theme}>
			<Header />
			<Grid container spacing={3}>
				<Grid item xs={12} md={7}>
					<AddSong />
					<SongList />
				</Grid>
				<Grid item xs={12} md={5}>
					<SongPlayer />
				</Grid>
			</Grid>
		</ThemeProvider>
	);
}

export default App;
