function bubble(a) {
    var trocar
    var i = a.length - 1

    do {
        trocar = false
        for (var n = 0; n < i; n++) {
            if (a[n] < a[n + 1]) {

                var temp = a[n];
                a[n] = a[n + 1];
                a[n + 1] = temp;
                trocar = true;
            }
        }
        i--
    }
    while (trocar);
    return a
}


console.log(bubble([12, 45, 45, 45, 45, 23, 89, 78, 44, 23, 12, 56]))
