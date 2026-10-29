/* AS Tech Solution PK — visual effects & automation (V2, organised) */

/* ===== effects part 2 (was inline patch v2) ===== */

/* ===== v10: royal luxury 3D ===== */
(()=>{
const q=s=>document.querySelector(s),rm=matchMedia('(prefers-reduced-motion:reduce)').matches;
const lg=q('.logo img'),il=q('#intrologo');if(lg&&il)il.src=lg.src;
if(rm)return;
document.querySelectorAll('.hero').forEach(h=>{const d=document.createElement('div');d.className='dust';d.setAttribute('aria-hidden','true');
 d.innerHTML=Array.from({length:22},(_,i)=>'<i style="left:'+((i*37)%100)+'%;--s:'+(2+i%4)+'px;--t:'+(9+(i*7)%9)+'s;--dl:'+(-(i*1.3))+'s;--dx:'+((i%2?1:-1)*(10+i%5*8))+'px"></i>').join('');h.appendChild(d)});
if(matchMedia('(hover:hover)').matches){
 document.addEventListener('mousemove',e=>{const b=e.target.closest&&e.target.closest('.btn');if(!b)return;const r=b.getBoundingClientRect(),x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;
  b.style.transform='perspective(500px) translateY(-3px) rotateX('+(-y*14).toFixed(1)+'deg) rotateY('+(x*18).toFixed(1)+'deg)'});
 document.addEventListener('mouseout',e=>{const b=e.target.closest&&e.target.closest('.btn');if(b)b.style.transform=''})}
})();


/* ===== effects part 3 (was inline patch v3) ===== */

/* ===== v11: automation ===== */
(()=>{
const $$=s=>[...document.querySelectorAll(s)],rm=matchMedia('(prefers-reduced-motion:reduce)').matches;
/* rotating services line */
/* gyroscope in CTAs */
$$('.cta').forEach(c=>c.insertAdjacentHTML('afterbegin','<div class="gyw" aria-hidden="true"><div class="gyro"><i></i><i></i><i></i><i></i></div></div>'));
/* title entrance */
const tio=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('go');tio.unobserve(e.target)}}),{threshold:.3});
if(!rm)$$('.sh').forEach(s=>tio.observe(s));
/* periodic card light sweep */
if(!rm)setInterval(()=>{if(document.hidden)return;const vh=innerHeight;
 $$('.view.on .card').filter(c=>{const r=c.getBoundingClientRect();return r.bottom>0&&r.top<vh}).slice(0,8).forEach((c,i)=>setTimeout(()=>{c.classList.add('shine');setTimeout(()=>c.classList.remove('shine'),1600)},i*140))},3600);
/* auto tour */
const btn=document.createElement('button');btn.className='tour';btn.type='button';btn.textContent='▶ Auto Tour';
const tourHost=document.querySelector('#ft .fbar');(tourHost||document.body).appendChild(btn);
const pages=['home','about','services','careers','blog','contact'];let tr=null,si=0;
const stop=()=>{clearTimeout(tr);tr=null;btn.textContent='▶ Auto Tour';btn.classList.remove('on')};
const step=()=>{const S=$$('.view.on section');
 if(si>=S.length){const k=Math.max(0,pages.indexOf((location.hash||'#home').slice(1)));if(k>=pages.length-1){stop();scrollTo({top:0,behavior:'smooth'});return}location.hash='#'+pages[k+1];si=0;tr=setTimeout(step,1200);return}
 const s=S[si++];scrollTo({top:s.getBoundingClientRect().top+scrollY-70,behavior:'smooth'});tr=setTimeout(step,3400)};
btn.onclick=()=>{if(tr){stop();return}btn.textContent='■ Stop Tour';btn.classList.add('on');si=0;if((location.hash||'#home')!=='#home')location.hash='#home';scrollTo({top:0});tr=setTimeout(step,900)};
['wheel','touchstart','keydown','mousedown'].forEach(t=>addEventListener(t,e=>{if(tr&&!(e.target.closest&&e.target.closest('.tour')))stop()},{passive:true}));
})();


