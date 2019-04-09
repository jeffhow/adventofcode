/* global $ */

var allBranches = ["xtcdt", "tujcuy", "wiqohmb", "cxdwmu", "hspnsfg", "fyvlf", "lgkbca", "eblot", "chpvnf", "uoasog", "upilubg", "cbwagy", "dtzjt", "ikegi", "gafbnc", "fpqpaes", "fjxvx", "nyrjj", "hyukvw", "oahdsnf", "qizgiau", "gyehzo", "qflfg", "lrqffb", "lvgrf", "ryahia", "cidce", "vkdslcc", "kdnrfhs", "agyir", "bukih", "cdmidbh", "tthspe", "ohxvh", "hjjchx", "ecbgp", "azdtrv", "oiyow", "kwenr", "sszjzj", "ierxej", "hrixd", "ixxaaz", "cewfc", "tfxzu", "ntnjsb", "ueoyysn", "qrmbao", "rjzmzv", "spfma", "jvjim", "dgwfi", "feogbnr", "nygkcd", "pfolrs", "avgmu", "ipvdfc", "cgyxd", "sbcry", "glcrysh", "mcmxown", "xogbq", "cdlqgyh", "cdcwgnc", "iiwvkl", "zssrg", "uicmcph", "xhjfj", "qsdjow", "koqxg", "knhfwbt", "yoyvf", "zmvsw", "skvukpc", "ngftkym", "idksgg", "kfmkk", "voiho", "gjnnotg", "pctuggx", "xpjgixx", "lkjbvw", "gexwzw", "cqoca", "xezjpye", "ftquc", "gggibf", "ferhk", "qgofl", "encsf", "fevzwrt", "mnezur", "nvmkhp", "zyghjdm", "ydnxkn", "uzaousy", "claeea", "abjmnp", "yaezieu", "ofrehpy", "lgaruuy", "wmhucb", "cxbjh", "khfpks", "lgmfk", "ufnve", "adrate", "ynrpdhv", "szyya", "uacotzj", "keleq", "ydxbbv", "dssoru", "jqmzy", "jkjtbt", "xysxg", "azsvcju", "gpvyac", "hygnrpp", "orsmk", "owagdf", "efrqc", "uhvca", "cpajvuw", "emucaaw", "srxvc", "xbopb", "rfjga", "qjdum", "nzojiy", "ysuoctn", "jghceu", "pvwdc", "jtnoixl", "otozhke", "ucadng", "xyoenl", "prewuzd", "mwybm", "pzyax", "gzvnmz", "rexbt", "qdygxw", "pduav", "bpopmlv", "stwrufp", "ltpprm", "dchgfut", "vtzpyp", "ybsetv", "eagtrv", "fkemma", "yrahjwp", "qgiwga", "frqzl", "lpbhq", "cbysja", "kglxzv", "nhrymw", "huantpz", "szeii", "cigtx", "ensfvaq", "hhsge", "jbmclpv", "tslksz", "tamkjw", "qzwkx", "temdg", "whurga", "cihne", "imafbhs", "kjjuo", "tzclfir", "rlxnjv", "jvyfuqy", "oqrht", "uevmjdz", "lyvwjt", "ntftdmt", "cjvxdq", "mlneyln", "gdndd", "tvooztp", "lpycpao", "vxgsa", "eicae", "pkgqybo", "iwuvvl", "ludvj", "yiqqluf", "muiela", "yrmop", "pwxllbx", "omoin", "aifwngi", "taljv", "qxylp", "hqyhx", "ahkztpf", "dhnttwg", "exryas", "rrnhzu", "treywsr", "ahvzxw", "bilbca", "okard", "ddbixap", "bxtzlhx", "nofof", "xzfbr", "wixxqy", "aajfrf", "enlcjc", "bfkcjn", "rvycd", "oatryy", "tjqcdi", "fantkyj", "gastvq", "tildgc", "wvwqp", "kmtyyw", "foghvqs", "ruadem", "jxwvdj", "ymfatu", "jxqmtj", "eesynky", "wsuetci", "rihloeh", "ekild", "kuiik", "yeqsa", "pzbruav", "nqobvf", "phbyft", "cdurt", "lzwvg", "wfdxzo", "sjaimla", "rijys", "ktwba", "fltpoim", "colszxn", "hwgbp", "anzjm", "jwqnma", "bjctm", "kbapj", "lmmde", "xzhus", "joohyti", "fzmhn", "pvzhrs", "jwdtam", "raqadrs", "nlnqo", "irvuv", "vlwhjq", "jwvkdyy", "juflvu", "hvwtr", "kicca", "dzlygu", "rqxgeqm", "iqtij", "ypqsdaa", "nsenvi", "dbuzcp", "lhclwhi", "zocuuld", "zuvar", "zxsxos", "awmjc", "ymqaag", "ninnxgi", "yexjxnd", "zwrifke", "tytnilq", "zxsoo", "euask", "nifzp", "jhhnkho", "jlzlxib", "cqhgy", "rddasm", "xhibern", "wmqzq", "wgqus", "hbpbcf", "dafryf", "ojwprv", "wknjhvo", "mrexh", "fjjgfl", "rfldln", "pzgagh", "madhzgb", "qfxeio", "mkrkkri", "kimkb", "rllniuw", "azkwjyi", "cyfuqq", "tydgx", "gnirnf", "tflkhk", "dyfioe", "uhguep", "idpng", "slvygt", "lqhud", "putleq", "wwdvt", "gbuxs", "oacpgj", "opwmti", "hpoawju", "cidfe", "iszzan", "qimhnpk", "tgedm", "unxjpl", "dugorw", "srybbkw", "izgqj", "smmjrpi", "ovdsrbq", "rgnjr", "mluyp", "unfrsh", "aisrfn", "piigjh", "amfdzum", "otont", "xcllyx", "iowcjno", "kcqshd", "rmqhdxq", "caylbg", "qavye", "anpyn", "ymexya", "ezespi", "mjeni", "yeovck", "vmreal", "cqqmsv", "pegrxl", "wbaldd", "sqenog", "jchpv", "bryzg", "owzsiku", "coiuo", "hbvroo", "maokm", "ntvpob", "qyrope", "dlmmqrm", "hznqtl", "fmfksfr", "ocriw", "ndvnqb", "pjrtq", "bkpzlxc", "rrqud", "aqrawj", "wjxqn", "prsysf", "ukdtleu", "gphoz", "bmoed", "ookaq", "nxrhbhh", "dfezv", "ofexdqx", "xizhxs", "pzgqbxm", "warhhhp", "wzcmmr", "phxjq", "byduope", "atkagyc", "ibbtm", "hixroxf", "hmxzkwe", "ehajus", "pxxvg", "oaiybyl", "roquwk", "azsurm", "kyxphrr", "qvtxsu", "jjqpm", "utydsr", "swhwwgj", "keuzyp", "iusyvt", "perxaan", "txagu", "mbzah", "bcnwjsb", "eivaq", "bcicoat", "bruxjz", "zjbmj", "axnnyq", "pbmhfx", "teekb", "popwmey", "gomgkol", "lrvwrl", "quaey", "xcubkli", "zuimm", "lvohqo", "mpkgky", "zkmtesi", "yalvg", "aymrru", "czllgn", "hwdfkq", "hizhauj", "niexbbc", "xsaqyd", "zcmud", "edxsfa", "sfvfge", "womays", "xxlzsza", "ekdrgm", "tptuqv", "lfjkju", "fkinwya", "elsqz", "iymnx", "lxgjn", "oyjrsw", "sbvgp", "gdzcx", "emrzoi", "atcrc", "msutjz", "emhikp", "uulxzg", "eswhpi", "ujpjxn", "jmcvwof", "zwprtx", "myaklce", "nqnvc", "xjddt", "kjegcl", "dzlrn", "vdkjcp", "tefpuyj", "iyywca", "pkafj", "nqmrbb", "tyati", "agbhqmu", "ypetsiw", "npjyxjn", "uhpbxq", "otvta", "hoemev", "lriegav", "ejygwyb", "kmiubc", "clxdcd", "sxakrws", "afwufw", "fwqle", "ctaya", "lpbbxoq", "zqicjh", "eyumraw", "hnulxpf", "ljlbpd", "pkvblpt", "eoeiflq", "oilpcq", "xtvqhc", "rvosgv", "dxspx", "ctcykka", "lcgdtru", "rvbrodj", "wqqmvoe", "bxeum", "uxunlz", "ejkioj", "wpirdu", "jeabki", "yorypq", "nbutjk", "uaojqj", "ndprukh", "vgeifn", "ouabu", "ucyuje", "enjrxrw", "zntwpqo", "nhale", "bjdfo", "wiumq", "dzmsn", "ujmboh", "xcrvb", "lvauv", "ajrle", "baqiy", "jdzlhqw", "lrsoyci", "ztnsgk", "yzlzly", "synxk", "smcru", "hqvvtr", "bbenpz", "wbxcy", "bfbbi", "ayeric", "vqomvt", "huqgqdb", "scngxng", "deoiu", "kvwjces", "mpnodas", "bzuiexp", "tsrob", "hbjhi", "ykxkahj", "kwavxzh", "vkpgf", "clwnxrx", "jably", "xsepgg", "ywwovs", "cyetn", "clnzh", "gybqyo", "mdwrg", "jnvrw", "jyvgy", "gjpgk", "kemkox", "jzkkmio", "zcvtef", "bwiee", "njoqwl", "prucq", "izqne", "rrfjfe", "cwcmr", "mcwevy", "duyvc", "usudfnb", "zfasn", "awgqw", "qxdfu", "hkljrrq", "yhkof", "puvhodg", "cikitqj", "cqhnl", "cnksi", "jejhp", "chpcn", "ejwrem", "otadvyl", "txqrl", "fqjhd", "gjkrkw", "klgolly", "yokbals", "mpamey", "moqub", "ysexyc", "ikkxpuo", "kdjoii", "hgnkw", "kxlbaue", "nnyzm", "cfcmep", "pvmgp", "dviuy", "dzkqrjf", "yhfjs", "sunnnk", "rigjtc", "inqto", "eemyrwb", "srkft", "wvlri", "nyvjvra", "flikvl", "dalhs", "jrrgvqf", "bikrg", "ortfml", "hktqef", "xbhhxq", "yheme", "lwdgty", "iftzv", "rcvhb", "szejcb", "hudgw", "ggmgzhd", "krbtc", "watbsp", "xuoags", "xflldsr", "hgfxb", "nxian", "vhauylt", "tbimd", "nrvgs", "jymsax", "ppkmo", "oukjop", "drvhp", "xrowfq", "ylbprac", "yywuo", "lugtnb", "vvfrqo", "gujrqf", "okmrsd", "jcmbf", "iukhsi", "zxalnm", "ahxnebz", "blqvp", "hbqxmkz", "ldcdes", "satjbta", "iycds", "lekky", "lccfqhm", "jybhrc", "zxrpdab", "ycxsmt","xhkbihe", "oxxyy", "ziyhyly", "jeeyjk", "avgsmcl", "izmwsib", "arouyz", "qleml", "nlnwd", "hzcbok", "djfzb", "wbtniv", "wztqxw", "shuqg", "yatllw", "uhottvw", "mqtksj", "jpzmpas", "aylev", "ueusbib", "umdid", "ehpmmve", "ayqsng", "zuytxxd", "rxoja", "oopwi", "dqtls", "xocsd", "urnlyx", "jscgykv", "usuyhvw", "nshqf", "wflwje", "lhkwv", "vdxxgsn", "lojah", "vfipmtl", "bjjxgjb", "hgnqq", "amdcb", "yyjweq", "fzzbt", "kaylk", "cnrgfkq", "kcqlos", "wnsnr", "zxtxfdm", "pkaqx", "sxfptlh", "ujtyd", "yfxxnzi", "ghpotnp", "ljedj", "gfzqihm", "gopynr", "waaostj", "cilkhan", "klfkq", "kemaenc", "wfvumx", "wtksb", "fnedd", "brwizly", "jvmpgso", "sbeizwi", "eunqr", "ndmej", "ijwptaq", "cweqffl", "jyjyy", "chozum", "fhayyvm", "appwc", "wksouwn", "auoba", "ctnzjui", "gjfmlc", "ekzsv", "sltfq", "tivuls", "nqgfa", "uzxbp", "fxdfhtc", "ivflnax", "hnevf", "nwipkns", "pwabsd", "ctpfl", "fhmeku", "bstmzd", "fdtzsv", "cekovn", "qceysy", "kcftmnv", "vkbpp", "fihqkla", "hethruu", "tpafkv", "xwpuhf", "vcqgruj", "kdgummr", "bxvaxw", "lucdfi", "nrwrhsp", "eayxrho", "udyms", "dtedfv", "sfwbytd", "vmghntr", "yqrjk","nflgixa", "ygjhtt", "pfchj", "yixjhrx", "sdljelr", "vpuqhsd", "fedjn", "sazkwox", "exvcki", "xzawv", "pxora", "qhfpnc", "ruxilvv", "gklao", "qxerd", "jncdjr", "edguzhg", "ygnys", "hpxoxk", "uisdgr", "cuajqvk", "ddpqp", "kjzvcr", "lnmmac", "sypqjit", "cdadt", "ncsro", "lwcbxxt", "apzzew", "grxfsjm", "uwwmhl", "ddjoygw", "occdw", "hawmox", "uzjpp", "puyxatg", "piztdav", "xzfggf", "gebon", "jmhafl", "juukhpw", "znitfpo", "apsinu", "vwgvrw", "wtfhx", "wdanz", "loksq", "qnwlb", "ojqkqas", "taewvbl", "xhrgl", "mjxqlx", "vnpjttm", "mlhqqjt", "yjuzr", "gfnhg", "ibxkkj", "pealhre", "wymbxxi", "kumyda", "beesdrz", "dfrdid", "gykhcku", "piaeb", "yxdkhlx", "sgabt", "gjmaeb", "ftaxy", "nrkctj", "tfnsk", "boyyulo", "dbics", "vsshf", "ahgtamk", "ortqko", "rzkgb", "sahdqia", "ivfbcy", "slifb", "muahqz", "shojrc", "spcwbv", "eixgei", "lxqing", "omiwktf", "xlkuot", "kwvkbv", "nhxtvr", "qryupbf", "yylhcwe", "lxxfs", "fzjuimt", "sjqnci", "nqvntc", "nhqgb", "byegnb", "arqruaa", "vbnobqv", "zzufnfx", "skhjuz", "yjpmbe", "nvaiuzb", "umrrz", "ozhoji", "ysqronq", "zmnaori", "lshtqgp", "vrezr", "elqusuf", "jjukrje", "amydoj", "pwzlax", "wiuxjsd", "tfkrv", "gbiqrgk", "azdiwj", "gqejmuy", "kxrorv", "dhpxdx", "zvkpq", "kajmeo", "dzxzka", "qtdha", "isaicgr", "dhilxlz", "gadpuyh", "nsoes", "vxlbjn", "hxexq", "ylwwnxo", "jzmhc", "oqfan", "cfcqxkp", "midyfh", "ryqaxd", "owjjchv", "smhbvd", "lnpla", "deuwm", "datez", "csrjic", "puuiqr", "wfwfpat", "pmyvcx", "fmtmlgd", "fluqhsw", "vbiwa", "woasw", "tayge", "qdoiidp", "kilai", "kfjztke", "idfhr", "qjtan", "eihea", "nlknxtv", "pclpjq", "pvzri", "fxgehjm", "dzjvx","fpejk", "qxmdjq", "ragqe", "acfzx", "cbrfntx", "raqfhc", "azfrf", "gdkka", "ipgoewc", "pjprk", "uqyqwny", "mdgqhkw", "hgignr", "zdmgb", "ncdbvaa", "iudquk", "dnwlq", "efriw", "edzfey", "tvbizrm", "arvmgnd", "gwhqhzb", "dbpxdxl", "imzuug", "kycvcdb", "ufknphd", "vjikgc", "nfebqt", "dwxem", "rzqdqj", "vzgukn", "dyvizny", "cjvfvb", "tkhlk", "bucnil", "atkes", "hdxbz", "wxsok", "ayntidu", "bnhfx", "hhgop", "cnrznxh", "gdnzlar", "xzmax", "iscthbd", "ontvyu", "bpmqk", "hkorax", "hjeeb", "clgsp", "avugbx", "rwupp", "mjvpc", "isrqnr", "fvvrow", "fuzizpc", "fcxdhb", "xxswx", "palczfm", "jgxph", "vbutj", "hpcncb", "ocsqis", "xtmjhz", "xvafyvk", "jqjzfu", "scjjqzv", "sddaxt", "xkdjnv", "axarhk", "cqoyqhn", "txkyw", "tzepblp", "slttwe", "mqkaob", "anbdqml", "aqkdmt", "xbmbzn", "mypzbk", "ehvljub", "abuszt", "vfkzaix", "ghzsq", "qcvigx", "ojxixj", "yjvyqo", "kvoeo", "dmufjvd", "ufaxhkb", "srnuyz", "aulrhvv", "oofhjqx", "ofjopcm", "boncwia", "ugoyb", "pawxyqe", "cubeivy", "ejkfjsb", "wlffbug", "cshmi", "uytekqt", "bhwirm", "vkugys", "gkgxg", "tplrfil", "nxnegu", "ivejr", "mabydz", "lsmylfm", "bzwof", "xmwcvfq", "ploofc", "xzbry", "dujat", "wonqggh", "chmmaa", "zcvlo", "lktenr", "nqmede", "vtrhhwq", "tiseyn", "bbehb", "zazwgl", "tyviul", "sbkqck", "karmp", "mfcryoc", "nnjtb", "vkcixm", "jsjxl", "hfqgoz", "dwsljog", "jhfdmw", "mzxyyfo", "kampbl", "lplefi", "uwnvz", "dzone", "yoddspj", "erxep", "lyhuihb", "wvihp", "pipax", "jxdpzr", "lpilno", "kpyped", "vtxpy", "immxnu", "yrpolf", "hjgaun", "ebargy", "netxsyl", "qcylfon", "furgqht", "bxlur", "ebjym", "xxnqt", "dpiexx", "hkgcdih", "lrslve", "gcsiaut", "ppakqms", "odhnwli", "dyvgigf", "snxzn", "abhtg", "xeqle", "fovzx", "ffncznl", "nyojm", "rfhbuox", "rsjswd", "ntmldq", "iflde", "ythhfq","njmxjzn", "aqzibdb", "wcdlx", "jbqfn", "xbomtaj", "gvfit", "jgfgg", "daebu", "jwmtw", "qhttqrn", "ibokijo", "upksf", "lzife", "jwioxco", "trvqvd", "tetsf", "zmekfc", "waturpr", "fedmbom", "ieebgv", "xwyzhc", "dxmuy", "wgcckll", "jwytokt", "xiecr", "mdubrq", "puwktt", "istew", "vjfzfkf", "ddhzzxi", "qnknn", "wkyhcm", "jydmmzj", "hejkytc", "uiqwd", "vuatju", "cqfebqe", "rhfcxzg", "gqauurp", "yblpan", "qigwdd", "kucajqv", "ymednx", "bgkxjiw", "qllpxw", "euhgp", "yrwzi", "isrgun", "luzyhbe", "goaeny", "mqtmr", "lqtckpk", "skhjb", "peqsua", "aijgw", "zzzcrp", "mkbny", "oukxnyz", "qeidnw", "jlick", "jauxs", "ebtazb", "ceghgg","zmrjb", "abvvbtl", "wlxkzyu", "ikmldw", "guwoota", "iczndtj", "bnrgfa", "pvtmulz", "koviipt", "qtfpf", "aagrt", "klnuy", "atcckfh", "vtkaia", "tufamsz", "dnigru", "ylftgo", "byijdr", "zkpbt", "tnvtn", "zlrwizb", "rcelntk", "fgctru", "uiaqaai", "qxzeexk", "isdcga", "jhxdgxv", "iilaoq", "kgwuliy", "pohtiuv", "qxoljws", "amliqh", "urgiwa", "dkhyk", "awwicqq", "hfyevuq", "nyfzqsd", "rnkrh", "obfxoch", "uhcrfl", "bnhfnlw", "hdzls", "pcfilur", "onnfacs", "wdugfj", "jakdiea", "crkcm", "bzxcjoz", "qrlcg", "vwepws", "rdzzlw", "xfnmqd", "ugmwpnx", "fgdbbei", "enuqt", "osevo", "bjdzogu", "ablbrw", "mdsms", "edgaqnw", "mgrolho", "vhyyv", "hvtqmrn", "oscxinx", "oubxwbc", "fzugjg", "pgyabg", "nvglnd", "itnpmen", "yrmjwj", "ykpcq", "dqggh", "fitaq", "rxxft", "jkmzstd", "xiuxqpp", "qvdkqw","jzzng", "kirybeg", "osbaf", "wfinqez", "oksum", "nrneucv", "zqkhpn", "pzpwzpp", "lmdteh", "jrqht", "eepyf", "njqjd", "cpdapys", "niphm", "eyqpybt", "unwpat", "cmpldn", "qweyg", "nbidkx", "rgdsxy", "mpunhg", "zvhjz", "oyhgs", "yrucl", "ldxqsu", "oihlb", "eblyrp", "hutkx", "hbdsnvx", "xtgrt", "fzqhw", "rnrxeb", "wbmahc", "tmzut", "bswzafr", "pdumcu", "vdppt", "lmvbhm", "orwwh", "kvrmjma", "rvshkx", "qalkey", "rkujtq", "jcortpe", "fslbtk", "isvfqpy", "qopbuhe", "swwwls", "earhrts", "ogfsdjs", "yqndxmd", "mxnvqf", "grctgck", "igoifku", "xefpxn", "cddgm", "lvbgz", "utyriu", "zpzdnz", "wjuyj", "vdjoaq", "xvcxtx", "dbirye", "cfegyp", "wckuhkd", "hjqlg", "otxmmd", "vrkihvw", "nndiv", "dsdvxuw", "bqxiezq", "bqypkb", "igwetl", "dzwgtf", "wdcathn", "bskvox", "zfbolo", "fvord", "tiqmony", "snqeb", "oxdqy", "mpnqbac", "meonp", "ampno", "cxocay", "zigchs", "hyhvgle", "anxrcns", "ywshnoc", "qqxng", "onpzd", "jscpi", "ljzqzlt", "tyvztv", "flgljqv", "cairgd", "hsagb", "ndpjdmr", "bexoza", "rlvfcl", "ajzenm", "keyfi", "mrmebqc", "grdozg", "pdfzwaz", "umbwe", "qxwiktp", "bmjswlz", "hjkfjle", "rhxhumv", "qxwmd", "kukri", "lzuon", "nfbln", "rurhdvo", "xozkvy", "wtxinor", "kyrfsv", "kchwzc", "hrbmwq", "qogcdog", "mhnprqw", "tshqhis", "ilstw", "mjmjubw", "knofme", "axilhr", "muivti", "glbnsvc", "ialxayo", "tihsmo", "xgefj", "crtmtt", "eqdoyk", "jwvgc", "lrriax", "hycmwzu", "wocartl", "baesgig", "iefpjj", "mdtrudc", "ywvxjtz", "jznwy", "hhmxdvr", "grnafmr", "qeebfg", "emkuxtl", "rdwgzr", "ehsqyyb", "bivovn", "bvjkr", "mkxbl", "xsodot", "sbwqnh", "hyvfpe", "qcgirq", "oghwfv", "txwypo", "kylpez", "ptfuyxs", "oknhrfd", "flrpj", "ctsvgc", "tnpiig", "coegpi", "mhrsu", "ikegr", "dtjmr", "blcjl", "zqmmc", "mwuhto", "sewpop", "durycn", "lpkak", "czvjqk", "tuwix", "ptczh", "abphjyv", "hyvzyy", "waukis", "uhcach", "muxuwcv", "vabwqou", "biqeev", "rsebxf", "aprln", "pxijthu", "eadol", "kqlwcz", "hepedt", "rtoecx", "jgtled", "boblgpx", "xqrgxx", "vegnaz", "tldwabo", "ltpwxbx", "xjmhhb", "vmwmulw", "hviil", "lxukyz", "rpdslp", "kzjfx", "cyxdrb", "aulkaf", "msnicb", "cqcbbbr", "dxonm", "bmxdb", "kapmsr", "wzzey", "kvmxfku", "dsmuem", "xlpgtmn", "rdcew", "qdqkaw", "xfcoi", "rtydk", "kbbgkmr", "uxsrdpn", "elwic", "wgxlaau"];

