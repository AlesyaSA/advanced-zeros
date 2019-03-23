module.exports = function getZerosCount(number, base){
  var reminder;
  var ZerosCount = number;
  var time_var = base;

  for (let i = 2; i <= base; i++) {
    if (time_var % i === 0) {
      reminder = 0;
      while (time_var % i === 0) {
        time_var = Math.floor(time_var / i);
        reminder++;
      };

      let count = 0;
      let tempNum = number;
      while (tempNum / i > 0) {
        count += Math.floor(tempNum / i);
        tempNum = Math.floor(tempNum / i);
      };
      var timeVar = Math.floor(count / reminder);
      if (ZerosCount > timeVar) {
        ZerosCount = timeVar;
      }
    }
  }
  return ZerosCount;
}
