// If `a.b.c` is tainted, then all its prefixes are also tainted
function f() {
    a.b.c = source

    //ruleid: test
    sink(a.b.c)
    //ruleid: test
    sink(a.b)
    //ruleid: test
    sink(a)
}