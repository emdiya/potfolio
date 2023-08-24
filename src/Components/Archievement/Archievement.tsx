import "./Archievement.css";

const data = [
  {
    id: 1,
    image:
      "https://is4-ssl.mzstatic.com/image/thumb/Purple116/v4/a1/0a/df/a10adf7d-3e6c-edd6-c5bf-24e711fafb8c/AppIcon-0-0-1x_U007emarketing-0-0-0-10-0-0-sRGB-0-0-0-GLES2_U002c0-512MB-85-220-0-0.png/512x512bb.jpg",
    bgColor: "#ffd166",
    title: "CiC App",
    des: "Digital Plateform",
  },
  {
    id: 2,
    image:
      "src/assets/z1logo.png",
    bgColor: "#ffd166",
    title: "Z1 App",
    des: "Digital Plateform",
  },
  {
    id: 3,
    image:
      "src/assets/z1logo.png",
    bgColor: "#ffd166",
    title: "My Propertty & Agency Post",
    des: "Real Estate Digital Plateform",
  },
  {
    id: 4,
    image:
      "src/assets/indication_plus.svg",
    bgColor: "#ffd166",
    title: "Indication-Plus",
    des: "Loan Estimate Digital Plateform",
  },

  {
    id: 5,
    image:
      "https://media.istockphoto.com/id/1305960836/vector/mentor-and-mentee-in-workplace-rgb-color-icon.jpg?s=612x612&w=0&k=20&c=9vQ8Hd9QLCiK6L9G90ebJU9H6w3djFKrw2NHuG9AMXA=",
    bgColor: "#ffd166",
    title: "Internship Training",
    des: "4 tranies passed",
  },
];

const Archievement = () => {
  return (
    <section className="archievement container section" id="archievement">
      <h2 className="section__title">Archievements</h2>
      <div className="archievements__container grid">
        {data.map(({ id, title, des, image }) => (
          <div className="archievements__card grid" key={id}>
            <div className="archievements__image grid">
              <img src={image} />
            </div>

            <div className="archievements__title">
              <h3 className="archievements__name">{title}</h3>
              <p className="archievements__description">{des}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Archievement;
