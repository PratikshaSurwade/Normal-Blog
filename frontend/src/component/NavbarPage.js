import React, { useState } from "react";
import { Link } from "react-router-dom";
import baseUrl from "../utils/baseUrl.js";

import "./../Styles/Navbar.css"

function Navbar() {

	const [toogle, setToogle] = useState(false);
	return (
		<>
			<div className="heading">
				<div className="headingOne">
					<h1 className="headstyle">
						<span className="headstyle1">The</span>
						<span className="headstyle2"> Siren</span>
					</h1>
					<div className="Navbarstyle" id="Navbarstyle2">
						<Link className="Linkitems" to="/">Home</Link>
						<Link className="Linkitems" to="/bollywood">Bollywood</Link>
						<Link className="Linkitems" to="/technology">Technology</Link>
						<Link className="Linkitems" to="/hollywood">Hollywood</Link>
						<Link className="Linkitems" to="/fitness">Fitness</Link>
						<Link className="Linkitems" to="/food">Food</Link>
					</div>
					<hr style={{ marginLeft: "10%", marginRight: "10%" }}></hr>
				</div>

				<div className="headingTwo">
					<div className="navbarr">
						<h2 className="logoHeading" title="Home">
							<span style={{ writingMode: "vertical-rl", transform: "scale(-0.8)" ,fontSize:"1.5rem"}}>The</span>
							<span style={{ fontSize: "2.7rem" }}> Siren</span>
						</h2>

						{console.log(toogle)}
						{!toogle ?
							<><i class="nav-menu-icon fas fa-bars" onClick={() => setToogle(!toogle)}></i>

							</>
							:
							<i class="nav-menu-icon fas fa-times" onClick={() => setToogle(!toogle)}></i>

						}
					</div>
					{toogle ? < div className="menuMobile">
						<div className="navMenu">
							<Link className="navbarMenuList" to="/" onClick={() => setToogle(!toogle)}>Home</Link>
							<Link className="navbarMenuList" to="/bollywood" onClick={() => setToogle(!toogle)}>Bollywood</Link>
							<Link className="navbarMenuList" to="/technology" onClick={() => setToogle(!toogle)}>Technology</Link>

							<Link className="navbarMenuList" to="/hollywood" onClick={() => setToogle(!toogle)}>Hollywood</Link>
							<Link className="navbarMenuList" to="/fitness" onClick={() => setToogle(!toogle)}>Fitness</Link>
							<Link className="navbarMenuList" to="/food" onClick={() => setToogle(!toogle)}>Food</Link>


						</div>


					</div>
						: <></>
					}
				</div>
			</div>
		</>
	)
}

export default Navbar;


// <nav className="navbar navbar-expand-lg navbar-light bg-light d-flex aligns-items-center">
// 						<div className="container-fluid">
// 							<h1 className="headstyle">
// 								<span className="headstyle1">The</span>
// 								<span className="headstyle2"> Siren</span>
// 							</h1>
// 							<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
// 								<span className="navbar-toggler-icon"></span>
// 							</button>
// 							<div className="collapse navbar-collapse bg-bs-light" id="navbarSupportedContent">
// 								<center>
// 									<ul className="navbar-nav mr-auto ml-auto mb-2 ">
// 										<li className="nav-item">
// 											<Link className="Linkitems" to="/">Home</Link>
// 											<hr className="navHr"></hr>
// 										</li>
// 										<li className="nav-item">
// 											<Link className="Linkitems" to="/bollywood">Bollywood</Link>
// 											<hr className="navHr"></hr>
// 										</li>
// 										<li className="nav-item">
// 											<Link className="Linkitems" to="/technology">Technology</Link>
// 											<hr className="navHr"></hr>
// 										</li>
// 										<li className="nav-item">
// 											<Link className="Linkitems" to="/hollywood">Hollywood</Link>
// 											<hr className="navHr"></hr>
// 										</li>
// 										<li className="nav-item">
// 											<Link className="Linkitems" to="/fitness">Fitness</Link>
// 											<hr className="navHr"></hr>
// 										</li>
// 										<li className="nav-item">
// 											<Link className="Linkitems" to="/food">Food</Link>
// 											<hr className="navHr"></hr>
// 										</li>
// 									</ul>
// 								</center>
// 							</div>
// 						</div>
// 					</nav>