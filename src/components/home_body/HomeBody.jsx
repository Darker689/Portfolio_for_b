// router
import { Link } from 'react-router-dom';
// icons
import {AiFillHeart} from 'react-icons/ai'
import { FaFacebookMessenger } from 'react-icons/fa'
// img
import img from '../../assets/images/nav_img/nav_user.png'
import img1 from '../../assets/images/post_img/dragon.avif'
// css
import './home_body.css'

const Home_body = () => {
  return (
    <div className='home_body'>
      <div className="home_body_nav">
        <p>Feeds</p>
        <div className="home_body_links">
          <Link to='/'>All</Link>
          <Link to='/'>Following</Link>
          <Link to='/'>Newest</Link>
          <Link to='/'>Popular</Link> 
        </div>
      </div>
      <div className="home_body_posts">
        <Link to='/product' className="home_body_post">
          <div className="home_body_post_img">
            <img src={img1} alt="" />
          </div>
          <div className="home_body_post_bottom">
            <div className="home_body_post_bottom_user">
              <div className="home_body_post_bottom_user_img">
                <img src={img} alt="" />
              </div>
              <p>John Doe</p>
            </div>
            <div className="home_body_post_bottom_heart">
              <i><AiFillHeart/></i>
              <p>100</p>
            </div>
            <div className="home_body_post_bottom_message">
              <i><FaFacebookMessenger/></i>
              <p>100</p>
            </div>
          </div>
        </Link>
        <div className="home_body_post">
          <div className="home_body_post_img">
            <img src={img1} alt="" />
          </div>
          <div className="home_body_post_bottom">
            <div className="home_body_post_bottom_user">
              <div className="home_body_post_bottom_user_img">
                <img src={img} alt="" />
              </div>
              <p>John Doe</p>
            </div>
            <div className="home_body_post_bottom_heart">
              <i><AiFillHeart/></i>
              <p>100</p>
            </div>
            <div className="home_body_post_bottom_message">
              <i><FaFacebookMessenger/></i>
              <p>100</p>
            </div>
          </div>
        </div>
        <div className="home_body_post">
          <div className="home_body_post_img">
            <img src={img1} alt="" />
          </div>
          <div className="home_body_post_bottom">
            <div className="home_body_post_bottom_user">
              <div className="home_body_post_bottom_user_img">
                <img src={img} alt="" />
              </div>
              <p>John Doe</p>
            </div>
            <div className="home_body_post_bottom_heart">
              <i><AiFillHeart/></i>
              <p>100</p>
            </div>
            <div className="home_body_post_bottom_message">
              <i><FaFacebookMessenger/></i>
              <p>100</p>
            </div>
          </div>
        </div>
        <div className="home_body_post">
          <div className="home_body_post_img">
            <img src={img1} alt="" />
          </div>
          <div className="home_body_post_bottom">
            <div className="home_body_post_bottom_user">
              <div className="home_body_post_bottom_user_img">
                <img src={img} alt="" />
              </div>
              <p>John Doe</p>
            </div>
            <div className="home_body_post_bottom_heart">
              <i><AiFillHeart/></i>
              <p>100</p>
            </div>
            <div className="home_body_post_bottom_message">
              <i><FaFacebookMessenger/></i>
              <p>100</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home_body;