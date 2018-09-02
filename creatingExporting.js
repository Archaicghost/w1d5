var master = [2, 4, 6, 5, 1, 7];
var dupe = [];

var myModule = function(num) {

return master.push(num)

}

function sortNum(){
	var sorted = master.sort()
	return sorted.toString()

}


module.exports = {
  sortNum: sortNum,
  myModule : myModule

}





// for (var i = 0 , t = 10; i < t ; i++) {
//     master.push(Math.round(Math.random() * t))



