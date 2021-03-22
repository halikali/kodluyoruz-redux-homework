import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPhoto } from "../../store/actions/actions";
import { Link } from 'react-router-dom';


const Dashboard = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPhoto());
  }, []);

  const photoDetails = useSelector((state) => state.photosReducer.data);

  const onClickHandler = (event) =>{
    console.log(event)
  }
  return (
    <div className="center">
      <div className="navbar">
        <button>
          <img
            className="camera"
            src="https://cdn3.iconfinder.com/data/icons/linecons-free-vector-icons-pack/32/camera-512.png"
            alt="camera"
            width="15%"
          />
        </button>
        <img
          className="insta"
          src="https://thepracticaldev.s3.amazonaws.com/i/9dgus6e6o80pv1gx8y7t.png"
          alt="logo"
          width="25%"
        />
        <button>
          <img
            className="send"
            src="https://pngimage.net/wp-content/uploads/2018/06/send-button-icon-png-6.png"
            alt="dm"
          />{" "}
        </button>
      </div>

      <div className="profile">
        
          { photoDetails && photoDetails.map(item => (
            <>
              <p className="photo-info">{item.id}</p>
              <Link to="/comments" >
                <img src={item.thumbnailUrl} alt="images" width="100%" onClick={ (event) => onClickHandler (event)}  key={item.id}/>
              </Link>
            </>
          ))}
          
        
        
        
      </div>

      <div className="navbar2">
        <img className="bar" />
      </div>
    </div>
  );
};

export default Dashboard;
