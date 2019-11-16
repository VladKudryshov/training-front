import React, {Component} from 'react';
import "../index.css"
import Link from "react-router/es/Link";

const DietPlanCard = () => (
            <div className="card-item">
                <i className="far fa-check-circle active-plan active"/>
                <h3><Link to="diet/asd"> CUSTOM</Link></h3>
                <img
                    src="https://img.delicious.com.au/LefImkGe/w759-h506-cfill/del/2017/02/pumpkin-dhal-42336-3.jpg"
                    alt=""
                    height="100%"/>
                <div className="creator">
                    <img
                        className="avatar"
                        src="https://www.elitesingles.ie/sites/www.elitesingles.ie/files/styles/elite_rectangle_article_arrow_left_frame/public/2b_en_ta_teaser_sp1.png"
                        alt=""/>
                    <div className="name">Владислав Кудряшов</div>
                </div>
                <div className="kv"/>
            </div>

)
export default DietPlanCard;

