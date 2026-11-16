(function(){
var b=document.querySelector('.burger'),n=document.getElementById('nav');
if(b&&n)b.addEventListener('click',function(){var o=n.classList.toggle('open');b.setAttribute('aria-expanded',o?'true':'false');b.setAttribute('aria-label',o?'Close menu':'Open menu');});
function $(i){return document.getElementById(i);}
var f=$('cform');
if(f)f.addEventListener('submit',function(e){e.preventDefault();var fm=$('fm');
 if($('website').value)return;
 if(!f.checkValidity()){fm.hidden=false;fm.textContent='Please add your name, a valid email address and a message, and tick the agreement box.';return;}
 var body='Name: '+$('name').value+'\nEmail: '+$('email').value+'\nTopic: '+$('topic').value+'\n\n'+$('message').value;
 location.href='mailto:'+f.getAttribute('data-to')+'?subject='+encodeURIComponent(f.getAttribute('data-brand')+': '+$('topic').value)+'&body='+encodeURIComponent(body);
 fm.hidden=false;fm.textContent='Your email app should open with the message ready to send. If nothing happens, write to us directly at '+f.getAttribute('data-to')+'.';});
var c=$('cookie'),k=null;try{k=localStorage.getItem('ck_'+location.hostname);}catch(e){}
if(c&&!k)c.classList.add('show');
if(c)c.querySelectorAll('button').forEach(function(bt){bt.addEventListener('click',function(){try{localStorage.setItem('ck_'+location.hostname,bt.getAttribute('data-cookie'));}catch(e){}c.classList.remove('show');});});
var y=$('year');if(y)y.textContent=new Date().getFullYear();
})();
(function(){function $(i){return document.getElementById(i);}
function on(a,f){a.forEach(function(x){x.addEventListener('input',f);x.addEventListener('change',f);});f();}
function row(a,b){return '<li><span>'+a+'</span><b>'+b+'</b></li>';}
var oo=$('of-o');if(oo){var ow=$('of-w');
 var F={work:['Column + third piece','Fine-knit top or shirt','Tailored trousers or a midi skirt','Loafers or low block heels'],weekend:['Fitted + loose','Plain T-shirt','Wide-leg jeans or relaxed chinos','Clean trainers'],dinner:['Plain + one statement','Dark top in a fluid fabric','Slim dark trousers or a slip skirt','Ankle boots or smart flats'],travel:['Fitted + loose','Soft jersey top','Stretch trousers with a proper waistband','Slip-on trainers'],interview:['Column + third piece','Crisp shirt in white or pale blue','Dark tailored trousers or skirt','Polished closed-toe shoes']};
 var L={hot:['Skip the layer; choose linen or light cotton','Roll sleeves, keep colours pale'],mild:['Unlined blazer, overshirt or light cardigan','One layer you can carry in your hand'],cold:['Wool coat over a jumper','Add a scarf in your accent colour'],wet:['Trench or waterproof shell','Choose shoes with a rubber sole and avoid suede']};
 on([oo,ow],function(){var f=F[oo.value],l=L[ow.value];$('of-r').innerHTML='<strong>'+f[0]+'</strong><ul>'+row('Top',f[1])+row('Bottom',f[2])+row('Shoes',f[3])+row('Layer',l[0])+'</ul><p>'+l[1]+'.</p>';});}
var sc=$('sf-c');if(sc){var sb=$('sf-b'),sw=$('sf-w'),sh=$('sf-h'),N=['XS','S','M','L','XL','XXL'];
 var T={w:{b:[84,89,95,102,110],w:[66,71,77,84,92],h:[90,95,101,108,116],uk:[6,10,12,16,20,24],eu:[34,38,40,44,48,52]},m:{b:[88,94,102,110,118],w:[73,79,87,95,104],h:[90,96,103,110,118],uk:[34,36,40,43,46,50],eu:[44,46,50,54,56,60]}};
 function idx(v,a){for(var i=0;i<a.length;i++)if(v<=a[i])return i;return a.length;}
 function n(e,d){var v=parseFloat(e.value);return isNaN(v)?d:v;}
 on([sc,sb,sw,sh],function(){var t=T[sc.value],ib=idx(n(sb,92),t.b),iw=idx(n(sw,76),t.w),ih=idx(n(sh,100),t.h),top=ib,bot=Math.max(iw,ih);
  var note=top===bot?'Your measurements are consistent, so one size should work for most garments.':'Your top and bottom sizes differ, which is very common. Buy separates in each size, and fit dresses to the larger measurement.';
  $('sf-r').innerHTML='<strong>Tops '+N[top]+' &middot; Bottoms '+N[bot]+'</strong><ul>'+row('Chest or bust',N[ib])+row('Waist',N[iw])+row('Hips',N[ih])+row(sc.value==='w'?'Approx. UK / EU top':'Approx. chest in. / EU',t.uk[top]+' / '+t.eu[top])+'</ul><p>'+note+' Always confirm against the brand&rsquo;s own chart.</p>';});}
var pn=$('tp-n');if(pn){var pl=$('tp-l'),pc=$('tp-c');
 on([pn,pl,pc],function(){var nights=Math.min(30,Math.max(1,parseInt(pn.value,10)||1)),days=nights+1,wash=pl.value==='1',c=pc.value,cover=wash?Math.min(days,5):days;
  var tops=Math.min(9,Math.max(2,Math.ceil(cover*0.75))),bottoms=Math.min(5,Math.max(1,Math.ceil(tops/2))),layers=c==='warm'?1:c==='cool'?3:2,shoes=nights>7||c==='mixed'?3:2,under=Math.min(cover,8)+1;
  $('tp-r').innerHTML='<strong>'+(tops+bottoms+layers+shoes)+' main pieces</strong><ul>'+row('Tops',tops)+row('Bottoms',bottoms)+row('Layers',layers)+row('Pairs of shoes',shoes)+row('Underwear and socks',under+' sets')+'</ul><p>'+(wash?'With laundry you only need about five days of clothes, whatever the length of the trip.':nights>8?'For a long trip without laundry, plan to hand-wash basics once to stay within these numbers.':'Wear the bulkiest shoes and layer on the journey.')+(c==='warm'?' Add swimwear and a sun hat.':c==='cool'?' Include one warm mid layer and a waterproof.':' Pack layers you can add or remove through the day.')+'</p>';});}
})();
