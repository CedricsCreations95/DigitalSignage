//	HYPE.documents["headlines"]

(function(){(function k(){function l(a,b,d){var c=!1;null==window[a]&&(null==window[b]?(window[b]=[],window[b].push(k),a=document.getElementsByTagName("head")[0],b=document.createElement("script"),c=h,false==!0&&(c=""),b.type="text/javascript",b.src=c+"/"+d,a.appendChild(b)):window[b].push(k),c=!0);return c}var h="headlines.hyperesources",c="headlines",e="headlines_hype_container";if(false==!1)try{for(var f=document.getElementsByTagName("script"),
a=0;a<f.length;a++){var b=f[a].src;if(null!=b&&-1!=b.indexOf("headlines_hype_generated_script.js")){h=b.substr(0,b.lastIndexOf("/"));break}}}catch(n){}if(false==!1&&(a=navigator.userAgent.match(/MSIE (\d+\.\d+)/),a=parseFloat(a&&a[1])||null,a=l("HYPE_518","HYPE_dtl_518",!0==(null!=a&&10>a||false==!0)?"HYPE-518.full.min.js":"HYPE-518.thin.min.js"),false==!0&&(a=a||l("HYPE_w_518","HYPE_wdtl_518","HYPE-518.waypoints.min.js")),a))return;
f=window.HYPE.documents;if(null!=f[c]){b=1;a=c;do c=""+a+"-"+b++;while(null!=f[c]);for(var d=document.getElementsByTagName("div"),b=!1,a=0;a<d.length;a++)if(d[a].id==e&&null==d[a].getAttribute("HYP_dn")){var b=1,g=e;do e=""+g+"-"+b++;while(null!=document.getElementById(e));d[a].id=e;b=!0;break}if(!1==b)return}b=[];b=[{name:"intialize",source:"function(hypeDocument, element, event) {\t\n\t\twindow.storyCount = 0;\n}",identifier:"7"},{name:"updateStory",source:"function(hypeDocument, element, event) {\n\tvar storyTitle = new Array();\n\tvar storyBody = new Array();\n\t\n\tstoryTitle[0] = \"Plan to eat healthy foods each week\";\n\tstoryBody[0] = \"Sit down and decide what you want to cook and eat for the week. This is a good time to assess the ingredients you have, and what you may need for specific meals. You should also consider the portion sizes of meals. If you make grilled chicken or barley salad, make extra and take it for lunch the next day.\";\n\n\tstoryTitle[1] = \"Always pick days when to cook or when to go shopping so you can get into a rountine\";\n\tstoryBody[1] = \"Pick a day to do your shopping and cooking for the week. Choose a day when you have time to do the grocery shopping. It\u2019s easier to go once per week, so you don\u2019t have to worry about ingredients or make multiple trips to the store throughout the week. Many past champions have chosen to do all shopping and cooking on Sunday.\";\n\n\tstoryTitle[2] = \"Dont Shop Hungry\";\n\tstoryBody[2] = \"Always eat a healthy snack before you head to the grocery store. If you shop while hungry, you are more likely to fall victim to unhealthy cravings, grabbing salty or sugary \u2018quick fix\u2019 snacks to curb your hunger.\";\n\t\n\tstoryTitle[3] = \"Shop around the perimeter of the store\";\n\tstoryBody[3] = \"A general rule of thumb is the majority of your food should come from the perimeter of the store. This is where fresh produce, fresh meat, and whole grains are.\";\n\t\n\tstoryTitle[4] = \"Wash, Prepare and store food\";\n\tstoryBody[4] = \"When you get back from the grocery store, the best thing you can do is immediately prep your food for the week. Wash your fruit and veggies, cut them into snack size pieces and put your food into snack bags for your mini-meals. This is also a good time to prep some of your meals, so you have a stress-free week of eating.\";\n\t\n\tstoryTitle[5] = \"Freeze your food\";\n\tstoryBody[5] = \"Freezing your food is a great way to relieve stress during weeks when you don\u2019t have a lot of time to prepare meals. When you have extra time, it is always a good idea to make extra food and freeze it in singe-serving portions that you can easily grab for lunch or dinner.\";\n\t\n\t\tvar numberOfStories = storyTitle.length;\n\t\n\thypeDocument.getElementById(\"textHeadline\").innerHTML = storyTitle[window.storyCount];\n\thypeDocument.getElementById(\"textStory\").innerHTML = storyBody[window.storyCount];\n\t\n\tif (window.storyCount == (numberOfStories - 1)) {\n\t\twindow.storyCount = 0;\n\t} else {\n\t\twindow.storyCount = window.storyCount + 1;\n\t}\n\n}",identifier:"8"}];d={};g={};for(a=0;a<b.length;a++)try{g[b[a].identifier]=b[a].name,d[b[a].name]=eval("(function(){return "+b[a].source+"})();")}catch(m){window.console&&window.console.log(m),
d[b[a].name]=function(){}}a=new HYPE_518(c,e,{},h,[],d,[{n:"Untitled Scene",o:"1",X:[0]}],[{A:{a:[{p:4,h:"7"}]},o:"3",p:"600px",x:0,cA:false,Z:128,Y:810,c:"#00F900",L:[],bY:1,d:810,U:{},T:{kTimelineDefaultIdentifier:{i:"kTimelineDefaultIdentifier",n:"Main Timeline",z:15,b:[],a:[{f:"c",y:0,z:1,i:"e",e:1,s:0,o:"16"},{f:"c",p:2,y:0.01,z:14.29,i:"ActionHandler",e:{a:[{b:"kTimelineDefaultIdentifier",p:3,z:false,symbolOid:"2"}]},s:{a:[{p:4,h:"8"}]},o:"kTimelineDefaultIdentifier"},{f:"c",y:0.01,z:0.29,i:"e",e:1,s:0,o:"15"},{f:"c",y:1,z:1,i:"b",e:20,s:135,o:"15"},{f:"c",y:1,z:11.06,i:"e",e:1,s:1,o:"15"},{f:"c",y:1,z:12,i:"e",e:1,s:1,o:"16"},{f:"c",y:2,z:2,i:"b",e:21,s:20,o:"15"},{f:"c",y:4,z:1,i:"b",e:20.5364,s:21,o:"15"},{f:"c",y:5,z:2,i:"b",e:19,s:20.5364,o:"15"},{f:"c",y:7,z:1.27,i:"b",e:21.1082,s:19,o:"15"},{f:"c",y:8.27,z:1.14,i:"b",e:20.865200000000002,s:21.1082,o:"15"},{f:"c",y:10.11,z:0.24,i:"b",e:21.166399999999999,s:20.865200000000002,o:"15"},{f:"c",y:11.05,z:0.25,i:"b",e:36,s:21.166399999999999,o:"15"},{f:"c",y:12,z:1,i:"b",e:127,s:36,o:"15"},{f:"c",y:12.06,z:0.09,i:"e",e:0,s:1,o:"15"},{y:12.15,i:"e",s:0,z:0,o:"15",f:"c"},{f:"c",y:13,z:1,i:"e",e:0,s:1,o:"16"},{y:13,i:"b",s:127,z:0,o:"15",f:"c"},{y:14,i:"e",s:0,z:0,o:"16",f:"c"},{f:"c",p:2,y:15,z:0,i:"ActionHandler",s:{a:[{b:"kTimelineDefaultIdentifier",p:3,z:false,symbolOid:"2"}]},o:"kTimelineDefaultIdentifier"}],f:30}},bZ:180,O:["15","16","17"],v:{"15":{G:"#000000",aU:8,c:794,d:95,aV:8,r:"inline",e:0,s:"Helvetica,Arial,Sans-Serif",t:18,Z:"break-word",i:"textStory",w:"the quick brown fox jumps over the lazy dog. the quick brown fox jumps over the lazy dog. the quick brown fox jumps over the lazy dog. the quick brown fox jumps over the lazy dog.<br>",j:"absolute",x:"visible",k:"div",y:"preserve",z:3,aS:8,aT:8,a:0,F:"center",b:135},"17":{c:808,d:126,I:"Solid",J:"Solid",K:"Solid",L:"Solid",M:5,N:5,A:"#000000",x:"visible",j:"absolute",B:"#000000",k:"div",O:5,C:"#000000",z:1,l:0,D:"#000000",m:"#009051",P:5,n:"#00F900",a:-4,b:-4},"16":{G:"#000000",aU:8,c:794,d:39,I:"None",aV:8,e:0,s:"Marion,'Hoefler Text',Baskerville,'Times New Roman',serif",J:"None",r:"inline",K:"None",t:18,L:"None",Z:"break-word",M:0,i:"textHeadline",w:"Headline Headline Headline <br>",N:0,j:"absolute",x:"visible",O:0,k:"div",y:"preserve",P:0,z:2,aS:8,aT:8,a:0,F:"center",b:0}}}],{},g,{},null,false,true,-1,true,true,false,true);f[c]=a.API;document.getElementById(e).setAttribute("HYP_dn",
c);a.z_o(this.body)})();})();
