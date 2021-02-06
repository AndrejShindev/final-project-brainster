import { v1 as uuid } from "uuid";

let EventsData = [
  {
    id: uuid(),
    title: "Codeworks",
    text:
      "Вистинскиот настан за сите tech таленти кои сакаат да кодираат и да научат што е ново во tech заедницата. Настан кој ги поврзува mid програмерите со IT компаниите. \n Deep Dive Intensive Seminar \n Ексклузивни семинари кои комбинираат три различни техники на учење.",
    image: "codeworks",
    url: "https://brainster.co/",
    calendarDetails: [
      {
        title: "Codeworks",
        start: new Date("February 07, 2021 19:30:00"),
        end: new Date("February 07, 2021 21:30:00"),
        additionalInfo: "",
        color: "rgb(44,50,63)",
      },
    ],
  },
  {
    id: uuid(),
    title: "Back-End Academy",
    text:
      "Backend е дел од сајтот или апликација кој не го гледаш и со кој немаш директна интеракција. Работи на серверот и всушност е она што го прави сајтот или апликацијата да функционираат добро. Backend делот подразбира работи кои се случуваат во позадина како на пример логирање на одредена страница, ставање продукти во кошничка и купување, комуникација со chatbot и слично…",
    image: "backend",
    url: "https://brainster.co/",
    calendarDetails: [
      {
        title: "Back-End Academy",
        start: new Date("February 09, 2021 19:30:00"),
        end: new Date("February 09, 2021 21:30:00"),
        additionalInfo: "Прв час",
        color: "rgb(88,100,127)",
      },
      {
        title: "Back-End Academy",
        start: new Date("February 11, 2021 19:30:00"),
        end: new Date("February 11, 2021 22:30:00"),
        additionalInfo: "Втор час",
        color: "rgb(88,100,127)",
      },
    ],
  },
  {
    id: uuid(),
    title: "Front-End Academy",
    text:
      "Frontend дел на еден веб сајт е се она што го гледаш на страницата и со што имаш директна интеракција. Копчињата, менијата, графичките елементи, форми и слично се дел од работите кои ги прави еден frontend програмер. Frontend е делот од сајтот или апликацијата кој работи во нашиот прелистувач или на некој од нашите уреди.",
    image: "frontend",
    url: "https://brainster.co/",
    calendarDetails: [
      {
        title: "Front-End Academy",
        start: new Date("February 13, 2021 17:00:00"),
        end: new Date("February 13, 2021 19:00:00"),
        additionalInfo: "Прв час",
        color: "rgb(152,161,179)",
      },
      {
        title: "Front-End Academy",
        start: new Date("February 15, 2021 17:00:00"),
        end: new Date("February 15, 2021 19:00:00"),
        additionalInfo: "Втор час",
        color: "rgb(152,161,179)",
      },
    ],
  },
];

export default EventsData;
