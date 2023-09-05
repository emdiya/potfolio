import "./Services.css";

import ServiceCard from "./ServiceCard";
import flutter_node from "../../assets/flutter-node.png"

const data = [
  {
    id: 1,
    image:
      "https://storage.googleapis.com/cms-storage-bucket/0dbfcc7a59cd1cf16282.png",
    bgColor: "#ffd166",
    title: "Flutter",
    des: "Build Hybrid Mobile App (Android/IOS) with Flutter Framework",
  },
  {
    id: 2,
    image: "https://firebase.flutter.dev/img/flutterfire.svg",
    bgColor: "#06d6a0",
    title: "Flutter + Firebase",
    des: "Build Mobile App Use Flutter Framework and Delploy to Firebase Store",
  },
  {
    id: 3,
    image:
      "https://res.cloudinary.com/practicaldev/image/fetch/s--gdQaWYIJ--/c_imagga_scale,f_auto,fl_progressive,h_500,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/vvsq4h7d5ol45lfbrzoy.png",
    bgColor: "#6495ED",
    title: "UX/UI",
    des: "Draw UI/UX for your business",
  },
  {
    id: 4,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png",
    bgColor: "#118ab2",
    title: "ReactJS",
    des: "Build FrontEnd Website use JavaScript Framework ReactJS",
  },
  {
    id: 5,
    image:
      "https://images.g2crowd.com/uploads/product/image/large_detail/large_detail_f0b606abb6d19089febc9faeeba5bc05/nodejs-development-services.png",
    bgColor: "#87CEEB",
    title: "NodeJS",
    des: "Build Backend, Restt API, Deploy API, use JavaScript Framework NodeJS",
  },
  {
    id: 6,
    image:
    flutter_node,
    bgColor: "#FFB6C1",
    title: "Flutter + NodeJS",
    des: "Build FrontEnd Mobile App with Flutter Framework + NodeJS",
  },
];

const Services = () => {
  return (
    <section className="services container section" id="service">
      <h2 className="section__title">Services</h2>
      <div className="services__container grid">
        {data.map(({ title, id, image, des, bgColor }) => (
          <ServiceCard
            id={id}
            image={image}
            title={title}
            des={des}
            bgColor={bgColor}
          />
        ))}
      </div>
    </section>
  );
};

export default Services;
