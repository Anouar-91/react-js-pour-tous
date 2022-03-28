import car from '../img/car.png';

function Car({color}) {
  return (
    <div style={{
          border: `5px solid ${color}`
      }}>
        <img src={car} alt="logo" />
    </div>

  );
}

export default Car;
