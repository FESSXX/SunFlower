vue = new Vue({
	el:'#app',
	data:{
		imgs:["cs.jpg","gta.jpg","m1.jpg","g2.jpg",
		"mhw.jpg","sjmr.jpg","mm.jpg","m4.jpg","mnrs.jpg",
		"rx.jpg","sh2.jpg","apex.jpg","gmjy.jpg","sjmr.jpg",
		"ylrz.jpg","kz.jpg","tdr.jpg","stpq.jpg","yl.jpg"]
	},
	methods:{
		gameimgclick(){
			const h = this.$createElement;
			        this.$notify({
			          title: '小提示',
			          message: 
			            h('i', { style: "background-color: #74EBD5;background-image: linear-gradient(90deg, #74EBD5 0%, #9FACE6 100%);-webkit-background-clip:text;color: transparent;font-size: 20px;	"}, '暂未提供内容 ~')
			         
			        });
			      
		}
	}
})