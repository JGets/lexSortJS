/**
* Lexicographically sorts the strings[] arr, using the string order as the
* lexicographical order.
*/ 
function lexSort(arr, order){
	var trie = buildTrie(arr, order, 0);
	return readTrie(trie, order);
}


/**
* Recursively builds a Trie with the elements of arr, using the string order
* as the lexicographical order.
*/
function buildTrie(arr, order, ind){
	//If there is only one element in arr, return an leaf Trie element.
	if(arr.length == 1){
		return {
			"" : arr
		}
	}
	var trie = {};
	//Iterate through all the given strings in arr,
	// placing them into 'buckets' based on their ind'th character
	for(var i = 0; i < arr.length; i++){
		var c = arr[i].charAt(ind);
		if(!trie.hasOwnProperty(c)){
			trie[c] = []; //If this trie doesn't already have a bucket for this
						  // this character, make a new one.
		}
		trie[c].push(arr[i]);
	}
	//Go through this node's 'buckets' & convert them into trie nodes
	for(var j = 0; j < order.length; j++){
		var c = order.charAt(j);
		if(trie.hasOwnProperty(c)){
			trie[c] = buildTrie(trie[c], order, ind+1);
		}
	}
	return trie;
}


/**
* Breadth-first traversal of the trie
*/
function readTrie(trie, order){
	var ret = [];
	var queue = [];
	var node = trie;
	while(typeof(node) === "object"){
		//If this node has a value, add it to the ret array
		if(node.hasOwnProperty("")){
			ret = ret.concat(node[""]);
		}
		//go through this node's children nodes, in order,
		// and add those nodes to the queue
		for(var j = 0; j < order.length; j++){
			var c = order.charAt(j);
			if(node.hasOwnProperty(c)){	//make sure a child-node for this key exists
				queue.push(node[c]);
			}
		}
		node = queue.shift(); //grab the next node off of the queue
	}
	return ret;
}
