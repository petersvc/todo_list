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
    paddingBottom: diagram.padding,
    paddingLeft: diagram.margin, // * 2.5,
    // backgroundColor: colors.bgLight,
    // borderBottomWidth: 0.4,
    // borderColor: colors.dim,
    borderRadius: 10,
  },
  headerTitle: {
    color: colors.white,
    fontSize: fonts.lg + 15,
    // fontWeight: 'bold',
    // textTransform: 'uppercase',
  },
  list: {
    paddingTop: diagram.padding,
    // marginTop: diagram.padding,
    // borderTopWidth: 0.3,
    // borderTopColor: colors.bgLight2,
  },
  listHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    // justifyContent: 'space-between',
    paddingBottom: diagram.padding,
    paddingLeft: diagram.margin, // * 2.67,
    paddingRight: diagram.margin + 1,
    // display: 'none',
    // borderBottomWidth: 0.5,
    // borderBottomColor: colors.bgLight2,
  },
  listName: {
    // paddingLeft: diagram.padding + 2,
    color: colors.main,
    fontSize: fonts.md,
    textTransform: 'capitalize',
    fontWeight: 'bold',
  },
  tasksNumbers: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: -2,
    marginLeft: 10,
    padding: 2,
    paddingLeft: 7,
    paddingRight: 7,
    borderWidth: 0.3,
    borderColor: colors.main,
    borderRadius: 100,
  },
  remaining: {
    color: colors.main,
    fontSize: fonts.sm - 2,
    textTransform: 'lowercase',
    letterSpacing: 1,
  },
  separador: {
    marginTop: diagram.padding,
    marginBottom: diagram.padding - 3,
    marginLeft: diagram.margin,
    width: 30,
    height: 0.4,
    backgroundColor: colors.dim,
    // alignSelf: 'center',
    borderRadius: 100,
  },
  separador2: {
    marginTop: diagram.padding,
    marginBottom: diagram.padding + 10,
    marginLeft: 2,
    width: 30,
    height: 0.4,
    backgroundColor: colors.dim,
    // alignSelf: 'center',
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
  addArea: {
    // justifyContent: 'center',
    // alignItems: 'center',
    position: 'absolute',
    bottom: 76, // diagram.margin * 3.2,
    right: 18, // diagram.margin - 4,
    // alignSelf: 'center',
  },
  addModal: {
    marginTop: 'auto',
    padding: diagram.margin,
    paddingBottom: 6,
    paddingTop: 16,
    // height: 115,
    // justifyContent: 'space-around',
    backgroundColor: colors.bg,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  addButton: {
    justifyContent: 'center',
    alignItems: 'center',
    // alignSelf: 'flex-end',
    // marginTop: 11,
    // marginLeft: 17,
    // marginRight: 2,
    // marginBottom: 10, // -diagram.margin * 1.8,
    height: 48,
    width: 48,
    backgroundColor: colors.main,
    // borderColor: colors.bg,
    // borderWidth: 8,
    borderRadius: 50,
    elevation: 2,
  },
  menuButton: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    right: 18,
    bottom: 16, // -diagram.margin * 1.8,
    height: 48,
    width: 48,
    backgroundColor: colors.main,
    borderRadius: 50,
    elevation: 2,
  },
  addHead: {
    borderBottomWidth: 0.4,
    borderBottomColor: colors.dim2,
    paddingBottom: diagram.padding,
    marginBottom: diagram.padding,
  },
  inputTask: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  taskTitle: {
    marginLeft: 10,
    color: colors.dim,
    fontSize: fonts.md,
  },
  taskDescription: {
    marginLeft: diagram.margin + 8,
    color: colors.dim,
    fontSize: fonts.md - 1,
  },
  newTaskDetails: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
    paddingLeft: 1,
  },
  taskItem: {
    flexDirection: 'row',
    // paddingLeft: diagram.margin - 10,
    // paddingRight: diagram.margin - 10,
    // padding: 7,
    marginRight: diagram.margin,
    justifyContent: 'space-around',
    alignItems: 'center',
    // borderWidth: 0.3,
    // borderColor: colors.dim,
    // borderRadius: 100,
  },
  taskSend: {
    marginLeft: 'auto',
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
