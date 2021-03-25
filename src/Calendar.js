import React, { useState } from "react";
import styled from "styled-components";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import EditIcon from "@material-ui/icons/Edit";
// import Schedule from "./Schedule";
import { withRouter } from "react-router";
import Modal from "./Modal";
import AddSchedule from "./AddSchedule";
import Schedule from "./Schedule";
import moment from "moment";
import { useSelector, useDispatch } from "react-redux";

function MyCalendar({ history }) {
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
  };

  //리덕스 훅으로 가져오기
  const events_list = useSelector((state) => state.myschedule.events);
  console.log(events_list);

  // const events = [
  //   {
  //     todo_id: "dummy_id1111", // 아이디는 나중에 디비에 저장되면, 그때 가져와야죠! 일단 가짜로 둡니다!
  //     title: "ff",
  //     date: moment("2021-03-23").format("YYYY-MM-DD hh:mm:ss"), //내 데이터 형식으로 가져와야함
  //     completed: false,
  //   },
  //   {
  //     todo_id: "dummy_id13", // 아이디는 나중에 디비에 저장되면, 그때 가져와야죠! 일단 가짜로 둡니다!
  //     title: "으헝헝헝",
  //     date: moment("2021-03-25").format("YYYY-MM-DD hh:mm:ss"), //내 데이터 형식으로 가져와야함
  //     completed: false,
  //   }, // 지금 만들었으니 당연히 false겠죠!}
  // ];

  return (
    <Outer>
      <FullCalendar
        plugins={[dayGridPlugin]}
        initialView="dayGridMonth"
        weekends={true}
        events={events_list}
        eventClick={openModal}
      />

      <Modal open={modalOpen} close={closeModal} header="일정 상세보기"></Modal>
      <Button>
        <Fab
          color="secondary"
          aria-label="edit"
          onClick={() => {
            history.push("/schedule");
          }}
        >
          <EditIcon />
        </Fab>
        <Fab
          color="primary"
          aria-label="add"
          onClick={() => {
            history.push("/Addschedule");
          }}
        >
          <AddIcon />
        </Fab>
      </Button>
    </Outer>
  );
}

const Outer = styled.div`
  max-width: 600px;
  min-height: 30vh;
  height: 60vh;
  background-color: #fff;
  padding: 16px;
  margin: 20px auto;
  border-radius: 5px;
  border: 1px solid #ddd;
`;

const Button = styled.div`
  margin: -20px auto;
  float: right;
`;

export default withRouter(MyCalendar);
