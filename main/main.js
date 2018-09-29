module.exports = function main(str) {
	var num_struc1 = ["._.","...","._.","._.","...","._.","._.","._.","._.","._."];
	var num_struc2 = ["|.|","..|","._|","._|","|_|","|_.","|_.","..|","|_|","|_|"];
	var num_struc3 = ["|_|","..|","|_.","._|","..|","._|","|_|","..|","|_|","..|"];
    var out_struc1 = new Array();
	var out_struc2 = new Array();
	var out_struc3 = new Array();
	var out_struc = new Array();
	var num;
	
	for(var i = 0; i < str.length; i++)
	{
		num = parseInt(str[i]);
		out_struc1.push(num_struc1[num]);
		out_struc2.push(num_struc2[num]);
		out_struc3.push(num_struc3[num]);
	}
	
	out_struc = out_struc1.join('') +  '\n' + out_struc2.join('') +  '\n' + out_struc3.join('') +  '\n';
	console.log(out_struc);
    return out_struc;
};