const Item = (props) => {
  return (
    <div className="container-item-menu">
      <div>
        <h2>{props.name}</h2>
        <p>{props.price}</p>
        <p>{props.description}</p>
      </div>

      <img src={props.img} alt="" />
    </div>
  );
};

export default Item;
