import {
  HashRouter,
  Routes,
  Route,
} from "react-router-dom";
import Landing from "./Pages/Landing";

import Login from "./Pages/Login";

export default function Router(){
		return (
		<HashRouter>
			<Routes>
				<Route path="/" element={<Landing />} />
				<Route path="login" element={<Login />} />

				<Route element={<h1>Nao encontrado</h1>} />
			</Routes>
		</HashRouter>
	);
}