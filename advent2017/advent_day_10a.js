//var list = [165,1,255,31,87,52,24,113,0,91,148,254,158,2,73,153];
//List = Data list, ins = List of instructions, i = index, skip = skip size


function hash(list, ins, i, skip) {
  const l = list.length
  ins.forEach(v => {
    ;[...Array(v).keys()]
      .map((o, k) => list[(k + i) % l])
      .reverse()
      .forEach((val, k) => (list[(k + i) % l] = val))
    //
    i += v + skip
    skip++
  })
  return [list, i, skip]
}