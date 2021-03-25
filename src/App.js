import React from "react";
import MyCalendar from "./Calendar";
import { Route, withRouter } from "react-router-dom";

//세부 페이지 컴포넌트 불러오기
import Schedule from "./Schedule";
import AddSchedule from "./AddSchedule";
// import Modal from "./Modal";
import { Container } from "@material-ui/core";

import { connect } from "react-redux";
import { loadMyschedule, createMyschedule } from "./redux/modules/myschedule";

const mapStateToProps = (state) => {
  return { myschedule_list: state.myschedule.events };
};

const mapDispatchToProps = (dispatch) => {
  return {
    load: () => {
      dispatch(loadMyschedule());
    },

    create: (myschedule) => {
      dispatch(createMyschedule(myschedule));
    },
  };
};

class App extends React.Component {
  componentDidMount() {
    // console.log(this.props);
  }
  // addBucketList = () => {
  //   const new_item = this.text.current.value;
  //   this.props.create(new_item);
  // };

  render() {
    return (
      <Container>
        <Route path="/" exact component={MyCalendar} />
        <Route path="/schedule" component={Schedule} />
        <Route path="/addschedule" component={AddSchedule} />
      </Container>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(App));
// connect(mapStateToProps, mapDispatchToProps)(withRouter(App));
