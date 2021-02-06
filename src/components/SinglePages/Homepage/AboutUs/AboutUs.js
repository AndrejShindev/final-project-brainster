import React, { useContext, useState } from "react";
import { Row, Col, Button } from "react-bootstrap";
import YCard from "../../../Assets/Cards/YCard";
import { MyContext } from "../../../../Context/MyContext";
import InovationModal from "../../../Assets/Forms/InovationModal";
import XCard from "../../../Assets/Cards/XCard";

const AboutUs = () => {
  const { setShowPartnershipModal, setShowInovationModal } = useContext(
    MyContext
  );
  const [isEducation, setIsEducation] = useState(true);
  const educationInfo = {
    title: "ЕДУКАЦИЈА",
    text:
      "Дали си подготвен да одговориш на потребите на иднината. Вистинските курсеви, академии и семинари кои ќе ти овозможат кариерна трансформација во областа дигитален маркетинг, дизајн, програмирање и Data Science.",
    image: "edukacija1",
  };
  const companiesInfo = {
    title: "КОМПАНИИ",
    text:
      "Компаниите имаат можност да ги надоградат своите тимови, а со тоа да го подобрат перформансот на својата компанија. \n Дигиталната трансформација се случува, а вашите компании треба да бидат подготвени за да се адаптираат соодветно. Обуки, семинари, курсеви или team building? \n Во Brainster Space имаме специјално обучен тим кој е подготвен да ја насочи, адаптира и сподели својата експертиза со денешните потреби на компаниите.",
    image: "companies",
  };

  const companiesInfoText = companiesInfo.text
    .split("\n")
    .map((text, index) => (
      <React.Fragment key={index}>
        {text}
        <br />
        <br />
      </React.Fragment>
    ));

  const findCoworking = (e) => {
    e.preventDefault();
    document.getElementById("coworking-section").click();
  };

  return (
    <Row className="AboutUs">
      <Col md={12}>
        <h1 className="text-center ">За Нас</h1>
      </Col>
      <YCard
        image="/homepage/AboutUs/edukacija1.jpg"
        title="Едукација"
        text="Научи практични вештини за трансформација во кариерата. Нашата специјалност е да ти помогнеме да го најдеш правилниот skill set кој ќе одговори на реалните потреби на пазарот на труд. Организираме курсеви, академии и персонализирани обуки кои одговараат на реалните потреби на денешницата."
        location="https://brainster.co/"
      />
      <YCard
        image="/homepage/AboutUs/nastani.jpg"
        title="Настани"
        text="Специјално курирани и организирани настани кои ги поврзуваат правите таленти со иновативните компании. Идејата е да нашата tech заедница расте, се инспирира и креира преку овие настани."
        location="/events"
      />
      <YCard
        image="/homepage/AboutUs/coworking.jpg"
        title="Coworking"
        text="Биди дел од tech заедницата на иноватори, кретивци и претприемачи. Резервирај стол во нашата shared office. Пичирај го твојот бизнис и нашиот тим заедно ке одлучи секој месец со кого да ги дели своите канцеларии."
        location="coworking"
        function={(e) => findCoworking(e)}
      />
      <YCard
        image="/homepage/AboutUs/prostor za nastani.jpg"
        title="Простор за настани"
        text="Имаш идеја за обука или настан од tech областа? Ние имаме простор за реализација. Нашиот тим внимателно ги одбира и курира сите настани."
        location="/events-space"
      />
      <YCard
        image="/homepage/AboutUs/partnerstva so tech komp.jpg"
        title="Партнерства со tech компании"
        text="Целта и идејата е креирање на tech заедница која ќе се негува, расте и креира подобро утро за сите нас. Преку директно и индиректно поврзување на tech талентите со компаниите."
        location="/"
        function={() => setShowPartnershipModal(true)}
      />
      <YCard
        image="/IMG_7397.jpg"
        title="Иновации за компании"
        text="Нов концепт кој ќе им помогне на компаниите да преминат од стариот во новиот начин на работење. Подгответе ја вашата компанија за дигитална трансформација."
        location="/"
        function={() => setShowInovationModal(true)}
      />
      <InovationModal />
      <XCard
        style={isEducation ? { display: "flex" } : { display: "none" }}
        title={educationInfo.title}
        text={educationInfo.text}
        button="academies"
        button2="kompanii"
        image={`/homepage/AboutUs/${educationInfo.image}`}
      >
        <Button onClick={() => setIsEducation(true)} className="blackBtn">
          АКАДЕМИИ
        </Button>
        <Button onClick={() => setIsEducation(false)} className="yellowBtn">
          ЗА КОМПАНИИ
        </Button>
      </XCard>
      <XCard
        style={isEducation ? { display: "none" } : { display: "flex" }}
        title={companiesInfo.title}
        text={companiesInfoText}
        button="academies"
        button2="kompanii"
        image={`/homepage/AboutUs/${companiesInfo.image}`}
      >
        <Button onClick={() => setIsEducation(true)} className="blackBtn">
          АКАДЕМИИ
        </Button>
        <Button onClick={() => setIsEducation(false)} className="yellowBtn">
          ЗА КОМПАНИИ
        </Button>
      </XCard>
    </Row>
  );
};

export default AboutUs;
