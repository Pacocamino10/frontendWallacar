import { Outlet } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import NavBar from '../components/NavBar'
import { Container } from '@mui/material';
function Layout() {
	return (
		<>
			<NavBar />
			<Container fixed>
				<Outlet />
			</Container>
			<ToastContainer />
		</>
	)
}

export default Layout