/* ===== effects part 4 (was inline patch v4) ===== */

/* ===== v13: amethyst automation ===== */
(()=>{
const rm=matchMedia('(prefers-reduced-motion:reduce)').matches;
if(rm)return;
document.querySelectorAll('.hero').forEach(h=>h.insertAdjacentHTML('afterbegin','<div class="aur" aria-hidden="true"><i></i><i></i><i></i></div>'));
const tun=document.createElement('div');tun.id='tun';tun.setAttribute('aria-hidden','true');tun.innerHTML='<i></i>'.repeat(9);
document.body.insertBefore(tun,document.getElementById('intro').nextSibling);
const R=[...tun.children],cl=(v,a,b)=>Math.max(a,Math.min(b,v));
(function tk(t){requestAnimationFrame(tk);if(document.hidden)return;const y=scrollY*.9+t*.05;
 R.forEach((r,i)=>{const z=((i*140+y)%1260)-1100;r.style.transform='translateZ('+z.toFixed(0)+'px) rotate('+(i*9+y*.03).toFixed(1)+'deg)';r.style.opacity=(cl((z+1100)/300,0,1)*cl((200-z)/260,0,1)*.4).toFixed(2)})})(0);
addEventListener('click',e=>{for(let i=0;i<14;i++){const p=document.createElement('i'),a=i/14*6.283,d=50+Math.random()*60;p.className='bst';
 p.style.cssText='left:'+e.clientX+'px;top:'+e.clientY+'px;--dx:'+(Math.cos(a)*d).toFixed(0)+'px;--dy:'+(Math.sin(a)*d).toFixed(0)+'px;--dz:'+(Math.random()*160-40).toFixed(0)+'px';
 document.body.appendChild(p);setTimeout(()=>p.remove(),900)}});
let lm=0;addEventListener('mousemove',()=>lm=performance.now(),{passive:true});
if(matchMedia('(hover:hover)').matches)(function sw(t){requestAnimationFrame(sw);if(t-lm<2500||document.hidden)return;
 const s=document.querySelector('.view.on .stage:not(.hero-visual)');if(s&&s.offsetParent&&scrollY<innerHeight)s.style.transform='perspective(1000px) rotateY('+(Math.sin(t/1800)*16).toFixed(2)+'deg) rotateX('+(Math.cos(t/2300)*7).toFixed(2)+'deg)'})(0);
})();


/* ===== effects part 5 (was inline patch v5) ===== */

