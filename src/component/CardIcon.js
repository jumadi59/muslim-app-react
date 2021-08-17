import PropTypes from "prop-types";

const CardIcon = ({ items }) => {
  return (
    <div className="grid">
      {items.map((item, i) => (
        <div className="card" key={i}>
          <div className="content-box">
            <div className="icon-background" style={{background: item.background}}>
              <item.icon />
            </div>
            <h4>{item.title}</h4>
            <p>{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

CardIcon.prototypes = {
  items: PropTypes.array.isRequired,
};

export default CardIcon;
