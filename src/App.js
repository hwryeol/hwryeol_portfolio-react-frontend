import "./App.css";

function App() {
  return (
    <div className="main">
      <header className="container introSection">
        <div className="content">
          <div className="title">한원렬</div>
          <div className="subTitle">웹 개발자 포트폴리오</div>
          <div className="introduce">
            안녕하세요. <br />
            공부가 취미인 프론트 엔드 개발자 입니다. <br/>
            매일 커밋을 하기위해 노력하고 있습니다.
          </div>
        </div>
      </header>

      <section className="container aboutMe">
        <div className="content">
            <div className="title">ABOUT ME</div>
            <div className="items">
              <div className="name">한원렬</div>
              <div className="birth">1997.04.25</div>
              <div className="address">충북 제천시 남현동</div>
              <div className="contact">010-5706-3433</div>
              <div className="email">hwryeol@gmail.com</div>
              <div className="edu">세명대학교(컴퓨터학부)</div>
          </div>
        </div>
      </section>

    </div>
  );
}

export default App;