var allRoots = ["bxlur", "vgeifn", "ehsqyyb", "xeqle", "rvycd", "lvohqo", "vbiwa", "jwvkdyy", "ymednx", "snqeb", "rrnhzu", "arouyz", "bgkxjiw", "jhxdgxv", "atkes", "zqicjh", "rurhdvo", "aijgw", "aymrru", "vmreal", "qdqkaw", "xhibern", "tzclfir", "eyumraw", "datez", "ddbixap", "ipvdfc", "hycmwzu", "gjfmlc", "cbrfntx", "xpjgixx", "wonqggh", "rsjswd", "fihqkla", "mdubrq", "kjjuo", "xgefj", "yjuzr", "jxqmtj", "rrqud", "gykhcku", "ikmldw", "gqauurp", "xzmax", "pvtmulz", "hwgbp", "imafbhs", "qfxeio", "xtvqhc", "gybqyo", "dqtls", "pxxvg", "aulkaf", "xkdjnv", "maokm", "jably", "pxijthu", "nfebqt", "ywvxjtz", "ylwwnxo", "raqfhc", "pzpwzpp", "ctcykka", "zxrpdab", "fhmeku", "brwizly", "zssrg", "kfmkk", "blcjl", "fdtzsv", "lxqing", "vdxxgsn", "tytnilq", "nwipkns", "klnuy", "cdadt", "bjjxgjb", "nyrjj", "cfcqxkp", "uevmjdz", "ztnsgk", "zfasn", "pwabsd", "yrmop", "warhhhp", "caylbg", "gdnzlar", "jzmhc", "xsodot", "xcllyx", "cxocay", "hutkx", "qnknn", "ftaxy", "tptuqv", "vpuqhsd", "cyetn", "dsdvxuw", "wwdvt", "tetsf", "oilpcq", "kampbl", "zuimm", "yjpmbe", "rnkrh", "ufknphd", "rigjtc", "rihloeh", "upilubg", "madhzgb", "uisdgr", "xtgrt", "lwcbxxt", "ipgoewc", "jwioxco", "lmvbhm", "qtdha", "jvjim", "iszzan", "ukdtleu", "jznwy", "fgctru", "amydoj", "czvjqk", "ohxvh", "gbiqrgk", "urgiwa", "tmzut", "yeovck", "jybhrc", "xjddt", "karmp", "fkemma", "dzmsn", "bxtzlhx", "womays", "lxukyz", "kylpez", "amdcb", "oubxwbc", "wtksb", "vlwhjq", "hpoawju", "bqypkb", "jwqnma", "gvfit", "meonp", "cxbjh", "fuzizpc", "pvzri", "lqtckpk", "oiyow", "cpajvuw", "txkyw", "juukhpw", "rmqhdxq", "jymsax", "uhguep", "eagtrv", "sfwbytd", "occdw", "sypqjit", "axarhk", "fyvlf", "qqxng", "hvtqmrn", "mrmebqc", "azdtrv", "iusyvt", "rsebxf", "uoasog", "ivflnax", "hktqef", "iowcjno", "gfzqihm", "lcgdtru", "qceysy", "hjqlg", "fxgehjm", "oaiybyl", "nsenvi", "tkhlk", "wiumq", "xqrgxx", "szeii", "bucnil", "rvbrodj", "lxxfs", "uxunlz", "trvqvd", "pclpjq", "oatryy", "xtcdt", "wbaldd", "sqenog", "hwdfkq", "tihsmo", "swhwwgj", "eunqr", "erxep", "edzfey", "nbutjk", "ymfatu", "prucq", "oopwi", "xzhus", "sbvgp", "spcwbv", "otont", "ymexya", "rrfjfe", "dxonm", "fnedd", "deuwm", "mluyp", "ialxayo", "zmekfc", "sltfq", "vhyyv", "hbjhi", "kfjztke", "srkft", "sjqnci", "aprln", "qweyg", "nbidkx", "xjmhhb", "eqdoyk", "dchgfut", "anzjm", "drvhp", "qxwiktp", "vvfrqo", "jmcvwof", "yylhcwe", "wlxkzyu", "earhrts", "cyxdrb", "kilai", "teekb", "kyrfsv", "luzyhbe", "jwytokt", "yalvg", "ivejr", "isdcga", "jvyfuqy", "nyfzqsd", "fwqle", "ogfsdjs", "watbsp", "koviipt", "jeeyjk", "vxlbjn", "uaojqj", "ebargy", "ojqkqas", "zxsoo", "nygkcd", "elqusuf", "ppkmo", "muahqz", "qrmbao", "dhilxlz", "yexjxnd", "pvzhrs", "qsdjow", "phbyft", "yixjhrx", "foghvqs", "iilaoq", "qnwlb", "hxexq", "wksouwn", "lpbbxoq", "lnpla", "smmjrpi", "fqjhd", "tujcuy", "rfjga", "npjyxjn", "eayxrho", "wfvumx", "ekdrgm", "sbcry", "durycn", "otxmmd", "bpmqk", "eicae", "zcvtef", "nsoes", "dsmuem", "jwvgc", "sgabt", "deoiu", "arqruaa", "ryqaxd", "mlhqqjt", "nndiv", "tthspe", "ahgtamk", "unwpat", "lyhuihb", "jejhp", "vqomvt", "kwvkbv", "tyati", "hspnsfg", "ujpjxn", "opwmti", "swwwls", "gwhqhzb", "krbtc", "txqrl", "yrucl", "kumyda", "ljlbpd", "fzmhn", "yjvyqo", "jyvgy", "zlrwizb", "nhrymw", "goaeny", "palczfm", "elwic", "inqto", "gpvyac", "ebtazb", "pawxyqe", "piigjh", "tyviul", "sazkwox", "kvrmjma", "qgofl", "pegrxl", "mzxyyfo", "onpzd", "pdumcu", "yxdkhlx", "cxdwmu", "ypqsdaa", "nzojiy", "xyoenl", "avgmu", "yqrjk", "ivfbcy", "knhfwbt", "fxdfhtc", "vwepws", "qxdfu", "mwuhto", "wymbxxi", "gdzcx", "mqtmr", "kwavxzh", "anpyn", "rnrxeb", "dzlrn", "vbutj", "edguzhg", "wlffbug", "qimhnpk", "uhottvw", "pcfilur", "vfkzaix", "ecbgp", "vkugys", "kmiubc", "yokbals", "muivti", "fzjuimt", "jxwvdj", "bswzafr", "mkbny", "azsurm", "vkdslcc", "jeabki", "qflfg", "lojah", "voiho", "mwybm", "csrjic", "wcdlx", "bmjswlz", "qxoljws", "gbuxs", "kbapj", "niexbbc", "qeebfg", "fjxvx", "kimkb", "unfrsh", "ijwptaq", "zocuuld", "ddjoygw", "lwdgty", "bexoza", "uiqwd", "pvmgp", "ydxbbv", "kicca", "ptfuyxs", "gyehzo", "itnpmen", "mjmjubw", "enlcjc", "kwenr", "lvbgz", "vhauylt", "eixgei", "usuyhvw", "pwxllbx", "hjgaun", "ucadng", "lpkak", "idpng", "ddpqp", "qxwmd", "qeidnw", "eivaq", "hrixd", "ejygwyb", "ddhzzxi", "kzjfx", "qllpxw", "hmxzkwe", "fhayyvm", "lvauv", "woasw", "cmpldn", "ibxkkj", "abvvbtl", "idksgg", "pmyvcx", "sbeizwi", "xsaqyd", "fevzwrt", "cqqmsv", "clwnxrx", "ikegr", "hsagb", "jchpv", "jauxs", "midyfh", "msnicb", "ahxnebz", "skhjb", "ziyhyly", "jkjtbt", "hjeeb", "mdgqhkw", "boblgpx", "lvgrf", "anbdqml", "jrrgvqf", "otadvyl", "dpiexx", "otvta", "slttwe", "byegnb", "agbhqmu", "fmtmlgd", "sjaimla", "ctpfl", "xbmbzn", "cnrgfkq", "khfpks", "emkuxtl", "zxalnm", "lzwvg", "kpyped", "uytekqt", "bzwof", "atcckfh", "nyojm", "lmdteh", "jjukrje", "wgcckll", "ferhk", "kemkox", "wkyhcm", "gjkrkw", "pvwdc", "clgsp", "qalkey", "sewpop", "wvihp", "ragqe", "qtfpf", "hqvvtr", "tiqmony", "enuqt", "uzxbp", "hkorax", "wocartl", "cubeivy", "ylbprac", "xrowfq", "txwypo", "nofof", "vmwmulw", "shuqg", "ampno", "ndmej", "gdndd", "xvafyvk", "lqhud", "byijdr", "vdjoaq", "wjuyj", "ugmwpnx", "lshtqgp", "tufamsz", "piztdav", "zcvlo", "gzvnmz", "wbmahc", "ensfvaq", "iefpjj", "jsjxl", "sxfptlh", "jwmtw", "ojxixj", "ylftgo", "xsepgg", "yrwzi", "efriw", "xlkuot", "nhqgb", "nxian", "oscxinx", "ncdbvaa", "mfcryoc", "cqoyqhn", "slifb", "rcelntk", "axnnyq", "rhxhumv", "jgxph", "dalhs", "zmvsw", "hkgcdih", "ntvpob", "jdzlhqw", "peqsua", "cpdapys", "ysqronq", "putleq", "dyvgigf", "xocsd", "pipax", "cqfebqe", "fitaq", "lsmylfm", "kukri", "hqyhx", "tydgx", "keuzyp", "lpilno", "wfdxzo", "azfrf", "hdzls", "kdgummr", "nqnvc", "cbysja", "xiecr", "cuajqvk", "rwupp", "qdygxw", "dtzjt", "urnlyx", "emucaaw", "avugbx", "zxtxfdm", "pkgqybo", "hnulxpf", "atkagyc", "iukhsi", "rgdsxy", "uwwmhl", "klgolly", "ypetsiw", "igoifku", "raqadrs", "ejkfjsb", "hbqxmkz", "yaezieu", "yblpan", "kycvcdb", "zazwgl", "ayeric", "cewfc", "zfbolo", "jcortpe", "vdppt", "ujtyd", "cweqffl", "dhpxdx", "jbqfn", "colszxn", "qxerd", "scngxng", "keleq", "iwuvvl", "fvord", "nyvjvra", "vabwqou", "byduope", "lgkbca", "qogcdog", "aqzibdb", "ocriw", "tnvtn", "flgljqv", "utyriu", "flikvl", "tplrfil", "xiuxqpp", "ndpjdmr", "ocsqis", "rdzzlw", "avgsmcl", "uhvca", "ymqaag", "gadpuyh", "pkaqx", "bjctm", "nqvntc", "kapmsr", "txagu", "mxnvqf", "orwwh", "awwicqq", "tzepblp", "bmxdb", "ayntidu", "sxakrws", "zkpbt", "zcmud", "isvfqpy", "ikegi", "oxdqy", "dtedfv", "otozhke", "wdanz", "xfnmqd", "tpafkv", "rllniuw", "ltpprm", "kyxphrr", "yhkof", "ofexdqx", "uqyqwny", "yfxxnzi", "lekky", "lriegav", "qrlcg", "hethruu", "zwrifke", "cjvxdq", "ezespi", "acfzx", "lzuon", "dnwlq", "gqejmuy", "jcmbf", "pohtiuv", "chmmaa", "tjqcdi", "skvukpc", "dwxem", "dyfioe", "bmoed", "eswhpi", "mdsms", "aifwngi", "qhttqrn", "nrwrhsp", "beesdrz", "oukxnyz", "oxxyy", "zzufnfx", "nhale", "vrezr", "gphoz", "oihlb", "uhpbxq", "fpqpaes", "tsrob", "ljedj", "pkafj", "pwzlax", "ekzsv", "bikrg", "bryzg", "znitfpo", "hvwtr", "bvjkr", "arvmgnd", "mpnodas", "ruxilvv", "zvhjz", "wjxqn", "uhcrfl", "hgfxb", "zuytxxd", "ltpwxbx", "qvdkqw", "upksf", "eyqpybt", "rvosgv", "bfbbi", "vkpgf", "oghwfv", "lyvwjt", "encsf", "zigchs", "eihea", "nrneucv", "wgxlaau", "ctnzjui", "skhjuz", "exvcki", "xflldsr", "hudgw", "cnksi", "njmxjzn", "nnyzm", "mqkaob", "mpkgky", "oqrht", "fvvrow", "ontvyu", "yorypq", "iycds", "ywwovs", "mlneyln", "hrbmwq", "pxora", "azsvcju", "flrpj", "hyvfpe", "wsuetci", "coegpi", "gfnhg", "hbpbcf", "xbopb", "uacotzj", "jrqht", "fslbtk", "xbhhxq", "eblot", "puvhodg", "spfma", "dfezv", "bqxiezq", "tildgc", "dkhyk", "snxzn", "zmnaori", "lhkwv", "emrzoi", "ysexyc", "ueoyysn", "rpdslp", "jzzng", "rzqdqj", "pdfzwaz", "dzjvx", "nflgixa", "myaklce", "yyjweq", "bcnwjsb", "cilkhan", "hjkfjle", "cihne", "fkinwya", "kirybeg", "jmhafl", "ebjym", "ofrehpy", "jqmzy", "gggibf", "smcru", "dqggh", "lpbhq", "xzbry", "iczndtj", "mcmxown", "cfegyp", "ndvnqb", "bnrgfa", "bivovn", "omiwktf", "mkxbl", "gujrqf", "szejcb", "tslksz", "vsshf", "jhfdmw", "ngftkym", "vjfzfkf", "odhnwli", "popwmey", "mjeni", "perxaan", "edxsfa", "oknhrfd", "kbbgkmr", "nvglnd", "dviuy", "baesgig", "qcylfon", "wmhucb", "xlpgtmn", "wgqus", "rqxgeqm", "cdcwgnc", "grnafmr", "yoddspj", "zvkpq", "kcqlos", "ueusbib", "agyir", "aqrawj", "blqvp", "kaylk", "pgyabg", "tamkjw", "lkjbvw", "bcicoat", "uulxzg", "onnfacs", "hepedt", "gebon", "rtoecx", "hfqgoz", "taewvbl", "hhsge", "immxnu", "mkrkkri", "tfxzu", "netxsyl", "tyvztv", "xzfbr", "gastvq", "slvygt", "wixxqy", "cddgm", "scjjqzv", "amfdzum", "ntftdmt", "wiqohmb", "vbnobqv", "xuoags", "uzaousy", "gjmaeb", "nhxtvr", "jscpi", "ofjopcm", "bkpzlxc", "omoin", "roquwk", "xwyzhc", "mdtrudc", "pjrtq", "fcxdhb", "qigwdd", "ajzenm", "kcqshd", "oyjrsw", "iflde", "gjnnotg", "xzawv", "quaey", "jakdiea", "frqzl", "isrgun", "mabydz", "dbpxdxl", "tvooztp", "mpamey", "srxvc", "tflkhk", "vrkihvw", "rlxnjv", "wbtniv", "uwnvz", "ouabu", "hzcbok", "oqfan", "hejkytc", "waukis", "imzuug", "lmmde", "uzjpp", "isrqnr", "bpopmlv", "hznqtl", "vfipmtl", "kqlwcz", "kjzvcr", "hoemev", "eepyf", "qhfpnc", "aisrfn", "duyvc", "wflwje", "ykxkahj", "fovzx", "okard", "izmwsib", "iymnx", "lpycpao", "hkljrrq", "xxnqt", "xtmjhz", "stwrufp", "mpnqbac", "ludvj", "pctuggx", "xhjfj", "dbuzcp", "edgaqnw", "istew", "waaostj", "prewuzd", "vmghntr", "nrvgs", "jtnoixl", "mhrsu", "wvlri", "cyfuqq", "furgqht", "euask", "ikkxpuo", "dnigru", "ufaxhkb", "ajrle", "lplefi", "eemyrwb", "jpzmpas", "dgwfi", "lrqffb", "isaicgr", "uxsrdpn", "loksq", "ynrpdhv", "mhnprqw", "vuatju", "bxvaxw", "awmjc", "vdkjcp", "knofme", "atcrc", "szyya", "lhclwhi", "ktwba", "tgedm", "gklao", "cwcmr", "djfzb", "kuiik", "umrrz", "jgfgg", "ortfml", "qzwkx", "bzxcjoz", "eblyrp", "sbkqck", "bskvox", "ygjhtt", "synxk", "nvaiuzb", "ehvljub", "ygnys", "lgaruuy", "eesynky", "huqgqdb", "pfolrs", "fltpoim", "ehpmmve", "bwiee", "bfkcjn", "hyukvw", "xmwcvfq", "bruxjz", "rvshkx", "auoba", "abuszt", "aagrt", "zwprtx", "vzgukn", "wbxcy", "njoqwl", "rgnjr", "ejkioj", "yatllw", "ibokijo", "qopbuhe", "rkujtq", "qizgiau", "ysuoctn", "ntmldq", "sahdqia", "hviil", "boncwia", "xvcxtx", "tshqhis", "rlvfcl", "fzzbt", "yeqsa", "xxlzsza", "fzqhw", "xefpxn", "xcrvb", "xwpuhf", "qryupbf", "ryahia", "apsinu", "nqmede", "gexwzw", "owagdf", "cekovn", "jqjzfu", "clxdcd", "nshqf", "ljzqzlt", "gopynr", "mcwevy", "jghceu", "cigtx", "jxdpzr", "kxlbaue", "kxrorv", "dzkqrjf", "mgrolho", "kvwjces", "grdozg", "hygnrpp", "shojrc", "qleml", "hjjchx", "uicmcph", "coiuo", "lccfqhm", "udyms", "taljv", "ybsetv", "qxmdjq", "nlnwd", "xzfggf", "qxylp", "ekild", "cidfe", "pzbruav", "wnsnr", "qcgirq", "kcftmnv", "mpunhg", "bhwirm", "wztqxw", "jzkkmio", "anxrcns", "rddasm", "gomgkol", "treywsr", "zyghjdm", "fantkyj", "puyxatg", "mbzah", "bjdzogu", "qxzeexk", "orsmk", "wdcathn", "nfbln", "hnevf", "iiwvkl", "bbehb", "tvbizrm", "abjmnp", "cairgd", "nnjtb", "ucyuje", "pjprk", "aulrhvv", "pealhre", "xbomtaj", "nqmrbb", "vxgsa", "afwufw", "iyywca", "ejwrem", "guwoota", "dyvizny", "ploofc", "bukih", "ilstw", "sszjzj", "aqkdmt", "koqxg", "nrkctj", "okmrsd", "crkcm", "ycxsmt", "fmfksfr", "oofhjqx", "apzzew", "pbmhfx", "jnvrw", "zqkhpn", "wfwfpat", "bilbca", "osbaf", "wqqmvoe", "oyhgs", "wpirdu", "bnhfx", "zuvar", "ldcdes", "puuiqr", "vegnaz", "amliqh", "pkvblpt", "crtmtt", "oahdsnf", "fjjgfl", "rhfcxzg", "kjegcl", "rxxft", "usudfnb", "vtrhhwq", "hawmox", "cshmi", "vtkaia", "yiqqluf", "rfhbuox", "hbvroo", "jlick", "sunnnk", "umdid", "qcvigx", "keyfi", "axilhr", "tuwix", "yrmjwj", "claeea", "yrahjwp", "qdoiidp", "hdxbz", "ctaya", "sddaxt", "yhfjs", "xysxg", "ahvzxw", "tnpiig", "hyvzyy", "wckuhkd", "lgmfk", "wfinqez", "efrqc", "wvwqp", "dzlygu", "rtydk", "prsysf", "bjdfo", "qavye", "phxjq", "ujmboh", "mrexh", "dxspx", "boyyulo", "lrslve", "dzone", "qjdum", "rzkgb", "lrriax", "mypzbk", "vnpjttm", "feogbnr", "euhgp", "dujat", "jncdjr", "fedjn", "ydnxkn", "vkcixm", "xcubkli", "daebu", "emhikp", "jydmmzj", "yrpolf", "temdg", "chpcn", "gnirnf", "ffncznl", "klfkq", "ierxej", "bstmzd", "xxswx", "azdiwj", "ceghgg", "jgtled", "vtzpyp", "adrate", "elsqz", "mkxke", "msutjz", "osevo", "rfldln", "glcrysh", "izgqj", "azkwjyi", "kemaenc", "dzwgtf", "ruadem", "pduav", "cqcbbbr", "yoyvf", "zntwpqo", "xozkvy", "kvoeo", "iqtij", "tbimd", "owjjchv", "enjrxrw", "xfcoi", "satjbta", "hgnkw", "mqtksj", "ghzsq", "muiela", "xhkbihe", "biqeev", "mjxqlx", "vjikgc", "ncsro", "eadol", "ywshnoc", "appwc", "vkbpp", "nlknxtv", "kdnrfhs", "ppakqms", "wiuxjsd", "owzsiku", "jlzlxib", "qyrope", "nqobvf", "rjzmzv", "hizhauj", "utydsr", "mdwrg", "dxmuy", "dugorw", "jjqpm", "ninnxgi", "nqgfa", "zpzdnz", "juflvu", "cqhgy", "xezjpye", "lrvwrl", "cdlqgyh", "hyhvgle", "wzzey", "hhgop", "rdcew", "rxoja", "dlmmqrm", "kvmxfku", "ayqsng", "niphm", "nxrhbhh", "fpejk", "sfvfge", "gdkka", "smhbvd", "ieebgv", "clnzh", "fluqhsw", "igwetl", "dhnttwg", "gcsiaut", "hgignr", "yywuo", "pzgagh", "cnrznxh", "cgyxd", "yheme", "iftzv", "wknjhvo", "cbwagy", "zdmgb", "chozum", "yqndxmd", "vwgvrw", "mnezur", "kajmeo", "ftquc", "rcvhb", "ghpotnp", "tefpuyj", "exryas", "ixxaaz", "dtjmr", "jhhnkho", "tfnsk", "idfhr", "dssoru", "piaeb", "cfcmep", "dmufjvd", "bbenpz", "jwdtam", "ehajus", "unxjpl", "xogbq", "njqjd", "hpxoxk", "nlnqo", "kdjoii", "xhrgl", "cjvfvb", "glbnsvc", "huantpz", "lktenr", "cqhnl", "cidce", "vcqgruj", "tfkrv", "kgwuliy", "baqiy", "whurga", "eoeiflq", "fzugjg", "mjvpc", "tayge", "hgnqq", "oacpgj", "chpvnf", "ovdsrbq", "pzgqbxm", "sdljelr", "rijys", "qgiwga", "kucajqv", "ntnjsb", "zxsxos", "bzuiexp", "ozhoji", "cdmidbh", "wmqzq", "wtfhx", "kmtyyw", "izqne", "iudquk", "grctgck", "kglxzv", "ndprukh", "dzxzka", "ortqko", "jkmzstd", "kchwzc", "ggmgzhd", "umbwe", "hhmxdvr", "yzlzly", "wtxinor", "cikitqj", "dbics", "ldxqsu", "cqoca", "ufnve", "nvmkhp", "lxgjn", "irvuv", "lrsoyci", "ctsvgc", "ugoyb", "joohyti", "ykpcq", "dwsljog", "srnuyz", "bxeum", "ibbtm", "nifzp", "ookaq", "aylev", "obfxoch", "pfchj", "pzyax", "jyjyy", "awgqw", "tldwabo", "aajfrf", "lucdfi", "rdwgzr", "muxuwcv", "lzife", "oukjop", "wxsok", "ahkztpf", "lnmmac", "zmrjb", "hpcncb", "tivuls", "zqmmc", "vtxpy", "ythhfq", "waturpr", "lfjkju", "puwktt", "czllgn", "dbirye", "hixroxf", "zjbmj", "oksum", "dfrdid", "jvmpgso", "wzcmmr", "grxfsjm", "sbwqnh", "fedmbom", "qjtan", "ptczh", "uiaqaai", "srybbkw", "cdurt", "bnhfnlw", "fgdbbei", "ablbrw", "zkmtesi", "gjpgk", "tiseyn", "dafryf", "gafbnc", "ojwprv", "hfyevuq", "zzzcrp", "moqub", "hbdsnvx", "rexbt", "abhtg", "iscthbd", "gkgxg", "wdugfj", "xizhxs", "qvtxsu", "nxnegu", "lugtnb", "jscgykv", "jbmclpv", "abphjyv", "uhcach"];


//$('#day7a-ans').html( day7a(allBranches, allRoots.slice()) );



function day7a(branches, roots){
  console.log("b: "+branches.length);
  console.log("r: "+roots.length);
  var groot = "";
  
  while(roots.length > 0){
    
    for(var j=0; j<branches.length; j++){
      //console.log("r: "+roots.length);
      if(roots[roots.length-1] == branches[j]){
        roots.pop();
        console.log("r: "+roots.length);
        break;
      }else if(j==branches.length){
        groot = roots.pop();
        console.log("r: "+roots.length);
        break;
      }
    }
    
    return "done "+groot;
  }
  // for(var i=0; i<roots.length; i++){
  //   for(var j=0; j<branches.length; j++){
  //     console.log("r: "+roots.length);
  //     if(roots[i] == branches[j]){
  //       console.log("match");
  //     }
  //   }
  // }
  console.log(roots);
  return true;
}