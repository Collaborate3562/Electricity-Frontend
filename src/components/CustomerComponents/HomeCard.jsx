import { Card, Avatar } from 'antd';
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import '../../css/dashboard.css';
// import '../../css/Cards.css';
import img from '../../images/home1.jpg';
import img2 from '../../images/home2.jpg';
import img3 from '../../images/home3.jpg';
import img4 from '../../images/home4.jpg';
import img5 from '../../images/home5.jpg';
import img6 from '../../images/home6.jpg';
const { Meta } = Card;

function HomeCard(props) {
    return (

<Card
    style={{ width: 300 }}
    cover={
      <img
       
        src={img4}
      />
    }
    actions={[
      <SettingOutlined key="setting" />,
      <EditOutlined key="edit" />,
      <EllipsisOutlined key="ellipsis" />,
    ]}
  >
    <Meta
      avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
      title="Card title"
      description="This is the description"
    />
  </Card>
    );
}
export default HomeCard