vue = new Vue({
	el:'#app',
	data:{
		items:[
			{url:'cs.jpg',steamId:'730'},
			{url:'gta.jpg',steamId:'271590'},
			{url:'mhw.jpg',steamId:'582010'},
			{url:'sjmr.jpg',steamId:'703700'},
			{url:'mm.jpg',steamId:'944020'},
			{url:'m4.jpg',steamId:'944020'},
			{url:'mnrs.jpg',steamId:'944020'},
			{url:'rx.jpg',steamId:'944020'},
			{url:'sh2.jpg',steamId:'944020'},
			{url:'apex.jpg',steamId:'944020'},
			{url:'gmjy.jpg',steamId:'944020'},
			{url:'ylrz.jpg',steamId:'944020'},
			{url:'kz.jpg',steamId:'944020'},
			{url:'tdr.jpg',steamId:'944020'},
			{url:'stpq.jpg',steamId:'944020'},
			{url:'yl.jpg',steamId:'944020'},
			],
			steamUrl:"http://store.steampowered.com/app/",
			isrt:'2',
			obj:{
				output:'',
				 isEnd: false,
				        speed: 80,
				        singleBack: false,
				        sleep: 800,
				        type: 'rollback',
				        backSpeed: 40,
				        sentencePause: false
			}
	},
	
	methods:{
		gameimgclick(steamId){
			window.open(this.steamUrl+steamId);
		
		},
		onclickTitleimg(){
			window.open("https://steamcommunity.com/profiles/76561198878347020/");
		},
		fetchData() {
		     fetch('https://v1.hitokoto.cn?c=a&c=b&c=c')
		       .then(res => {
		           return res.json()
		       })
		       .then(({ hitokoto,from }) => {
		           this.initTyped(hitokoto+' — —「'+from+'」')
		           })
		   },
		   initTyped(input) {
		     console.log(input)
		     const typed = new EasyTyper(this.obj, input,this.init)
		   },
		   init(){
		         this.fetchData()
		    },
			gyw(id){
				if ((navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i))) {
				   this.$notify.error({
				            title: '',
				            message: '暂不支持手机端哦'
				          });
				  } else {
				    this.isrt=id;
				  }
				 
			}
	},
	mounted(){
		this.init();
	}
})