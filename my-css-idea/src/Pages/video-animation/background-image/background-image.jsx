import React from 'react'
import styles from "./background-image.module.css"
import Logo from "../../../images/logo-1.svg"
import Mouse from "../../../images/mouse.svg"
import Carpet_Roll from "../../../videos/carpet-roll.mp4"
const BackgroundImageUnderContent = () => {
  return (
    <section id={styles.hero}>
		<div class={styles.container}>
		{/* Air  */}
		<video loop autoPlay src={Carpet_Roll}></video>

			<header>
				<a href="/"><img src={Logo} alt="Logo" /></a>

				<nav>
					<ul>
						<li><a href="#">Work</a></li>
						<li><a href="#">Company</a></li>
						<li><a href="#">Blog</a></li>
						<li><a href="#">Careers</a></li>
						<li><a href="#">Contact</a></li>
					</ul>
				</nav>
			</header>

			<h1>Crafting <span>digital masterpieces</span> with pixel-perfect precision.</h1>

			<img src={Mouse} alt="Mouse" />
		</div>
	</section>
  )
}

export default BackgroundImageUnderContent