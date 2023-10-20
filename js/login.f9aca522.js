"use strict";(self["webpackChunkmyapp"]=self["webpackChunkmyapp"]||[]).push([[535],{5488:function(e,t,i){i.r(t),i.d(t,{default:function(){return H}});var s=function(){var e=this,t=e._self._c;return t("div",{staticClass:"login_box"},[t("van-nav-bar",{attrs:{title:e.isLogin?"登录":"注册","left-arrow":""},on:{"click-left":e.backFn},scopedSlots:e._u([{key:"right",fn:function(){return[t("van-icon",{attrs:{name:"ellipsis"}})]},proxy:!0}])}),e._m(0),t("van-form",{staticClass:"form_box",on:{submit:e.onSubmit}},[t("van-field",{attrs:{name:"用户名",label:"用户名",placeholder:"用户名",rules:[{required:!0,message:"请填写用户名"}]},model:{value:e.username,callback:function(t){e.username=t},expression:"username"}}),t("van-field",{attrs:{type:"password",name:"密码",label:"密码",placeholder:"密码",rules:[{required:!0,message:"请填写密码"}]},model:{value:e.password,callback:function(t){e.password=t},expression:"password"}}),t("Verify",{ref:"veri",attrs:{type:2,showButton:!1},on:{success:function(t){return e.alertFn(1)},error:function(t){return e.alertFn(2)}}}),t("p",{on:{click:function(t){e.isLogin=!e.isLogin}}},[e._v(" "+e._s(e.isLogin?"立即注册":"已有账号,立即登录")+" ")]),t("div",{staticStyle:{margin:"16px"}},[t("van-button",{attrs:{round:"",block:"",type:"info","native-type":"submit"}},[e._v(e._s(e.isLogin?"登录":"注册"))])],1)],1)],1)},o=[function(){var e=this,t=e._self._c;return t("div",{staticClass:"tupian"},[t("img",{attrs:{src:"http://s.weituibao.com/1582958061265/mlogo.png",alt:""}})])}],r=function(){var e=this,t=e._self._c;return t("div",[e.componentType?t(e.componentType,{ref:"instance",tag:"components",attrs:{type:e.verifyType,figure:e.figure,arith:e.arith,width:e.width,height:e.height,fontSize:e.fontSize,codeLength:e.codeLength,mode:e.mode,vOffset:e.vOffset,vSpace:e.vSpace,explain:e.explain,imgUrl:e.imgUrl,imgName:e.imgName,showButton:e.showButton,imgSize:e.imgSize,blockSize:e.blockSize,barSize:e.barSize,defaultNum:e.defaultNum,checkNum:e.checkNum}}):e._e(),t("div",{directives:[{name:"show",rawName:"v-show",value:e.showButton,expression:"showButton"}],staticStyle:{width:"0",height:"0"},on:{click:e.checkCode}},[e._t("check",(function(){return[t("button",{staticClass:"verify-btn"},[e._v(e._s(e.i18n("ok")))])]}))],2)],1)},a=[],n=function(){var e=this,t=e._self._c;return t("div",{staticClass:"cerify-code-panel"},[t("div",{staticClass:"verify-code",style:{width:e.width,height:e.height,"line-height":e.height,"font-size":e.fontSize,"background-color":e.containerBackgroundColor,color:e.containerColor},on:{click:e.setCode}},e._l(e.codeShow,(function(i){return t("span",{style:i.style},[e._v(" "+e._s(i.char||i)+" ")])})),0),t("div",{staticClass:"verify-code-area",style:{width:e.width}},[t("div",{staticClass:"verify-input-area"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.inputValue,expression:"inputValue"}],staticClass:"varify-input-code",attrs:{type:"text"},domProps:{value:e.inputValue},on:{input:function(t){t.target.composing||(e.inputValue=t.target.value)}}})]),t("div",{staticClass:"verify-change-area",on:{click:e.setCode}},[t("a",{staticClass:"verify-change-code"},[e._v("换一张")])])])])},h=[];function l(e){var t,i,s,o,r=e.$el.parentNode.offsetWidth||window.offsetWidth,a=e.$el.parentNode.offsetHeight||window.offsetHeight;return t=-1!=e.imgSize.width.indexOf("%")?parseInt(this.imgSize.width)/100*r+"px":this.imgSize.width,i=-1!=e.imgSize.height.indexOf("%")?parseInt(this.imgSize.height)/100*a+"px":this.imgSize.height,s=-1!=e.barSize.width.indexOf("%")?parseInt(this.barSize.width)/100*r+"px":this.barSize.width,o=-1!=e.barSize.height.indexOf("%")?parseInt(this.barSize.height)/100*a+"px":this.barSize.height,{imgWidth:t,imgHeight:i,barWidth:s,barHeight:o}}const c=[1,2,3,4,5,6,7,8,9,"a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"],f=["#fffff0","#f0ffff","#f0fff0","#fff0f0"],d=["#FF0033","#006699","#993366","#FF9900","#66CC66","#FF33CC"];var p={name:"VerifyCode",props:{type:{type:String,default:"1"},figure:{type:Number,default:100},arith:{type:Number,default:0},width:{type:String,default:"200px"},height:{type:String,default:"60px"},fontSize:{type:String,default:"30px"},codeLength:{type:Number,default:6}},data(){return{isEnd:!1,inputValue:"",containerBackgroundColor:"#fff",containerColor:"#fff",codeChose:"",codeShow:[]}},methods:{init(){this.setCode(),this.$parent.$emit("ready",this)},setCode(){if(0==this.isEnd)if(this.containerBackgroundColor=f[Math.floor(3*Math.random())],this.containerColor=d[Math.floor(5*Math.random())],this.inputValue="",this.codeShow=[],this.codeChose="","1"===this.type)for(var e=0;e<this.codeLength;e++){var t=Math.floor(52*Math.random()),i=t%2==0?"font-style:italic;margin-right: 10px":"font-weight:bolder";i+=1==Math.floor(2*Math.random())?"font-weight:bolder":"",this.codeChose+=c[t],this.codeShow.push({style:i,char:c[t]})}else if("2"===this.type){var s=Math.floor(Math.random()*this.figure),o=Math.floor(Math.random()*this.figure);let e="";if(0==this.arith)var r=Math.floor(3*Math.random());switch(r){case 1:this.codeChose=parseInt(s)+parseInt(o),e=s+" + "+o+" = ?";break;case 2:if(parseInt(s)<parseInt(o)){var a=s;s=o,o=a}this.codeChose=parseInt(s)-parseInt(o),e=s+" - "+o+" = ?";break;default:this.codeChose=parseInt(s)*parseInt(o),e=s+" × "+o+" = ?";break}this.codeShow=e.split("")}},checkCode(){let e,t;"1"===this.type?(e=this.inputValue.toUpperCase(),t=this.codeChose.toUpperCase()):(e=this.inputValue,t=this.codeChose),console.log(e),console.log(t),console.log(e==t),e==t?(this.isEnd=!0,this.$parent.$emit("success",this)):(this.$parent.$emit("error",this),this.setCode())},refresh(){this.isEnd=!1,this.inputValue="",this.setCode()}},watch:{type:{immediate:!0,handler(){this.init()}}},mounted(){this.$el.onselectstart=function(){return!1}},i18n:{messages:{"en-US":{},"zh-CN":{}}}},u=p,m=i(1001),g=(0,m.Z)(u,n,h,!1,null,null,null),v=g.exports,y=function(){var e=this,t=e._self._c;return t("div",{staticStyle:{position:"relative"},on:{mouseover:function(t){e.showImage=!0},mouseout:function(t){e.showImage=!0}}},["2"===e.type?t("div",{directives:[{name:"show",rawName:"v-show",value:e.showImage,expression:"showImage"}],staticClass:"verify-img-out",style:{display:"pop"===e.mode?"none":void 0,position:"pop"===e.mode?"absolute":"relative",height:parseInt(e.setSize.imgHeight)+e.vSpace+"px",bottom:"pop"===e.mode?"42px":void 0},on:{mouseover:function(t){e.showImage=!0},mouseout:function(t){e.showImage=!0}}},[t("div",{staticClass:"verify-img-panel",style:{width:e.setSize.imgWidth,height:e.setSize.imgHeight,background:"url("+e.imgUrl+e.imgName[e.imgRand]+")","background-size":e.setSize.imgWidth+" "+e.setSize.imgHeight}},[t("div",{directives:[{name:"show",rawName:"v-show",value:e.showRefresh,expression:"showRefresh"}],staticClass:"verify-refresh",on:{click:e.refresh}},[t("i",{staticClass:"iconfont icon-refresh"})]),t("div",{staticClass:"verify-gap",style:{width:e.blockSize.width,height:e.blockSize.height,top:e.top+"px",left:e.left+"px"}})])]):e._e(),t("div",{staticClass:"verify-bar-area",style:{width:e.setSize.barWidth,height:e.barSize.height,"line-height":e.barSize.height}},[t("span",{staticClass:"verify-msg",domProps:{textContent:e._s(e.text)}}),t("div",{staticClass:"verify-left-bar",style:{width:void 0!==e.leftBarWidth?e.leftBarWidth:e.barSize.height,height:e.barSize.height,"border-color":e.leftBarBorderColor,transaction:e.transitionWidth}},[t("span",{staticClass:"verify-msg",domProps:{textContent:e._s(e.finishText)}}),t("div",{staticClass:"verify-move-block",style:{width:e.barSize.height,height:e.barSize.height,"background-color":e.moveBlockBackgroundColor,left:e.moveBlockLeft,transition:e.transitionLeft},on:{touchstart:e.start,mousedown:e.start}},[t("i",{class:["verify-icon iconfont",e.iconClass],style:{color:e.iconColor}}),"2"===e.type?t("div",{directives:[{name:"show",rawName:"v-show",value:"pop"!==e.mode&&e.showImage,expression:"mode !== 'pop' && showImage"}],staticClass:"verify-sub-block",style:{width:e.blockSize.width,height:e.blockSize.height,top:"-"+(parseInt(e.setSize.imgHeight)-e.top+e.vSpace)+"px","background-image":"url("+e.imgUrl+e.imgName[this.imgRand]+")","background-size":e.setSize.imgWidth+" "+e.setSize.imgHeight,"background-position-y":"-"+e.top+"px","background-position-x":"-"+e.left+"px"}}):e._e()])])])])},b=[],S={name:"VerifySlide",props:{type:{type:String,default:"1"},mode:{type:String,default:"fixed"},vOffset:{type:Number,default:5},vSpace:{type:Number,default:5},explain:{type:String,default:"向右滑动完成验证"},imgUrl:{type:String,default:"http://via.placeholder.com/"},imgName:{type:Array,default(){return["350x150","350x450"]}},imgSize:{type:Object,default(){return{width:"400px",height:"200px"}}},blockSize:{type:Object,default(){return{width:"50px",height:"50px"}}},barSize:{type:Object,default(){return{width:"400px",height:"40px"}}}},data(){return{imgRand:0,text:"",finishText:"",setSize:{imgHeight:0,imgWidth:0,barHeight:0,barWidth:0},top:0,left:0,showImage:!0,moveBlockLeft:void 0,leftBarWidth:void 0,moveBlockBackgroundColor:void 0,leftBarBorderColor:"#ddd",iconColor:void 0,iconClass:"icon-right",status:!1,isEnd:!1,showRefresh:!0,transitionLeft:"",transitionWidth:""}},computed:{barArea(){return this.$el.querySelector(".verify-bar-area")},resetSize(){return l}},methods:{init(){this.text=this.explain,this.imgRand=Math.floor(Math.random()*this.imgName.length),this.$nextTick((()=>{let e=this.resetSize(this);for(let t in e)this.$set(this.setSize,t,e[t]);this.randSet(),this.$parent.$emit("ready",this)}));var e=this;window.removeEventListener("touchmove",(function(t){e.move(t)})),window.removeEventListener("mousemove",(function(t){e.move(t)})),window.removeEventListener("touchend",(function(){e.end()})),window.removeEventListener("mouseup",(function(){e.end()})),window.addEventListener("touchmove",(function(t){e.move(t)})),window.addEventListener("mousemove",(function(t){e.move(t)})),window.addEventListener("touchend",(function(){e.end()})),window.addEventListener("mouseup",(function(){e.end()}))},start:function(e){0==this.isEnd&&(this.text="",this.moveBlockBackgroundColor="#337ab7",this.leftBarBorderColor="#337AB7",this.iconColor="#fff",e.stopPropagation(),this.status=!0)},move:function(e){if(this.status&&0==this.isEnd){if(e.touches)t=e.touches[0].pageX;else var t=e.clientX;var i=this.getLeft(this.barArea),s=t-i;"1"!==this.type?s>=this.barArea.offsetWidth-parseInt(parseInt(this.blockSize.width)/2)-2&&(s=this.barArea.offsetWidth-parseInt(parseInt(this.blockSize.width)/2)-2):s>=this.barArea.offsetWidth-parseInt(parseInt(this.barSize.height)/2)+3?(this.finishText="松开验证",s=this.barArea.offsetWidth-parseInt(parseInt(this.barSize.height)/2)+3):this.finishText="",s<=0&&(s=parseInt(parseInt(this.blockSize.width)/2)),this.moveBlockLeft=s-parseInt(parseInt(this.blockSize.width)/2)+"px",this.leftBarWidth=s-parseInt(parseInt(this.blockSize.width)/2)+"px"}},end:function(){var e=this;if(this.status&&0==this.isEnd){if("1"!==this.type){var t=parseInt(this.vOffset);parseInt(this.left)>=parseInt((this.moveBlockLeft||"").replace("px",""))-t&&parseInt(this.left)<=parseInt((this.moveBlockLeft||"").replace("px",""))+t?(this.moveBlockBackgroundColor="#5cb85c",this.leftBarBorderColor="#5cb85c",this.iconColor="#fff",this.iconClass="icon-check",this.showRefresh=!1,this.isEnd=!0,this.$parent.$emit("success",this)):(this.moveBlockBackgroundColor="#d9534f",this.leftBarBorderColor="#d9534f",this.iconColor="#fff",this.iconClass="icon-close",setTimeout((function(){e.refresh()}),400),this.$parent.$emit("error",this))}else parseInt((this.moveBlockLeft||"").replace("px",""))>=parseInt(this.setSize.barWidth)-parseInt(this.barSize.height)-parseInt(this.vOffset)?(this.moveBlockBackgroundColor="#5cb85c",this.leftBarBorderColor="#5cb85c",this.iconColor="#fff",this.iconClass="icon-check",this.showRefresh=!1,this.finishText="验证成功",this.isEnd=!0,this.$parent.$emit("success",this)):(this.finishText="",this.moveBlockBackgroundColor="#d9534f",this.leftBarBorderColor="#d9534f",this.iconColor="#fff",this.iconClass="icon-close",this.isEnd=!0,setTimeout((function(){e.finishText="",e.refresh(),e.isEnd=!1}),400),this.$parent.$emit("error",this));this.status=!1}},randSet:function(){var e=Math.floor(9*Math.random()+1),t=Math.floor(9*Math.random()+1),i=e*parseInt(this.setSize.imgHeight)/15+.1*parseInt(this.setSize.imgHeight),s=t*parseInt(this.setSize.imgWidth)/15+.1*parseInt(this.setSize.imgWidth);this.top=i,this.left=s},refresh:function(){this.showRefresh=!0,this.finishText="",this.transitionLeft="left .3s",this.moveBlockLeft=0,this.leftBarWidth=void 0,this.transitionWidth="width .3s",this.leftBarBorderColor="#ddd",this.moveBlockBackgroundColor="#fff",this.iconColor="#000",this.iconClass="icon-right",this.randSet(),this.imgRand=Math.floor(Math.random()*this.imgName.length),this.isEnd=!1,setTimeout((()=>{this.transitionWidth="",this.transitionLeft="",this.text=this.explain}),300)},getLeft:function(e){let t=0;while(e)t+=e.offsetLeft,e=e.offsetParent;let i=t;return i}},watch:{type:{immediate:!0,handler(){this.init()}}},mounted(){this.$el.onselectstart=function(){return!1}},i18n:{messages:{"en-US":{},"zh-CN":{}}}},w=S,C=(0,m.Z)(w,y,b,!1,null,null,null),k=C.exports,x=function(){var e=this,t=e._self._c;return t("div",{staticStyle:{position:"relative"},on:{mouseover:function(t){"pop"===e.mode&&(e.showImage=!0)},mouseout:function(t){"pop"===e.mode&&(e.showImage=!1)}}},[t("div",{directives:[{name:"show",rawName:"v-show",value:e.showImage,expression:"showImage"}],staticClass:"verify-img-out",style:"pop"===e.mode?{display:"none",position:"absolute",bottom:"42px",height:parseInt(e.setSize.imgHeight)+e.vSpace+"px"}:{position:"relative",height:parseInt(e.setSize.imgHeight)+e.vSpace+"px"},on:{mouseover:function(t){"pop"===e.mode&&(e.showImage=!0)},mouseout:function(t){"pop"===e.mode&&(e.showImage=!1)}}},[t("div",{staticClass:"verify-img-panel",style:{width:e.setSize.imgWidth,height:e.setSize.imgHeight,"background-size":e.setSize.imgWidth+" "+e.setSize.imgHeight,"margin-bottom":e.vSpace+"px"}},[t("div",{directives:[{name:"show",rawName:"v-show",value:e.showRefresh,expression:"showRefresh"}],staticClass:"verify-refresh",staticStyle:{"z-index":"3"},on:{click:e.refresh}},[t("i",{staticClass:"iconfont icon-refresh"})]),t("canvas",{ref:"canvas",attrs:{width:e.setSize.imgWidth,height:e.setSize.imgHeight},on:{click:function(t){e.bindingClick&&e.canvasClick(t)}}}),e._l(e.tempPoints,(function(i,s){return t("div",{key:s,staticClass:"point-area",style:{"background-color":"#1abd6c",color:"#fff","z-index":9999,width:"30px",height:"30px","text-align":"center","line-height":"30px","border-radius":"50%",position:"absolute",top:parseInt(i.y-10)+"px",left:parseInt(i.x-10)+"px"}},[e._v(" "+e._s(s+1)+" ")])}))],2)]),t("div",{staticClass:"verify-bar-area",style:{width:this.barSize.width,height:this.barSize.height,color:this.barAreaColor,"border-color":this.barAreaBorderColor,"line-height":this.barSize.height}},[t("span",{staticClass:"verify-msg"},[e._v(e._s(e.text))])])])},z=[];var I={name:"VerifyPoints",props:{mode:{type:String,default:"fixed"},defaultNum:{type:Number,default:4},checkNum:{type:Number,default:3},vSpace:{type:Number,default:5},imgUrl:{type:String,default:"http://via.placeholder.com/"},imgName:{type:Array,default(){return["350x150","350x450"]}},imgSize:{type:Object,default(){return{width:"400px",height:"200px"}}},barSize:{type:Object,default(){return{width:"400px",height:"40px"}}}},data(){return{fontPos:[],checkPosArr:[],num:1,imgRand:0,setSize:{imgHeight:0,imgWidth:0,barHeight:0,barWidth:0},showImage:!0,tempPoints:[],text:"",barAreaColor:void 0,barAreaBorderColor:void 0,showRefresh:!0,bindingClick:!0}},computed:{resetSize(){return l}},methods:{init(){this.fontPos.splice(0,this.fontPos.length),this.checkPosArr.splice(0,this.checkPosArr.length),this.num=1,this.imgRand=Math.floor(Math.random()*this.imgName.length),this.$nextTick((()=>{this.setSize=this.resetSize(this),this.refresh(),this.$parent.$emit("ready",this)}))},canvasClick(e){this.checkPosArr.push(this.getMousePos(this.$refs.canvas,e)),this.num==this.checkNum&&(this.num=this.createPoint(this.getMousePos(this.$refs.canvas,e)),setTimeout((()=>{var e=this.comparePos(this.fontPos,this.checkPosArr);0==e?(this.$parent.$emit("error",this),this.barAreaColor="#d9534f",this.barAreaBorderColor="#d9534f",this.text="验证失败",setTimeout((()=>{this.refresh()}),400)):(this.barAreaColor="#4cae4c",this.barAreaBorderColor="#5cb85c",this.text="验证成功",this.showRefresh=!1,this.bindingClick=!1,this.$parent.$emit("success",this))}),400)),this.num<this.checkNum&&(this.num=this.createPoint(this.getMousePos(this.$refs.canvas,e)))},drawImg:function(e,t){var i=this.$refs.canvas,s=i.getContext("2d");s.drawImage(t,0,0,parseInt(this.setSize.imgWidth),parseInt(this.setSize.imgHeight));for(var o=["italic small-caps bold 20px microsoft yahei","small-caps normal 25px arial","34px microsoft yahei"],r="天地玄黄宇宙洪荒日月盈昃辰宿列张寒来暑往秋收冬藏闰余成岁律吕调阳云腾致雨露结为霜金生丽水玉出昆冈剑号巨阙珠称夜光果珍李柰菜重芥姜海咸河淡鳞潜羽翔龙师火帝鸟官人皇始制文字乃服衣裳推位让国有虞陶唐吊民伐罪周发殷汤坐朝问道垂拱平章爱育黎首臣伏戎羌遐迩体率宾归王",a=[],n=Math.floor(parseInt(this.setSize.imgWidth)/(parseInt(this.defaultNum)+1)),h="",l=Math.floor(5*Math.random()),c=1;c<=this.defaultNum;c++){if(a[c-1]=this.getChars(r,a),h=Math.floor(3*Math.random()),s.font=o[h],s.fillStyle=d[l],1==Math.floor(2*Math.random()))var f=Math.floor(parseInt(this.setSize.imgHeight)/2)+20*h+20;else f=Math.floor(parseInt(this.setSize.imgHeight)/2)-20*h;s.fillText(a[c-1],n*c,f),this.fontPos[c-1]={char:a[c-1],x:n*c,y:f}}for(c=0;c<this.defaultNum-this.checkNum;c++)this.shuffle(this.fontPos).pop();var p="";for(c=0;c<this.fontPos.length;c++)p+=this.fontPos[c].char+",";return this.text="请顺序点击【"+p.substring(0,p.length-1)+"】",this.fontPos},getMousePos:function(e,t){var i=t.offsetX-5,s=t.offsetY-5;return{x:i,y:s}},getChars:function(e,t){var i=parseInt(Math.floor(Math.random()*e.length));i>0&&(i-=1);var s=e.charAt(i);return-1==t.indexOf(s)?s:this.getChars(e,t)},shuffle:function(e){var t,i,s=e.length;while(s)t=Math.random()*s-->>>0,i=e[s],e[s]=e[t],e[t]=i;return e},createPoint:function(e){return this.tempPoints.push(Object.assign({},e)),++this.num},comparePos:function(e,t){for(var i=!0,s=0;s<e.length;s++)if(!(parseInt(t[s].x)+40>e[s].x&&parseInt(t[s].x)-40<e[s].x&&parseInt(t[s].y)+40>e[s].y&&parseInt(t[s].y)-40<e[s].y)){i=!1;break}return i},refresh:function(){this.tempPoints.splice(0,this.tempPoints.length),this.barAreaColor="#000",this.barAreaBorderColor="#ddd",this.bindingClick=!0,this.fontPos.splice(0,this.fontPos.length),this.checkPosArr.splice(0,this.checkPosArr.length),this.num=1,this.imgRand=Math.floor(Math.random()*this.imgName.length);var e=new Image;e.src=this.imgUrl+this.imgName[this.imgRand];var t=this;e.onload=function(e){t.$nextTick((()=>{t.fontPos=t.drawImg(t.$el,this)}))},this.text="验证失败",this.showRefresh=!0}},watch:{type:{immediate:!0,handler(){this.init()}}},mounted(){this.$el.onselectstart=function(){return!1}},i18n:{messages:{"en-US":{},"zh-CN":{}}}},B=I,N=(0,m.Z)(B,x,z,!1,null,null,null),$=N.exports,T={name:"Vue2Verify",props:{locale:{require:!1,type:String,default(){if(navigator.language)var e=navigator.language;else e=navigator.browserLanguage;return e}},type:{type:String|Number,require:!1,default:"picture"},figure:{type:Number},arith:{type:Number},width:{type:String},height:{type:String},fontSize:{type:String},codeLength:{type:Number},mode:{type:String},vOffset:{type:Number},vSpace:{type:Number},explain:{type:String},imgUrl:{type:String},imgName:{type:Array},imgSize:{type:Object},blockSize:{type:Object},barSize:{type:Object},defaultNum:{type:Number},checkNum:{type:Number},showButton:{type:Boolean,default:!0}},data(){return{verifyType:void 0,componentType:void 0}},methods:{i18n(e){if(this.$t)return this.$t(e);{let t=this.$options.i18n.messages[this.locale]||this.$options.i18n.messages["en-US"];return t[e]}},checkCode(){this.instance.checkCode&&this.instance.checkCode()},refresh(){this.instance.refresh&&this.instance.refresh()}},computed:{instance(){return this.$refs.instance||{}}},watch:{type:{immediate:!0,handler(e){switch(e.toString()){case"picture":this.verifyType="1",this.componentType="VerifyCode";break;case"1":this.verifyType="1",this.componentType="VerifyCode";break;case"compute":this.verifyType="2",this.componentType="VerifyCode";break;case"2":this.verifyType="2",this.componentType="VerifyCode";break;case"slide":this.verifyType="1",this.componentType="VerifySlide";break;case"3":this.verifyType="1",this.componentType="VerifySlide";break;case"puzzle":this.verifyType="2",this.componentType="VerifySlide";break;case"4":this.verifyType="2",this.componentType="VerifySlide";break;case"pick":this.verifyType="",this.componentType="VerifyPoints";break;case"5":this.verifyType="",this.componentType="VerifyPoints";break;default:this.verifyType=void 0,this.componentType=void 0,console.error("Unsupported Type:"+e)}}}},components:{VerifyCode:v,VerifySlide:k,VerifyPoints:$},i18n:{messages:{"en-US":{ok:"ok"},"zh-CN":{ok:"确定"}}}},M=T,P=(0,m.Z)(M,r,a,!1,null,null,null),L=P.exports,_=i(9547),W={name:"Login",components:{Verify:L},data(){return{username:"",password:"",flag:!1,isLogin:!0}},methods:{backFn(){this.$router.back()},alertFn(e){this.flag=1==e},onSubmit(){this.$refs.veri.checkCode(),this.flag?this.isLogin?((0,_.x4)(this.username,this.password).then((e=>{200==e.resultCode&&(localStorage.setItem("xftoken",e.data),1==this.$route.query.needback?this.$router.back():this.$router.replace("/home"))})),console.log("登录....")):(console.log("注册...."),(0,_.z2)(this.username,this.password).then((e=>{200==e.resultCode&&(this.isLogin=!0)}))):this.$refs.veri.refresh()}},watch:{isLogin(){this.username="",this.password="",this.$refs.veri.refresh()}}},V=W,A=(0,m.Z)(V,s,o,!1,null,"6405ffca",null),H=A.exports}}]);
//# sourceMappingURL=login.f9aca522.js.map