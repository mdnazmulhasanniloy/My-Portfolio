import React from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import foodies from '../../../../Assets/projects/Foodies.png'
import foodiesThumbnail from '../../../../Assets/projects/FoodiesThumbnail.png'


const ProjectCard = () => {
    return (
        <div className="
        p-8 rounded-lg text-gray-600 defaultGradient aos-init aos-animate"


        >
            <figure>
                <PhotoProvider>
                    <PhotoView src={foodiesThumbnail}>
                        <img className="img-fluid w-100" src={foodies} alt="" />
                    </PhotoView>
                </PhotoProvider>
            </figure>
            <div className="card-body">
                <h2 className="card-title">
                    Shoes!
                    <div className="badge badge-secondary">NEW</div>
                </h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions justify-end">
                    <div className="badge badge-outline">Fashion</div>
                    <div className="badge badge-outline">Products</div>
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;