import {sendMsg} from "../../redux/messagesReducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

const mapStateToProps = (state) => {
    return {
        messagesPage: state.messagesPage,
    }
}

const mapDispatchToProps = {sendMsg};

// const mapDispatchToProps = (dispatch) => {
//     return {
//         updateNewMsgBody: (msgBody) => {
//             dispatch(updateNewMsgBody(msgBody));
//         },
//         sendMsg: () => {
//             dispatch(sendMsg());
//         },
//     }
// }

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    // withAuthRedirect,
)(Dialogs);
