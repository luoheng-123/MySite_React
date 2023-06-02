import { PlusOutlined, LoadingOutlined } from '@ant-design/icons';
import { Upload, message } from 'antd';
import { useEffect, useState } from 'react';
import PubSub from 'pubsub-js';

// const getBase64 = (img, callback) => {
//   const reader = new FileReader();
//   reader.addEventListener('load', () => callback(reader.result));
//   reader.readAsDataURL(img);
// };
const beforeUpload = (file) => {
  const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
  if (!isJpgOrPng) {
    message.error('只能上传 JPG/PNG 格式文件!');
  }
  const isLt2M = file.size / 1024 / 1024 < 2;
  if (!isLt2M) {
    message.error('图片必须小于 2MB!');
  }
  return isJpgOrPng && isLt2M;
};
const Logo = ({ imgUrl }) => {
  const [loading, setLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState();
  const handleChange = (info) => {
    // console.log(info);
    if (info.file.status === 'uploading') {
      setLoading(true);
      return;
    }
    if (info.file.status === 'done') {
      console.log(info.file);
      // setImageUrl('/upload/' + info.file.response.name)
      setImageUrl('/public/upload/'+info.file.response.name)
      // PubSub.publish('logoUrl', '/upload/' + info.file.response.name);
      PubSub.publish('logoUrl', '/public/upload/'+info.file.response.name);
    }
  };
  const uploadButton = (
    <div>
      {loading ? <LoadingOutlined /> : <PlusOutlined />}
      <div
        style={{
          marginTop: 8,
        }}
      >
        Upload
      </div>
    </div>
  );
  // 当用户自己有图片时，显示自己的图片，用户上传图片时显示上传的图片
  useEffect(() => {
    console.log(imgUrl);
    if (imgUrl) {
      setImageUrl(imgUrl)
    }
  }, [])

  return (
    <Upload
      name="avatar"
      listType="picture-card"
      className="avatar-uploader ant-upload"
      showUploadList={false}
      action="https://luoedu.club/api/uploadAvatar"
      // action="/api/uploadAvatar"
      beforeUpload={beforeUpload}
      onChange={handleChange}
    >
      {imageUrl ? <img
        src={imageUrl}
        alt="avatar"
        style={{
          width: '100%',
          borderRadius: '50%'
        }} /> : uploadButton}
    </Upload>
  );
};
export default Logo;