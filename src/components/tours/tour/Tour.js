import React from 'react';
import './Tour.css';
import { Link } from 'react-router-dom';


function Tour(props) {
  return (
	<Link to={`/city/${props.id}`}>
    <section class="dark">
	<div class="container py-4">
		<article class="postcard dark blue">
			<a class="postcard__img_link" href="#">
				<img class="postcard__img" src={props.image} alt=" Title" />
			</a>
			<div class="postcard__text d-flex justify-content-center">
				<h1 class="postcard__title blue fs-1" >
					
						{props.name}
						
	</h1>
			</div>
		</article>
		
	</div>
</section>
</Link>
  )
}

export default Tour