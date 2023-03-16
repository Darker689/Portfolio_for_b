// router
import { Link } from 'react-router-dom';
// icons
import { AiFillHeart, AiFillEye } from 'react-icons/ai'
import { HiShare } from 'react-icons/hi'
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
        <div className="home_body_post">
          <div className="home_body_post_bottom_user">
            <div className="home_body_post_bottom_user_img">
              <img src={img} alt="" />
            </div>
            <div>
              <p>John Doe</p>
              <small>Data</small>
            </div>
          </div>
          <div className="home_body_post_txt">
            <p className="home_body_post_title">Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, dignissimos!</p>
            <p className="home_body_post_tags">
              <span>
                <i>#</i> 
                <p>dragon</p>
              </span>
              <span>
                <i>#</i> 
                <p>dragons</p>
              </span>
            </p>
          </div>
          <Link to='/' className="home_body_post_img">
            <img src={img1} alt="" />
          </Link>
          <div className="home_body_post_bottom">
            <div className="home_body_post_bottom_heart">
              <i><AiFillHeart /></i>
              <p>100</p>
            </div>
            <div className="home_body_post_bottom_message">
              <i><FaFacebookMessenger /></i>
              <p>100</p>
            </div>
            <div className="home_body_post_bottom_message">
              <i><AiFillEye /></i>
              <p>100</p>
            </div>
            <div className="home_body_post_bottom_message">
              <i><HiShare /></i>
              <p>share</p>
            </div>
          </div>
        </div>
        <div className="home_body_post">
          <div className="home_body_post_bottom_user">
            <div className="home_body_post_bottom_user_img">
              <img src={img} alt="" />
            </div>
            <div>
              <p>John Doe</p>
              <small>Data</small>
            </div>
          </div>
          <div className="home_body_post_txt">
            <p className="home_body_post_title">Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, dignissimos!</p>
            <p className="home_body_post_tags">
              <span>
                <i>#</i> 
                <p>dragon</p>
              </span>
              <span>
                <i>#</i> 
                <p>dragons</p>
              </span>
            </p>
          </div>
          <Link to='/' className="home_body_post_img">
            <img src={img1} alt="" />
          </Link>
          <div className="home_body_post_bottom">
            <div className="home_body_post_bottom_heart">
              <i><AiFillHeart /></i>
              <p>100</p>
            </div>
            <div className="home_body_post_bottom_message">
              <i><FaFacebookMessenger /></i>
              <p>100</p>
            </div>
            <div className="home_body_post_bottom_message">
              <i><AiFillEye /></i>
              <p>100</p>
            </div>
            <div className="home_body_post_bottom_message">
              <i><HiShare /></i>
              <p>share</p>
            </div>
          </div>
        </div>
        <div className="home_body_post">
          <div className="home_body_post_bottom_user">
            <div className="home_body_post_bottom_user_img">
              <img src={img} alt="" />
            </div>
            <div>
              <p>John Doe</p>
              <small>Data</small>
            </div>
          </div>
          <div className="home_body_post_txt">
            <p className="home_body_post_title">Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, dignissimos!</p>
            <p className="home_body_post_tags">
              <span>
                <i>#</i> 
                <p>dragon</p>
              </span>
              <span>
                <i>#</i> 
                <p>dragons</p>
              </span>
            </p>
          </div>
          <Link to='/' className="home_body_post_img">
            <img src={img1} alt="" />
          </Link>
          <div className="home_body_post_bottom">
            <div className="home_body_post_bottom_heart">
              <i><AiFillHeart /></i>
              <p>100</p>
            </div>
            <div className="home_body_post_bottom_message">
              <i><FaFacebookMessenger /></i>
              <p>100</p>
            </div>
            <div className="home_body_post_bottom_message">
              <i><AiFillEye /></i>
              <p>100</p>
            </div>
            <div className="home_body_post_bottom_message">
              <i><HiShare /></i>
              <p>share</p>
            </div>
          </div>
        </div>
        <div className="home_body_post">
          <div className="home_body_post_bottom_user">
            <div className="home_body_post_bottom_user_img">
              <img src={img} alt="" />
            </div>
            <div>
              <p>John Doe</p>
              <small>Data</small>
            </div>
          </div>
          <div className="home_body_post_txt">
            <p className="home_body_post_title">Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, dignissimos!</p>
            <p className="home_body_post_tags">
              <span>
                <i>#</i> 
                <p>dragon</p>
              </span>
              <span>
                <i>#</i> 
                <p>dragons</p>
              </span>
            </p>
          </div>
          <Link to='/' className="home_body_post_img">
            <img src={img1} alt="" />
          </Link>
          <div className="home_body_post_bottom">
            <div className="home_body_post_bottom_heart">
              <i><AiFillHeart /></i>
              <p>100</p>
            </div>
            <div className="home_body_post_bottom_message">
              <i><FaFacebookMessenger /></i>
              <p>100</p>
            </div>
            <div className="home_body_post_bottom_message">
              <i><AiFillEye /></i>
              <p>100</p>
            </div>
            <div className="home_body_post_bottom_message">
              <i><HiShare /></i>
              <p>share</p>
            </div>
          </div>
        </div>
        <div className="home_body_post">
          <div className="home_body_post_bottom_user">
            <div className="home_body_post_bottom_user_img">
              <img src={img} alt="" />
            </div>
            <div>
              <p>John Doe</p>
              <small>Data</small>
            </div>
          </div>
          <div className="home_body_post_txt">
            <p className="home_body_post_title">Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, dignissimos!</p>
            <p className="home_body_post_tags">
              <span>
                <i>#</i> 
                <p>dragon</p>
              </span>
              <span>
                <i>#</i> 
                <p>dragons</p>
              </span>
            </p>
          </div>
          <Link to='/' className="home_body_post_img">
            <img src={img1} alt="" />
          </Link>
          <div className="home_body_post_bottom">
            <div className="home_body_post_bottom_heart">
              <i><AiFillHeart /></i>
              <p>100</p>
            </div>
            <div className="home_body_post_bottom_message">
              <i><FaFacebookMessenger /></i>
              <p>100</p>
            </div>
            <div className="home_body_post_bottom_message">
              <i><AiFillEye /></i>
              <p>100</p>
            </div>
            <div className="home_body_post_bottom_message">
              <i><HiShare /></i>
              <p>share</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home_body;