import React, {Component} from 'react';


const SimpleProfile = ({style}) => (
    <div>
        <div className="profile-image">
            <img
                src="https://www.elitesingles.ie/sites/www.elitesingles.ie/files/styles/elite_rectangle_article_arrow_left_frame/public/2b_en_ta_teaser_sp1.png"
                alt=""/>
        </div>
        <div className="profile-username" style={style}>Владислав Кудряшов</div>
        <div className="profile-position" style={style}>Тренер</div>
    </div>
)
export default SimpleProfile;

