console.log(nam.slice(0,5))
const Syn = Symbol("key1")
const User = {
    name : "Karthik",
    "full Name":"Karto C",
    age : "18",
    location : "NBng",
    days : ["Monday","TuesDay"],
    [Syn] : "newKet"

}
console.log(User.name)
console.log(User[Syn])




