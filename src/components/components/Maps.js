import React, { useState, useEffect  } from 'react';
import { MapContainer, TileLayer, Marker, Popup, Polyline } from 'react-leaflet';
import ReactLeafletGoogleLayer from 'react-leaflet-google-layer';
import L from 'leaflet';
import DriftMarker from 'leaflet-drift-marker';
import Peer from '../../Peer.js';

let map_data = []

function Maps() {
	useEffect(() => {
		setInterval(() => {
			map_data = Peer[3]
			//console.log('map_data',map_data)
		}, 500);
	},0);
	//  Create the Icon

	const LeafIcon = L.Icon.extend({
		options: {},
	});

	const blueIcon = new LeafIcon({
		iconUrl:
			'https://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=%E2%80%A2|abcdef&chf=a,s,ee00FFFF',
	}),
		greenIcon = new LeafIcon({
			iconUrl:
				'https://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=%E2%80%A2|2ecc71&chf=a,s,ee00FFFF',
		});

	//  Use the state hook:
	const icon = blueIcon;
	
	const center = [14.078475654188983, 100.6021117284084]
	const position = [14.07943356,100.6013849]
	const redOptions = { color: 'red' }
	const limeOptions = { color: 'lime' }
	const blueOptions = {color : 'blue'}
	const polyline = [
	
		[14.07944522,100.6009403],
		[14.07944457,100.6009398],
		[14.07944373,100.6009406],
		[14.07944215,100.6009414],
		[14.07944159,100.6009417],
		[14.07944092,100.6009411],
		[14.079434,100.6009413],
		[14.07942433,100.6009408],
		[14.07941447,100.6009401],
		[14.07939479,100.6009399],
		[14.0793933,100.6009279],
		[14.07939236,100.6009203],
		[14.07938373,100.600905],
		[14.07938355,100.6009041],
		[14.0793499,100.6009019],
		[14.07929981,100.6009001],
		[14.0792205,100.6008859],
		[14.07921198,100.6008797],
		[14.07920479,100.6008727],
		[14.07919639,100.6008695],
		[14.07918584,100.6008667],
		[14.07917482,100.6008633],
		[14.07916436,100.6008602],
		[14.07915252,100.6008557],
		[14.07914134,100.6008509],
		[14.0791313,100.6008477],
		[14.07912258,100.6008425],
		[14.07912047,100.6008333],
		[14.07911862,100.6008275],
		[14.07911553,100.6008231],
		[14.07911018,100.6008185],
		[14.07910305,100.6008158],
		[14.07909188,100.6008172],
		[14.07908575,100.6008125],
		[14.07908005,100.6008046],
		[14.07907411,100.6007946],
		[14.07906576,100.6007872],
		[14.07905608,100.6007825],
		[14.07904587,100.6007802],
		[14.07903543,100.6007786],
		[14.07901578,100.6007773],
		[14.07893729,100.6007742],
		[14.07893293,100.6007748],
		[14.07892785,100.600774],
		[14.07892288,100.6007742],
		[14.078917,100.6007731],
		[14.07891097,100.6007732],
		[14.07890418,100.6007736],
		[14.07889727,100.6007743],
		[14.07889007,100.6007739],
		[14.07888212,100.6007736],
		[14.07887441,100.6007729],
		[14.07886719,100.6007726],
		[14.07885671,100.6007702],
		[14.07885301,100.6007697],
		[14.0788523,100.6007691],
		[14.07885227,100.6007694],
		[14.07885249,100.6007695],
		[14.07885262,100.6007693],
		[14.0788527,100.6007695],
		[14.07885269,100.6007694],
		[14.07885267,100.6007694],
		[14.07885263,100.6007694],
		[14.07885257,100.6007693],
		[14.07885251,100.6007693],
		[14.07885234,100.6007693],
		[14.0788524,100.6007693],
		[14.07885236,100.6007695],
		[14.07885233,100.6007695],
		[14.07885236,100.6007695],
		[14.07885244,100.6007694],
		[14.07885239,100.6007694],
		[14.07885238,100.6007694],
		[14.07885034,100.6007692],
		[14.07884368,100.6007672],
		[14.07883496,100.6007664],
		[14.0788151,100.6007649],
		[14.07880898,100.600766],
		[14.07880459,100.6007652],
		[14.0787987,100.6007652],
		[14.07879219,100.6007648],
		[14.07878587,100.6007648],
		[14.0787804,100.6007643],
		[14.07877425,100.6007646],
		[14.07877164,100.6007645],
		[14.07877126,100.6007647],
		[14.07877143,100.6007651],
		[14.07877211,100.6007661],
		[14.07877199,100.6007664],
		[14.07877052,100.6007651],
		[14.07876718,100.6007651],
		[14.07876142,100.6007654],
		[14.07875971,100.6007669],
		[14.07875952,100.6007661],
		[14.07875911,100.6007661],
		[14.07875914,100.6007668],
		[14.07875946,100.6007672],
		[14.0787593,100.6007671],
		[14.07875812,100.6007658],
		[14.07875083,100.600765],
		[14.07874268,100.6007642],
		[14.07873439,100.6007637],
		[14.07872566,100.6007619],
		[14.07871686,100.6007615],
		[14.07870789,100.6007608],
		[14.07869779,100.6007596],
		[14.0786869,100.6007593],
		[14.07867728,100.6007566],
		[14.07866764,100.6007549],
		[14.07865826,100.6007539],
		[14.07864832,100.6007533],
		[14.07863821,100.6007528],
		[14.07862945,100.6007519],
		[14.07861983,100.6007506],
		[14.07860993,100.6007493],
		[14.07859962,100.6007486],
		[14.07858846,100.6007483],
		[14.07857826,100.6007493],
		[14.07856913,100.6007486],
		[14.07855877,100.6007466],
		[14.07854807,100.6007454],
		[14.07853807,100.6007445],
		[14.07852835,100.6007444],
		[14.07851829,100.6007446],
		[14.07850867,100.6007446],
		[14.07849873,100.6007445],
		[14.07848872,100.6007448],
		[14.07848188,100.6007428],
		[14.07847393,100.6007426],
		[14.07846461,100.600743],
		[14.07845331,100.6007448],
		[14.07844306,100.600744],
		[14.07843279,100.6007425],
		[14.07842374,100.6007411],
		[14.07841523,100.6007409],
		[14.07840498,100.6007403],
		[14.07839655,100.6007406],
		[14.0783869,100.6007406],
		[14.07837749,100.6007397],
		[14.0783672,100.6007393],
		[14.07835626,100.6007395],
		[14.07834724,100.6007395],
		[14.07833635,100.6007387],
		[14.07831555,100.6007369],
		[14.07830938,100.6007353],
		[14.07830238,100.6007359],
		[14.07827809,100.6007318],
		[14.07827267,100.600731],
		[14.07826494,100.6007303],
		[14.07825604,100.6007305],
		[14.0782469,100.6007302],
		[14.07823721,100.6007295],
		[14.07822819,100.6007288],
		[14.07820881,100.6007277],
		[14.07820016,100.6007274],
		[14.07819172,100.6007273],
		[14.07818188,100.6007277],
		[14.07817233,100.6007279],
		[14.07816351,100.600726],
		[14.07815448,100.6007258],
		[14.07814576,100.6007251],
		[14.0781367,100.6007246],
		[14.07812809,100.6007237],
		[14.07811856,100.6007229],
		[14.07810895,100.6007225],
		[14.07809958,100.6007221],
		[14.07808988,100.6007217],
		[14.07807962,100.6007215],
		[14.07806985,100.6007209],
		[14.07806015,100.6007201],
		[14.07805042,100.6007198],
		[14.07804025,100.6007202],
		[14.07803122,100.60072],
		[14.07802255,100.6007186],
		[14.07801361,100.6007181],
		[14.07800712,100.6007182],
		[14.07800085,100.6007182],
		[14.07799324,100.6007181],
		[14.07798508,100.6007179],
		[14.07797557,100.6007171],
		[14.07796621,100.6007159],
		[14.077958,100.6007152],
		[14.0779507,100.6007138],
		[14.07794336,100.6007142],
		[14.07793527,100.6007152],
		[14.0779276,100.6007151],
		[14.07791877,100.6007147],
		[14.07791025,100.6007139],
		[14.07790299,100.6007123],
		[14.07789481,100.6007112],
		[14.07788683,100.6007118],
		[14.07787815,100.6007124],
		[14.07786968,100.6007104],
		[14.07786128,100.6007096],
		[14.07785263,100.6007087],
		[14.07784426,100.6007086],
		[14.077836,100.6007074],
		[14.07782738,100.6007059],
		[14.07781803,100.6007053],
		[14.0778087,100.6007051],
		[14.077799,100.6007035],
		[14.07778912,100.6007008],
		[14.07777993,100.6006976],
		[14.07777209,100.6006956],
		[14.07776303,100.600696],
		[14.07775416,100.600695],
		[14.07774481,100.6006943],
		[14.07773593,100.6006949],
		[14.07772688,100.6006947],
		[14.07771764,100.6006948],
		[14.07770808,100.6006947],
		[14.07769839,100.6006939],
		[14.07768901,100.6006928],
		[14.07767928,100.600692],
		[14.07767052,100.6006914],
		[14.07766153,100.6006911],
		[14.07765215,100.6006912],
		[14.07764379,100.6006905],
		[14.07763506,100.6006899],
		[14.07762677,100.6006883],
		[14.07761794,100.6006868],
		[14.07760781,100.6006862],
		[14.0775978,100.6006851],
		[14.07758733,100.6006845],
		[14.07757721,100.6006845],
		[14.0775673,100.6006831],
		[14.07755797,100.6006825],
		[14.07754791,100.6006823],
		[14.07753846,100.6006819],
		[14.07753056,100.600681],
		[14.07752165,100.6006795],
		[14.07751294,100.6006788],
		[14.07750483,100.6006779],
		[14.07749665,100.600678],
		[14.07748719,100.6006783],
		[14.0774772,100.6006782],
		[14.07746803,100.6006779],
		[14.07745963,100.6006775],
		[14.0774503,100.600677],
		[14.07744069,100.6006756],
		[14.07743095,100.6006749],
		[14.07742144,100.6006744],
		[14.0774124,100.6006739],
		[14.07740347,100.6006736],
		[14.07739466,100.6006734],
		[14.07738529,100.6006727],
		[14.07737661,100.6006722],
		[14.07736752,100.600672],
		[14.07735756,100.6006723],
		[14.0773487,100.6006715],
		[14.07733891,100.6006698],
		[14.07733087,100.6006696],
		[14.07732232,100.6006698],
		[14.07731295,100.6006703],
		[14.07730328,100.6006691],
		[14.0772937,100.6006683],
		[14.07728455,100.6006667],
		[14.07727517,100.6006655],
		[14.07726552,100.6006656],
		[14.07725518,100.6006653],
		[14.07724515,100.6006648],
		[14.07723541,100.6006639],
		[14.07722564,100.6006637],
		[14.07721559,100.6006632],
		[14.07720776,100.6006632],
		[14.07719992,100.6006639],
		[14.07719218,100.6006634],
		[14.07718451,100.6006621],
		[14.07717599,100.6006607],
		[14.07716676,100.6006598],
		[14.0771584,100.6006597],
		[14.07714961,100.6006591],
		[14.0771414,100.600658],
		[14.07713249,100.6006572],
		[14.07712412,100.6006565],
		[14.07710654,100.6006559],
		[14.07709774,100.6006553],
		[14.07708916,100.6006547],
		[14.07708088,100.6006543],
		[14.07707196,100.6006537],
		[14.07706328,100.6006532],
		[14.07705503,100.600653],
		[14.07704718,100.6006527],
		[14.07703879,100.6006519],
		[14.07703031,100.6006512],
		[14.07702192,100.600651],
		[14.07701361,100.6006505],
		[14.07700467,100.6006499],
		[14.07699543,100.6006495],
		[14.07698646,100.6006487],
		[14.0769771,100.6006483],
		[14.07696759,100.6006483],
		[14.07695859,100.6006477],
		[14.07694979,100.6006482],
		[14.07694102,100.6006482],
		[14.07693208,100.6006477],
		[14.07692312,100.600646],
		[14.07691388,100.6006447],
		[14.07690581,100.6006425],
		[14.07689738,100.6006411],
		[14.07688854,100.6006407],
		[14.07687948,100.6006405],
		[14.07686977,100.6006402],
		[14.07685226,100.6006387],
		[14.07684301,100.6006382],
		[14.07683349,100.6006381],
		[14.07682468,100.6006377],
		[14.07681568,100.6006376],
		[14.07680615,100.6006379],
		[14.07679722,100.6006366],
		[14.07678771,100.6006354],
		[14.07677834,100.600635],
		[14.07676925,100.6006346],
		[14.0767591,100.6006346],
		[14.07674899,100.6006343],
		[14.0767389,100.6006339],
		[14.07672889,100.6006339],
		[14.07671851,100.600634],
		[14.07670873,100.6006344],
		[14.07669863,100.600635],
		[14.07668757,100.6006358],
		[14.07667724,100.6006373],
		[14.07666674,100.6006402],
		[14.07665632,100.6006427],
		[14.07664609,100.6006455],
		[14.0766363,100.6006493],
		[14.07662598,100.600653],
		[14.07661673,100.6006559],
		[14.07660819,100.6006601],
		[14.07659839,100.6006648],
		[14.0765883,100.6006697],
		[14.07657775,100.6006751],
		[14.07656846,100.6006807],
		[14.07655958,100.6006869],
		[14.07655129,100.6006934],
		[14.0765431,100.6006988],
		[14.07653516,100.6007055],
		[14.07652764,100.6007127],
		[14.07651991,100.6007196],
		[14.07650498,100.6007346],
		[14.07649765,100.6007425],
		[14.0764729,100.6007767],
		[14.07646742,100.6007851],
		[14.07646362,100.6007927],
		[14.07645791,100.6008082],
		[14.07645398,100.6008162],
		[14.07645079,100.6008248],
		[14.07644726,100.6008333],
		[14.07644477,100.6008414],
		[14.07644231,100.6008501],
		[14.07643937,100.6008566],
		[14.07643693,100.6008642],
		[14.07643508,100.6008722],
		[14.0764334,100.6008817],
		[14.07643091,100.6008907],
		[14.07642898,100.6008996],
		[14.07642747,100.6009088],
		[14.07642603,100.6009161],
		[14.07642602,100.6009215],
		[14.07642569,100.6009246],
		[14.07642498,100.6009246],
		[14.07642438,100.6009245],
		[14.07642448,100.600925],
		[14.07642577,100.6009293],
		[14.0764257,100.6009366],
		[14.07642522,100.6009437],
		[14.07642413,100.600951],
		[14.07642323,100.6009596],
		[14.07642219,100.600968],
		[14.07642218,100.6009761],
		[14.07642188,100.6009857],
		[14.07642146,100.6009964],
		[14.07642138,100.6010061],
		[14.0764205,100.6010147],
		[14.07642084,100.6010239],
		[14.07642072,100.6010332],
		[14.07642031,100.6010425],
		[14.07641915,100.6010514],
		[14.07641857,100.6010559],
		[14.07641794,100.6010582],
		[14.07641777,100.6010589],
		[14.07641795,100.6010587],
		[14.0764178,100.6010582],
		[14.0764182,100.6010582],
		[14.07641823,100.6010584],
		[14.07641808,100.6010583],
		[14.07641826,100.6010603],
		[14.07641853,100.6010664],
		[14.0764183,100.6010735],
		[14.07641773,100.6010824],
		[14.07641643,100.6010908],
		[14.07641606,100.6010999],
		[14.07641599,100.6011092],
		[14.0764155,100.601118],
		[14.07641491,100.601127],
		[14.07641415,100.6011357],
		[14.07641459,100.6011456],
		[14.07641332,100.6011556],
		[14.0764118,100.6011656],
		[14.07641063,100.6011747],
		[14.0764095,100.6011843],
		[14.0764094,100.6011946],
		[14.07640907,100.601205],
		[14.07640886,100.6012154],
		[14.07640824,100.6012253],
		[14.07640693,100.6012352],
		[14.07640763,100.6012447],
		[14.07640707,100.6012541],
		[14.0764055,100.6012645],
		[14.07640428,100.6012747],
		[14.07640381,100.6012856],
		[14.07640359,100.6012967],
		[14.07640282,100.6013071],
		[14.07640258,100.6013171],
		[14.07640247,100.6013275],
		[14.07640228,100.6013377],
		[14.07640142,100.6013474],
		[14.07640056,100.6013582],
		[14.07639962,100.6013693],
		[14.07639931,100.6013802],
		[14.07639865,100.6013905],
		[14.07639891,100.6014003],
		[14.07639901,100.6014113],
		[14.07639908,100.6014227],
		[14.07639761,100.601433],
		[14.07639702,100.6014431],
		[14.07639593,100.6014536],
		[14.07639531,100.601464],
		[14.07639435,100.6014746],
		[14.07639304,100.6014851],
		[14.07639238,100.6014965],
		[14.07639179,100.6015079],
		[14.07639113,100.6015186],
		[14.07639115,100.6015278],
		[14.07639092,100.6015372],
		[14.07639038,100.6015476],
		[14.07638938,100.6015573],
		[14.07638769,100.6015662],
		[14.07638716,100.601575],
		[14.07638743,100.6015844],
		[14.07638705,100.6015948],
		[14.07638588,100.6016046],
		[14.07638567,100.6016146],
		[14.07638502,100.6016247],
		[14.07638395,100.6016348],
		[14.07638389,100.6016446],
		[14.07638381,100.6016546],
		[14.07638303,100.6016638],
		[14.07638219,100.6016731],
		[14.07638256,100.6016828],
		[14.07638277,100.6016917],
		[14.07638199,100.601701],
		[14.07638088,100.6017112],
		[14.07638076,100.6017217],
		[14.07638162,100.6017311],
		[14.0763813,100.601741],
		[14.07638086,100.6017516],
		[14.07637993,100.6017622],
		[14.07637977,100.6017728],
		[14.07637879,100.6017829],
		[14.07637761,100.6017929],
		[14.07637713,100.6018022],
		[14.0763769,100.6018121],
		[14.07637654,100.601822],
		[14.07637704,100.6018321],
		[14.07637827,100.6018422],
		[14.07637869,100.6018526],
		[14.07637773,100.6018626],
		[14.07637683,100.6018732],
		[14.07637657,100.6018832],
		[14.07637634,100.6018933],
		[14.07637564,100.6019026],
		[14.07637523,100.6019125],
		[14.0763749,100.6019221],
		[14.07637427,100.6019321],
		[14.07637346,100.6019419],
		[14.07637306,100.6019519],
		[14.0763727,100.601961],
		[14.07637133,100.6019705],
		[14.07637103,100.6019799],
		[14.07637104,100.6019891],
		[14.07637044,100.6019995],
		[14.07636984,100.6020094],
		[14.07636941,100.6020195],
		[14.07636863,100.6020299],
		[14.07636798,100.6020403],
		[14.07636737,100.6020507],
		[14.07636685,100.60206],
		[14.07636578,100.6020695],
		[14.07636491,100.6020791],
		[14.07636468,100.6020888],
		[14.07636361,100.6020965],
		[14.07636314,100.6021052],
		[14.07636284,100.6021146],
		[14.07636208,100.6021242],
		[14.07636149,100.6021342],
		[14.07636085,100.6021446],
		[14.07636055,100.6021546],
		[14.07636042,100.6021642],
		[14.07635982,100.6021742],
		[14.07635884,100.6021847],
		[14.07635763,100.602192],
		[14.07635634,100.6021969],
		[14.07635521,100.6022041],
		[14.0763555,100.6022134],
		[14.07635514,100.6022229],
		[14.07635455,100.6022329],
		[14.07635383,100.602243],
		[14.07635318,100.6022523],
		[14.07635234,100.6022626],
		[14.07635191,100.6022731],
		[14.07635131,100.6022827],
		[14.07635002,100.6022921],
		[14.07634922,100.6023018],
		[14.07634859,100.6023114],
		[14.07634831,100.6023223],
		[14.07634793,100.6023327],
		[14.0763476,100.6023431],
		[14.07634653,100.602354],
		[14.07634532,100.602364],
		[14.07634575,100.6023737],
		[14.07634586,100.6023835],
		[14.07634535,100.6023937],
		[14.07634479,100.6024039],
		[14.07634402,100.6024145],
		[14.07634373,100.6024246],
		[14.076343,100.6024344],
		[14.07634223,100.602444],
		[14.07634164,100.6024534],
		[14.07634093,100.6024633],
		[14.07634135,100.602472],
		[14.07634117,100.6024818],
		[14.0763404,100.6024937],
		[14.0763394,100.6025031],
		[14.07633878,100.6025119],
		[14.07633797,100.6025215],
		[14.07633751,100.6025309],
		[14.07633709,100.6025405],
		[14.07633718,100.6025504],
		[14.07633666,100.6025605],
		[14.07633614,100.6025705],
		[14.07633619,100.6025809],
		[14.07633678,100.6025913],
		[14.07633749,100.6026012],
		[14.07633665,100.6026111],
		[14.0763362,100.6026209],
		[14.07633658,100.6026313],
		[14.07633637,100.6026413],
		[14.07633635,100.6026504],
		[14.07633539,100.6026598],
		[14.07633374,100.6026699],
		[14.07633317,100.6026803],
		[14.07633279,100.6026911],
		[14.07633161,100.6027016],
		[14.0763309,100.6027112],
		[14.07633082,100.6027209],
		[14.07633015,100.6027316],
		[14.07632981,100.602741],
		[14.07632888,100.60275],
		[14.0763287,100.6027593],
		[14.07632717,100.6027682],
		[14.07632706,100.6027778],
		[14.07632714,100.6027883],
		[14.07632661,100.6027987],
		[14.07632657,100.6028084],
		[14.07632575,100.6028182],
		[14.07632481,100.602828],
		[14.07632434,100.602838],
		[14.0763241,100.6028482],
		[14.07632357,100.6028592],
		[14.07632279,100.60287],
		[14.07632193,100.6028807],
		[14.07632121,100.6028909],
		[14.07632029,100.6029009],
		[14.07632038,100.6029106],
		[14.0763198,100.6029207],
		[14.07631979,100.6029316],
		[14.07631959,100.6029418],
		[14.07631929,100.6029514],
		[14.07631843,100.6029607],
		[14.07631787,100.6029711],
		[14.07631723,100.6029815],
		[14.07631584,100.6029934],
		[14.07631515,100.6030038],
		[14.0763145,100.6030138],
		[14.07631412,100.6030242],
		[14.07631405,100.6030344],
		[14.07631311,100.6030445],
		[14.07631183,100.6030543],
		[14.07630953,100.6030645],
		[14.07630881,100.6030748],
		[14.07630779,100.6030855],
		[14.07630723,100.6030955],
		[14.07630756,100.6031063],
		[14.07630766,100.6031166],
		[14.0763066,100.6031274],
		[14.07630582,100.6031374],
		[14.0763049,100.6031481],
		[14.07630415,100.6031592],
		[14.07630383,100.6031702],
		[14.07630315,100.6031806],
		[14.07630175,100.603192],
		[14.07630108,100.6032029],
		[14.07630135,100.6032137],
		[14.0763005,100.6032245],
		[14.07629965,100.6032358],
		[14.07629843,100.603246],
		[14.07629628,100.6032567],
		[14.07629384,100.6032666],
		[14.07629117,100.6032757],
		[14.07628818,100.6032836],
		[14.07628766,100.6032893],
		[14.07629398,100.6032965],
		[14.07630502,100.6033002],
		[14.0763155,100.6033036],
		[14.07632601,100.6033063],
		[14.07633378,100.6033089],
		[14.07634392,100.6033117],
		[14.07635156,100.6033118],
		[14.07635911,100.6033118],
		[14.07636565,100.6033152],
		[14.07637184,100.6033186],
		[14.07637945,100.6033218],
		[14.07638936,100.6033259],
		[14.07639868,100.6033295],
		[14.07640802,100.6033334],
		[14.07641851,100.6033367],
		[14.07642758,100.6033414],
		[14.07643522,100.6033467],
		[14.07644424,100.6033515],
		[14.07645587,100.6033552],
		[14.07646196,100.6033603],
		[14.07646742,100.6033676],
		[14.07647442,100.6033742],
		[14.07648203,100.6033815],
		[14.07649017,100.6033883],
		[14.07649685,100.6033959],
		[14.07650404,100.6034029],
		[14.07651237,100.603409],
		[14.07652103,100.6034152],
		[14.0765296,100.603422],
		[14.0765379,100.6034276],
		[14.07654674,100.603432],
		[14.07655724,100.6034352],
		[14.07656827,100.6034379],
		[14.07657867,100.6034402],
		[14.07658858,100.6034416],
		[14.07659974,100.6034433],
		[14.07661072,100.6034444],
		[14.07662142,100.6034459],
		[14.0766323,100.6034474],
		[14.07664272,100.6034482],
		[14.07665305,100.6034484],
		[14.07666362,100.6034498],
		[14.07667504,100.6034507],
		[14.07668631,100.6034525],
		[14.07669661,100.603453],
		[14.07670654,100.603454],
		[14.0767171,100.603454],
		[14.07672808,100.6034548],
		[14.07674834,100.603457],
		[14.07675781,100.6034585],
		[14.07677669,100.6034607],
		[14.07678642,100.6034623],
		[14.0767955,100.6034636],
		[14.07680435,100.6034645],
		[14.07681366,100.6034649],
		[14.07682304,100.6034649],
		[14.07683255,100.6034645],
		[14.07684237,100.6034655],
		[14.0768523,100.6034668],
		[14.0768865,100.6034673],
		[14.07689076,100.6034684],
		[14.07689601,100.6034688],
		[14.07690205,100.6034689],
		[14.07691015,100.6034683],
		[14.07691878,100.6034689],
		[14.07692756,100.6034702],
		[14.07693583,100.6034709],
		[14.07694409,100.6034725],
		[14.07695304,100.6034729],
		[14.07696252,100.6034725],
		[14.07697194,100.6034719],
		[14.07698142,100.6034724],
		[14.07699091,100.6034723],
		[14.0770004,100.603473],
		[14.07700977,100.6034731],
		[14.07701966,100.6034728],
		[14.07702898,100.6034734],
		[14.07703908,100.6034736],
		[14.07704946,100.603475],
		[14.07705922,100.6034756],
		[14.07706916,100.6034757],
		[14.07707882,100.6034749],
		[14.07708934,100.6034749],
		[14.07709967,100.6034757],
		[14.07710955,100.6034767],
		[14.07711929,100.603478],
		[14.0771281,100.6034785],
		[14.07713792,100.6034784],
		[14.07714837,100.603478],
		[14.07715767,100.6034789],
		[14.07716714,100.6034807],
		[14.0771771,100.6034813],
		[14.07718753,100.6034801],
		[14.07719711,100.6034799],
		[14.07720677,100.6034804],
		[14.0772173,100.6034817],
		[14.07722754,100.6034822],
		[14.0772378,100.6034828],
		[14.07724752,100.6034832],
		[14.07725775,100.6034835],
		[14.07726756,100.6034835],
		[14.07727814,100.6034838],
		[14.07728825,100.6034849],
		[14.07729828,100.6034862],
		[14.0773082,100.6034871],
		[14.07731773,100.6034866],
		[14.07732713,100.6034856],
		[14.07733669,100.6034858],
		[14.07734605,100.6034864],
		[14.0773549,100.603489],
		[14.07736329,100.6034919],
		[14.07737221,100.6034931],
		[14.0773815,100.603494],
		[14.07739139,100.6034949],
		[14.07740113,100.6034958],
		[14.07741019,100.6034968],
		[14.07741974,100.6034973],
		[14.07742742,100.6034978],
		[14.07743646,100.6034987],
		[14.07744663,100.6034993],
		[14.07745645,100.6034989],
		[14.07746604,100.603499],
		[14.07747572,100.6035],
		[14.0774852,100.6035],
		[14.0774952,100.6035011],
		[14.07750581,100.6035021],
		[14.07751702,100.603502],
		[14.0775276,100.6035001],
		[14.07753515,100.6034987],
		[14.07754691,100.6034967],
		[14.07755808,100.6034955],
		[14.07756851,100.6034954],
		[14.0775793,100.6034961],
		[14.07759021,100.6034954],
		[14.07760138,100.6034952],
		[14.07761319,100.6034943],
		[14.07762247,100.6034936],
		[14.07763242,100.6034932],
		[14.07764265,100.6034931],
		[14.07765264,100.6034944],
		[14.07766222,100.6034952],
		[14.07767113,100.6034947],
		[14.07768201,100.6034943],
		[14.07769234,100.6034947],
		[14.07770306,100.603494],
		[14.07771374,100.603493],
		[14.07772356,100.6034918],
		[14.07773482,100.6034882],
		[14.0777446,100.6034859],
		[14.07775442,100.6034864],
		[14.07776486,100.6034859],
		[14.07777518,100.6034852],
		[14.07778506,100.6034835],
		[14.0777954,100.6034824],
		[14.07780475,100.6034816],
		[14.0778149,100.6034825],
		[14.07782601,100.6034824],
		[14.07783612,100.6034823],
		[14.07784615,100.6034823],
		[14.07785745,100.6034822],
		[14.07786745,100.6034823],
		[14.07787804,100.6034824],
		[14.07788797,100.6034826],
		[14.07789861,100.6034828],
		[14.07790977,100.6034832],
		[14.07792119,100.6034839],
		[14.07793105,100.6034855],
		[14.0779416,100.6034864],
		[14.07795161,100.6034871],
		[14.07796147,100.6034865],
		[14.07797212,100.603487],
		[14.07798377,100.6034868],
		[14.07799454,100.6034875],
		[14.07800493,100.6034876],
		[14.07801523,100.6034883],
		[14.07802534,100.6034891],
		[14.07803567,100.6034896],
		[14.07804594,100.6034909],
		[14.07805681,100.6034919],
		[14.07806783,100.6034911],
		[14.07807826,100.6034908],
		[14.0780886,100.6034901],
		[14.07809925,100.6034888],
		[14.07810733,100.6034884],
		[14.07811721,100.6034878],
		[14.07812787,100.6034875],
		[14.07813867,100.6034883],
		[14.07814915,100.6034875],
		[14.07815998,100.6034872],
		[14.07817169,100.6034862],
		[14.07818289,100.6034839],
		[14.07819065,100.6034821],
		[14.07820001,100.6034784],
		[14.07821021,100.6034749],
		[14.07822032,100.603471],
		[14.07823009,100.6034681],
		[14.07823998,100.6034678],
		[14.07824981,100.6034686],
		[14.07825839,100.6034688],
		[14.07826923,100.6034676],
		[14.07827978,100.6034682],
		[14.07829021,100.603467],
		[14.07830091,100.6034661],
		[14.07831277,100.6034661],
		[14.07832425,100.6034657],
		[14.07833547,100.6034656],
		[14.07834488,100.6034655],
		[14.07835359,100.6034662],
		[14.07836299,100.6034663],
		[14.0783731,100.6034678],
		[14.07838326,100.6034685],
		[14.07839456,100.603469],
		[14.07840536,100.6034679],
		[14.07841576,100.6034672],
		[14.07842672,100.6034669],
		[14.07843898,100.6034654],
		[14.07845031,100.6034643],
		[14.07846044,100.6034611],
		[14.07846973,100.6034575],
		[14.0784802,100.6034527],
		[14.07849023,100.6034476],
		[14.07849948,100.6034431],
		[14.07850901,100.6034389],
		[14.07851881,100.6034351],
		[14.07852908,100.6034311],
		[14.07853864,100.6034279],
		[14.07854801,100.6034243],
		[14.07882902,100.6034489],
		[14.07883932,100.603449],
		[14.07884924,100.6034486],
		[14.0788594,100.603448],
		[14.07887058,100.6034479],
		[14.07888077,100.6034476],
		[14.07889022,100.6034466],
		[14.07889946,100.603445],
		[14.07890925,100.6034432],
		[14.07891896,100.6034423],
		[14.07892855,100.6034405],
		[14.07893877,100.6034383],
		[14.07894939,100.6034359],
		[14.07896089,100.6034343],
		[14.07897896,100.6034322],
		[14.07898743,100.6034317],
		[14.07899493,100.6034308],
		[14.07900208,100.6034293],
		[14.07901138,100.603428],
		[14.07902073,100.6034261],
		[14.07903091,100.6034241],
		[14.07904168,100.6034218],
		[14.07905176,100.6034198],
		[14.07906068,100.6034176],
		[14.07906708,100.6034179],
		[14.079069,100.6034177],
		[14.07906951,100.6034177],
		[14.0790701,100.6034177],
		[14.07907326,100.6034161],
		[14.07908079,100.6034151],
		[14.07909127,100.6034129],
		[14.07910307,100.6034094],
		[14.07911471,100.6034076],
		[14.07912604,100.6034059],
		[14.07913682,100.6034037],
		[14.07914691,100.6034027],
		[14.07915746,100.603401],
		[14.07916835,100.6033978],
		[14.07917925,100.6033964],
		[14.07918805,100.603395],
		[14.07919829,100.6033921],
		[14.07920942,100.6033889],
		[14.07921972,100.6033865],
		[14.07923045,100.6033843],
		[14.07924162,100.6033816],
		[14.07925304,100.6033806],
		[14.07926381,100.6033802],
		[14.07927443,100.6033795],
		[14.0792858,100.6033772],
		[14.07929711,100.6033757],
		[14.07930767,100.6033747],
		[14.07931695,100.6033736],
		[14.07932811,100.6033712],
		[14.07933945,100.6033692],
		[14.07934998,100.6033662],
		[14.07936041,100.6033633],
		[14.07937234,100.6033597],
		[14.07938316,100.6033577],
		[14.07939386,100.603356],
		[14.07940408,100.6033547],
		[14.07941438,100.6033533],
		[14.07942616,100.6033526],
		[14.07943752,100.6033518],
		[14.0794474,100.60335],
		[14.0794589,100.6033476],
		[14.0794707,100.6033472],
		[14.07948244,100.6033469],
		[14.07949292,100.6033435],
		[14.07950314,100.6033403],
		[14.07951389,100.6033389],
		[14.07952493,100.6033377],
		[14.07953588,100.6033355],
		[14.07954692,100.6033324],
		[14.07955749,100.603329],
		[14.07956713,100.603327],
		[14.07957669,100.6033253],
		[14.07958686,100.6033226],
		[14.07959847,100.60332],
		[14.07960932,100.6033167],
		[14.07962067,100.6033149],
		[14.07963077,100.6033129],
		[14.07964227,100.6033097],
		[14.07965291,100.603307],
		[14.07966259,100.6033051],
		[14.07967337,100.6033034],
		[14.07968456,100.6033015],
		[14.07969508,100.6032997],
		[14.07970641,100.6032981],
		[14.07971641,100.6032955],
		[14.07972712,100.6032935],
		[14.07973731,100.6032914],
		[14.07974779,100.60329],
		[14.07975878,100.6032879],
		[14.07976861,100.6032859],
		[14.07978949,100.6032816],
		[14.07980015,100.6032795],
		[14.07981047,100.6032778],
		[14.07982209,100.6032759],
		[14.07983333,100.6032708],
		[14.0798426,100.6032666],
		[14.07985296,100.6032639],
		[14.07986377,100.6032616],
		[14.07987444,100.6032586],
		[14.07988531,100.6032555],
		[14.07989562,100.6032528],
		[14.07990692,100.6032507],
		[14.0799185,100.6032481],
		[14.07993002,100.6032454],
		[14.07994066,100.6032441],
		[14.07995158,100.6032414],
		[14.07996252,100.6032386],
		[14.07997345,100.603236],
		[14.07998379,100.6032345],
		[14.07999405,100.6032322],
		[14.08000415,100.6032296],
		[14.08001379,100.6032257],
		[14.08002375,100.6032216],
		[14.08005724,100.6032133],
		[14.08006713,100.603213],
		[14.08007826,100.6032121],
		[14.08008902,100.6032102],
		[14.08010982,100.603207],
		[14.08011992,100.6032039],
		[14.08013091,100.6032018],
		[14.08014199,100.6032003],
		[14.08015292,100.6031998],
		[14.08016323,100.6031974],
		[14.08017408,100.6031948],
		[14.08018444,100.6031922],
		[14.08019463,100.6031889],
		[14.08020513,100.6031854],
		[14.08021586,100.6031822],
		[14.08022814,100.6031818],
		[14.08023779,100.60318],
		[14.08024671,100.6031756],
		[14.08025707,100.6031705],
		[14.080266,100.6031666],
		[14.08027574,100.603163],
		[14.08028545,100.6031589],
		[14.08029504,100.6031528],
		[14.08030408,100.603146],
		[14.08031987,100.6031299],
		[14.08032591,100.6031203],
		[14.08036871,100.603018],
		[14.08036893,100.6030077],
		[14.08037007,100.6029881],
		[14.08036957,100.6029785],
		[14.08036973,100.6029693],
		[14.08037095,100.6029642],
		[14.08037219,100.6029593],
		[14.08037329,100.602958],
		[14.08037584,100.6029575],
		[14.08037958,100.6029577],
		[14.08038679,100.6029542],
		[14.08039076,100.6029471],
		[14.08039442,100.6029376],
		[14.08039571,100.602928],
		[14.08039698,100.6029183],
		[14.08039728,100.6029077],
		[14.0803977,100.6028966],
		[14.08039752,100.6028857],
		[14.08039783,100.6028748],
		[14.08039842,100.6028644],
		[14.08039982,100.6028534],
		[14.08040131,100.6028425],
		[14.08040218,100.6028309],
		[14.08040306,100.6028198],
		[14.08040349,100.602808],
		[14.08040366,100.6027974],
		[14.08040344,100.6027864],
		[14.08040354,100.6027746],
		[14.08040421,100.6027626],
		[14.08040556,100.6027518],
		[14.08040707,100.6027407],
		[14.08040881,100.602731],
		[14.08040986,100.6027207],
		[14.08040994,100.6027092],
		[14.08040998,100.6026976],
		[14.08041025,100.602686],
		[14.08040995,100.6026743],
		[14.08041148,100.6026631],
		[14.08041238,100.6026516],
		[14.08041247,100.6026405],
		[14.08041272,100.6026296],
		[14.08041433,100.6026181],
		[14.08041465,100.6026071],
		[14.08041528,100.6025958],
		[14.08041678,100.6025851],
		[14.08041754,100.6025738],
		[14.08041835,100.6025626],
		[14.08041925,100.6025517],
		[14.08042039,100.6025409],
		[14.08042098,100.6025299],
		[14.08042424,100.6025182],
		[14.08042833,100.6025086],
		[14.08043088,100.6024977],
		[14.0804343,100.6024869],
		[14.08043702,100.6024755],
		[14.08043982,100.6024641],
		[14.08044163,100.6024522],
		[14.08044213,100.6024405],
		[14.08044315,100.6024286],
		[14.08044335,100.6024166],
		[14.08044333,100.6024052],
		[14.08044426,100.6023939],
		[14.08044474,100.6023821],
		[14.08044541,100.602371],
		[14.080446,100.6023592],
		[14.08044692,100.6023475],
		[14.08044784,100.6023356],
		[14.08044921,100.6023238],
		[14.08044946,100.6023134],
		[14.08044857,100.6023028],
		[14.08044883,100.6022936],
		[14.08044989,100.602285],
		[14.08045044,100.6022764],
		[14.08045149,100.6022676],
		[14.08045217,100.6022585],
		[14.08045349,100.6022491],
		[14.08045376,100.6022392],
		[14.08045389,100.6022293],
		[14.08045288,100.6022193],
		[14.0804509,100.6022095],
		[14.0804461,100.6022],
		[14.08044446,100.6021927],
		[14.08044432,100.6021823],
		[14.08044462,100.6021716],
		[14.08044618,100.6021602],
		[14.08044751,100.6021485],
		[14.08044863,100.6021373],
		[14.08044982,100.6021258],
		[14.08045072,100.6021145],
		[14.08045145,100.6021031],
		[14.08045197,100.6020909],
		[14.08045242,100.6020795],
		[14.08045252,100.6020677],
		[14.08045324,100.6020563],
		[14.08045434,100.6020451],
		[14.08045425,100.6020333],
		[14.0804544,100.6020218],
		[14.08045192,100.6020088],
		[14.08044877,100.6019978],
		[14.08044586,100.6019869],
		[14.08044346,100.6019764],
		[14.08044392,100.6019658],
		[14.08045087,100.6019561],
		[14.08045629,100.6019493],
		[14.08046342,100.6019416],
		[14.08046734,100.6019337],
		[14.08046748,100.6019236],
		[14.08046792,100.6019132],
		[14.08046829,100.6019023],
		[14.0804689,100.6018909],
		[14.08047061,100.6018804],
		[14.08047162,100.6018692],
		[14.08047158,100.6018586],
		[14.08047212,100.6018467],
		[14.08047252,100.6018352],
		[14.08047334,100.6018236],
		[14.08047336,100.6018124],
		[14.08047399,100.601801],
		[14.08047351,100.6017889],
		[14.08047434,100.6017789],
		[14.08047471,100.6017663],
		[14.08047531,100.6017545],
		[14.08047588,100.6017427],
		[14.0804762,100.6017313],
		[14.08047608,100.6017191],
		[14.08047745,100.6017072],
		[14.08047945,100.6016954],
		[14.08048063,100.6016832],
		[14.08047992,100.6016712],
		[14.08047776,100.6016594],
		[14.08047761,100.6016477],
		[14.08047654,100.6016373],
		[14.08047616,100.6016266],
		[14.08047715,100.6016164],
		[14.08047673,100.6016057],
		[14.08047713,100.6015943],
		[14.08047734,100.6015832],
		[14.08047699,100.6015715],
		[14.08047634,100.6015599],
		[14.08047472,100.6015482],
		[14.08047098,100.6015367],
		[14.08046709,100.6015252],
		[14.08046282,100.6015143],
		[14.08045946,100.6015046],
		[14.08045641,100.6014939],
		[14.08045376,100.6014842],
		[14.08045156,100.6014736],
		[14.08044979,100.6014627],
		[14.08044894,100.6014523],
		[14.08044746,100.6014414],
		[14.08044666,100.6014319],
		[14.08044519,100.6014225],
		[14.08044384,100.6014134],
		[14.0804459,100.6014023],
		[14.08044833,100.6013911],
		[14.08045076,100.6013803],
		[14.08045223,100.6013671],
		[14.08045207,100.6013552],
		[14.08045112,100.6013449],
		[14.08044998,100.6013347],
		[14.08044738,100.6013238],
		[14.08044538,100.6013125],
		[14.08044418,100.6013018],
		[14.08044238,100.6012915],
		[14.08043957,100.6012813],
		[14.08043703,100.6012719],
		[14.0804362,100.6012628],
		[14.08043316,100.6012526],
		[14.08043084,100.6012422],
		[14.08042891,100.6012312],
		[14.08042654,100.6012207],
		[14.08042367,100.6012097],
		[14.08042079,100.6011983],
		[14.08041834,100.601187],
		[14.08041596,100.6011753],
		[14.08041337,100.6011637],
		[14.08041147,100.6011515],
		[14.08040967,100.6011397],
		[14.08040776,100.6011273],
		[14.0804051,100.6011159],
		[14.08040315,100.6011048],
		[14.08040037,100.6010934],
		[14.08039824,100.6010814],
		[14.08039841,100.6010682],
		[14.08039632,100.6010578],
		[14.08039537,100.6010468],
		[14.08039625,100.6010366],
		[14.08039458,100.6010267],
		[14.0803908,100.6010158],
		[14.08038818,100.601005],
		[14.08038498,100.6009941],
		[14.08038206,100.6009835],
		[14.08037844,100.6009724],
		[14.08037531,100.6009608],
		[14.08037136,100.6009498],
		[14.08036655,100.6009392],
		[14.08035948,100.6009298],
		[14.08035028,100.6009214],
		[14.08034012,100.6009152],
		[14.08032857,100.6009115],
		[14.08031626,100.6009096],
		[14.08030422,100.6009091],
		[14.08029197,100.6009099],
		[14.08027963,100.6009119],
		[14.080267,100.6009146],
		[14.08025681,100.6009176],
		[14.08024653,100.6009208],
		[14.08023557,100.6009227],
		[14.08022405,100.6009253],
		[14.08021255,100.6009277],
		[14.08020209,100.6009292],
		[14.08019027,100.6009309],
		[14.08017914,100.6009317],
		[14.08016817,100.6009335],
		[14.08015785,100.6009353],
		[14.08014748,100.6009372],
		[14.08013603,100.6009385],
		[14.08012477,100.6009384],
		[14.08011275,100.6009372],
		[14.08010156,100.6009361],
		[14.08009027,100.6009345],
		[14.08007861,100.6009321],
		[14.08006654,100.6009303],
		[14.08005401,100.6009301],
		[14.08004311,100.6009287],
		[14.08003216,100.6009269],
		[14.08002178,100.6009252],
		[14.08001114,100.6009242],
		[14.08000107,100.6009234],
		[14.07999104,100.6009224],
		[14.07998032,100.6009209],
		[14.07996928,100.6009199],
		[14.07995789,100.6009196],
		[14.07994621,100.6009188],
		[14.07993423,100.6009185],
		[14.07992308,100.6009194],
		[14.07991147,100.6009186],
		[14.07990008,100.6009187],
		[14.07988782,100.6009192],
		[14.07987649,100.6009199],
		[14.07986643,100.6009188],
		[14.07985784,100.6009176],
		[14.07984715,100.6009168],
		[14.07983698,100.6009164],
		[14.07982697,100.6009153],
		[14.07981626,100.6009139],
		[14.07980509,100.6009137],
		[14.07979448,100.6009125],
		[14.079784,100.6009117],
		[14.07977354,100.6009117],
		[14.07976301,100.6009117],
		[14.07975287,100.6009107],
		[14.07974169,100.6009103],
		[14.07973113,100.6009092],
		[14.07972077,100.600909],
		[14.07970994,100.600909],
		[14.07969877,100.6009082],
		[14.07968753,100.6009075],
		[14.07967681,100.6009067],
		[14.07966652,100.6009061],
		[14.07965538,100.6009055],
		[14.0796448,100.6009046],
		[14.07963398,100.6009039],
		[14.07962387,100.6009032],
		[14.07961343,100.6009023],
		[14.07960272,100.6009019],
		[14.0795918,100.6009021],
		[14.07958095,100.6009025],
		[14.07957075,100.6009031],
		[14.07956166,100.6009042],
		[14.07955104,100.6009048],
		[14.07954157,100.6009048],
		[14.07953173,100.6009052],
		[14.07952207,100.6009065],
		[14.07951255,100.6009089],
		[14.07950326,100.6009122],
		[14.07949483,100.6009166],
		[14.07948699,100.6009215],
		[14.0794795,100.6009253],
		[14.07947043,100.6009284],
		[14.07945979,100.6009308],
		[14.07944795,100.6009327],
		[14.07943692,100.6009341],
	]

	const mtecLineDay1 = [
		[14.07948418,100.6009913],
	[14.07946174,100.6014161],
	[14.07944708,100.601693],
	[14.07941564,100.6017898],
	[14.07942284,100.60166],
	[14.07943709,100.6013824],
	[14.07945929,100.6009675],


	]
	const dummyLL = [[14.078475654188983, 100.6021117284084],[14.079475654188983, 100.6022117284084]]
	let robotHead = (map_data.length > 2) ?   map_data[map_data.length -1] : position
	var robotPOS = (map_data.length > 2) ?    [map_data[map_data.length - 2], map_data[map_data.length -1]] : dummyLL
	let robotMap = (map_data.length < 1)?  dummyLL :  map_data
//	console.log(robotPOS,'robotPOS')
	return (

		<MapContainer

			className='rounded-xl border-2 	'
			center={center}
			//14.078291798078023, 100.60221644781316
			zoom={17}
			maxZoom={25}
			scrollWheelZoom={true}
		>
			 <ReactLeafletGoogleLayer apiKey='AIzaSyDDpue4GPm1L6-n5E5PCdzVHYXc0FW3N48' type={'satellite'} maxZoom={25}/>

				
			{/* <Marker position={position} icon={icon} >
				<Popup >
					I'M A R O B O T
				</Popup>
			</Marker> */}
			{
				
			}
					{/* <Marker position={robotHead} icon={icon} >
				<Popup >
					I'M A R O B O T
				</Popup>
			</Marker> */}
			<Polyline pathOptions={limeOptions} positions={robotMap} weight={5} />
			<Polyline pathOptions={redOptions} positions={robotPOS} weight={7} />
			{/* <Polyline pathOptions={limeOptions} positions={polyline} weight={10} /> */}
			{/* <Polyline pathOptions={redOptions} positions={polyline} weight={1} /> */}
			<Polyline pathOptions={blueOptions} positions={mtecLineDay1} weight={3} />
		</MapContainer>


	);
}

export default Maps;


/*
			<TileLayer

				attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
				url='http://{s}.google.com/vt/lyrs=p&x={x}&y={y}&z={z}'
			/>

*/