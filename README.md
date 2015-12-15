# Lexicographical Sort

````javascript
lexSort(arr, order);
````

This function takes an array of strings `arr` to be sorted, and a string `order` specifying the lexicographical order to be used for sorting.

Note: this function assumes that all characters found in the strings to be sorted appear somewhere in the `order` string.

## Run-Time

This function will run in `O(Lnk)`, where:
- `n` = the number of strings to be sorted
- `L` = the sum of the length of all strings to be sorted
- `k` = the length of the `order` string.
