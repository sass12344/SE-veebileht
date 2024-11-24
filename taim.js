function oitsemisAeg(oit_kuup, l_kuup) {
    let kuup = new Date()

    oit_kuup = new Date(oit_kuup)
    l_kuup = new Date(l_kuup)

    if (oit_kuup.getMonth() > l_kuup.getMonth()) {
        oit_kuup.setYear(kuup.getFullYear() - 1)
        l_kuup.setYear(kuup.getFullYear())
    } else {
        oit_kuup.setYear(kuup.getFullYear())
        l_kuup.setYear(kuup.getFullYear()) 
    }

    oit_kuup.setYear(kuup.getFullYear())
    l_kuup.setYear(kuup.get)

    if (kuup.getTime() <= l_kuup.getTime() && kuup.getTime() >= oit_kuup.getTime()) {
        document.getElementById("oitsemisaeg").innerHTML = kuupStringiks(kuup) + ": õitseb"
    } else {
        document.getElementById("oitsemisaeg").innerHTML = kuupStringiks(kuup) + ": ei õitse"
    }
}

function kuupStringiks(kuup) {
    const kuud = ["jaanuar", "veebruar", "märts", "aprill", "mai", "juuni", "juuli", "august", "september", "oktoober", "november", "detsember"]
    
    let paev = String(kuup.getDate())
    let kuu = kuup.getMonth()
    kuu = kuud[kuu]

    return paev + ". " + kuu
}
