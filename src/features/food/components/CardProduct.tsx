import "../styles/components/CardProduct.scss";
import img from "../../../assets/Ojingeo-muchim-1.png";
import start from "../../../assets/icons/ic_star.svg";
import favorite from "../../../assets/icons/ic-favorite.svg";
import chef from "../../../assets/icons/ic_chef.svg";
import time from "../../../assets/icons/ic_time.svg";
import portionicon from "../../../assets/icons/ic_portion.svg";

interface prop {
  imgmain: string;
  title: string;
  type: string;
  rank: string;
  portion: string;
  timecook: string;
  difficulty: string;
}

export const CardProduct = ({
  imgmain,
  title,
  type,
  rank,
  portion,
  timecook,
  difficulty,
}: prop) => {
  return (
    <div className="cardproduct">
      <section className="cardproductContent">
        <div className="cardproduct__imgmain">
          <img src={imgmain} alt="" />
        </div>

        <div className="cardproduct__detail">
          <h3>
            {title}
            <span>{type}</span>
          </h3>
          <div className="cardproduct__detail--rank">
            <div>
              <img src={start} alt="rank" />
              <span>{rank}</span>
            </div>

            <img src={favorite} alt="favorite" />
          </div>
        </div>

        <div className="cardproduct__detaildesc">
          <div>
            <img src={chef} alt="portion" />
            <h3>Tamaño de Porcion</h3>
            <p>{portion} raciones</p>
          </div>

          <div>
            <img src={time} alt="timecook" />
            <h3>Tiempo de preparacion</h3>
            <p>{timecook} minutos</p>
          </div>

          <div>
            <img src={portionicon} alt="hard" />
            <h3>Dificultad</h3>
            <p>{difficulty}</p>
          </div>
        </div>
      </section>
    </div>
  );
};
