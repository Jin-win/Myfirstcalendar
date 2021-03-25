import React, { useState } from "react";
import styled, { useTheme } from "styled-components";
import moment from "moment";
import { Grid, Button, Text, Input } from "./Styles";
import { createMyschedule } from "./redux/modules/myschedule";
import { useDispatch } from "react-redux";

// CSS Modules, react-datepicker-cssmodules.css
// import 'react-datepicker/dist/react-datepicker-cssmodules.css';

const AddSchedule = (props) => {
  const { type, selected_todo, _showPopup, _deleteTodo, _updateTodo } = props;
  //작성할 내용과 시간을 ref로 넣어준다
  const title = React.useRef(null);
  const date = React.useRef(null);

  // 일정데이터가 지금은 Main 컴포넌트에 있는데
  // 아직은 그 데이터를 수정하기가 곤란함(리덕스 전이라서)
  // const writeTodo = () => {
  //   // console.log(title.current.value);
  //   // console.log(date.current.value);
  //   // 완전 잘들어옴 ㅜ ㅜ ㅜ 흐엉

  //   //  const events = [
  //   //    { title: "놀고 먹기", date: "2021-03-01" },
  //   //    { title: "잠만 자기", date: "2021-03-02" },
  //   //    { title: "뒹굴 거리기", date: "2021-03-06" },
  //   // ];

  //   let _new_todo = {
  //     todo_id: "dummy_id1111", // 아이디는 나중에 디비에 저장되면, 그때 가져와야죠! 일단 가짜로 둡니다!
  //     title: title.current.value,
  //     date: moment(date.current.value).format("YYYY-MM-DD hh:mm:ss"), //내 데이터 형식으로 가져와야함
  //     completed: false, // 지금 만들었으니 당연히 false겠죠!
  //   };
  //   console.log(_new_todo);
  //   //얘도 아주 잘들어옴 ㅜ ㅜ ㅜ ㅜ ㅜ
  //   props.history.replace("/");
  // };

  const dispatch = useDispatch();
  const addEvent = () => {
    const _new_todo = {
      todo_id: "", // 아이디는 나중에 디비에 저장되면, 그때 가져와야죠! 일단 가짜로 둡니다!
      title: title.current.value,
      date: moment(date.current.value).format("YYYY-MM-DD hh:mm:ss"), //내 데이터 형식으로 가져와야함
      completed: false,
    };
    console.log(_new_todo);
    dispatch(createMyschedule(_new_todo));
    props.history.replace("/");
  };

  return (
    <Grid margin="auto" flex_direction="column" width="80vw" height="80vh">
      <Text type="title">일정내용</Text>
      <Grid
        bg="#ffffff"
        flex_direction="column"
        width="80vw"
        padding="16px"
        margin="8px auto"
      >
        <Input type="text" ref={title} />

        <Text type="lable">일정 날짜</Text>
        <Input type="datetime-local" ref={date} />

        <Button> 뒤로 돌아가기 </Button>
        <Button onClick={addEvent}>작성 완료 </Button>
      </Grid>
    </Grid>
  );
};

//ref 개념을 알아야한다
// const Input = styled.div`
//   max-width: 400px;
//   min-height: 30vh;
//   position: flex;
//   height: 40vh;
//   background-color: #9bc3ff;
//   padding: 16px;
//   margin: 60px auto auto auto;
//   border-radius: 5px;
//   border: 1px solid #ddd;
//   text-align: center;
// `;
const Page = styled.div`
  max-width: 500px;
  min-height: 30vh;
  position: flex;
  height: 60vh;
  padding: 16px;
  margin: 20px auto;
  border-radius: 5px;
  border: 1px solid #ddd;
  background-color: #9bc3ff;
`;
export default AddSchedule;