/* ===== v14: showcase cube, sphere, parallax, teaser ===== */
(()=>{
const rm=matchMedia('(prefers-reduced-motion:reduce)').matches,$=s=>document.querySelector(s);
/* auto-rotating cube */
const F=[['web','Web Experiences'],['mob','Mobile Apps'],['ai','AI & Automation'],['shop','E-Commerce Growth']],cx=$('#cbx');
cx.innerHTML=F.map(f=>'<figure>'+PIC[f[0]]+'<figcaption>'+f[1]+'</figcaption></figure>').join('');
let ci=0,cp=false;const cw=$('#cbw');cw.onmouseenter=()=>cp=true;cw.onmouseleave=()=>cp=false;
if(!rm)setInterval(()=>{if(cp||document.hidden)return;ci++;cx.style.transform='rotateX(-8deg) rotateY('+(-ci*90)+'deg)'},3200);
/* tag sphere */
const w=$('#sphw'),T=[...new Set(Object.values(TECH).flat())].filter((_,i)=>i%3==0).slice(0,42),N=T.length;
const P=T.map((t,i)=>{const k=(i+.5)/N,p=Math.acos(1-2*k),th=Math.PI*(1+Math.sqrt(5))*(i+.5);return[Math.cos(th)*Math.sin(p),Math.sin(th)*Math.sin(p),Math.cos(p)]});
w.innerHTML=T.map(t=>'<b>'+t+'</b>').join('');const E=[...w.children];
let ax=.004,ay=.006,tx=.004,ty=.006,vis=true,R=190;
const draw=()=>{R=Math.min(w.clientWidth,w.clientHeight)*.42;P.forEach((p,i)=>{
 let[x,y,z]=p,c=Math.cos(ax),s=Math.sin(ax);[y,z]=[y*c-z*s,y*s+z*c];c=Math.cos(ay);s=Math.sin(ay);[x,z]=[x*c+z*s,-x*s+z*c];p[0]=x;p[1]=y;p[2]=z;
 const sc=900/(900-z*R),e=E[i];e.style.transform='translate(-50%,-50%) translate('+(x*R*sc).toFixed(1)+'px,'+(y*R*sc).toFixed(1)+'px) scale('+(sc*.95).toFixed(3)+')';
 e.style.opacity=(.3+.7*(z+1)/2).toFixed(2);e.style.zIndex=Math.round((z+1)*50)})};
draw();
if(!rm){w.addEventListener('mousemove',e=>{const r=w.getBoundingClientRect();ty=((e.clientX-r.left)/r.width-.5)*.04;tx=-((e.clientY-r.top)/r.height-.5)*.04});
 w.addEventListener('mouseleave',()=>{tx=.004;ty=.006});
 new IntersectionObserver(es=>vis=es[0].isIntersecting).observe(w);
 (function f(){requestAnimationFrame(f);if(!vis||document.hidden)return;ax+=(tx-ax)*.05;ay+=(ty-ay)*.05;draw()})()}
/* hero text depth */
const hd=$('#v-home .hgrid>div:first-child');
if(hd&&!rm&&matchMedia('(hover:hover)').matches)addEventListener('mousemove',e=>{if(scrollY>innerHeight)return;const x=e.clientX/innerWidth-.5,y=e.clientY/innerHeight-.5;hd.style.transform='perspective(1100px) rotateY('+(x*9).toFixed(2)+'deg) rotateX('+(-y*6).toFixed(2)+'deg)'});
/* assistant teaser */
document.body.insertAdjacentHTML('beforeend','<div class="tz" id="tz" aria-hidden="true">Need a quote? Ask our assistant ✦</div>');
const tz=$('#tz');setTimeout(()=>{if(!$('#chat').classList.contains('on')){tz.classList.add('on');setTimeout(()=>tz.classList.remove('on'),6000)}},9000);
$('#cb').addEventListener('click',()=>tz.classList.remove('on'));
})();

/* ===== V2: article reader dialog =====
   Blog cards have no article pages yet (data.js ARTICLES has no url).
   Instead of a dead "#" click, open a clean reader dialog with the
   card's own title, category and summary, plus a WhatsApp CTA. */
(()=>{
  const dlg = document.getElementById('artdlg');
  if(!dlg) return;
  const wa = dlg.querySelector('[data-wa]');
  if(wa) wa.href = 'https://wa.me/923287801028?text=' + encodeURIComponent("Hello AS Tech Solution PK, I'd like to know more about one of your blog topics.");
  document.addEventListener('click', e=>{
    const a = e.target.closest && e.target.closest('article.card a');
    if(!a) return;
    const href = a.getAttribute('href');
    if(href && href !== '#') return;              // real article link: let it work
    e.preventDefault();
    const card = a.closest('article');
    const t = card.querySelector('h3'), c = card.querySelector('.cat');
    const article = ARTICLES.find(item => item.t === (t && t.textContent));
    document.getElementById('artt').textContent = t ? t.textContent : 'Article';
    document.getElementById('artc').textContent = c ? c.textContent : '';
    const body = document.getElementById('artbody');
    body.replaceChildren();
    const intro = document.createElement('p');
    intro.textContent = article ? article.body : 'This article could not be loaded. Please try again.';
    body.appendChild(intro);
    if(article&&article.tips){
      const heading=document.createElement('h4');
      heading.textContent='Quick takeaways';
      const list=document.createElement('ul');
      article.tips.forEach(tip=>{const item=document.createElement('li');item.textContent=tip;list.appendChild(item)});
      body.append(heading,list);
    }
    if(dlg.showModal) dlg.showModal();
  });
})();
