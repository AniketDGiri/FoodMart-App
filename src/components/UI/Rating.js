const Rating = (props) => {
  //For displaying star method
  const starDisplay = [];
  for (let i = 1; i <= 5; i++) {
    if (i <= props.rating) {
      starDisplay.push(
        <i key={i} className="text-lg bi bi-star-fill text-yellow-500 mr-1"></i>
      );
    } else {
      starDisplay.push(
        <i key={i} className="text-lg bi bi-star text-yellow-500 mr-1"></i>
      );
    }
  }

  return [...starDisplay];
};

export default Rating;
