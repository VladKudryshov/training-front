import React, {Component} from 'react';
import "./index.css"
import SimpleProfile from "./SimpleProfile";


const Profile = () => (
    <div className="blog">
        <div className="write-blog">
            <textarea placeholder="Please type what you want..."/>
            <div className="actions">
                <button className="btn circle-btn action-c left"><i className="fas fa-paperclip"/></button>
                <button className="btn circle-btn default-c right"><i className="fab fa-telegram-plane"/></button>
            </div>
        </div>
        <div className="posts">
            <div className="post">
                <img
                    src="https://mondrian.mashable.com/2017%252F11%252F30%252F06%252F13a5a44f01f54fd8ac346a7ad075234a.e6651.png%252F1200x630.png?signature=aGxSf1DNzoJzCjisZWxzIo9yalM="
                    alt=""/>
                <div className="post-content">
                    <div className="post-text">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus adipisci blanditiis consequatur
                        corporis delectus deserunt dicta dignissimos error ex harum iste, labore, laboriosam, laborum minus
                        molestias odio possimus quaerat quasi quia quod reiciendis velit veniam! Animi asperiores commodi
                        cum, delectus deserunt dolores dolorum ea excepturi fugiat ipsam, laborum magni molestiae mollitia
                        nam nihil nobis odio officiis placeat praesentium quis repellat repudiandae tempora voluptatem.
                        Dolores esse necessitatibus ratione. Amet, consectetur corporis culpa deleniti, error explicabo
                        facere facilis fuga fugiat ipsam maxime obcaecati officia perspiciatis possimus quam quia quis sequi
                        velit veritatis voluptatum? Beatae blanditiis, dolore doloremque, dolores eligendi ex fugiat
                        laudantium libero nam nostrum pariatur possimus quisquam ratione reprehenderit saepe tempora tenetur
                        totam? Dicta eos fugiat impedit minima voluptates. Amet aspernatur, corporis dolorem enim harum quam
                        voluptatibus. Amet culpa cum eaque eveniet in inventore ipsa laborum modi nam nemo neque obcaecati
                        perferendis porro possimus quo sapiente sunt, ut vel voluptatibus voluptatum? Alias beatae corporis
                        delectus deserunt dignissimos dolorem fuga illum iusto maiore
                    </div>
                    <div className="post-actions">

                    </div>
                </div>
            </div>
        </div>
    </div>
)
export default Profile;

