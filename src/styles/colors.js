// export default Colors = {
// import Colors from './colors';
//     gray: '#606060',
//     white: '#FFFFFF',
//     red: '#FA0000',
//     blue: '#0400FF',
//     pink: '#e83b94',
//     black: '#000000',
//     white: '#ffffff',
//     amber: '#edde35',
//     cyan: '#35EDC8',
// };

export default Colors = colorName => {
  Colors = {
    gray: '#606060',
    white: '#FFFFFF',
    red: '#FA0000',
    blue: '#0400FF',
    pink: '#e83b94',
    black: '#000000',
    white: '#ffffff',
    amber: '#edde35',
    cyan: '#35EDC8',
  };
  return Colors[colorName];
};
