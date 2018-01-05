var app = new Vue({
    el: '#app',
    data: {
        purpose: ['未飽和層污染傳輸', '地下水污染反應傳輸', '地下水污染流佈路徑', '地下水污染風險評估', '地下水污染傳輸', '地下水流場', '污染來源推估', '污染物之水文地球化學反應', '初步評估工具', '風險評估', '健康風險評估', '常被用於自然衰減評估及礦區排水的模擬', '常被用於自然衰減與生物修復評估', '評估石油碳氫化合物地下水污染之自然衰減', '評估含氯地下水污染之自然衰減', '評估含氯污染整治成效', '模擬自然衰減', '適合模擬污染物之水文地球化學反應', '適合模擬自然衰減及生物修復'],
        selectPurpose: ['未飽和層污染傳輸', '地下水污染傳輸'],
        modelList: [{
            "name": "SESOIL",
            "family": [],
            "purpose": ["初步評估工具", "未飽和層污染傳輸"],
            "function": ["模擬未飽和層污染物一維垂向傳輸", "具備氣候數據庫(僅有美國、關島及波多黎各)", "具備化學數據庫"],
            "references": ["Odencrantz, 1992", "謝添進，2002"],
            "type": ["污染傳輸"],
            "developer": "美國環保署(USEPA)",
            "status": "公眾領域(Public Domain, PD)",
            "Features": ["SESOL為Bonazountas 及Wagner替美國環保署開發之篩選模式，期間經過多次修改，目前最新版本SESOL 7.1，主要模擬地表至地下水之間，污染物在未飽和層之長期性之宿命與傳輸情形，在美國經常被使用在地下儲槽、垃圾掩埋場及農業規範(agricultural practices)等長時間排放，評估可能造成之污染或風險。", "模式主要輸入五種數據類型，分別為氣候數據、土壤數據、化學數據、應用數據(土壤參數、污染物負荷特徵等)及土壤侵蝕數據。傳輸機制包含揮發、吸附、離子交換、生物降解、水解及聚合。"],
            "limit": "SESOIL僅能模擬一維、垂向未飽和層污染傳輸，垂向最多可分四種土層，每層最多10個子層，因此，不適用模擬二、三維、地表水或飽和含水層、以及土層異質性太高的問題。",
            "provider": "Environmental Software Consultants, Inc."
        }, {
            "name": "VS2DT",
            "family": [],
            "purpose": ["未飽和層污染傳輸"],
            "function": ["未飽和層污染物二維傳輸"],
            "references": ["Gogolev, 2002"],
            "type": ["污染傳輸"],
            "developer": "美國環保署(USEPA)",
            "status": "公眾領域(Public Domain, PD)",
            "Features": ["VS2DT為美國地質調查所(USGS)開發之數值模式，採用有限差分法，用於解決變飽和水流與溶質傳輸問題，目前最新版本為VS2DT 3.0版，可模擬二維垂直截面，流量邊界包含給定壓力水頭、給定通量、滲透、植物蒸散、裸露土壤蒸發與滲流，傳輸機制包含平流、延散、降解及平衡吸附與離子交換。"],
            "limit": "VS2DT為主要模擬未飽和到飽和含水層之水流與污染傳輸模式，考量單相流，無法模擬多相流問題，且不具備模擬地表水或地表水與地下水交互作用之能力。",
            "provider": "US Geological Survey"
        }, {
            "name": "SUTRA",
            "family": [],
            "purpose": ["未飽和層污染傳輸"],
            "function": ["未飽和與飽和層污染物傳輸(二、三維)", "可模擬海水入侵"],
            "references": ["Simmons et al., 1999", "Bobba, 2002"],
            "type": ["污染傳輸"],
            "developer": "美國環保署(USEPA)",
            "status": "公眾領域(Public Domain, PD)",
            "Features": ["SUTRA為美國地質調查所(USGS)發展之三維變飽和層、變密度流之地下水流與單物種水相污染物傳輸，且具備熱傳功能。模式具備四種邊界條件，分別為源匯項(source/sink)、溶質或能源之源匯項、給定壓力水頭、給定濃度或溫度。"],
            "limit": "SUTRA主要模擬未飽和到飽和含水層之水流與污染傳輸模式，不具備模擬地表水或地表水與地下水交互作用之能力，且污染傳輸僅能模擬單物種。",
            "provider": "US Geological Survey"
        }, {
            "name": "自然衰減評估模式(1)",
            "family": ["BIOCHLOR"],
            "purpose": ["初步評估工具", "評估含氯地下水污染之自然衰減"],
            "function": ["自然衰減篩選模式", "解析解模式", "以Microsoft Excel為介面", "可模擬一維對流、三維延散及線性吸附作用"],
            "references": ["Huff et al., 2000", "傅楷淓，2016", "環保署，2008"],
            "type": ["污染傳輸"],
            "developer": "美國環保署(USEPA)",
            "status": "公眾領域(Public Domain, PD)",
            "Features": ["BIOCHLOR為篩選模式(screening model)，設計用於地下水受到含氯有機污染之自然衰減評估，目前最新版本為BIOCHLOR 2.2版，以Microsoft Excel為介面，可模擬模擬一維對流、三維延散、線性吸附及降解作用。"],
            "limit": "BIOCHLOR為初步評估之解析模式，適用單純的地下水流，缺乏二、三維非均勻地下水流場模擬能力，且不適用非經一階衰減反應的污染評估。",
            "provider": "US Environmental Protection Agency"
        }, {
            "name": "自然衰減評估模式(2)",
            "family": ["BIOPLUME III"],
            "purpose": ["模擬自然衰減"],
            "function": ["二維污染傳輸模式", "可模擬氧、氧，硝酸鹽，鐵，硫酸鹽和有機污染物生物降解情形"],
            "references": ["Rifai et al., 2000", "吳龍泉，2004", "環保署，2008"],
            "type": ["污染傳輸"],
            "developer": "美國環保署(USEPA)",
            "status": "公眾領域(Public Domain, PD)",
            "Features": ["BIOPLUME III為二維有限差分模式，可模擬有機污染物在地下水之延散、擴散及生物降解之自然衰減情形，模式基於美國地調所發展之MOC模式，並與EIS平台結合，具有圖形化使用者介面，方便編輯與輸入數據。"],
            "limit": "BIOPLUME III缺乏三維非均勻地下水流場模擬能力。",
            "provider": "US Environmental Protection Agency"
        }, {
            "name": "自然衰減評估模式(3)",
            "family": ["BIOSCREEN", "BIOSCREEN-AT"],
            "purpose": ["初步評估工具", "評估石油碳氫化合物地下水污染之自然衰減"],
            "function": ["自然衰減篩選模式", "解析解模式", "以Microsoft Excel為介面"],
            "references": ["Newell et al., 1996", "邱漢瑜，2013", "李雅絹，2011", "環保署，2008"],
            "type": ["污染傳輸"],
            "developer": "美國環保署(USEPA)",
            "status": "公眾領域(Public Domain, PD)",
            "Features": ["BIOSCREEN為篩選模式(screening model)，設計用於地下水受到油品類污染之自然衰減評估，目前最新版本為BIOSCREEN 1.4版，以Microsoft Excel為介面，可模擬模擬一維對流、三維延散、線性吸附、好氧或厭氧之生物降解。"],
            "limit": "BIOSCREEN為初步評估之解析模式，適用單純的地下水流，缺乏二、三維非均勻地下水流場模擬能力。",
            "provider": "US Environmental Protection Agency"
        }, {
            "name": "REMChlor",
            "family": [],
            "purpose": ["初步評估工具", "評估含氯污染整治成效"],
            "function": ["解析解模式", "可模擬含氯有機污染物降解情形"],
            "references": ["Hendersoet al., 2009"],
            "type": ["污染傳輸"],
            "developer": "美國環保署(USEPA)",
            "status": "公眾領域(Public Domain, PD)",
            "Features": ["REMChlor為地下水含氯有機污染整治評估模式，為解析模式，加設地下水流為一維，可模擬含氯降解情形，經常被應用於場址健康風險評估。"],
            "limit": "僅能模擬一維含氯有機污染，不具備二、三維非均勻地下水流場模擬能力，且不適用非經一階衰減反應的污染評估。",
            "provider": "US Environmental Protection Agency"
        }, {
            "name": "二維多物種傳輸模式",
            "family": [],
            "purpose": ["初步評估工具"],
            "function": ["解析解模式", "二維污染傳輸模式", "可模擬含氯有機物染物、氮類及放射性核種"],
            "references": ["Cheet al., 2016."]
        }, {
            "name": "PHREEQC",
            "family": [],
            "purpose": ["污染物之水文地球化學反應"],
            "function": ["具備地球化學反應功能", "具備大量熱力學資", "可模擬批次反應與一維傳輸"],
            "references": ["Navarro and Carbonell, 2007", "高振棋，2016"],
            "type": ["地球化學"],
            "developer": "美國地質調查所(USGS)",
            "status": "公眾領域(Public Domain, PD)",
            "Features": ["PHREEQC模式為美國地質調查所資助並持續發展之水文地球化學模式，該模式為開放原始碼程式，具備大量的熱力學資料庫(包括WATEQ4F、MINTEQA2、EQ3/6)，可以自訂動態反應速率，可進行模擬工作包含(1)物種形成及飽和指數的計算能力、(2)批次反應和一維傳輸可逆及不可逆反應的計算能力、(3)逆推模擬礦物及氣體對地下水質影響之能力。廣泛應用於地質、環境工程、地球科學等領域，常見的應用為批次反應模擬。"],
            "limit": "僅能提供一維的地下水流與溶質傳輸模擬工作，缺乏二、三維非均勻地下水流場模擬能力。",
            "provider": "International Ground Water Modeling Center US Geological Survey"
        }, {
            "name": "PHT3D",
            "family": [],
            "purpose": ["污染物之水文地球化學反應", "常被用於自然衰減與生物修復評估"],
            "function": ["具備PHREEQC與MT3DMS功能", "可模擬多成分多物種"],
            "references": ["Prommer et al., 2002", "宋孟浩、楊宗憲，2015"],
            "type": ["污染傳輸", "地球化學"],
            "developer": "Henning Prommer and Vicent Post.",
            "status": "公眾領域(Public Domain, PD)",
            "Features": ["PHT3D為三維多成分多物種反應傳輸模式，針對飽和多孔介質，目前最新版本PHT3D v2.10具備MT3DMS及PHREEQC-2(v2.17)，PHT3D使用PHREEQC-2資料庫定平衡與動力學(如生物降解)等反應。PHT3D已被納入PMWIN軟體、GMS軟體、Visual Modflow(>v4.1)軟體使用。"],
            "limit": "PHT3D主要針對地下環境進行模擬與評估，尚不具備模擬地表水或地表水與地下水交互作用之能力。",
            "provider": "http://www.pht3d.org/pht3d_exe.html"
        }, {
            "name": "MIN3P",
            "family": [],
            "purpose": ["污染物之水文地球化學反應", "常被用於自然衰減評估及礦區排水的模擬"],
            "function": ["具備模擬變飽和流功能", "可模擬多成分多物種"],
            "references": ["Mayer et al., 2001", "Baiet al., 2001"],
            "type": ["污染傳輸"],
            "developer": "加拿大英屬哥倫比亞大學(UBC)",
            "status": "研究領域(Research Domain, RD)",
            "Features": ["MIN3P為加拿大英屬哥倫比亞大學持續發展，可模擬變飽和、多組成多物種反應傳輸，其最大特色為內建熱力學資料庫涵蓋非水相流體降解後之衍生物種，提供高靈活性的反應網絡，具備水相的平流延散傳輸及氣相的擴散傳輸。所有反應可以通過數據庫進行定義，不需要用戶外部代碼生成。應用於地下水污染傳輸模擬之功能與HYDROGEOCHEM模式類似。經常應用於自然衰減過程評估、礦區排水模擬及實驗室試驗。"],
            "limit": "MIN3P主要模擬未飽和到飽和含水層之水流與污染傳輸模式，不具備模擬地表水或地表水與地下水交互作用之能力。",
            "provider": "Ulrich Mayer (umayer@eos.ubc.ca)"
        }, {
            "name": "AT123D",
            "family": [],
            "purpose": ["初步評估工具", "地下水污染傳輸", "風險評估"],
            "function": ["解析解模式", "操作簡單"],
            "references": ["Yeh et al., 2016.", "郭振泰，1985"],
            "type": ["污染傳輸"],
            "developer": "葉高次 教授",
            "status": "公眾領域(Public Domain, PD)",
            "Features": ["AT123D最初是由葉高次教授1981年在美國橡樹嶺國家實驗室(Oak Ridge National Laboratory, ORNL)發展之地下水污染物傳輸之解析模式，目前最新版本為AT123-AT，主要調整原始碼中脈衝源(pulse source)的錯誤。模式可模擬地下水流與污染傳輸，傳輸機制包含平流、延散、吸附與降解，可配合SESOIL模式之未飽和層污染釋放模擬結果，做為AT123D模式之地下水的污染負載，模擬污染物羽流遷移與傳輸結果，經常被運用在污染場址風險評估，並經過美國環保署的認可，已被New Jersey、Oregon、New Hampshire、Wisconsin、Massachusetts及Hawaii等州用於評估污染範圍及計算整治標準，之後發展的其他模式均以此為基礎而發展。"],
            "limit": "AT123D為解析模式，因此，對於電腦運算儲存量的需求較數值模式低，但是當延散度極小時，模式在運算的收斂性極慢，可能會導致運算時間過長。當有前述情形發生，使用者可依據問題的性質，調整模擬範圍的深度或寬度。此外，模式假設含水層均質且水流平穩，因此，不適用模擬異質性高的含水層或複雜的流場。",
            "provider": "nternational Ground Water Modeling Center Environmental Software Consultants, Inc."
        }, {
            "name": "FEMWATER",
            "family": [],
            "purpose": ["地下水污染流佈路徑", "污染來源推估", "地下水污染風險評估"],
            "function": ["具備模擬變飽和流功能", "具備模擬變密度流功能"],
            "references": ["Kim et al., 2012", "廖崇翔，2011"],
            "type": ["污染傳輸"],
            "developer": "葉高次 教授",
            "status": "商業軟體(Commercial)",
            "Features": ["FEMWATER(flow)為葉高次教授於1987年發展之三維有限元素法地下水流模式，1996年葉教授與美國陸軍工兵水道試驗站(WES)合作將3DFEMWATER(flow)與3DLEWASTE(transport)兩種模式耦合成單一數值模式，名稱也是FEMWATER，WES將模式輸入與輸出格式修改成GMS系統得以處理。", "FEMWATER經常被應用於模擬飽和層及不飽和層中(又稱變動飽和流)之地下水流及單物種水相污染物傳輸，同時可應用各種邊界條件及海水入侵等問題，並且被美國核能管制委員會(Nuclear Regulatory Commission, NRC)、環保署(Environmental Protection Agency, EPA)、及工兵團(Army Corps of Engineers)所認可。"],
            "limit": "FEMWATER主要模擬未飽和到飽和含水層之水流與污染傳輸模式，不具備模擬地表水或地表水與地下水交互作用之能力，且污染傳輸僅能模擬單物種。",
            "provider": "AQUAVEO"
        }, {
            "name": "HYDROGEOCHEM",
            "family": [],
            "purpose": ["地下水污染流佈路徑", "污染來源推估", "地下水污染風險評估", "適合模擬污染物之水文地球化學反應"],
            "function": ["可模擬變飽和流", "可模擬多成分多物種", "具備熱傳輸、力學及地球化學反應功能"],
            "references": ["Yeh and Tripathi, 1991.", "王勁壬，2013", "邱晧民，2015"],
            "type": ["污染傳輸"],
            "developer": "葉高次 教授",
            "status": "研究領域(Research Domain, RD)",
            "Features": ["HYDROGEOCHEM 4.0/5.0模式最早由美國橡樹嶺國家實驗室(ORNL)資助美國中佛羅里達大學(UCF)及美國賓州州立大學(PSU)發展，目前由模式主要發展者葉高次教授及其研究團隊不斷改進強化，衍生出許多不同版本，最新發展之版本為HYDROGEOCHEM 4.4/5.4及6.1/7.1，其中4.X/5.X版為變飽和流耦合化學反應傳輸(含氣相物種)、熱傳導、地質力學，6.1/7.1版為多相流耦合化學反應傳輸、熱傳導、地質力學，前述各版本皆具備生化反應模擬功能。可模擬混合平衡及動態化學反應傳輸，可自訂平衡及動態反應式類型，具備自動選取主要化學成分功能。"],
            "limit": "HYDROGEOCHEM目前尚缺乏圖形化使用者介面、熱力學資料庫及模式應用相關前處理與後處理程式，學習使用門檻較高。",
            "provider": "-"
        }, {
            "name": "MODFLOW",
            "family": ["MODFLOW-2005", "MODFLOW-USG", "GWM", "MODFLOW-OWHM"],
            "purpose": ["地下水流場"],
            "function": ["可模擬飽和流動條件", "適用達西定律", "地下水密度固定"],
            "references": ["Saghravani and Mustapha, 2011", "Cheet al., 2016", "黃佳雯，2005"],
            "type": ["地下水流"],
            "developer": "美國地質調查所(USGS)",
            "status": "公眾領域(Public Domain, PD)",
            "Features": ["MODFLOW為美國地質調查所(USGS)發展之三維飽和地下水流數值模式，並發展數個模組群(Packages)，進行各種不同之水文地質狀況之地下水流模擬。目前核心版本為MODFLOW-2005。"],
            "limit": "MODFLOW假設地下水為固定密度流，因此，不具模擬變密度流功能，雖然MODFLOW-2005版本已具備SWI2模組可以模擬海水入侵，但僅能模擬密度小於或等於海水的流體。",
            "provider": "International Ground Water Modeling Center US Geological Survey"
        }, {
            "name": "MODPATH",
            "family": [],
            "purpose": ["地下水污染傳輸", "污染來源推估", "健康風險評估"],
            "function": ["粒子追蹤後處理"],
            "references": ["Huysmans et al., 2006", "Banejad et al., 2014", "李權顯，2015"]
        }, {
            "name": "MT3D(MT3DMS)",
            "family": ["MT3DMS"],
            "purpose": ["地下水污染傳輸"],
            "function": ["可模擬多物種傳輸", "具備模擬NAPL溶解相功能"],
            "references": ["Zhang et al., 2013", "Varghesea et al., 2015", "Ehteshami et al., 2014", "周思妤，2016"],
            "type": ["污染傳輸"],
            "developer": "Chunmiao Zheng",
            "status": "公眾領域(Public Domain, PD)",
            "Features": ["MT3DMS為三維多物種傳輸模式，基於MT3D，擴充功能包含(1)採用總變量削減法(TVD)求解平流項，以降低數值誤差(numerical dispersion)、(2)基於共軛梯度法與Lanczos/ORTHOMIN方案，以消除傳輸時間之步長(time stepsize)的穩定性限制、(3)適用在非平衡吸附與雙域(dual-domain)平流擴散質量傳輸條件、(4)可用於一般生物地球化學反應。"],
            "limit": "MT3DMS被設計用於以塊為中心的有限差分模型，如美國地調所USGS的地下水流模式(MODFLOW)、也可用於變飽和與變密度的耦合模式。",
            "provider": "International Ground Water Modeling Center"
        }, {
            "name": "MT3D(SEAM3D)",
            "family": ["SEAM3D"],
            "purpose": ["地下水污染反應傳輸"],
            "function": ["可模擬多成分多物種", "具備模擬NAPL溶解相功能", "具生物降解功能"],
            "references": ["Brewster, 2003", "Chapelle, 2014"]
        }, {
            "name": "MT3D(SEAWAT)",
            "family": ["SEAWAT"],
            "purpose": ["地下水污染傳輸"],
            "function": ["具備模擬變密度流功能", "可模擬多物種", "具備熱傳輸功能"],
            "references": ["Nassar et al., 2008", "黃柏勳，2016"]
        }, {
            "name": "MT3D(RT3D)",
            "family": ["RT3D"],
            "purpose": ["地下水污染反應傳輸", "適合模擬自然衰減及生物修復"],
            "function": ["可模擬多物種", "提供幾種預定義的反應，使用者亦可自行定義"],
            "references": ["Clement et al., 2000", "Johnsoet al., 2006", "劉韋恩，2010"],
            "type": ["污染傳輸"],
            "developer": "Pacific Northwest National Laboratory(PNNL)",
            "status": "公眾領域(Public Domain, PD)",
            "Features": ["RT3D為三維多物種傳輸模式，適用於自然衰減，可用於預測地下水污染物羽流的傳輸與宿命，內建幾種常見的生物整治情境，亦可由使用者自行定義或添加所需之反應動力學，適用於水相與吸附相之污染物。RT3D已具備圖形化介面，並被納入GMS軟體、Visual MODFLOW軟體、Groundwater Vistas軟體。"],
            "limit": "RT3D主要針對地下環境進行模擬與評估，尚不具備模擬地表水或地表水與地下水交互作用之能力。",
            "provider": "http://bioprocess.pnnl.gov/rt3d.htm"
        }, {
            "name": "Groundwater Transport (GWT) Package",
            "family": [],
            "purpose": ["地下水污染傳輸"],
            "function": ["具備模擬多節點井功能"],
            "references": ["Konikow, 2006."]
        }],
        showInformation: {
            "show": false,
            "who": {
                "name": "SESOIL",
                "family": [],
                "purpose": ["初步評估工具", "未飽和層污染傳輸"],
                "function": ["模擬未飽和層污染物一維垂向傳輸", "具備氣候數據庫(僅有美國、關島及波多黎各)", "具備化學數據庫"],
                "references": ["Odencrantz, 1992", "謝添進，2002"],
                "type": ["污染傳輸"],
                "developer": "美國環保署(USEPA)",
                "status": "公眾領域(Public Domain, PD)",
                "Features": ["SESOL為Bonazountas 及Wagner替美國環保署開發之篩選模式，期間經過多次修改，目前最新版本SESOL 7.1，主要模擬地表至地下水之間，污染物在未飽和層之長期性之宿命與傳輸情形，在美國經常被使用在地下儲槽、垃圾掩埋場及農業規範(agricultural practices)等長時間排放，評估可能造成之污染或風險。", "模式主要輸入五種數據類型，分別為氣候數據、土壤數據、化學數據、應用數據(土壤參數、污染物負荷特徵等)及土壤侵蝕數據。傳輸機制包含揮發、吸附、離子交換、生物降解、水解及聚合。"],
                "limit": "SESOIL僅能模擬一維、垂向未飽和層污染傳輸，垂向最多可分四種土層，每層最多10個子層，因此，不適用模擬二、三維、地表水或飽和含水層、以及土層異質性太高的問題。",
                "provider": "Environmental Software Consultants, Inc."
            }
        },
        scrollWidth: window.screen.width
    },
    computed: {
        selectModel: function(){
            var purpose = this.selectPurpose;
            return this.modelList.filter(function(model){
                TF = model.purpose.map(function(val){
                    return purpose.includes(val)
                })
                return TF.some(function(TF){
                    return TF
                })
            })
        }
    },
    methods: {
        selectAll: function(){
            this.selectPurpose = this.purpose.slice();
        },
        selectNone: function(){
            this.selectPurpose = [];
        },
        removeItem: function(item){
            this.selectPurpose.splice(this.selectPurpose.indexOf(item), 1);
        },
        hideInfo: function(){
            console.log('QQ');
            this.showInformation["show"] = false;
        },
        showMe: function(name){
            this.showInformation["who"] = this.modelList.filter(function(model){
                return model.name === name;
              })[0];

            this.showInformation["show"] = true
        }
    },
    created: function () {
        var hideInfo = this.hideInfo
        window.addEventListener('keydown', function(event){
            if (event.key == "Escape") {
                hideInfo();
            }
        })
    }
})