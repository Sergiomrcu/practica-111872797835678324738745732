function GoBack () {
	
}
function GoSearching () {
	
}
function GoPush () {
	
}
function GoDance () {
	
}
let activate = false
let found = true
while (activate) {
    found = false
    GoSearching()
    if (found) {
        GoPush()
        GoBack()
    } else {
        activate = false
    }
    GoDance()
}
