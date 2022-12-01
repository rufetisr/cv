import PersonalInfo from "./PersonalInfo";
import Experience from "./Experience";
import Contacts from "./Contacts";
import "./styles.css";

export default function CV() {
  return (
    <div className="cv">
      <div className="profile">
        <h2>Rufat Isgandarov</h2>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0BIh9Y7u8TNKnL0pg2UBdyZHFRmtt8twihQ&usqp=CAU" />

        <div className="div-section">
          <PersonalInfo />
          <Experience />
          <Contacts />
        </div>
      </div>
    </div>
  );
}
