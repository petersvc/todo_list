import {colors, diagram, fonts} from '../../styles/baseStyle';
import general from '../../styles/generalStyle';

const styles = {
  editArea: {
    width: '100%',
    height: 180,
    backgroundColor: colors.bg,
    justifyContent: 'space-around',
    // padding: diagram.margin,
    paddingRight: diagram.margin + 1,
    paddingLeft: diagram.margin,
    marginTop: 'auto',
  },
  top: {
    flexDirection: 'row',
    alignItems: 'center',
    // justifyContent: 'space-between',
  },
  dateHour: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: -12,
  },
  taskItem: {
    flexDirection: 'row',
    paddingLeft: diagram.margin - 8,
    paddingRight: diagram.margin - 8,
    padding: 6,
    marginRight: 10,
    justifyContent: 'space-around',
    alignItems: 'center',
    borderWidth: 0.5,
    borderColor: colors.opaco,
    borderRadius: 100,
  },
  taskItem2: {
    flexDirection: 'row',
    flex: 1 / 3,
    // paddingLeft: diagram.margin,
    // paddingRight: diagram.margin,
    // padding: 8,
    // justifyContent: 'center',
    alignItems: 'center',
    // borderWidth: 0.5,
    // borderColor: colors.opaco,
    // borderRadius: 100,
  },
  bottom: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  taskTitle: {
    marginLeft: 12,
    color: colors.main,
    fontSize: fonts.lg + 3,
    textTransform: 'capitalize',
    fontWeight: 'bold',
  },
  colors: {
    orange: colors.orange,
    white: colors.white,
    green2: colors.green2,
    blue: colors.blue,
    red: colors.red,
    main: colors.main,
  },
  ...general,
};

export default styles;
