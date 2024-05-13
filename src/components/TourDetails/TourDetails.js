import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
const data =require('../../data/db.json');


function TourDetails() {
    const { id } = useParams();
    const result = data.find(item => item.id === id);

    const [showFullDescription, setShowFullDescription] = useState(false);

    const toggleDescription = () => {
        setShowFullDescription(!showFullDescription);
    };
    return (
        <section class="dark">
        <div class="container py-4">

            <article class="postcard dark blue">
			<a class="postcard__img_link" href="#">
				<img class="postcard__img" src={result.image} alt="Title" />
			</a>
			<div class="postcard__text">
				<h1 class="postcard__title blue">{result.name}</h1>
				
				<div class="postcard__bar"></div>
				<div class="postcard__preview-txt"> {showFullDescription ? result.info : result.info.slice(0, 400) + ' ...'} </div>
				<ul class="postcard__tagbox d-flex justify-content-between">
					<li class="tag__item"><i class="fas fa-tag mr-2"></i> Price : {result.price}</li>
					<li class="tag__item play blue">
						<a href="#" onClick={toggleDescription}><i class="fas fa-play mr-2"></i>  {showFullDescription ? 'See Less' : 'See More'} </a>
					</li>
				</ul>
			</div>
		</article>
            
        </div>
    </section>
      )
}

export default TourDetails
