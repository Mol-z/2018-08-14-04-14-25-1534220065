module.exports = function main(str) {
	var num_struc1 = ["._.","...","._.","._.","...","._.","._.","._.","._.","._."];
	var num_struc2 = ["|.|","..|","._|","._|","|_|","|_.","|_.","..|","|_|","|_|"];
	var num_struc3 = ["|_|","..|","|_.","._|","..|","._|","|_|","..|","|_|","..|"];
    var out_struc1 = [];
	var out_struc2 = [];
	var out_struc3 = [];
	var out_struc = [];
	var num;
	
	for(var i = 0; i < str.length, i++)
	{
		num = parseInt(str[i]);
		out_struc1.push(num_struc1(num));
		out_struc2.push(num_struc2(num));
		out_struc3.push(num_struc3(num));
	}
	out_struc1.join(' ');
	out_struc2.join(' ');
	out_struc3.join(' ');
	
	out_struc1.push('\n');
	out_struc2.push('\n');
	out_struc3.push('\n');
	
	out_struc = out_struc1 + out_struc2 + out_struc3;
	console.log(out_struc);
    return out_struc;
};