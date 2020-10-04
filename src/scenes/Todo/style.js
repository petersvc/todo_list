import {colors, diagram} from '../../styles/baseStyle';
import general from '../../styles/generalStyle';

const styles = {
  todo: {
    flex: 1,
    backgroundColor: colors.bg,
    // paddingLeft: diagram.margin,
    // paddingRight: diagram.margin + 1,
    // elevation: 2,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    // marginTop: diagram.top,
    // marginBottom: diagram.top - 8,
    // marginLeft: -5,
    paddingLeft: diagram.margin,
    paddingRight: diagram.margin + 1,
    height: 58,
    marginBottom: diagram.padding * 1.5,
    backgroundColor: colors.bg,
    // borderRadius: 7,
    elevation: 2,
    borderBottomWidth: 0.3,
    borderBottomColor: colors.bgLight2,
    // display: 'none',
  },
  avatar: {
    width: 25,
    height: 25,
    borderRadius: 100,
    // display: 'none',
  },
  headerTitle: {
    // borderColor: colors.white,
    // borderWidth: 0.4,
    // borderRadius: 100,
    color: colors.white,
    marginLeft: diagram.margin - 7,
    // marginRight: 12,
  },
  headerTitle2: {
    marginTop: 5,
    opacity: 0.5,
  },
  remaining: {
    marginTop: -8,
    marginLeft: 4,
    color: colors.main,
    opacity: 0,
  },
  rightSide: {
    flex: 1 / 3.5,
    marginLeft: 'auto',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  pomodoro: {
    // marginLeft: 'auto',
    marginRight: diagram.margin,
  },
  list: {
    marginBottom: diagram.margin * 1.5,
  },
  listHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    // justifyContent: 'space-between',
    paddingBottom: diagram.margin - 4,
    paddingLeft: diagram.margin,
    paddingRight: diagram.margin + 1,
    borderBottomWidth: 0.5,
    borderBottomColor: colors.bgLight2,
  },
  addModal: {
    marginTop: 'auto',
    paddingLeft: diagram.margin,
    paddingRight: diagram.margin + 1,
    height: 115,
    justifyContent: 'space-around',
    backgroundColor: colors.bgLight,
  },
  addArea: {
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: diagram.margin + 2,
    right: diagram.margin + 1,
    // alignSelf: 'center',
  },
  addButton2: {
    justifyContent: 'center',
    alignItems: 'center',
    // alignSelf: 'center',
    // marginTop: 11,
    // marginLeft: 17,
    // marginRight: diagram.margin + 8,
    // marginBottom: diagram.margin,
    height: 52,
    width: 52,
    backgroundColor: colors.main,
    borderRadius: 100,
    // marginTop: -25,
    // height: 50,
    // width: 50,
  },
  itemButton: {
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    // marginTop: 11,
    marginLeft: 17,
    marginRight: 17,
    marginBottom: diagram.margin,
    height: 44,
    width: 44,
    backgroundColor: colors.main,
    borderRadius: 100,
    // marginTop: -25,
    // height: 50,
    // width: 50,
  },
  inputTask: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  newTaskDetails: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  taskItem: {
    flexDirection: 'row',
    paddingLeft: diagram.margin - 10,
    paddingRight: diagram.margin - 10,
    padding: 5,
    marginRight: 10,
    justifyContent: 'space-around',
    alignItems: 'center',
    borderWidth: 0.5,
    borderColor: colors.opaco,
    borderRadius: 100,
  },
  taskSend: {
    marginLeft: 'auto',
  },
  ...general,
};

export default styles;
