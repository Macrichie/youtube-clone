import React from 'react'
import Video from '../video/Video'
import './RecommendedVideos.css'

export default function RecommendedVideos() {
    return (
        <div className="recommendedVideos">
            <h2>Recommended</h2>
            <div class="recommendedVideos__videos">
                <Video 
                    title="Become a Fullstack Javascript Developer | 2020"
                    views="10M Views"
                    timestamp="1 day ago"
                    avatar="https://pbs.twimg.com/profile_images/1265383416436056065/xcZs0z8p_400x400.jpg"
                    channel="Olakunle Makanjuola"
                    image="https://i.morioh.com/2019/12/31/b54bf6f1c01c.jpg"
                />
                <Video 
                    title="Profit with Javascript"
                    views="2.3M Views"
                    timestamp="1 Month ago"
                    avatar="https://avatars2.githubusercontent.com/u/24712956?s=400&u=b71527e605ae1b748fc2d4157a842e57e427ad44&v=4"
                    channel="Sonny Sangha"
                    image="https://kajabi-storefronts-production.global.ssl.fastly.net/kajabi-storefronts-production/themes/284832/settings_images/a3liO9nUSCyEhyiAnDOw_Profit-with-JavaScript-new.jpg"
                />
                <Video 
                    title="Gain an increadible mass in 30 days"
                    views="5M Views"
                    timestamp="5 Months ago"
                    avatar="https://us.123rf.com/450wm/ammentorp/ammentorp1412/ammentorp141200043/34387175-close-up-image-of-young-man-with-muscular-build-shirtless-african-male-model-with-looking-at-camera-.jpg?ver=6"
                    channel="Ted Joe"
                    image="https://kajabi-storefronts-production.global.ssl.fastly.net/kajabi-storefronts-production/blogs/278/images/X9HC63RQQpOcc0BHTimA_Muscle_Pump"
                />
                <Video 
                    title="Indian hair growth secret Fenugreek 4 ways | Recipes and application"
                    views="605,790 Views"
                    timestamp="Nov 11, 2019"
                    avatar="https://static-bebeautiful-in.unileverservices.com/styles/amp_metadata_content_image_min_696px_wide/s3/benefits-of-fenugreek-seeds-for-hair_mobhom.jpg?itok=Y_gmk7Uk"
                    channel="Beauty Hub"
                    image="https://img5.goodfon.com/wallpaper/nbig/b/cb/model-girl-beautiful-pretty-cute-beauty-sexy-hot-pose-fac-85.jpg"
                />
                <Video 
                    title="The Rise of Michael Jackson"
                    views="25k Views"
                    timestamp="1 year ago"
                    avatar="https://pbs.twimg.com/profile_images/1265383416436056065/xcZs0z8p_400x400.jpg"
                    channel="Olakunle Makanjuola"
                    image="https://media.newyorker.com/photos/590972701c7a8e33fb38ef57/16:9/w_1280,c_limit/Wallace-The-Two-Lives-of-Michael-Jackson.jpg"
                />
                <Video 
                    title="Serverless  Driven Development with Firebase"
                    views="10M Views"
                    timestamp="24 min ago"
                    avatar="https://pbs.twimg.com/profile_images/1265383416436056065/xcZs0z8p_400x400.jpg"
                    channel="Olakunle Makanjuola"
                    image="https://codesource.io/wp-content/uploads/2019/12/Building-a-Serverless-Web-App-Using-Firebase.png"
                />
                <Video 
                    title="The New Apple Macbook 2020"
                    views="50M Views"
                    timestamp="14 days ago"
                    avatar="https://cdn.afterdawn.fi/v3/news/ios-logo.jpg"
                    channel="Apple"
                    image="https://bingepost.com/wp-content/uploads/2020/03/MacBook-Pro-13-and-16-Inch-Behind-MacBook-Air.jpg"
                />
                <Video 
                    title="How to build a Tik Tok Clone with REACT JS 🚀."
                    views="10M Views"
                    timestamp="1 day ago"
                    avatar="https://pbs.twimg.com/profile_images/1265383416436056065/xcZs0z8p_400x400.jpg"
                    channel="Olakunle Makanjuola"
                    image="https://mk0knowtechie1qof48y.kinstacdn.com/wp-content/uploads/2019/07/tiktok-smartphone.jpg.webp"
                />
                <Video 
                    title="Let's build Spotify Clone with REACT JS 🚀."
                    views="20.5M Views"
                    timestamp="18 day ago"
                    avatar="https://pbs.twimg.com/profile_images/1265383416436056065/xcZs0z8p_400x400.jpg"
                    channel="Olakunle Makanjuola"
                    image="https://miro.medium.com/max/1200/1*nwlU17J34ToIIaQW4blOsw.jpeg"
                />

            </div>
        </div>
    )
}
