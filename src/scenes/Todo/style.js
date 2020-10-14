import {colors, diagram, fonts} from '../../styles/baseStyle';
import general from '../../styles/generalStyle';

const styles = {
  todo: {
    flex: 1,
    backgroundColor: colors.bg,
  },
  dateText: {
    // fontSize: fonts.lg,
    display: 'none',
  },
  todoHeader: {
    flexDirection: 'row',
    // justifyContent: 'space-between',
    alignItems: 'center',
    paddingRight: diagram.margin,
    paddingTop: diagram.margin,
    paddingBottom: diagram.margin * 1.2,
    paddingLeft: diagram.margin, //  * 2.7,
    // backgroundColor: colors.bgLight,
    // borderBottomWidth: 0.4,
    // borderColor: colors.dim,
    borderRadius: 10,
    // margin: 8,
  },
  headerTitle: {
    // marginLeft: diagram.margin, // diagram.margin - 4,
    // marginBottom: 5,
    // marginTop: -6,
    color: colors.white,
    fontSize: fonts.lg + 3,
    // textTransform: 'uppercase',
    fontWeight: 'bold',
    // alignSelf: 'center',
    // display: 'none',
  },
  tasksNumbers: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: -2,
    marginLeft: 10,
    // marginLeft: 'auto',
    // width: 62,
    // height: 26,
    padding: 2,
    paddingLeft: 7,
    paddingRight: 7,
    borderWidth: 0.3,
    borderColor: colors.dim,
    borderRadius: 100,
  },
  rightSide: {
    marginLeft: 'auto',
    // marginRight: 3,
    width: 55, // 56,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    // alignSelf: 'flex-end',
    // backgroundColor: 'red',
  },
  avatar: {
    // marginLeft: 'auto',
    width: 32,
    height: 32,
    borderRadius: 100,
    // display: 'none',
  },
  remaining: {
    // marginTop: 6,
    color: colors.dim,
    fontSize: fonts.sm - 2,
    textTransform: 'lowercase',
    letterSpacing: 1,
  },
  topHead: {
    width: 100,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    alignSelf: 'flex-end',
    // backgroundColor: 'red',
  },
  bottomHead: {
    // marginTop: diagram.margin,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  dateHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    opacity: 0.5,
  },
  dayDate: {
    color: colors.dim2,
    fontSize: fonts.md,
  },
  footerItem: {
    backgroundColor: colors.bgLight,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
    height: 38,
    width: 38,
  },
  list: {
    paddingBottom: diagram.padding,
  },
  listHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    // justifyContent: 'space-between',
    paddingBottom: diagram.padding,
    paddingLeft: diagram.margin,
    paddingRight: diagram.margin + 1,
    // display: 'none',
    // borderBottomWidth: 0.5,
    // borderBottomColor: colors.bgLight2,
  },
  listName: {
    color: colors.main,
    fontSize: fonts.sm + 1,
    textTransform: 'uppercase',
    fontWeight: 'bold',
  },
  addModal: {
    marginTop: 'auto',
    paddingLeft: diagram.margin,
    paddingRight: diagram.margin,
    height: 115,
    justifyContent: 'space-around',
    backgroundColor: colors.bg,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  addArea: {
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: diagram.margin * 3,
    right: diagram.margin - 2,
    alignSelf: 'center',
  },
  addButton2: {
    justifyContent: 'center',
    alignItems: 'center',
    // alignSelf: 'flex-end',
    // marginTop: 11,
    // marginLeft: 17,
    // marginRight: 2,
    marginBottom: 10, // -diagram.margin * 1.8,
    height: 44,
    width: 44,
    backgroundColor: colors.main,
    // borderColor: colors.bg,
    // borderWidth: 8,
    borderRadius: 50,
    elevation: 3,
  },
  menuButton: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    right: 18,
    bottom: 12, // -diagram.margin * 1.8,
    height: 52,
    width: 52,
    backgroundColor: colors.bgLight,
    borderRadius: 50,
    elevation: 3,
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
    padding: 7,
    marginRight: 8,
    justifyContent: 'space-around',
    alignItems: 'center',
    borderWidth: 0.3,
    borderColor: colors.dim,
    borderRadius: 100,
  },
  taskSend: {
    marginLeft: 'auto',
  },
  menuIcon: {
    // justifyContent: 'center',
    // alignItems: 'center',
    // width: 38,
    // height: 38,
    // paddingLeft: 2,
    // paddingRight: 0,
    // padding: 0,
    // borderWidth: 2,
    // borderColor: colors.icon,
    // borderRadius: 100,
  },
  colors: {
    orange: colors.orange,
    white: colors.white,
    dim: colors.dim,
    green: colors.green,
    blue: colors.blue,
    red: colors.red,
    main: colors.main,
    bg: colors.bg,
  },
  ...general,
};

export default styles;
