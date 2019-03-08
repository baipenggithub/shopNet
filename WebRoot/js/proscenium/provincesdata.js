/********** 省级数据 **********/
var GP =['安徽省','澳门','北京市','福建省','甘肃省','广东省','广西省','贵州省','海南省','河北省','河南省','黑龙江省','湖北','湖南','吉林','江苏','江西','辽宁','内蒙古','宁夏','青海','山东','山西','陕西','上海','四川','台湾','天津','西藏','香港','新疆','云南','浙江','重庆','海外'];
/********** 市级数据 **********/
var GT = [
  ['合肥市','芜湖市','蚌埠市','淮南市','马鞍山市','淮北市','铜陵市','安庆市','黄山市','滁州市','阜阳市','宿州市','巢湖市','六安市','亳州市','池州市','宣城市'],
  ['澳门'],
  ['市辖区','市辖县'],
  ['福州市','厦门市','莆田市','三明市','泉州市','漳州市','南平市','龙岩市','宁德市'],
  ['兰州市','嘉峪关市','金昌市','白银市','天水市','武威市','张掖市','平凉市','酒泉市','庆阳市','定西市','陇南市','临夏回族自治州','甘南藏族自治州'],
  ['广州市','韶关市','深圳市','珠海市','汕头市','佛山市','江门市','湛江市','茂名市','肇庆市','惠州市','梅州市','汕尾市','河源市','阳江市','清远市','东莞市','中山市','潮州市','揭阳市','云浮市'],
  ['南宁市','柳州市','桂林市','梧州市','北海市','防城港市','钦州市','贵港市','玉林市','百色市','贺州市','河池市','来宾市','崇左市'],
  ['贵阳市','六盘水市','遵义市','安顺市','铜仁地区','黔西南布依族苗族自治州','毕节地区','黔东南苗族侗族自治州','黔南布依族苗族自治州'],
  ['海口市','三亚市','省直辖县级行政区划'],
  ['石家庄市','唐山市','秦皇岛市','邯郸市','邢台市','保定市','张家口市','承德市','沧州市','廊坊市','衡水市'],
  ['郑州市','开封市','洛阳市','平顶山市','安阳市','鹤壁市','新乡市','焦作市','濮阳市','许昌市','漯河市','三门峡市','南阳市','商丘市','信阳市','周口市','驻马店市'],
  ['哈尔滨市','齐齐哈尔市','鸡西市','鹤岗市','双鸭山市','大庆市','伊春市','佳木斯市','七台河市','牡丹江市','黑河市','绥化市','大兴安岭地区'],
['武汉','鄂州','恩施','黄冈','黄石','荆门','荆州','潜江','神农架','十堰','随州','天门','仙桃','咸宁','襄樊','孝感','宜昌'],
['长沙','常德','郴州','衡阳','怀化','娄底','邵阳','湘潭','湘西','益阳','永州','岳阳','张家界','株洲'],
['长春','白城','白山','吉林','辽源','四平','松原','通化','延边'],
['南京','常州','淮安','连云港','南通','苏州','宿迁','泰州','无锡','徐州','盐城','扬州','镇江'],
['南昌','抚州','赣州','吉安','景德镇','九江','萍乡','上饶','新余','宜春','鹰潭'],
['沈阳','鞍山','本溪','朝阳','大连','丹东','抚顺','阜新','葫芦岛','锦州','辽阳','盘锦','铁岭','营口'],
['呼和浩特','阿拉善','巴彦淖尔','包头','赤峰','鄂尔多斯','呼伦贝尔','通辽','乌海','乌兰察布','锡林郭勒','兴安'],
['银川','固原','石嘴山','吴忠','中卫'],
['西宁','果洛','海北','海东','海南','海西','黄南','玉树'],
['济南','滨州','德州','东营','菏泽','济宁','莱芜','聊城','临沂','青岛','日照','泰安','威海','潍坊','烟台','枣庄','淄博'],
['太原','长治','大同','晋城','晋中','临汾','吕梁','朔州','忻州','阳泉','运城'],
['西安','安康','宝鸡','汉中','商洛','铜川','渭南','咸阳','延安','榆林'],
['宝山','长宁','崇明','奉贤','虹口','黄浦','嘉定','金山','静安','卢湾','闵行','南汇','浦东','普陀','青浦','松江','徐汇','杨浦','闸北'],
['成都','阿坝','巴中','达州','德阳','甘孜','广安','广元','乐山','凉山','泸州','眉山','绵阳','内江','南充','攀枝花','遂宁','雅安','宜宾','资阳','自贡'],
['台北','阿莲','安定','安平','八德','八里','白河','白沙','板桥','褒忠','宝山','卑南','北斗','北港','北门','北埔','北投','补子','布袋','草屯','长宾','长治','潮州','车城','成功','城中区','池上','春日','刺桐','高雄','花莲','基隆','嘉义','苗栗','南投','屏东','台东','台南','台中','桃园','新竹','宜兰','彰化'],
['宝坻','北辰','大港','东丽','汉沽','和平','河北','河东','河西','红桥','蓟县','津南','静海','南开','宁河','塘沽','武清','西青'],
['拉萨','阿里','昌都','林芝','那曲','日喀则','山南'],
['北区','大埔区','东区','观塘区','黄大仙区','九龙','葵青区','离岛区','南区','荃湾区','沙田区','深水埗区','屯门区','湾仔区','西贡区','香港','新界','油尖旺区','元朗区','中西区'],
['乌鲁木齐','阿克苏','阿拉尔','阿勒泰','巴音郭楞','博尔塔拉','昌吉','哈密','和田','喀什','克拉玛依','克孜勒苏柯尔克孜','石河子','塔城','图木舒克','吐鲁番','五家渠','伊犁'],
['昆明','保山','楚雄','大理','德宏','迪庆','红河','丽江','临沧','怒江','曲靖','思茅','文山','西双版纳','玉溪','昭通'],
['杭州','湖州','嘉兴','金华','丽水','宁波','衢州','绍兴','台州','温州','舟山'],
['巴南','北碚','璧山','长寿','城口','大渡口','大足','垫江','丰都','奉节','涪陵','合川','江北','江津','九龙坡','开县','梁平','南岸','南川','彭水','綦江','黔江','荣昌','沙坪坝','石柱','双桥','铜梁','潼南','万盛','万州','巫山','巫溪','武隆','秀山','永川','酉阳','渝北','渝中','云阳','忠县'],
['阿根廷','埃及','爱尔兰','奥地利','奥克兰','澳大利亚','巴基斯坦','巴西','保加利亚','比利时','冰岛','朝鲜','丹麦','德国','俄罗斯','法国','菲律宾','芬兰','哥伦比亚','韩国','荷兰','加拿大','柬埔寨','喀麦隆','老挝','卢森堡','罗马尼亚','马达加斯加','马来西亚','毛里求斯','美国','秘鲁','缅甸','墨西哥','南非','尼泊尔','挪威','葡萄牙','其它地区','日本','瑞典','瑞士','斯里兰卡','泰国','土耳其','委内瑞拉','文莱','乌克兰','西班牙','希腊','新加坡','新西兰','匈牙利','以色列','意大利','印度','印度尼西亚','英国','越南','智利']
];
/********** 市二级数据 **********/
var GC =
[
[    
   ['瑶海区','庐阳区','蜀山区','包河区','长丰县','肥东县','肥西县'],
   ['镜湖区','弋江区','鸠江区','三山区','芜湖县','繁昌县','南陵县'],
   ['蚌埠市','蚌山区','禹会区','淮上区','怀远县','五河县','固镇县'],
   ['大通区','田家庵区','谢家集区','八公山区','潘集区','潘集区','凤台县'],
   ['金家庄区','花山区','雨山区','当涂县'],
   ['杜集区','相山区','烈山区','濉溪县'],
   ['滁州市','狮子山区','郊区','铜陵县'],
   ['迎江区','大观区','宜秀区','怀宁县','潜山县','太湖县','宿松县','望江县','岳西县','桐城市'],
   ['屯溪区','黄山区','徽州区','歙县','休宁县','祁门县','黟县'],
   ['琅琊区','南谯区','来安县','全椒县','定远县','凤阳县','明光市','天长市'],
   ['颍州区','颍东区','颍泉区','临泉县','太和县','阜南县','颍上县','界首市'],
   ['埇桥区','砀山县','萧县','灵璧县','泗县'],
   ['居巢区','庐江县','含山县','无为县','和县'],
   ['金安区','裕安区','寿县','霍邱县','舒城县','金寨县','霍山县'],
   ['谯城区','涡阳县','蒙城县','利辛县'],
   ['贵池区','东至县','石台县','青阳县'],
   ['宣州区','郎溪县','广德县','泾县','绩溪县','旌德县','宁国市']
],
[
   ['澳门']
],
[
   ['东城区','西城区','朝阳区','丰台区','石景山区','海淀区','门头沟区','房山区','顺义区','通州区','顺义区','昌平区','大兴区','怀柔区','平谷区'],
   ['密云县','延庆县']
],
[ 
   ['鼓楼区','台江区','仓山区','马尾区','晋安区','闽侯县','连江县','闽清县','永泰县','平潭县','福清市','长乐市'],
   ['思明区','海沧区','湖里区','集美区','同安区','翔安区'],
   ['城厢区','涵江区','荔城区','秀屿区','仙游县','邵武'],
   ['梅列区','三元区','明溪县','宁化县','大田县','尤溪县','沙县','将乐县','泰宁县','建宁县','永安市'],
   ['鲤城区','丰泽区','洛江区','泉港区','惠安县','安溪县','永春县','德化县','金门县','石狮市','晋江市','南安市'],
   ['芗城区','龙文区','云霄县','漳浦县','诏安县','长泰县','东山县','南靖县','平和县','华安县','龙海市'],
   ['延平区','顺昌县','浦城县','光泽县','松溪县','政和县','邵武市','武夷山市','建瓯市','建瓯市','建阳市'],
   ['新罗区','长汀县','永定县','上杭县','武平县','连城县','漳平市'],
   ['蕉城区','霞浦县','古田县','屏南县','寿宁县','周宁县','柘荣县','福安市','福鼎市']
],
[
   ['城关区','七里河区','西固区','安宁区','红古区','永登县','皋兰县','榆中县'],
   ['嘉峪关市'],
   ['金川区','永昌县'],
   ['白银区','平川区','靖远县','会宁县','玛曲','夏河','舟曲','卓尼'],
   ['秦州区','麦积区','清水县','秦安县','甘谷县','武山县','张家川回族自治县'],
   ['凉州区','民勤县','古浪县','天祝藏族自治县'],
   ['甘州区','肃南裕固族自治县','民乐县','临泽县','高台县','山丹县'],
   ['崆峒区','泾川县','灵台县','崇信县','华亭县','庄浪县','静宁县'],
   ['肃州区','金塔县','瓜州县','肃北蒙古族自治县','阿克塞哈萨克族自治县','玉门市','敦煌市'],
   ['西峰区','庆城县','环县','华池县','合水县','正宁县','宁县','镇原县'],
   ['安定区','通渭县','陇西县','渭源县','临洮县','漳县','岷县'],
   ['武都区','成县','文县','宕昌县','康县','西和县','礼县','徽县','两当县'],
   ['临夏市','临夏县','康乐县','永靖县','广河县','和政县','东乡族自治县','积石山保安族东乡族撒拉族自治县'],
   ['合作市','临潭县','卓尼县','舟曲县','迭部县','玛曲县','碌曲县','夏河县']
],
[
   ['荔湾区','越秀区','海珠区','天河区','白云区','黄埔区','番禺区','花都区','南沙区','萝岗区','增城市','从化市'],
   ['武江区','浈江区','曲江区','始兴县','仁化县','翁源县','乳源瑶族自治县','新丰县','乐昌市','南雄市'],
   ['罗湖区','福田区','南山区','宝安区','龙岗区','盐田区'],
   ['香洲区','斗门区','金湾区'],
   ['龙湖区','金平区','濠江区','潮阳区','潮南区','澄海区','南澳县'],
   ['禅城区','南海区','顺德区','三水区','高明区'],
   ['蓬江区','江海区','新会区','台山市','开平市','鹤山市','恩平市'],
   ['赤坎区','霞山区','坡头区','麻章区','徐闻县','廉江市','雷州市','吴川市'],
   ['茂南区','茂港区','电白县','高州市','化州市','信宜市'],
   ['端州区','鼎湖区','广宁县','怀集县','封开县','德庆县','高要市','四会市'],
   ['惠城区','惠阳区','博罗县','惠东县','龙门县'],
   ['梅江区','梅县','大埔县','丰顺县','五华县','平远县','蕉岭县','兴宁市'],
   ['城区','海丰县','陆河县','陆丰市'],
   ['源城区','紫金县','龙川县','连平县','和平县','东源县'],
   ['江城区','阳西县','阳东县','阳春市'],
   ['清城区','佛冈县','阳山县','连山壮族瑶族自治县','连南瑶族自治县','清新县','英德市','连州市'],
   ['东莞市'],
   ['中山市'],
   ['湘桥区','潮安县','饶平县'],
   ['榕城区','揭东县','揭西县','惠来县','普宁市'],
   ['云城区','新兴县','郁南县','云安县','罗定市']
],
[   
   ['兴宁区','青秀区','江南区','西乡塘区','良庆区','邕宁区','武鸣县','隆安县','马山县','上林县','宾阳县','横县'],
   ['城中区','鱼峰区','柳南区','柳北区','柳江县','柳城县','鹿寨县','融安县','融水苗族自治县','三江侗族自治县'],
   ['秀峰区','叠彩区','象山区','七星区','雁山区','阳朔县','临桂县','灵川县','全州县','兴安县','永福县','灌阳县','龙胜各族自治县','资源县','平乐县','荔蒲县','恭城瑶族自治县'],
   ['万秀区','蝶山区','长洲区','苍梧县','藤县','蒙山县','岑溪市'],
   ['海城区','银海区','铁山港区','合浦县'],
   ['港口区','防城区','上思县','东兴市'],
   ['钦南区','钦北区','灵山县','浦北县'],
   ['港北区','港南区','覃塘区','平南县','桂平市'],
   ['玉州区','容县','陆川县','博白县','兴业县','北流市'],
   ['右江区','田阳县','田东县','平果县','德保县','靖西县','那坡县','凌云县','乐业县','田林县','西林县','隆林各族自治县'],
   ['八步区','平桂管理区','昭平县','钟山县','富川瑶族自治县'],
   ['金城江区','南丹县','天峨县','凤山县','东兰县','宜州市','罗城仫佬族自治县','环江毛南族自治县','巴马瑶族自治县','都安瑶族自治县','大化瑶族自治县'],
   ['兴宾区','忻城县','象州县','武宣县','金秀瑶族自治县','合山市'],
   ['江洲区','扶绥县','宁明县','龙州县','大新县','天等县','凭祥市']
],
[     
   ['南明区','云岩区','花溪区','乌当区','白云区','小河区','开阳县','息烽县','修文县','清镇市'],
   ['钟山区','六枝特区','水城县','盘县'],
   ['红花岗区','汇川区','遵义县','桐梓县','绥阳县','正安县','道真仡佬族苗族自治县','务川仡佬族苗族自治县','凤冈县','湄潭县','余庆县','习水县','赤水市','仁怀市'],
   ['西秀区','平坝县','普定县','镇宁布依族苗族自治县','镇宁布依族苗族自治县','关岭布依族苗族自治县','紫云苗族布依族自治县'],
   ['铜仁市','江口县','玉屏侗族自治县','石阡县','思南县','印江土家族苗族自治县','德江县','沿河土家族自治县','沿河土家族自治县','松桃苗族自治县','万山特区'],
   ['兴义市','兴仁县','普安县','晴隆县','贞丰县','望谟县','册亨县','安龙县'],
   ['毕节市','大方县','黔西县','金沙县','织金县','纳雍县','威宁彝族回族苗族自治县','赫章县'],
   ['凯里市','黄平县','施秉县','三穗县','镇远县','岑巩县','天柱县','锦屏县','剑河县','台江县','黎平县','榕江县','从江县','雷山县','麻江县','丹寨县'],
   ['都匀市','福泉市','荔波县','贵定县','瓮安县','独山县','平塘县','罗甸县','长顺县','惠水县','三都水族自治县']
],
[
   ['秀英区','龙华区','琼山区','美兰区'],
   ['三亚市'],
   ['五指山市','琼海市','儋州市','文昌市','万宁市','东方市','定安县','屯昌县','澄迈县','临高县','白沙黎族自治县','昌江黎族自治县','乐东黎族自治县','陵水黎族自治县','保亭黎族苗族自治县','琼中黎族苗族自治县','西沙群岛','南沙群岛','中沙群岛的岛礁及其海域']
],
[ 
   ['长安区','桥东区','桥西区','新华区','井陉矿区','裕华区','井陉县','正定县','栾城县','行唐县','灵寿县','高邑县','深泽县','赞皇县','无极县','平山县','元氏县','赵县','辛集市','藁城市','晋州市','新乐市','鹿泉市'],
   ['路南区','路北区','古冶区','开平区','丰南区','丰润区','滦县','滦南县','乐亭县','乐亭县','迁西县','玉田县','唐海县','遵化市','迁安市'],
   ['海港区','山海关区','北戴河区','青龙满族自治县','昌黎县','抚宁县','卢龙县'],
   ['海港区','山海关区','北戴河区','青龙满族自治县','昌黎县','抚宁县','卢龙县','磁县','肥乡县','永年县','邱县','鸡泽县','广平县','邱县','鸡泽县','广平县','馆陶县','魏县','曲周县','武安市'],
   ['桥东区','桥西区','邢台县','临城县','内丘县','柏乡县','隆尧县','任县','南和县','宁晋县','巨鹿县','新河县','广宗县','平乡县','威县','清河县','临西县','南宫市','沙河市'],
   ['新市区','北市区','南市区','满城县','清苑县','涞水县','阜平县','徐水县','定兴县','唐县','高阳县','容城县','涞源县','望都县','安新县','易县','曲阳县','蠡县','顺平县','博野县','雄县','涿州市','定州市','安国市','高碑店市'],
   ['桥东区','桥西区','宣化区','下花园区','宣化县','张北县','康保县','沽源县','尚义县','蔚县','阳原县','怀安县','万全县','怀来县','涿鹿县','赤城县','崇礼县'],
   ['双桥区','双滦区','鹰手营子矿区','承德县','兴隆县','平泉县','滦平县','隆化县','丰宁满族自治县','宽城满族自治县','围场满族蒙古族自治县'],
   ['新华区','运河区','沧县','青县','东光县','海兴县','盐山县','肃宁县','南皮县','吴桥县','献县','孟村回族自治县','泊头市','任丘市','黄骅市','河间市'],
   ['安次区','广阳区','固安县','永清县','香河县','大城县','文安县','大厂回族自治县','霸州市','三河市'],
   ['桃城区','枣强县','武邑县','武强县','饶阳县','安平县','故城县','景县','阜城县','冀州市','深州市']
],
[
   ['中原区','二七区','管城回族区','金水区','上街区','惠济区','中牟县','巩义市','荥阳市','新密市','新郑市','登封市'],
   ['龙亭区','顺河回族区','鼓楼区','禹王台区','金明区','通许县','杞县','尉氏县','开封县','兰考县'],
   ['老城区','西工区','瀍河回族区','涧西区','吉利区','洛龙区','孟津县','新安县','栾川县','嵩县','汝阳县','洛宁县','伊川县','偃师市'],
   ['新华区','卫东区','石龙区','湛河区','宝丰县','叶县','鲁山县','郏县','舞钢市','汝州市'],
   ['文峰区','北关区','殷都区','龙安区','汤阴县','滑县','内黄县','林州市'],
   ['鹤山区','山城区','淇滨区','浚县','淇县'],
   ['红旗区','卫滨区','凤泉区','牧野区','新乡县','获嘉县','原阳县','延津县','封丘县','长垣县','卫辉市','辉县市'],
   ['解放区','中站区','马村区','山阳区','修武县','博爱县','武陟县','温县','沁阳市','孟州市'],
   ['华龙区','清丰县','南乐县','范县','台前县','濮阳县'],
   ['魏都区','许昌县','鄢陵县','襄城县','禹州市','长葛市'],
   ['源汇区','郾城区','召陵区','舞阳县','临颍县'],
   ['湖滨区','渑池县','陕县','卢氏县','义马市','灵宝市'],
   ['宛城区','卧龙区','南召县','方城县','西峡县','镇平县','内乡县','淅川县','社旗县','唐河县','新野县','桐柏县','邓州市'],
   ['梁园区','睢阳区','民权县','睢县','宁陵县','柘城县','虞城县','夏邑县','永城市'],
   ['浉河区','平桥区','罗山县','光山县','新县','商城县','固始县','潢川县','淮滨县','息县'],
   ['川汇区','扶沟县','西华县','商水县','沈丘县','郸城县','淮阳县','太康县','鹿邑县','项城市'],
   ['驿城区','西平县','上蔡县','平舆县','正阳县','确山县','泌阳县','汝南县','遂平县','新蔡县']
],
[
   ['道里区','南岗区','道外区','平房区','松北区','香坊区','呼兰区','阿城区','依兰县','方正县','宾县','巴彦县','木兰县','通河县','延寿县','双城市','尚志市','五常市'],
   ['龙沙区','建华区','铁锋区','昂昂溪区','富拉尔基区','碾子山区','梅里斯达斡尔族区','龙江县','依安县','泰来县','甘南县','富裕县','克山县','克东县','拜泉县','讷河市'],
   ['鸡冠区','恒山区','滴道区','城子河区','麻山区','鸡东县','虎林市','密山市'],
   ['向阳区','工农区','南山区','东山区','兴山区','萝北县','绥滨县'],
   ['尖山区','岭东区','四方台区','宝山区','集贤县','友谊县','宝清县','饶河县'],
   ['萨尔图区','龙凤区','让胡路区','红岗区','大同区','肇州县','肇源县','林甸县','杜尔伯特蒙古族自治县'],
   ['伊春区','南岔区','友好区','西林区','翠峦区','新青区','美溪区','金山屯区','五营区','乌马河区','汤旺河区','带岭区','乌伊岭区','红星区','嘉荫县','铁力市'],
   ['向阳区','前进区','东风区','郊区','桦南县','桦川县','汤原县','抚远县','同江市','富锦市'],
   ['新兴区','桃山区','茄子河区','勃利县'],
   ['东安区','阳明区','爱民区','西安区','东宁县','林口县','绥芬河市','海林市','宁安市','穆棱市'],
   ['爱辉区','嫩江县','逊克县','孙吴县','北安市','五大连池市'],
   ['北林区','望奎县','兰西县','青冈县','明水县','绥棱县','安达市','肇东市','海伦市'],
   ['加格达奇区','松岭区','新林区','呼中区','呼玛县','塔河县','漠河县'],
],
[
['武汉市'],
['鄂州市'],
['巴东','恩施市','鹤峰','建始','来凤','利川','咸丰','宣恩'],
['红安','黄冈市','黄梅','罗田','麻城','蕲春','团风','武穴','浠水','英山'],
['大冶','黄石','阳新'],
['京山','荆门市','沙洋','钟祥'],
['公安','洪湖','监利','江陵','荆州市','石首','松滋'],
['潜江'],
['神农架'],
['丹江口','房县','十堰市','郧西','郧县','竹山','竹溪'],
['广水','随州市'],
['天门市'],
['仙桃市'],
['赤壁','崇阳','嘉鱼','通城','通山','咸宁市'],
['保康','谷城','老河口','南漳','襄樊市','宜城','枣阳'],
['安陆','大悟','汉川','孝昌','孝感市','应城','云梦'],
['长阳','当阳','五峰','兴山','宜昌市','宜都','远安','枝江','秭归']
],
[
['长沙市','长沙县','浏阳','宁乡','望城'],
['安乡','常德市','汉寿','津市','澧县','临澧','石门','桃源'],
['安仁','郴州市','桂东','桂阳','嘉禾','临武','汝城','宜章','永兴','资兴'],
['常宁','衡东','衡南','衡山','衡阳市','衡阳县','耒阳','祁东'],
['辰溪','洪江','怀化市','会同','靖州','麻阳','通道','新晃','溆浦','沅陵','芷江','中方'],
['冷水江','涟源','娄底市','双峰','新化'],
['城步','洞口','隆回','邵东','邵阳市','邵阳县','绥宁','武冈','新宁','新邵'],
['韶山','湘潭市','湘潭县','湘乡'],
['保靖','凤凰','古丈','花垣','吉首','龙山','泸溪','永顺'],
['安化','南县','桃江','益阳市','沅江'],
['道县','东安','江华','江永','蓝山','宁远','祁阳','双牌','新田','永州市'],
['华容','临湘','汨罗','平江','湘阴','岳阳市','岳阳县'],
['慈利','桑植','张家界市'],
['茶陵','醴陵','炎陵','攸县','株洲市','株洲县']
],
[
['长春市','德惠','九台','农安','榆树'],
['白城市','大安','洮南','通榆','镇赉'],
['白山','长白','抚松','靖宇','临江'],
['桦甸','吉林市','蛟河','磐石','舒兰','永吉'],
['东丰','东辽','辽源市'],
['公主岭','梨树','双辽','四平市','伊通'],
['长岭','扶余','前郭尔罗斯','乾安','松原市'],
['辉南','集安','柳河','梅河口','通化市','通化县'],
['延吉市','敦化','和龙','珲春','龙井','图们','汪清','安图']
],
[
['高淳','溧水','南京市'],
['常州市','金坛','溧阳'],
['洪泽','淮安市','金湖','涟水','盱眙'],
['东海','赣榆','灌南','灌云','连云港市'],
['海安','海门','南通市','启东','如东','如皋','通州'],
['常熟','昆山','苏州市','太仓','吴江','张家港'],
['沭阳','泗洪','泗阳','宿迁市'],
['姜堰','靖江','泰兴','泰州市','兴化'],
['江阴','无锡市','宜兴'],
['丰县','沛县','邳州','睢宁','铜山','新沂','徐州市'],
['滨海','大丰','东台','阜宁','建湖','射阳','响水','盐城市'],
['宝应','高邮','江都','扬州市','仪征'],
['丹阳','句容','扬中','镇江市']
],
[
['安义','进贤','南昌市','南昌县','新建'],
['崇仁','东乡','抚州市','广昌','金溪','乐安','黎川','南城','南丰','宜黄','资溪'],
['安远','崇义','大余','定南','赣县','赣州市','会昌','龙南','南康','宁都','全南','瑞金','上犹','石城','信丰','兴国','寻乌','于都'],
['安福','吉安市','吉安县','吉水','井冈山','遂川','泰和','万安','峡江','新干','永丰','永新'],
['浮梁','景德镇市','乐平'],
['德安','都昌','湖口','九江市','九江县','彭泽','瑞昌','武宁','星子','修水','永修'],
['莲花','芦溪','萍乡市','上栗'],
['德兴','广丰','横峰','鄱阳','铅山','上饶市','上饶县','万年','婺源','弋阳','余干','玉山'],
['分宜','新余市'],
['丰城','奉新','高安','靖安','上高','铜鼓','万载','宜春市','宜丰','樟树'],
['贵溪','鹰潭市','余江']
],
[
['法库','康平','辽中','沈阳市','新民'],
['鞍山市','海城','台安','岫岩'],
['本溪市','本溪县','桓仁'],
['北票','朝阳市','朝阳县','建平','喀喇沁左翼','凌源'],
['长海','大连市','普兰店','瓦房店','庄河'],
['丹东市','东港','凤城','宽甸'],
['抚顺市','抚顺县','清原','新宾'],
['阜新市','阜新县','彰武'],
['葫芦岛市','建昌','绥中','兴城'],
['北镇','黑山','锦州市','凌海','义县'],
['灯塔','辽阳市','辽阳县'],
['大洼','盘锦市','盘山'],
['昌图','调兵山','开原','铁岭市','铁岭县','西丰'],
['大石桥','盖州','营口市']
],
[
['和林格尔','呼和浩特市','清水河','土默特左旗','托克托','武川'],
['阿拉善右旗','阿拉善左旗','额济纳旗'],
['巴彦淖尔市','磴口','杭锦后旗','乌拉特后旗','乌拉特前旗','乌拉特中旗','五原'],
['包头市','达尔罕茂明安联合旗','固阳','土默特右旗'],
['阿鲁科尔沁旗','敖汉旗','巴林右旗','巴林左旗','赤峰市','喀喇沁旗','克什克腾旗','林西','宁城','翁牛特旗'],
['达拉特旗','鄂尔多斯市','鄂托克旗','鄂托克前旗','杭锦旗','乌审旗','伊金霍洛旗','准格尔旗'],
['阿荣旗','陈巴尔虎旗','额尔古纳','鄂伦春旗','鄂温克族旗','根河','呼伦贝尔市','满洲里','莫力达瓦旗','新巴尔虎右旗','新巴尔虎左旗','牙克石','扎兰屯'],
['霍林郭勒','开鲁','科尔沁左翼后旗','科尔沁左翼中旗','库伦旗','奈曼旗','通辽市','扎鲁特旗'],
['乌海'],
['察哈尔右翼后旗','察哈尔右翼前旗','察哈尔右翼中旗','丰镇','化德','凉城','商都','四子王旗','乌兰察布市','兴和','卓资'],
['阿巴嘎旗','东乌珠穆沁旗','多伦','二连浩特','苏尼特右旗','苏尼特左旗','太仆寺旗','西乌珠穆沁旗','锡林郭勒市','镶黄旗','正蓝旗','正镶白旗'],
['阿尔山','科尔沁右翼前旗','科尔沁右翼中旗','突泉','乌兰浩特','扎赉特旗']
],
[
['贺兰','灵武','银川市','永宁'],
['固原市','泾源','隆德','彭阳','西吉'],
['平罗','石嘴山市'],
['青铜峡','同心','吴忠市','盐池'],
['海原','中宁','中卫市']
],
[
['大通','湟源','湟中','西宁市'],
['班玛','达日','甘德','久治','玛多','玛沁'],
['刚察','海晏','门源','祁连'],
['互助','化隆','乐都','民和','平安','循化'],
['共和','贵德','贵南','同德','兴海'],
['大柴旦','德令哈','都兰','格尔木','冷湖','茫崖','天峻','乌兰'],
['河南','尖扎','同仁','泽库'],
['称多','囊谦','曲麻莱','玉树','杂多','治多']
],
[
['济南市','济阳','平阴','商河','章丘'],
['滨州市','博兴','惠民','无棣','阳信','沾化','邹平'],
['德州市','乐陵','临邑','陵县','宁津','平原','齐河','庆云','武城','夏津','禹城'],
['东营市','广饶','垦利','利津'],
['曹县','成武','单县','定陶','东明','菏泽市','巨野','鄄城','郓城'],
['济宁市','嘉祥','金乡','梁山','曲阜','泗水','微山','汶上','兖州','鱼台','邹城'],
['莱芜市'],
['茌平','东阿','高唐','冠县','聊城市','临清','莘县','阳谷'],
['苍山','费县','莒南','临沭','临沂市','蒙阴','平邑','郯城','沂南','沂水'],
['即墨','胶南','胶州','莱西','平度','青岛市'],
['莒县','日照市','五莲'],
['东平','肥城','宁阳','泰安市','新泰'],
['荣成','乳山','威海市','文登'],
['安丘','昌乐','昌邑','高密','临朐','青州','寿光','潍坊市','诸城'],
['长岛','海阳','莱阳','莱州','龙口','蓬莱','栖霞','烟台市','招远'],
['滕州','枣庄市'],
['高青','桓台','沂源','淄博市']
],
[
['古交','娄烦','清徐','太原市','阳曲'],
['长治市','长治县','长子','壶关','黎城','潞城','平顺','沁县','沁源','屯留','武乡','襄垣'],
['大同市','大同县','广灵','浑源','灵丘','天镇','阳高','左云'],
['高平','晋城市','陵川','沁水','阳城','泽州'],
['和顺','介休','晋中市','灵石','平遥','祁县','寿阳','太谷','昔阳','榆社','左权'],
['安泽','大宁','汾西','浮山','古县','洪洞','侯马','霍州','吉县','临汾市','蒲县','曲沃','隰县','乡宁','襄汾','翼城','永和'],
['方山','汾阳','交城','交口','岚县','临县','柳林','吕梁市','石楼','文水','孝义','兴县','中阳'],
['怀仁','山阴','朔州市','应县','右玉'],
['保德','代县','定襄','繁峙','河曲','静乐','岢岚','宁武','偏关','神池','五台','五寨','忻州市','原平'],
['平定','阳泉市','盂县'],
['河津','稷山','绛县','临猗','平陆','芮城','万荣','闻喜','夏县','新绛','永济','垣曲','运城市']
],
[
['高陵','户县','蓝田','西安市','周至'],
['安康市','白河','汉阴','岚皋','宁陕','平利','石泉','旬阳','镇坪','紫阳'],
['宝鸡市','凤县','凤翔','扶风','麟游','陇县','眉县','岐山','千阳','太白'],
['城固','佛坪','汉中市','留坝','略阳','勉县','南郑','宁强','西乡','洋县','镇巴'],
['丹凤','洛南','山阳','商洛市','商南','镇安','柞水'],
['铜川市','宜君'],
['白水','澄城','大荔','富平','韩城','合阳','华县','华阴','蒲城','潼关','渭南市'],
['彬县','长武','淳化','泾阳','礼泉','乾县','三原','武功','咸阳市','兴平','旬邑','永寿'],
['安塞','富县','甘泉','黄陵','黄龙','洛川','吴起','延安市','延长','延川','宜川','志丹','子长'],
['定边','府谷','横山','佳县','靖边','米脂','清涧','神木','绥德','吴堡','榆林市','子洲']
],
[
['宝山'],
['长宁'],
['崇明'],
['奉贤'],
['虹口'],
['黄浦'],
['嘉定'],
['金山'],
['静安'],
['卢湾'],
['闵行'],
['南汇'],
['浦东'],
['普陀'],
['青浦'],
['松江'],
['徐汇'],
['杨浦'],
['闸北']
],
[
['成都市','崇州','大邑','都江堰','金堂','彭州','郫县','蒲江','邛崃','双流','新津'],
['阿坝','黑水','红原','金川','九寨沟','理县','马尔康','茂县','壤塘','若尔盖','松潘','汶川','小金'],
['巴中市','南江','平昌','通江'],
['达县','达州市','大竹','开江','渠县','万源','宣汉'],
['德阳市','广汉','罗江','绵竹','什邡','中江'],
['巴塘','白玉','丹巴','道孚','稻城','得荣','德格','甘孜','九龙','康定','理塘','泸定','炉霍','色达','石渠','乡城','新龙','雅江'],
['广安市','华蓥','邻水','武胜','岳池'],
['苍溪','广元市','剑阁','青川','旺苍'],
['峨边','峨眉山','夹江','犍为','井研','乐山市','马边','沐川'],
['布拖','德昌','甘洛','会东','会理','金阳','雷波','美姑','冕宁','木里','宁南','普格','西昌','喜德','盐源','越西','昭觉'],
['古蔺','合江','泸县','泸州市','叙永'],
['丹棱','洪雅','眉山市','彭山','青神','仁寿'],
['安县','北川','江油','绵阳市','平武','三台','盐亭','梓潼'],
['隆昌','内江市','威远','资中'],
['阆中','南部','南充市','蓬安','西充','仪陇','营山'],
['米易','攀枝花市','盐边'],
['大英','蓬溪','射洪','遂宁市'],
['宝兴','汉源','芦山','名山','石棉','天全','雅安市','荥经'],
['长宁','高县','珙县','江安','筠连','南溪','屏山','兴文','宜宾市','宜宾县'],
['安岳','简阳','乐至','资阳市'],
['富顺','荣县','自贡市']
],
[
['台北'],
['阿莲'],
['安定'],
['安平'],
['八德'],
['八里'],
['白河'],
['白沙'],
['板桥'],
['褒忠'],
['宝山'],
['卑南'],
['北斗'],
['北港'],
['北门'],
['北埔'],
['北投'],
['补子'],
['布袋'],
['草屯'],
['长宾'],
['长治'],
['潮州'],
['车城'],
['成功'],
['城中区'],
['池上'],
['春日'],
['刺桐'],
['高雄'],
['花莲'],
['基隆'],
['嘉义'],
['苗栗'],
['南投'],
['屏东'],
['台东'],
['台南'],
['台中'],
['桃园'],
['新竹'],
['宜兰'],
['彰化']
],
[
['宝坻'],
['北辰'],
['大港'],
['东丽'],
['汉沽'],
['和平'],
['河北'],
['河东'],
['河西'],
['红桥'],
['蓟县'],
['津南'],
['静海'],
['南开'],
['宁河'],
['塘沽'],
['武清'],
['西青']
],
[
['达孜','当雄','堆龙德庆','拉萨市','林周','墨竹工卡','尼木','曲水'],
['措勤','噶尔','改则','革吉','普兰','日土','札达'],
['八宿','边坝','察雅','昌都','丁青','贡觉','江达','类乌齐','洛隆','芒康','左贡'],
['波密','察隅','工布江达','朗县','林芝','米林','墨脱'],
['安多','巴青','班戈','比如','嘉黎','那曲','尼玛','聂荣','申扎','索县'],
['昂仁','白朗','定结','定日','岗巴','吉隆','江孜','康马','拉孜','南木林','聂拉木','仁布','日喀则市','萨嘎','萨迦','谢通门','亚东','仲巴'],
['措美','错那','贡嘎','加查','浪卡子','隆子','洛扎','乃东','琼结','曲松','桑日','扎囊']
],
[
['北区'],
['大埔区'],
['东区'],
['观塘区'],
['黄大仙区'],
['九龙'],
['葵青区'],
['离岛区'],
['南区'],
['荃湾区'],
['沙田区'],
['深水埗区'],
['屯门区'],
['湾仔区'],
['西贡区'],
['香港'],
['新界'],
['油尖旺区'],
['元朗区'],
['中西区']
],
[
['乌鲁木齐市','乌鲁木齐县'],
['阿克苏市','阿瓦提','拜城','柯坪','库车','沙雅','温宿','乌什','新和'],
['阿拉尔'],
['阿勒泰','布尔津','福海','富蕴','哈巴河','吉木乃','青河'],
['博湖','和静','和硕','库尔勒','轮台','且末','若羌','尉犁','焉耆'],
['博乐','精河','温泉'],
['昌吉市','阜康','呼图壁','吉木萨尔','玛纳斯','米泉','木垒','奇台'],
['巴里坤','哈密市','伊吾'],
['策勒','和田市','和田县','洛浦','民丰','墨玉','皮山','于田'],
['巴楚','伽师','喀什市','麦盖提','莎车','疏附','疏勒','塔什库尔干塔吉克','叶城','英吉沙','岳普湖','泽普'],
['克拉玛依'],
['阿合奇','阿克陶','阿图什','乌恰'],
['石河子'],
['额敏','和布克赛尔','沙湾','塔城市','托里','乌苏','裕民'],
['图木舒克'],
['鄯善','吐鲁番市','托克逊'],
['五家渠'],
['察布查尔锡伯','巩留','霍城','奎屯','尼勒克','特克斯','新源','伊宁市','伊宁县','昭苏']
],
[
['安宁','呈贡','富民','晋宁','昆明市','禄劝','石林','嵩明','寻甸','宜良'],
['保山市','昌宁','龙陵','施甸','腾冲'],
['楚雄市','大姚','禄丰','牟定','南华','双柏','武定','姚安','永仁','元谋'],
['宾川','大理市','洱源','鹤庆','剑川','弥渡','南涧','巍山','祥云','漾濞','永平','云龙'],
['梁河','陇川','潞西','瑞丽','盈江'],
['德钦','维西','香格里拉'],
['个旧','河口','红河','建水','金平','开远','泸西','绿春','蒙自','弥勒','屏边','石屏','元阳'],
['华坪','丽江市','宁蒗','永胜','玉龙'],
['沧源','凤庆','耿马','临沧市','双江','永德','云县','镇康'],
['福贡','贡山','兰坪','泸水'],
['富源','会泽','陆良','罗平','马龙','曲靖市','师宗','宣威','沾益'],
['江城','景东','景谷','澜沧','孟连','墨江','普洱','思茅市','西盟','镇沅'],
['富宁','广南','麻栗坡','马关','丘北','文山','西畴','砚山'],
['景洪','勐海','勐腊'],
['澄江','峨山','华宁','江川','通海','新平','易门','玉溪市','元江'],
['大关','鲁甸','巧家','水富','绥江','威信','盐津','彝良','永善','昭通市','镇雄']
],
[
['淳安','富阳','杭州市','建德','临安','桐庐'],
['安吉','长兴','德清','湖州市'],
['海宁','海盐','嘉善','嘉兴市','平湖','桐乡'],
['东阳','金华市','兰溪','磐安','浦江','武义','义乌','永康'],
['缙云','景宁','丽水市','龙泉','青田','庆元','松阳','遂昌','云和'],
['慈溪','奉化','宁波市','宁海','象山','余姚'],
['常山','江山','开化','龙游','衢州市'],
['上虞','绍兴市','绍兴县','嵊州','新昌','诸暨'],
['临海','三门','台州市','天台','温岭','仙居','玉环'],
['苍南','洞头','乐清','平阳','瑞安','泰顺','温州市','文成','永嘉'],
['岱山','嵊泗','舟山市']
],
[
['巴南'],
['北碚'],
['璧山'],
['长寿'],
['城口'],
['大渡口'],
['大足'],
['垫江'],
['丰都'],
['奉节'],
['涪陵'],
['合川'],
['江北'],
['江津'],
['九龙坡'],
['开县'],
['梁平'],
['南岸'],
['南川'],
['彭水'],
['綦江'],
['黔江'],
['荣昌'],
['沙坪坝'],
['石柱'],
['双桥'],
['铜梁'],
['潼南'],
['万盛'],
['万州'],
['巫山'],
['巫溪'],
['武隆'],
['秀山'],
['永川'],
['酉阳'],
['渝北'],
['渝中'],
['云阳'],
['忠县']
],
[
['阿根廷'],
['埃及'],
['爱尔兰'],
['奥地利'],
['奥克兰'],
['澳大利亚'],
['巴基斯坦'],
['巴西'],
['保加利亚'],
['比利时'],
['冰岛'],
['朝鲜'],
['丹麦'],
['德国'],
['俄罗斯'],
['法国'],
['菲律宾'],
['芬兰'],
['哥伦比亚'],
['韩国'],
['荷兰'],
['加拿大'],
['柬埔寨'],
['喀麦隆'],
['老挝'],
['卢森堡'],
['罗马尼亚'],
['马达加斯加'],
['马来西亚'],
['毛里求斯'],
['美国'],
['秘鲁'],
['缅甸'],
['墨西哥'],
['南非'],
['尼泊尔'],
['挪威'],
['葡萄牙'],
['其它地区'],
['日本'],
['瑞典'],
['瑞士'],
['斯里兰卡'],
['泰国'],
['土耳其'],
['委内瑞拉'],
['文莱'],
['乌克兰'],
['西班牙'],
['希腊'],
['新加坡'],
['新西兰'],
['匈牙利'],
['以色列'],
['意大利'],
['印度'],
['印度尼西亚'],
['英国'],
['越南'],
['智利']
]
]