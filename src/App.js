import "./styles/App.css";
import quo from "../src/quo.png";
function App() {
  return (
    <div className="App">
      <div className="items">
        <div
          className="card"
          style={{ marginBottom: "auto", marginTop: "40px" }}
        >
          <div className="header">
            <div className="profile">
              <img
                width={100}
                height={130}
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzHQv_th9wq3ivQ1CVk7UZRxhbPq64oQrg5Q&usqp=CAU"
              ></img>
            </div>
            <div className="info">
              <div className="person-info">
                <span className="name">Kristin andrew</span>
                <span className="position">Marketing manager</span>
              </div>
              <div className="review">
                <div className="star">
                  <img
                    width={100}
                    src="https://www.shutterstock.com/shutterstock/videos/1096497721/thumb/5.jpg?ip=x480"
                  ></img>
                </div>
                <div className="testimonial">Testimonial</div>
              </div>
            </div>
          </div>
          <div className="text">I come to skillshare for the curation and class quality. that sreally worth the cost of membership to me</div>
          <img className="quo" width={50} heigth={50} src={quo}></img>
        </div>
        <div className="curve">hello</div>
      </div>

      <div className="items">
        <div className="card">
          <div className="header">
            <div className="profile">
              <img
                width={100}
                height={130}
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzHQv_th9wq3ivQ1CVk7UZRxhbPq64oQrg5Q&usqp=CAU"
              ></img>
            </div>
            <div className="info">
              <div className="person-info">
                <span className="name">Kristin andrew</span>
                <span className="position">Marketing manager</span>
              </div>
              <div className="review">
                <div className="star">
                  <img
                    width={100}
                    src="https://www.shutterstock.com/shutterstock/videos/1096497721/thumb/5.jpg?ip=x480"
                  ></img>
                </div>
                <div className="testimonial">Testimonial</div>
              </div>
            </div>
          </div>
          <div className="text">I have an understanding that, even if the work is not perfect, its a work in progress. And the reason why I'm on skillshare is to develop a skill. I feel that it's safe space.</div>
          <img className="quo" width={50} heigth={50} src={quo}></img>
        </div>
      </div>
      <div className="items">
        <div className="pole"></div>
        <div
          className="card"
          style={{ marginTop: "auto", marginBottom: "40px" }}
        >
          <div className="header">
            <div className="profile">
              <img
                width={100}
                height={130}
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzHQv_th9wq3ivQ1CVk7UZRxhbPq64oQrg5Q&usqp=CAU"
              ></img>
            </div>
            <div className="info">
              <div className="person-info">
                <span className="name">Kristin andrew</span>
                <span className="position">Marketing manager</span>
              </div>
              <div className="review">
                <div className="star">
                  <img
                    width={100}
                    src="https://www.shutterstock.com/shutterstock/videos/1096497721/thumb/5.jpg?ip=x480"
                  ></img>
                </div>
                <div className="testimonial">Testimonial</div>
              </div>
            </div>
          </div>
          <div className="text">I come to skillshare foor the curation and class quality. That's really work the cost of membership for me</div>
          <img className="quo" width={50} heigth={50} src={quo}></img>
        </div>
      </div>
    </div>
  );
}

export default App;
