import React from 'react';
import Slider from "react-slick";
import { size } from "lodash";
import { map } from "lodash";
 
import "./SongsSlider.scss";

export default function SongsSlider(props) {
    const { title, data } = props;
    const settings = {
      dats: false,
      infiniti: true,
      speed: 500,
      slidesToShow: 5,
      slidesToScroll: 4,
      centerMode: true,
      className: "songs-slider__list"
    };

    if (size(data) < 5) {
        return null;
      }

    return (
        <div className="songs-slider">
            <h2>{title}</h2>
            <Slider {...settings}>
            {map(data, item => (
            <Song key={item.id} item={item} />
        ))}
            </Slider>
        </div>
    )
    
}

function Song(props){
    const { item } = props;
    return <p>{item.name}</p>;
    
}