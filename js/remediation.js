var app = new Vue({
    el: '#app',
    data: {
        purpose: ["垂直循環井法", "電阻加熱法", "現地化學氧化法", "界面活性劑淋洗或沖排法", "現地悶燃法", "土壤氣體抽除法", "生物修復法", "生物通氣法", "共同溶劑/聚合物沖洗法", "蒸氣注入法"],
        selectPurpose: ["垂直循環井法", "電阻加熱法"],
        modelList: [{
            "name": "FRAC3DVS",
            "family": ["HydroGeoSphere"],
            "remediation": ["垂直循環井法"],
            "function": ["可模擬變飽和流", "可模擬溶質傳輸"],
            "references": ["Samuel and Eldho, 2008"],
            "type": ["污染傳輸"],
            "developer": "加拿大滑鐵盧大學(UV)及拉瓦爾大學",
            "status": "商業軟體(Commercial)",
            "Features": ["三維有限元素法模式，模擬多孔或裂隙離散介質、變飽和地下水流與污染傳輸，可模擬多物種傳輸，傳輸機制包含平流、延散、等溫吸附及降解。"],
            "limit": "FRAC3DVS但主要仍針對地下環境進行模擬與評估，尚不具備模擬地表水或地表水與地下水交互作用之，但其家族模式HydroGeoSphere則具備耦合地表與地下水流之功能，可模擬整個水文循環。",
            "provider": "Aquanty"
        }, {
            "name": "垂直循環井解析模式",
            "family": [],
            "remediation": ["垂直循環井法"],
            "function": ["解析解模式", "僅針對受壓含水層", "假設含水層均於且各向異性"],
            "references": ["Cheet al., 2010"],
            "type": [],
            "developer": "",
            "status": "",
            "Features": [],
            "limit": "",
            "provider": ""
        }, {
            "name": "UTCHEM",
            "family": [],
            "remediation": ["生物修復法", "界面活性劑淋洗或沖排法", "共同溶劑/聚合物沖洗法"],
            "function": ["可模擬多成分多物種", "具備模擬微乳液(Microemulsions)的物化傳輸行為", "具備地球化學反應(生化反應)功能", "免費的模式"],
            "references": ["Delshad et al., 1996", "Pope and Delshad, 2000"],
            "type": ["污染傳輸"],
            "developer": "美國德州大學(The University of Texas at Austin)",
            "status": "商業軟體(Commercial)",
            "Features": ["UTCHEM為美國德州大學為提高石油開採回收率與加強含水層污染整治所開發的三維多相流、多成分多物種傳輸模式，可模擬氣相、水相、NAPL相及微乳相耦合化學傳輸及熱傳輸，具備生化反應及等溫吸附模型模擬功能、及EQBATCH前處理程式，提供平衡反應常見化學反應，包括水相錯合、吸脫附、離子交換、礦物溶解沉澱等的批次反應模擬功能。UTCHEM廣泛的應用在石油油藏評估，模式也適用於地下水污染整治等相關應用包含地球化學反應、生物整治及界面活性劑 / 聚合物的化學整治等。"],
            "limit": "UTCHEM化學物種在各相態轉換是以分配係數所決定，而非採用化學反應網路，且僅有生化反應能力，在適用性上受到限制。",
            "provider": "Center for Petroleum and Geosystems Engineering"
        }, {
            "name": "TMVOC",
            "family": ["T2VOC", "TOUGH2", "TOUGH2 - MP", "TOUGHREACT"],
            "remediation": ["生物修復法", "土壤氣體抽除法", "蒸氣注入法"],
            "function": ["可模擬多成分多物種", "具備地球化學反應功能"],
            "references": ["Falta et al., 1995", "Pruess et al., 1999", "Pruess, 2004", "Pruess and Battistelli, 2002", "Xu et al., 2008"],
            "type": [],
            "developer": "",
            "status": "",
            "Features": [],
            "limit": "",
            "provider": ""
        }, {
            "name": "NUFT",
            "family": ["NUFT - C"],
            "remediation": ["電阻加熱法"],
            "function": ["可模擬多成分多物種", "具備熱傳輸功能"],
            "references": ["Nitao, 1998", "Carrigaand Nitao, 2000", "Glassley et al., 2001"],
            "type": [],
            "developer": "",
            "status": "",
            "Features": [],
            "limit": "",
            "provider": ""
        }, {
            "name": "DNAPL3D",
            "family": ["DNAPL3D - MT", "DNAPL3D - RX", "DNAPL3D - FRAC"],
            "remediation": ["現地化學氧化法", "生物修復法", "界面活性劑淋洗或沖排法", "現地悶燃法"],
            "function": ["可模擬多成分多物種", "可模擬具裂隙的黏土層或岩塊", "該模式已被廣泛的驗證"],
            "references": ["Kueper and Frind, 1991", "Gerhard and Kueper, 2003", "Grant and Gerhard, 2007", "West et al., 2008", "Pang, 2010", "MacPhee et al., 2012"],
            "type": [],
            "developer": "",
            "status": "",
            "Features": [],
            "limit": "",
            "provider": ""
        }, {
            "name": "COMPSIM",
            "family": [],
            "remediation": ["生物修復法", "蒸氣注入法", "電阻加熱法"],
            "function": ["可模擬多成分多物種", "具備模擬溫度變化與氣相傳輸的功能"],
            "references": ["Sleep and Sykes, 1993", "McClure and Sleep, 1996", "O’Carroll and Sleep, 2007"],
            "type": ["污染傳輸"],
            "developer": "Prof.Brent Sleep",
            "status": "研究領域(Research Domain, RD)",
            "Features": ["COMPSIM為三維、三相、多成分多物種、地下水與污染傳輸數值模式，主要開發用於模擬地下水NAPL遷移與污染整治，具有平流、延散與化學反應機制。"],
            "limit": "COMPSIM主要針對地下環境進行模擬與評估，尚不具備模擬地表水或地表水與地下水交互作用之能力。",
            "provider": "Prof.Brent Sleep(sleep @ ecf.utoronto.ca)"
        }, {
            "name": "MVALOR",
            "family": ["VALOR"],
            "remediation": ["土壤氣體抽除法", "生物通氣法", "界面活性劑淋洗或沖排法"],
            "function": ["可模擬多成分多物種", "具備變密度流功能"],
            "references": ["Christ and Abriola, 2007"],
            "type": [],
            "developer": "",
            "status": "",
            "Features": [],
            "limit": "",
            "provider": ""
        }, {
            "name": "STOMP",
            "family": [],
            "remediation": ["土壤氣體抽除法", "蒸氣注入法"],
            "function": ["可模擬多成分多物種", "具備變密度流功能"],
            "references": ["White and Oostrom, 2003", "White et al., 2004"],
            "type": ["污染傳輸"],
            "developer": "美國太平洋西北國家實驗室(PNNL)",
            "status": "公眾領域(Public Domain, PD)",
            "Features": ["STOMP三維、三相、多成分多物種、地下水與污染傳輸數值模式，耦合熱傳、水力、力學及化學反應，主要設計用於揮發性污染物及放射性物質於地表下之污染傳輸與整治方案設計，因模式具備模擬各種地下環境功能，目前被廣泛應用在天然氣水合物與二氧化碳封存之模擬評估。"],
            "limit": "STOMP主要針對地下環境進行模擬與評估，尚不具備模擬地表水或地表水與地下水交互作用之能力。",
            "provider": "Pacific Northwest National Laboratory"
        }, {
            "name": "CompFlow",
            "family": ["CompFlow Bio"],
            "remediation": ["土壤氣體抽除法", "生物修復法"],
            "function": ["可模擬多成分多物種", "可模擬具裂隙的黏土層或岩塊"],
            "references": ["Unger et al., 1995, 1996", "Slough et al., 1999"],
            "type": [],
            "developer": "",
            "status": "",
            "Features": [],
            "provider": ""
        }, {
            "name": "MOFAT",
            "family": ["MOTRANS"],
            "remediation": ["土壤氣體抽除法"],
            "function": [],
            "references": ["Kaluarachchi and Parker, 1988, 1990"],
            "type": [],
            " developer ": "",
            " status ": "",
            " Features ": [],
            " provider ": ""
        }],
        showInformation: {
            "show": false,
            "who": {
                "name": "FRAC3DVS",
                "family": ["HydroGeoSphere"],
                "remediation": ["垂直循環井法"],
                "function": ["可模擬變飽和流", "可模擬溶質傳輸"],
                "references": ["Samuel and Eldho, 2008"],
                "type": ["污染傳輸"],
                "developer": "加拿大滑鐵盧大學(UV)及拉瓦爾大學",
                "status": "商業軟體(Commercial)",
                "Features": ["三維有限元素法模式，模擬多孔或裂隙離散介質、變飽和地下水流與污染傳輸，可模擬多物種傳輸，傳輸機制包含平流、延散、等溫吸附及降解。"],
                "limit": "FRAC3DVS但主要仍針對地下環境進行模擬與評估，尚不具備模擬地表水或地表水與地下水交互作用之，但其家族模式HydroGeoSphere則具備耦合地表與地下水流之功能，可模擬整個水文循環。",
                "provider": "Aquanty"
            }
        },
        test: true,
        scrollWidth: window.screen.width
    },
    computed: {
        selectModel: function () {
            var purpose = this.selectPurpose;
            return this.modelList.filter(function (model) {
                TF = model.remediation.map(function (val) {
                    return purpose.includes(val)
                })
                return TF.some(function (TF) {
                    return TF
                })
            })
        }
    },
    methods: {
        selectAll: function () {
            this.selectPurpose = this.purpose.slice();
        },
        selectNone: function () {
            this.selectPurpose = [];
        },
        removeItem: function(item){
            this.selectPurpose.splice(this.selectPurpose.indexOf(item), 1);
        },
        hideInfo: function () {
            this.showInformation["show"] = false
        },
        showMe: function (name) {
            this.showInformation["who"] = this.modelList.filter(function (model) {
                return model.name === name;
            })[0];

            this.showInformation["show"] = true
        }
    },
    created: function () {
        var hideInfo = this.hideInfo
        window.addEventListener('keydown', function (event) {
            if (event.key == "Escape") {
                hideInfo();
            }
        })
    }
})