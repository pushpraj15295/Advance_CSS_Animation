import React from 'react'
import styles from "./cardHoverAnimation.module.css"
import Gallery1 from "../../images/gallery-1.jpg"
import Gallery2 from "../../images/gallery-2.jpg"
import Gallery3 from "../../images/gallery-3.jpg"
import Arrow from "../../icons/icon-arrow-right-color.svg"

const CardHoverAnimation = () => {
  return (
    <div className={styles.card_hover}>
      <ul class={styles.gallery}>
			<li>
				<figure>
					<a href="#"><img className={styles.main_image} src={Gallery1} alt="Great Barrier Reef, Australia"/></a>
					<figcaption>
						<main>
							<p class={styles.small}>9-day trip</p>
							<h3>Great Barrier Reef, <em>Australia</em></h3>
							<p>Dive into the vibrant underwater world of the Great Barrier Reef, a UNESCO World Heritage Site teeming with marine life.</p>
						</main>

						<footer>
							<div className={styles.priceContainer}>
								<p class={styles.small}>From</p>
								<p class={styles.price}>€2,500</p>
							</div>

							<img className={styles.arrow} src={Arrow} alt="Icon"/>
						</footer>
					</figcaption>
				</figure>
			</li>
			<li>
				<figure>
					<a href="#"><img className={styles.main_image} src={Gallery2} alt="Gallery image"/></a>
					<figcaption>
						<main>
							<p class={styles.small}>7-day trip</p>
							<h3>Grand Canyon, <em>United States</em></h3>
							<p>Stand in awe at the colossal beauty of the Grand Canyon, carved by the forces of nature over millions of years.</p>
						</main>

						<footer>
							<div className={styles.priceContainer}>
								<p class={styles.small}>From</p>
								<p class={styles.price}>€1,200</p>
							</div>

							<img className={styles.arrow} src={Arrow} alt="Icon"/>
						</footer>
					</figcaption>
				</figure>
			</li>
			<li>
				<figure>
					<a href="#"><img src={Gallery3} className={styles.main_image} alt="Gallery image"/></a>
					<figcaption>
						<main>
							<p class={styles.small}>10-day trip</p>
							<h3>Machu Picchu, <em>Peru</em></h3>
							<p>Uncover the mystique of the ancient Inca ruins perched high in the Andes Mountains at Machu Picchu.</p>
						</main>

						<footer>
							<div className={styles.priceContainer}>
								<p class={styles.small}>From</p>
								<p class={styles.price}>€2,200</p>
							</div>

							<img className={styles.arrow} src={Arrow} alt="Icon"/>
						</footer>
					</figcaption>
				</figure>
			</li>
		</ul>
    </div>
  )
}

export default CardHoverAnimation
