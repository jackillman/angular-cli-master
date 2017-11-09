import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  'h2': {
    'textAlign': 'center',
    'lineHeight': [{ 'unit': 'px', 'value': 1.5 }],
    'marginTop': [{ 'unit': 'px', 'value': 20 }]
  },
  'form': {
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'auto' }, { 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'auto' }]
  },
  'input': {
    'position': 'relative',
    'width': [{ 'unit': '%H', 'value': 0.5 }],
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'auto' }, { 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'auto' }]
  },
  'input label': {
    'position': 'absolute',
    'left': [{ 'unit': 'px', 'value': 20 }],
    'top': [{ 'unit': 'px', 'value': 0 }],
    'transform': 'translateY(-50%)',
    'background': '#fff'
  },
  'input input': {
    'display': 'block',
    'margin': [{ 'unit': 'px', 'value': 30 }, { 'unit': 'string', 'value': 'auto' }, { 'unit': 'px', 'value': 30 }, { 'unit': 'string', 'value': 'auto' }],
    'height': [{ 'unit': 'px', 'value': 40 }],
    'width': [{ 'unit': '%H', 'value': 1 }]
  },
  'inputbtn': {
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'auto' }, { 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'auto' }],
    'display': 'block',
    'transition': 'all 0.5s'
  },
  'inputbtn:active': {
    'transform': 'translateY(-1px)',
    'background': '#55f',
    'color': '#fff'
  }
});
