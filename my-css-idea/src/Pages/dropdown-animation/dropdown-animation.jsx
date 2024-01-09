import React from 'react'
import styles from "./dropdown-animation.module.css"
import Logo from "../../images/logo-l5.svg"
const DropdownAnimation = () => {
  return (
    <div id={styles.dropdown_main_container}>
		
		<header>
			<a href="/"><img src={Logo} alt="Logo"/></a>

			<nav>
				<ul>
					<li class={styles.has_submenu}>
						<a href="#">Services</a>

						<ul>
							<li><a href="#">Branding</a></li>
							<li><a href="#">Web Design</a></li>
							<li><a href="#">Web Development</a></li>
							<li><a href="#">eCommerce</a></li>
							<li><a href="#">Print</a></li>
						</ul>
					</li>
					<li><a href="#">Company</a></li>
					<li><a href="#">Blog</a></li>
					<li><a href="#">Careers</a></li>
					<li><a href="#">Contact</a></li>
				</ul>
			</nav>

			<button>Get a Quote</button>
		</header>
	</div>
  )
}

export default DropdownAnimation
