import axios from "axios";
import { convertToRaw, EditorState } from "draft-js";
import draftToHtml from "draftjs-to-html";
import { useState } from "react";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { FcCameraAddon } from "react-icons/fc";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import blog from "../../assets/images/blog-1.png";
import Loading from "../../components/Loading/Loading";
import { UserAuthGoogle } from "../../context/googleContext";
import "./style.scss";

const NewBlog = () => {
  const arrValue = [
    "All",
    "Programming",
    "Database",
    "Inclusion",
    "Optimize",
    "Mobility",
  ];
  const [title, setTitle] = useState("");
  const [image, setImage] = useState(null);
  const [url, setUrl] = useState("");
  const [category, setCategory] = useState("");
  const [uploadingImage, setUploadingImage] = useState();
  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty()
  );
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const user = useSelector((state) => state.auth.login.currentUser?.user);
  const { userGoogle } = UserAuthGoogle();

  //handle
  // add bài viết mới
  const handleSubmit = (e) => {
    e.preventDefault();
    // lấy dữ liệu từ form đã edit
    const rawContentState = convertToRaw(editorState.getCurrentContent());
    // convert dữ liệu đã đc lấy ra sang kiểu html
    const content = draftToHtml(rawContentState);

    if (!title || !image || !content) {
      return alert("title, content and image required");
    }

    axios({
      method: "post",
      url: "http://localhost:8000/v1/post-article",
      data: {
        title,
        category,
        content,
        user: user?._id ? user?._id : userGoogle.uid,
        image: url,
      },
    })
      .then((data) => setLoading(true), console.log("post success"))
      .catch((error) => setLoading(false));
  };

  const handleEditorChange = (state) => {
    setEditorState(state);
  };

  const clickSelect = (e) => {
    e.preventDefault();
    setCategory(e.target.value);
    console.log(e.target.value);
  };

  const uploadImage = (e) => {
    e.preventDefault();
    if (!image) return;
    setUrl("");
    const data = new FormData();
    data.append("file", image);
    //gpd405dq -> name trêm cloudinary
    data.append("upload_preset", "gpd405dq");
    setUploadingImage(true);

    fetch("https://api.cloudinary.com/v1_1/dh9eghpuy/image/upload", {
      method: "post",
      body: data,
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("data: ", data);
        setUploadingImage(false);
        setUrl(data.url);
      })
      .catch((err) => {
        setUploadingImage(false);
        console.log(err);
      });
  };
  const handleImageValidation = (e) => {
    const file = e.target.files[0];
    if (file.size > 10480576) {
      setImage(null);
      return alert("File is too big, please choose images 1mb or less");
    } else {
      setImage(file);
    }
  };

  if (loading) {
    setTimeout(() => {
      navigate("/");
    }, 1400);
    return <Loading />;
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="container-form">
          <div className="row">
            <div className="col">
              <div className="text-edit">
                <div className="title">
                  <label htmlFor="">Đặt tiêu đề cho bài viết</label>
                  <input
                    className="title-input"
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                  />
                </div>
                <Editor
                  editorClassName="editor"
                  toolbarClassName="toolbar"
                  editorState={editorState}
                  onEditorStateChange={handleEditorChange}
                />
              </div>
            </div>
            <div className="col">
              <div className="loading">{uploadingImage && <Loading />}</div>

              <div className="image">
                {url && !uploadingImage && <img src={url} alt="" />}
                {!url && !uploadingImage && <img src={blog} alt="" />}
              </div>
              <div className="select-choose_group">
                <div className="action-img">
                  <input
                    type="file"
                    id="img"
                    hidden
                    onChange={handleImageValidation}
                  />
                  <label htmlFor="img" className="icon-img">
                    <FcCameraAddon disabled={uploadingImage || !image} />
                  </label>
                  <button onClick={uploadImage}>upload</button>
                </div>
                <div className="select-group">
                  <div className="form-group_input">
                    <div className="select-group">
                      <select name="" id="cars" onChange={clickSelect}>
                        <option value="" className="choose-option">
                          Lựa chọn thể loại
                        </option>
                        {arrValue.map((value, idx) => (
                          <option key={idx} value={value}>
                            {value}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="button-submit">
            <button disabled={uploadingImage || !url}>Create</button>
          </div>
        </div>
      </form>
    </>
  );
};

export default NewBlog;
