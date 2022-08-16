function conditionColour (condition:string) {
   switch (condition) {
      case 'PF': return 'rgb(223, 160, 0)';
      case 'PL': return 'rgb(223, 160, 0)';
      case 'BU': return 'rgb(223, 160, 0)';
      case 'UNC': return 'rgb(132, 0, 255)';
      case 'AU+': return 'rgb(0, 27, 161)';
      case 'AU': return 'rgb(0, 27, 161)';
      case 'XF+': return 'rgb(43, 112, 2)';
      case 'XF': return 'rgb(43, 112, 2)';
      case 'VF+': return 'rgb(43, 112, 2)';
      case 'VF': return 'rgb(205, 127, 50)';
      case 'F': return 'rgb(205, 127, 50)';
      case 'VG': return 'rgb(205, 127, 50)';
      case 'G': return 'rgb(128, 128, 128)';
      case 'AG': return 'rgb(128, 128, 128)';
      case 'FA': return 'rgb(128, 128, 128)';
      case 'PR': return 'rgb(128, 128, 128)';
   }
}
export {
   conditionColour,
};