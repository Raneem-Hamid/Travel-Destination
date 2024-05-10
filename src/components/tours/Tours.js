import React from 'react'
import './Tours.css';
function Tours(props) {
  return (
    <>
	{console.log(props.image)}
    <section class="dark">
	<div class="container py-4">
		{/* <h1 class="h1 text-center" id="pageHeaderTitle">My Cards Dark</h1> */}

		<article class="postcard dark blue">
			<a class="postcard__img_link" href="#">
				<img class="postcard__img" src={props.image} alt=" Title" />
			</a>
			<div class="postcard__text d-flex justify-content-center">
				<h1 class="postcard__title blue">
					{/* <a href="#"> */}
						{props.name}
						{/* </a> */}
	</h1>
			</div>
		</article>
		
	</div>
</section>
</>
  )
}

export default Tours