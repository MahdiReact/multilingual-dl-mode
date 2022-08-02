import "./dish.css";

const Dish = ({img}) => {
  return (
       <div className="dish">
              <img src={img} alt="dish"/>
       </div>
  );
};

export default Dish;
