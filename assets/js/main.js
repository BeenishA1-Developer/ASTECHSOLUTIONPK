/* AS Tech Solution PK — main application logic (V2, organised) */

/* ===== CONFIG – owner must fill these ===== */
const WA_NUMBER="923287801028";                 // e.g. "923001234567" (digits only, with country code)
const NEWSLETTER_ENDPOINT="";       // your real email-platform / backend URL (POST {email})
const CHAT_ENDPOINT="";
const SOCIAL={Facebook:"https://www.facebook.com/AyeshaDev281",Instagram:"https://www.instagram.com/astechsolutionpk",LinkedIn:"https://www.linkedin.com/in/ayesha-sadiqa-269b5638b/",YouTube:"",TikTok:"https://www.tiktok.com/@astechsolutionpk"};
const SOCIAL_ICONS={
  Instagram:'<svg class="social-icon instagram-icon" viewBox="0 0 24 24" aria-hidden="true"><rect x="3.2" y="3.2" width="17.6" height="17.6" rx="5.1"/><circle cx="12" cy="12" r="4.1"/><circle class="icon-dot" cx="17.7" cy="6.6" r="1"/></svg>',
  LinkedIn:'<svg class="social-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M5.2 3.5a2.1 2.1 0 1 0 0 4.2 2.1 2.1 0 0 0 0-4.2ZM3.4 9.2H7v11.4H3.4V9.2Zm5.7 0h3.4v1.6h.1c.5-.9 1.6-1.9 3.4-1.9 3.6 0 4.3 2.3 4.3 5.3v6.4h-3.6v-5.7c0-1.4 0-3.2-2-3.2s-2.3 1.5-2.3 3.1v5.8H9.1V9.2Z"/></svg>',
  TikTok:'<svg class="social-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M19.6 8.3a7.1 7.1 0 0 1-4.3-1.5v7.1a6.1 6.1 0 1 1-5.3-6v3.7a2.5 2.5 0 1 0 1.7 2.4V2.8h3.6c.2 2 1.7 3.6 4.3 3.8v1.7Z"/></svg>'
};
const CONTACT_ENDPOINT="";          // contact form backend URL (POST JSON)             // secure server-side AI endpoint (keep API keys on server)
const WA_MSG="Hello AS Tech Solution PK, I'd like to discuss a digital project.";
/* ===== DATA ===== */
const $=s=>document.querySelector(s),H=(id,h)=>$(id).innerHTML=h;
const card=(i,t,p)=>`<div class="card"><div class="ic">${i}</div><h3>${t}</h3><p class="mut">${p}</p></div>`;
H('#ceo',[["✦","Innovation","We create innovative digital solutions that turn ideas into real opportunities."],["◆","Excellence","We focus on quality, performance, creativity, and delivering solutions that create value."],["▲","Growth","We help businesses grow through technology, digital transformation, and long-term partnerships."]].map(a=>card(...a)).join(''));
H('#caps',[["⌘","Custom-built"],["◈","Client collaboration"],["✦","Practical innovation"],["▲","Digital transformation"]].map(a=>card(a[0],a[1],"")).join('').replace(/<p[^>]*><\/p>/g,''));
H('#mvv',[["◎","Our Mission","Help businesses solve real challenges through useful, dependable, and thoughtfully engineered digital solutions."],["◉","Our Vision","Build a future where businesses of different sizes can use modern technology to operate smarter, connect better, and grow sustainably."],["◆","Our Values","Innovation, Excellence, Integrity, Collaboration, Customer Focus, and Continuous Growth."]].map(a=>card(...a)).join(''));
/* STATS moved to js/data.js */
H('#stats',STATS.map(s=>`<div class="card stat"><b ${s[1]?`data-count="${s[1]}"`:''}>${s[1]?0:'—'}</b>${s[0]}</div>`).join(''));
H('#svc',[["▭","Web Development","Fast, secure websites built around your goals."],["▯","Mobile App Development","Smooth apps for iOS and Android."],["✦","AI & Automation","Smart workflows that save time."],["◈","Game Development","Engaging interactive experiences."],["▤","UI/UX Design","Clear, elegant interfaces people enjoy."],["◍","E-Commerce Solutions","Online stores that convert and scale."],["◉","Digital Marketing","Reach and grow the right audience."],["⌕","SEO","Be found by customers who search."],["⌘","Custom Software","Tailored systems for your operations."]].map(a=>card(...a)).join(''));
const proc=[["Discover","Understand goals"],["Plan","Scope and roadmap"],["Design","UI and experience"],["Develop","Engineer solid code"],["Test","Quality and performance"],["Launch & Support","Go live, stay close"]];
H('#proc',proc.map((p,i)=>`<div class="st"><i>0${i+1}</i><div><h3>${p[0]}</h3><p class="mut">${p[1]}</p></div></div>`).join(''));
H('#why',[
  ["◆","Built Around Your Goals","We scope design and engineering around your business and users."],
  ["✦","One Connected Team","Keep interface, development and integration decisions aligned."],
  ["▲","Clarity at Every Step","Understand the scope, milestones and next action before work starts."],
  ["⬡","Ready for What’s Next","Choose a foundation that can evolve as your needs change."]
].map(a=>card(...a)).join(''));
/* TECH moved to js/data.js */
H('#tech',Object.entries(TECH).map(([k,v])=>`<div class="card tech"><b>${k}</b>${v.map(x=>`<span class="tag">${x}</span>`).join('')}</div>`).join(''));
H('#tech2',$('#tech').innerHTML);
H('#grow',["Founded","First Projects","Team Growth","New Services","Technology Expansion","Current Journey"].map((t,i)=>`<div class="st"><i>${i+1}</i><div><h3>${t}</h3></div></div>`).join(''));
H('#exp',[["▲","Growth","Opportunities to develop professionally and take on new responsibilities."],["◎","Learning","Training, workshops, mentorship, and continuous skill development."],["✦","Innovation","Work with modern technologies and contribute creative ideas."],["◈","Collaboration","Work with a collaborative and supportive technology team."],["▭","Real-World Projects","Gain experience working on meaningful digital products and solutions."],["★","Recognition","Opportunities to be recognized for contribution, performance, and achievements."]].map(a=>card(...a)).join(''));
/* CATS moved to js/data.js */
/* INDS moved to js/data.js */
/* ARTICLES moved to js/data.js */
const art=(a,big)=>`<article class="card ${big?'lead-art':''}"><span class="cat">${a.c}</span><h3 style="margin-top:8px;${big?'font-size:1.7rem':''}">${a.t}</h3><p class="${big?'mut':'mut'}">${a.d}</p><div class="meta">${[a.author,a.date,a.read].filter(Boolean).join(' · ')}</div><a class="btn ${big?'pri':'ghost'} read-article-btn" style="${big?'':'padding:8px 18px;'}${big?'':'color:inherit;border-color:currentColor'}" href="${a.url||'#'}">Read Article <span aria-hidden="true">→</span></a></article>`;
H('#feat',art(ARTICLES[0],1)+ART(1)+ART(2));function ART(n){return art(ARTICLES[n])}
let cat="All",ind="All";
function chips(id,arr,cur,fn){H(id,['All',...arr].map(x=>`<button class="chip ${x==cur?'on':''}" aria-pressed="${x==cur}">${x}</button>`).join(''));document.querySelectorAll(id+' .chip').forEach(b=>b.onclick=()=>{fn(b.textContent)})}
function render(){const q=$('#q').value.toLowerCase();
chips('#cats',CATS,cat,v=>{cat=v;render()});chips('#inds',INDS,ind,v=>{ind=v;render()});
const r=ARTICLES.filter(a=>(cat=="All"||a.c==cat)&&(ind=="All"||a.i==ind)&&(a.t+a.d+a.c).toLowerCase().includes(q));
H('#list',r.length?r.map(a=>art(a)).join(''):'<p class="mut">No articles found. Try another search or reset the filters.</p>')}
$('#q').oninput=render;render();
H('#trend',ARTICLES.slice(3,7).map((a,i)=>`<a class="trend" href="#"><b>0${i+1}</b><div><strong>${a.t}</strong><div class="meta">${a.c}</div></div></a>`).join(''));
H('#res',["How-to Guides","Beginner Guides","Tutorials","Checklists","Tips & Tricks","Technology Resources"].map(t=>`<div class="card"><span class="cat">Resource</span><h3 style="margin-top:6px">${t}</h3></div>`).join(''));
H('#spot',[["✦","AI & Automation","Smarter workflows and assistants."],["⚛","React / Next.js","Fast, modern web interfaces."],["☁","Cloud Technology","Scalable, resilient infrastructure."],["⛨","Cybersecurity","Protect data and trust."],["◍","Modern E-Commerce","Seamless, high-converting stores."]].map(a=>card(...a)).join(''));
/* ===== Router ===== */
function route(){const h=(location.hash||'#home').slice(1);const v=['home','about','services','careers','blog','contact'].includes(h)?h:'home';
document.querySelectorAll('.view').forEach(e=>e.classList.toggle('on',e.id=='v-'+v));
document.querySelectorAll('nav a').forEach(a=>a.classList.toggle('on',a.dataset.v==v));
scrollTo(0,0);observe();dispatchEvent(new Event("resize"))}
addEventListener('hashchange',route);
/* ===== Reveal + counters ===== */
let io;function observe(){io&&io.disconnect();io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');e.target.querySelectorAll(':scope > .card,:scope > .st').forEach((item,i)=>item.style.setProperty('--i',i));e.target.querySelectorAll('[data-count]').forEach(c=>{if(c.dataset.d)return;c.dataset.d=1;const T=+c.dataset.count;let n=0;const t=setInterval(()=>{n+=Math.ceil(T/40);if(n>=T){n=T;clearInterval(t)}c.textContent=n},30)});io.unobserve(e.target)}}),{threshold:.15});
document.querySelectorAll('.view.on .rv,#stats').forEach(e=>{e.classList.add('rv');io.observe(e)})}
route();$('#yr').textContent=new Date().getFullYear();
/* ===== WhatsApp ===== */
document.querySelectorAll('[data-wa]').forEach(a=>{a.addEventListener('click',e=>{if(!/^\d{8,15}$/.test(WA_NUMBER)){e.preventDefault();alert("WhatsApp number not configured yet. Set WA_NUMBER in the script.");return}a.href="https://wa.me/"+WA_NUMBER+"?text="+encodeURIComponent(WA_MSG);a.target="_blank";a.rel="noopener"})});
/* ===== Newsletter ===== */
$('#nl').onsubmit=async e=>{e.preventDefault();const m=$('#nlm'),v=$('#em').value.trim();
if(!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(v)){m.textContent="Please enter a valid email address.";m.style.color="#c0392b";return}
if(!NEWSLETTER_ENDPOINT){m.textContent="Newsletter is not connected yet. Please contact us directly.";m.style.color="#b9770e";return}
try{const r=await fetch(NEWSLETTER_ENDPOINT,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:v})});if(!r.ok)throw 0;m.textContent="Thank you! You are subscribed.";m.style.color="#1e8e4e";$('#em').value=""}catch{m.textContent="Something went wrong. Please try again.";m.style.color="#c0392b"}};
/* ===== Chatbot ===== */
const KB=[[/web|website/,"We design and build fast, secure, responsive websites tailored to your business goals."],[/mobile|app/,"We develop mobile apps for iOS and Android, from idea to launch."],[/ai|automat/,"Our AI & Automation services streamline workflows with smart, practical tools."],[/commerce|store|shop/,"We build e-commerce stores that are easy to manage and ready to scale."],[/market|seo/,"We offer digital marketing and SEO to help the right customers find you."],[/price|cost|estimate|quote/,"Pricing depends on scope. Share your project details and our team will prepare an estimate."],[/contact|human|team|call/,"You can reach our team through the WhatsApp chat button or by email at astechsoltionpk@gmail.com."]];
const cm=$('#cm'),add=(t,u)=>{const d=document.createElement('div');d.className='m'+(u?' u':'');d.textContent=t;cm.appendChild(d);cm.scrollTop=1e9};
H('#cq',["Website Development","Mobile Apps","AI & Automation","E-Commerce","Digital Marketing","Pricing / Project Estimate","Contact the Team"].map(x=>`<button class="chip" type="button">${x}</button>`).join(''));
async function ask(t){add(t,1);let a;
if(CHAT_ENDPOINT){try{const r=await fetch(CHAT_ENDPOINT,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({message:t})});a=(await r.json()).reply}catch{}}
if(!a){const k=KB.find(x=>x[0].test(t.toLowerCase()));a=k?k[1]:"I’m not sure about that. Please contact our team on WhatsApp and we’ll help you personally."}
setTimeout(()=>add(a),350)}
document.querySelectorAll('#cq .chip').forEach(b=>b.onclick=()=>ask(b.textContent));
$('#cf').onsubmit=e=>{e.preventDefault();const v=$('#ci').value.trim();if(v){$('#ci').value="";ask(v)}};
const tg=o=>{$('#chat').classList.toggle('on',o);$('#cb').setAttribute('aria-expanded',o);if(o){if(!cm.children.length)add("Welcome to AS Tech Solution PK! How can we help with your project?");$('#ci').focus()}else $('#cb').focus()};
$('#cb').onclick=()=>tg(!$('#chat').classList.contains('on'));$('#cx').onclick=()=>tg(false);
addEventListener('keydown',e=>{if(e.key==='Escape')tg(false)});

/* ===== v2 additions ===== */
H('#svc2',$('#svc').innerHTML);H('#why2',$('#why').innerHTML);H('#proc2',$('#proc').innerHTML);
document.querySelectorAll('#tech .tech,#tech2 .tech').forEach((c,i)=>{
  const heading=c.querySelector('b'),tags=document.createElement('div');
  tags.className='tech-tags';tags.id='tech-tags-'+i;
  while(heading.nextSibling)tags.append(heading.nextSibling);
  const button=document.createElement('button');button.type='button';button.className='tech-toggle';
  button.innerHTML=`<span>${heading.textContent}</span><span class="tech-chevron" aria-hidden="true">⌄</span>`;
  button.setAttribute('aria-controls',tags.id);c.replaceChild(button,heading);c.append(tags);
});
const syncTechCards=()=>{
  const desktop=matchMedia('(min-width:561px)').matches;
  document.querySelectorAll('#tech .tech,#tech2 .tech').forEach(c=>{
    const b=c.querySelector('.tech-toggle'),tags=c.querySelector('.tech-tags');
    c.classList.toggle('is-expanded',desktop);b.setAttribute('aria-expanded',String(desktop));
    b.tabIndex=desktop?-1:0;tags.setAttribute('aria-hidden',String(!desktop));
  });
};
syncTechCards();addEventListener('resize',syncTechCards);
document.addEventListener('click',e=>{
  const b=e.target.closest('.tech-toggle');if(!b||matchMedia('(min-width:561px)').matches)return;
  const c=b.closest('.tech'),expanded=b.getAttribute('aria-expanded')==='true';
  b.setAttribute('aria-expanded',String(!expanded));c.classList.toggle('is-expanded',!expanded);
  c.querySelector('.tech-tags').setAttribute('aria-hidden',String(expanded));
});
document.querySelectorAll('#why .card,#why2 .card').forEach(c=>{
  c.classList.add('why-card');
  const p=c.querySelector('p');if(!p)return;
  const b=document.createElement('button');b.type='button';b.className='why-toggle';b.textContent='Show more';b.setAttribute('aria-expanded','false');
  p.after(b);
});
const updateWhyToggles=()=>document.querySelectorAll('.why-card').forEach(c=>{
  const p=c.querySelector('p'),b=c.querySelector('.why-toggle');if(!p||!b)return;
  b.hidden=matchMedia('(min-width:701px)').matches||p.scrollHeight<=p.clientHeight+1;
});
updateWhyToggles();addEventListener('resize',updateWhyToggles);
document.addEventListener('click',e=>{
  const b=e.target.closest('.why-toggle');if(!b)return;
  const expanded=b.getAttribute('aria-expanded')==='true';
  b.setAttribute('aria-expanded',String(!expanded));b.textContent=expanded?'Show more':'Show less';
  b.closest('.why-card').classList.toggle('is-expanded',!expanded);
});
/* SV moved to js/data.js */
H('#mqi',SV.concat(SV).map(x=>`<span>${x}</span>`).join(''));
H('#ind',INDS.map(x=>`<span class="chip">${x}</span>`).join(''));
/* FAQ moved to js/data.js */
const fq=FAQ.map(f=>`<details class="card"><summary>${f[0]}</summary><p class="mut">${f[1]}</p></details>`).join('');
['#faq1','#faq2','#faq3'].forEach(i=>H(i,fq));
H('#com',[["◎","Clear Communication","You always know where your project stands."],["◆","Quality First","Careful engineering, testing and attention to detail."],["▲","Long-Term Partnership","We aim to grow alongside your business."]].map(a=>card(...a)).join(''));
H('#roles',[["</>","Developers","Web, mobile and backend engineers."],["▤","Designers","UI/UX and visual designers."],["◉","Marketing & SEO","Growth and content specialists."],["◈","Project & QA","Delivery and quality champions."]].map(a=>card(...a)).join(''));
H('#apply',["Apply","Review","Conversation","Decision"].map((t,i)=>`<div class="st"><i>0${i+1}</i><div><h3>${t}</h3></div></div>`).join(''));
/* contact form */
$('#cf2').onsubmit=async e=>{e.preventDefault();const f=e.target,m=$('#cm2'),n=f.n.value.trim(),em=f.e.value.trim(),sv=f.s.value,phone=f.p.value.trim(),budget=f.b.value,g=f.g.value.trim(),bad=t=>{m.textContent=t;m.style.color='#c0392b'};
if(!n||!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(em)||!g)return bad('Please enter your name, a valid email and a message.');
if(CONTACT_ENDPOINT){try{const r=await fetch(CONTACT_ENDPOINT,{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({name:n,email:em,phone,service:sv,budget,message:g})});if(!r.ok)throw 0;m.textContent='Thank you! We will get back to you soon.';m.style.color='#1e8e4e';f.reset()}catch{bad('Something went wrong. Please try again.')}return}
if(/^\d{8,15}$/.test(WA_NUMBER)){open('https://wa.me/'+WA_NUMBER+'?text='+encodeURIComponent(`Hello AS Tech Solution PK, I'm ${n} (${em}). Phone / WhatsApp: ${phone||'Not provided'}. Service: ${sv}. Budget: ${budget}. Project details: ${g}`),'_blank','noopener');m.textContent='Your enquiry is ready in WhatsApp. Send the message there to contact our team.';m.style.color='#1e8e4e';return}
m.textContent='Form is not connected yet. Set CONTACT_ENDPOINT or WA_NUMBER.';m.style.color='#b9770e'};
/* 3D: particle network, tilt, parallax */
(()=>{const rm=matchMedia('(prefers-reduced-motion:reduce)').matches,c=$('#net'),x=c.getContext('2d');let w,h,P=[],mx=0,my=0;
function rs(){w=c.width=c.offsetWidth;h=c.height=c.offsetHeight;P=Array.from({length:Math.min(70,w/16|0)},()=>({x:Math.random()*w,y:Math.random()*h,z:Math.random()*.8+.2,vx:(Math.random()-.5)*.4,vy:(Math.random()-.5)*.4}))}
function f(){if(c.offsetParent){x.clearRect(0,0,w,h);P.forEach(p=>{p.x+=p.vx;p.y+=p.vy;if(p.x<0||p.x>w)p.vx*=-1;if(p.y<0||p.y>h)p.vy*=-1;p.dx=p.x+mx*60*p.z;p.dy=p.y+my*60*p.z;x.beginPath();x.arc(p.dx,p.dy,2*p.z,0,7);x.fillStyle='rgba(150,181,248,'+p.z+')';x.fill()});
for(let i=0;i<P.length;i++)for(let j=i+1;j<P.length;j++){const a=P[i],b=P[j],d=Math.hypot(a.dx-b.dx,a.dy-b.dy);if(d<130){x.strokeStyle='rgba(73,126,243,'+(1-d/130)*.4+')';x.beginPath();x.moveTo(a.dx,a.dy);x.lineTo(b.dx,b.dy);x.stroke()}}}
if(!rm)requestAnimationFrame(f)}
rs();addEventListener('resize',rs);f();
if(rm)return;
addEventListener('mousemove',e=>{mx=e.clientX/innerWidth-.5;my=e.clientY/innerHeight-.5});
document.addEventListener('mousemove',e=>{const k=e.target.closest&&e.target.closest('.card');if(!k)return;const r=k.getBoundingClientRect();k.style.setProperty('--ry',((e.clientX-r.left)/r.width-.5)*12+'deg');k.style.setProperty('--rx',-((e.clientY-r.top)/r.height-.5)*12+'deg')});
document.addEventListener('mouseout',e=>{const k=e.target.closest&&e.target.closest('.card');if(k){k.style.setProperty('--rx','0deg');k.style.setProperty('--ry','0deg')}})})();

/* ===== v3 additions ===== */
$('#flogo').src=$('.logo img').src;
['#tech2','#tech3'].forEach(i=>H(i,$('#tech').innerHTML));H('#ind2',$('#ind').innerHTML);
const mk=a=>a.map(f=>`<details class="card"><summary>${f[0]}</summary><p class="mut">${f[1]}</p></details>`).join('');
const c0=(i,t)=>card(i,t,'').replace(/<p[^>]*><\/p>/g,'');
H('#faq1',mk([["What services do you offer?","Web, mobile, AI & automation, game development, UI/UX, e-commerce, digital marketing, SEO and custom software."],["How do I start a project?","Use the Contact page or the WhatsApp button, share your idea and our team will reply."],["Can you work with my existing website or app?","Yes, share the details and we will review what can be improved or extended."],["Will my website work on mobile?","Responsive design is part of how we build, so layouts adapt to phones, tablets and desktops."],["Do you build AI chatbots and automation?","Yes. AI & Automation is one of our services, from chatbots to workflow automation."],["Do you handle SEO and marketing too?","Yes, we offer SEO and digital marketing alongside development."],["Do you provide support after launch?","Launch & Support is the last step of our process. Ask us about options for your project."],["Which tools and technologies do you use?","See the full toolkit on this page. We choose the stack that best fits each project."]]));
H('#faq3',mk([["Who is AS Tech Solution PK?","A technology company offering web, mobile, AI, game and custom software solutions."],["How do you collaborate with clients?","We discover goals, plan, design, develop, test, then launch and support, keeping you informed throughout."],["Can small businesses work with you?","Yes. We help businesses of different sizes use modern technology to grow."],["Where can I see your work?","Ask our team on WhatsApp and we will share relevant examples."]]));
H('#faq2',mk([["How is the price decided?","By scope: features, design depth, integrations, timeline and support needs."],["Can I start with a small budget?","Yes. Choose a range in the form or select “Not sure yet” and we will advise."],["Will I get a fixed quote?","After reviewing your requirements our team will discuss a quote with you."],["Can the project be done in phases?","Often yes. We can plan phases so you launch the essentials first."],["How do I get an estimate quickly?","Send the form. It opens WhatsApp with all your details so we can reply directly."],["Are there ongoing costs?","Hosting, domains or support may apply depending on your project. We explain these upfront."]]));
H('#faq4',mk([["Are there open positions?","Check the Open Positions block or message us to ask about current opportunities."],["How do I apply?","Contact us on WhatsApp with your details and role of interest."],["Do you offer learning opportunities?","Learning, mentorship and skill development are part of what you can experience with us."],["Which roles do you hire for?","Developers, designers, marketing & SEO specialists and project/QA professionals."]]));
H('#faq5',mk([["How often is the blog updated?","New articles are published as our team completes them."],["Can I suggest a topic?","Yes, send your idea through the Contact page."],["Can I search articles?","Use the Search Blog field at the top or the category filters."],["How do I get updates?","Subscribe to the newsletter once it is connected by the site owner."]]));
H('#ins',ARTICLES.slice(0,3).map(a=>art(a)).join(''));
H('#st3',[["①","Share your idea","Tell us your goals, budget range and timeline."],["②","Get a tailored plan","We outline scope, design direction and approach."],["③","Build & launch","We develop, test and launch, then stay close."]].map(a=>card(...a)).join(''));
H('#qa',[["▭","Responsive on every device"],["◎","Accessible, readable design"],["⚡","Performance-minded builds"],["</>","Clean, maintainable code"],["✓","Tested before launch"],["◉","Clear communication"]].map(a=>c0(...a)).join(''));
H('#cval',[["◆","Integrity"],["◈","Collaboration"],["▲","Growth Mindset"],["★","Ownership"]].map(a=>c0(...a)).join(''));
H('#tags',[...CATS,...INDS,"Cybersecurity","Cloud","React / Next.js"].map(x=>`<span class="chip">${x}</span>`).join(''));
const T=[["Starter","Landing pages and small sites","Under PKR 50,000"],["Growth","Business sites and stores","PKR 50,000 – 150,000"],["Premium","Web/mobile apps and AI","PKR 150,000 – 500,000"],["Enterprise","Large custom platforms","PKR 500,000+"]];
H('#tiers',T.map((t,i)=>`<button type="button" class="card tier" data-i="${i}"><b>${t[0]}</b><h3 style="margin:8px 0">${t[2]}</h3><p class="mut">${t[1]}</p></button>`).join(''));
document.querySelectorAll('.tier').forEach(b=>b.onclick=()=>{$('#b').selectedIndex=+b.dataset.i;$('#cf2').scrollIntoView({behavior:'smooth',block:'center'});$('#n').focus()});
H('#nxt',["You send details","We review","We reply on WhatsApp","Plan & quote"].map((t,i)=>`<div class="st"><i>0${i+1}</i><div><h3>${t}</h3></div></div>`).join(''));
/* 3D carousel */
const cw=innerWidth<600?130:200,cz=Math.round(cw/2/Math.tan(Math.PI/SV.length))+30;$('#car').style.setProperty('--w',cw+'px');
H('#car',SV.map((x,i)=>`<div style="transform:rotateY(${i*360/SV.length}deg) translateZ(${cz}px)">${x}</div>`).join(''));
/* floating orbs on inner heroes */
document.querySelectorAll('.hero').forEach(h=>{if(!h.querySelector('.stage,#net'))h.insertAdjacentHTML('beforeend','<i class="orb o1"></i><i class="orb o2"></i><i class="orb o3"></i>')});
/* ===== v4: footer + luxury 3D ===== */
H('#fsv',SV.map(x=>`<li><a href="#services">${x}</a></li>`).join(''));
Object.entries(SOCIAL).filter(([name,url])=>url).forEach(([name,url])=>$('#soc').insertAdjacentHTML('beforeend',`<a href="${url}" target="_blank" rel="noopener" aria-label="${name}" title="${name}">${SOCIAL_ICONS[name]}</a>`));
$('#fnl').onsubmit=async e=>{e.preventDefault();const m=$('#fnm'),v=$('#fem').value.trim(),z=(t,c)=>{m.textContent=t;m.style.color=c};
if(!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(v))return z('Please enter a valid email address.','#ff9a8f');
if(!NEWSLETTER_ENDPOINT)return z('Newsletter is not connected yet. Please contact us directly.','#ffd27a');
try{const r=await fetch(NEWSLETTER_ENDPOINT,{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({email:v})});if(!r.ok)throw 0;z('Thank you! You are subscribed.','#7ee2a8');$('#fem').value=''}catch{z('Something went wrong. Please try again.','#ff9a8f')}};
const POL={privacy:"We use the details you share through our forms and WhatsApp only to respond to your enquiry and deliver our services. Contact us with any questions about your data.",terms:"Project scope, timelines and pricing are agreed with each client before work begins. Contact us to discuss the details of your project."};
document.querySelectorAll('[data-pol]').forEach(a=>a.onclick=e=>{e.preventDefault();$('#polt').textContent=a.dataset.pol=='privacy'?'Privacy Policy':'Terms';$('#polb').textContent=POL[a.dataset.pol];$('#pol').showModal()});
addEventListener('scroll',()=>{const d=document.documentElement;$('#sp').style.width=scrollY/(d.scrollHeight-innerHeight||1)*100+'%'},{passive:true});
document.addEventListener('mousemove',e=>{const k=e.target.closest&&e.target.closest('.card');if(!k)return;const r=k.getBoundingClientRect();k.style.setProperty('--mx',e.clientX-r.left+'px');k.style.setProperty('--my',e.clientY-r.top+'px')});
document.querySelectorAll('section:not(.hero)').forEach((x,i)=>{if(i%2==0)x.insertAdjacentHTML('afterbegin','<div class="mc'+(i%4?' l':'')+'" aria-hidden="true"><i></i><i></i><i></i><i></i><i></i><i></i></div>')});

/* ===== v5: responsive + extra 3D ===== */
const mbn=$('#mb'),nv=$('#nv'),cl=()=>{nv.classList.remove('on');mbn.setAttribute('aria-expanded',false);mbn.textContent='☰'};
mbn.onclick=()=>{const o=nv.classList.toggle('on');mbn.setAttribute('aria-expanded',o);mbn.textContent=o?'✕':'☰'};
nv.querySelectorAll('a').forEach(a=>a.addEventListener('click',cl));addEventListener('hashchange',cl);addEventListener('keydown',e=>{if(e.key==='Escape')cl()});
const flipR=id=>{const el=$(id),a=[...el.children].map(c=>[c.querySelector('.ic').textContent,c.querySelector('h3').textContent,c.querySelector('p').textContent]);
el.innerHTML=a.map(x=>`<div class="fl" tabindex="0"><div class="fi"><div class="fc"><div class="ic">${x[0]}</div><h3>${x[1]}</h3></div><div class="fc bk"><p class="mut">${x[2]}</p><a class="btn pri" href="#contact" style="padding:8px 20px;margin-top:14px">Get a Quote</a></div></div></div>`).join('');
el.querySelectorAll('.fl').forEach(f=>f.onclick=e=>{if(!e.target.closest('a'))f.classList.toggle('on')})};
flipR('#svc');flipR('#svc2');
function car(){const n=SV.length,w=innerWidth<600?120:innerWidth<1000?160:200,z=Math.round(w/2/Math.tan(Math.PI/n))+24;$('#car').style.setProperty('--w',w+'px');
H('#car',SV.map((x,i)=>`<div style="transform:rotateY(${i*360/n}deg) translateZ(${z}px)">${x}</div>`).join(''))}
car();let rt;addEventListener('resize',()=>{clearTimeout(rt);rt=setTimeout(car,200)});
if(matchMedia('(hover:none)').matches)addEventListener('scroll',()=>{const y=Math.min(scrollY/600,1);document.querySelectorAll('.stage:not(.hero-visual)').forEach(t=>t.style.transform='perspective(1000px) rotateX('+y*14+'deg) rotateY('+y*-12+'deg)')},{passive:true});

/* ===== v6: services, reviews, pictures, gmail ===== */
const EMAIL="astechsoltionpk@gmail.com";
const PIC={web:'<svg viewBox="0 0 400 250"><rect x="50" y="34" width="300" height="190" rx="14" fill="rgba(255,255,255,.08)" stroke="rgba(255,255,255,.35)"/><rect x="50" y="34" width="300" height="26" rx="14" fill="rgba(255,255,255,.14)"/><circle cx="68" cy="47" r="4" fill="#ff7b7b"/><circle cx="82" cy="47" r="4" fill="#ffd27a"/><circle cx="96" cy="47" r="4" fill="#7ee2a8"/><rect x="68" y="80" width="120" height="16" rx="6" fill="#497ef3"/><rect x="68" y="106" width="170" height="8" rx="4" fill="rgba(255,255,255,.4)"/><rect x="68" y="122" width="140" height="8" rx="4" fill="rgba(255,255,255,.25)"/><rect x="68" y="150" width="82" height="58" rx="10" fill="rgba(73,126,243,.45)"/><rect x="160" y="150" width="82" height="58" rx="10" fill="rgba(255,255,255,.18)"/><rect x="252" y="150" width="82" height="58" rx="10" fill="rgba(255,255,255,.12)"/><circle cx="300" cy="92" r="26" fill="rgba(150,181,248,.55)"/></svg>',
mob:'<svg viewBox="0 0 400 250"><rect x="150" y="14" width="100" height="222" rx="18" fill="rgba(255,255,255,.1)" stroke="rgba(255,255,255,.45)" stroke-width="2"/><rect x="190" y="22" width="20" height="5" rx="2.5" fill="rgba(255,255,255,.5)"/><rect x="162" y="40" width="76" height="46" rx="8" fill="#497ef3"/><rect x="162" y="96" width="76" height="14" rx="5" fill="rgba(255,255,255,.3)"/><rect x="162" y="118" width="76" height="14" rx="5" fill="rgba(255,255,255,.2)"/><rect x="162" y="140" width="34" height="34" rx="8" fill="rgba(150,181,248,.5)"/><rect x="204" y="140" width="34" height="34" rx="8" fill="rgba(255,255,255,.2)"/><circle cx="90" cy="70" r="22" fill="rgba(150,181,248,.35)"/><circle cx="318" cy="170" r="30" fill="rgba(73,126,243,.35)"/><rect x="292" y="52" width="60" height="30" rx="8" fill="rgba(255,255,255,.14)"/></svg>',
ai:'<svg viewBox="0 0 400 250"><g stroke="rgba(150,181,248,.55)" stroke-width="2"><path d="M200 125 80 60M200 125 90 190M200 125 320 55M200 125 330 195M80 60 90 190M320 55 330 195M200 125 200 30M200 125 200 222"/></g><circle cx="200" cy="125" r="34" fill="#497ef3"/><circle cx="200" cy="125" r="50" fill="none" stroke="rgba(255,255,255,.35)"/><g fill="rgba(255,255,255,.85)"><circle cx="80" cy="60" r="11"/><circle cx="90" cy="190" r="11"/><circle cx="320" cy="55" r="11"/><circle cx="330" cy="195" r="11"/><circle cx="200" cy="30" r="8"/><circle cx="200" cy="222" r="8"/></g><text x="200" y="131" text-anchor="middle" font-family="Sora,Arial" font-weight="700" font-size="18" fill="#fff">AI</text></svg>',
shop:'<svg viewBox="0 0 400 250"><rect x="60" y="150" width="34" height="70" rx="6" fill="rgba(255,255,255,.2)"/><rect x="108" y="120" width="34" height="100" rx="6" fill="rgba(73,126,243,.6)"/><rect x="156" y="90" width="34" height="130" rx="6" fill="rgba(255,255,255,.3)"/><rect x="204" y="60" width="34" height="160" rx="6" fill="#497ef3"/><path d="M60 140 150 100 200 70 330 30" stroke="#a2bdf9" stroke-width="3" fill="none"/><circle cx="330" cy="30" r="7" fill="#fff"/><rect x="262" y="120" width="86" height="86" rx="14" fill="rgba(255,255,255,.1)" stroke="rgba(255,255,255,.4)"/><path d="M280 150h50l-6 28h-38z" fill="rgba(150,181,248,.6)"/><circle cx="292" cy="190" r="5" fill="#fff"/><circle cx="318" cy="190" r="5" fill="#fff"/></svg>'};
const DEMOS=[
  ["web-preview","Jewelza","Jewellery store","https://poetic-florentine-f4caf1.netlify.app/","View store"],
  ["flower-preview","The Flower Studio","E-commerce","https://theflowerstudio.pk/","View project"],
  ["coffee-preview","Contra Coffee","Website","https://contracoffee.pk/","View project"],
  ["app-preview","The Happy Stone","Mobile app","https://apps.apple.com/us/app/the-happy-stone/id6758778318","View app"]
];
const PROJECT_PREVIEWS={
  "web-preview":`<svg viewBox="0 0 400 225" aria-hidden="true"><defs><linearGradient id="jewel-bg" x2="1" y2="1"><stop stop-color="#f8eee3"/><stop offset="1" stop-color="#ead8c4"/></linearGradient><linearGradient id="jewel-gold" x2="1" y2="1"><stop stop-color="#fff0b0"/><stop offset=".48" stop-color="#c99445"/><stop offset="1" stop-color="#f9dda0"/></linearGradient><radialGradient id="jewel-stone"><stop stop-color="#fff"/><stop offset=".55" stop-color="#e4d7f0"/><stop offset="1" stop-color="#a991bd"/></radialGradient></defs><rect width="400" height="225" fill="url(#jewel-bg)"/><rect x="22" y="16" width="356" height="194" rx="12" fill="#fffaf4" stroke="#eadbc8"/><path d="M22 49h356" stroke="#eee3d7"/><text x="42" y="38" fill="#704b35" font-family="Georgia,serif" font-size="14" letter-spacing="1.2">JEWELZA</text><text x="289" y="37" fill="#9a8067" font-family="Arial,sans-serif" font-size="7" letter-spacing="1">COLLECTION  SHOP</text><text x="43" y="88" fill="#49382d" font-family="Georgia,serif" font-size="21">Everyday,</text><text x="43" y="112" fill="#49382d" font-family="Georgia,serif" font-size="21">made elegant.</text><text x="44" y="133" fill="#967d67" font-family="Arial,sans-serif" font-size="8">A little sparkle for every occasion.</text><rect x="43" y="151" width="93" height="24" rx="12" fill="#76563d"/><text x="57" y="167" fill="#fffaf4" font-family="Arial,sans-serif" font-size="7" font-weight="700">SHOP JEWELRY</text><ellipse cx="288" cy="125" rx="72" ry="66" fill="#eadac5"/><path d="M253 82q34 69 70 0" fill="none" stroke="url(#jewel-gold)" stroke-width="4"/><path d="M253 82q34 69 70 0" fill="none" stroke="#fff1c6" stroke-width="1" opacity=".8"/><path d="M273 128q15 22 30 0" fill="none" stroke="url(#jewel-gold)" stroke-width="3"/><path d="M284 143v18" stroke="url(#jewel-gold)" stroke-width="3"/><path d="M284 158l-8 9 8 9 8-9z" fill="url(#jewel-stone)" stroke="#bc9b65" stroke-width="1.5"/><circle cx="253" cy="82" r="4" fill="url(#jewel-stone)" stroke="#c49a53"/><circle cx="323" cy="82" r="4" fill="url(#jewel-stone)" stroke="#c49a53"/><path d="M244 171q8-10 16 0m55 0q8-10 16 0" fill="none" stroke="#bb965a" stroke-width="2"/><circle cx="252" cy="177" r="4" fill="url(#jewel-stone)"/><circle cx="323" cy="177" r="4" fill="url(#jewel-stone)"/></svg>`,
  "flower-preview":`<svg viewBox="0 0 400 225" aria-hidden="true"><defs><linearGradient id="flower-bg" x2="1" y2="1"><stop stop-color="#f9eeeb"/><stop offset="1" stop-color="#f2dcd3"/></linearGradient></defs><rect width="400" height="225" fill="url(#flower-bg)"/><rect x="22" y="16" width="356" height="194" rx="12" fill="#fffdfa" stroke="#f0e2dc"/><path d="M22 49h356" stroke="#f0e5df"/><text x="42" y="38" fill="#734a48" font-family="Georgia,serif" font-size="12">The Flower Studio</text><text x="295" y="37" fill="#a27c76" font-family="Arial,sans-serif" font-size="7" letter-spacing="1">SHOP  ABOUT</text><text x="43" y="88" fill="#643f3d" font-family="Georgia,serif" font-size="20">Flowers for</text><text x="43" y="111" fill="#643f3d" font-family="Georgia,serif" font-size="20">every feeling.</text><text x="44" y="131" fill="#997874" font-family="Arial,sans-serif" font-size="8">Thoughtfully gathered, beautifully delivered.</text><rect x="43" y="147" width="91" height="24" rx="12" fill="#a96f68"/><text x="57" y="163" fill="#fff" font-family="Arial,sans-serif" font-size="7" font-weight="700">SHOP FLOWERS</text><path d="M274 163c-3-28-4-48 9-74m13 74c-2-29 3-43 22-58m-42 58c-14-19-24-30-41-34" stroke="#718771" stroke-width="3" fill="none" stroke-linecap="round"/><g fill="#ce8290"><ellipse cx="273" cy="80" rx="9" ry="17"/><ellipse cx="257" cy="89" rx="9" ry="17" transform="rotate(-55 257 89)"/><ellipse cx="289" cy="90" rx="9" ry="17" transform="rotate(55 289 90)"/><ellipse cx="273" cy="100" rx="9" ry="16" transform="rotate(180 273 100)"/></g><circle cx="273" cy="90" r="7" fill="#e7c476"/><g fill="#dda6a4"><circle cx="320" cy="95" r="12"/><circle cx="337" cy="100" r="11"/><circle cx="239" cy="128" r="10"/></g><path d="M309 168q22-25 43 0zM226 167q17-20 33 0z" fill="#7d9679"/></svg>`,
  "coffee-preview":`<svg viewBox="0 0 400 225" aria-hidden="true"><defs><linearGradient id="coffee-bg" x2="1" y2="1"><stop stop-color="#d8c6ad"/><stop offset="1" stop-color="#b39a7e"/></linearGradient></defs><rect width="400" height="225" fill="#eee7dd"/><rect x="22" y="16" width="356" height="194" rx="12" fill="#2f2823"/><path d="M22 49h356" stroke="#50443b"/><text x="43" y="37" fill="#f3e8d7" font-family="Georgia,serif" font-size="14" letter-spacing="1">CONTRA</text><text x="306" y="37" fill="#cfb997" font-family="Arial,sans-serif" font-size="7" letter-spacing="1">MENU  VISIT</text><text x="43" y="89" fill="#f3e8d7" font-family="Georgia,serif" font-size="22">Make room</text><text x="43" y="114" fill="#f3e8d7" font-family="Georgia,serif" font-size="22">for good coffee.</text><text x="44" y="135" fill="#c6b7a5" font-family="Arial,sans-serif" font-size="8">A little pause. A lot of flavour.</text><rect x="43" y="151" width="95" height="24" rx="12" fill="#c29262"/><text x="60" y="167" fill="#2f2823" font-family="Arial,sans-serif" font-size="7" font-weight="700">DISCOVER MORE</text><circle cx="286" cy="117" r="66" fill="url(#coffee-bg)"/><ellipse cx="286" cy="159" rx="49" ry="10" fill="#80644c" opacity=".55"/><path d="M259 93h52l-5 53q-22 16-43 0z" fill="#f4eee5"/><path d="M311 105q31-7 20 24-5 13-27 12" fill="none" stroke="#f4eee5" stroke-width="8"/><ellipse cx="285" cy="93" rx="26" ry="7" fill="#68472f"/><path d="M279 87c-8-13 9-17 0-28m13 28c-7-13 10-17 1-28" stroke="#fff4e8" stroke-width="2" fill="none" stroke-linecap="round" opacity=".7"/><circle cx="348" cy="73" r="4" fill="#c29262"/><circle cx="229" cy="160" r="3" fill="#c29262"/></svg>`,
  "app-preview":`<svg viewBox="0 0 400 225" aria-hidden="true"><defs><linearGradient id="app-bg" x2="1" y2="1"><stop stop-color="#f7e3dd"/><stop offset="1" stop-color="#f4d0c4"/></linearGradient></defs><rect width="400" height="225" fill="url(#app-bg)"/><circle cx="80" cy="75" r="34" fill="#f2b34e" opacity=".45"/><circle cx="324" cy="170" r="42" fill="#d77d6e" opacity=".18"/><rect x="143" y="9" width="114" height="207" rx="23" fill="#302c35"/><rect x="149" y="16" width="102" height="193" rx="18" fill="#fffaf5"/><rect x="181" y="22" width="38" height="5" rx="3" fill="#302c35"/><text x="164" y="49" fill="#594750" font-family="Arial,sans-serif" font-size="8" font-weight="700">the happy stone</text><circle cx="200" cy="94" r="31" fill="#f2c65d"/><ellipse cx="190" cy="91" rx="3" ry="4" fill="#594750"/><ellipse cx="210" cy="91" rx="3" ry="4" fill="#594750"/><path d="M192 103q8 8 16 0" fill="none" stroke="#9e655d" stroke-width="2" stroke-linecap="round"/><path d="M178 72q22-22 44 0" fill="#e89577"/><rect x="165" y="139" width="70" height="22" rx="8" fill="#f8e6d3"/><text x="177" y="153" fill="#79545a" font-family="Arial,sans-serif" font-size="7">Daily reminder</text><rect x="165" y="168" width="70" height="22" rx="8" fill="#dce9dc"/><text x="180" y="182" fill="#536c57" font-family="Arial,sans-serif" font-size="7">Your collection</text><circle cx="91" cy="161" r="6" fill="#fffaf5"/><circle cx="306" cy="60" r="5" fill="#fffaf5"/><path d="m88 112 4 9 10 1-8 6 3 10-9-6-8 6 3-10-8-6 10-1z" fill="#fffaf5" opacity=".8"/></svg>`
};
const renderDemoCards=limit=>DEMOS.map(([image,title,type,url,action],index)=>`<article class="card pic demo-card" ${index>=limit?'hidden':''}><div class="art" aria-hidden="true">${PROJECT_PREVIEWS[image]}</div><div class="cap"><span class="cat">${type}</span><h3>${title}</h3><a class="btn ghost demo-link" href="${url}" target="_blank" rel="noopener noreferrer">${action}<span aria-hidden="true"> ↗</span></a></div></article>`).join('');
H('#gal',renderDemoCards(4));
H('#gal2',renderDemoCards(DEMOS.length));
const moreProjects=$('#projects-more'),moreProjectsButton=moreProjects.querySelector('button');
if(DEMOS.length>4){
  moreProjects.hidden=false;
  moreProjectsButton.onclick=()=>{
    const expanded=moreProjectsButton.getAttribute('aria-expanded')==='true';
    document.querySelectorAll('#gal .demo-card[hidden]').forEach(project=>project.hidden=expanded);
    moreProjectsButton.setAttribute('aria-expanded',String(!expanded));
    moreProjectsButton.innerHTML=expanded?'View all projects <span aria-hidden="true">↓</span>':'Show fewer projects <span aria-hidden="true">↑</span>';
  };
}
const SVD=[["▭","Web Development","Fast, secure, responsive websites tailored to your goals.",["Business & corporate sites","Landing pages & portals","Performance & SEO-ready builds"]],["▯","Mobile App Development","Smooth iOS and Android apps from idea to launch.",["Cross-platform apps","Native-feel interfaces","Store launch guidance"]],["✦","AI & Automation","Practical AI that saves time and effort.",["AI chatbots & assistants","Workflow automation","API integrations"]],["◈","Game Development","Engaging interactive and casual games.",["2D & 3D games","Mobile & web games","Rapid prototyping"]],["▤","UI/UX Design","Clear, elegant interfaces people enjoy using.",["Wireframes & prototypes","Design systems","User-flow thinking"]],["◍","E-Commerce Solutions","Online stores built to convert and scale.",["Store setup & customization","Payment integration","Product & order management"]],["◉","Digital Marketing","Reach and grow the right audience.",["Social media campaigns","Paid advertising","Analytics & reporting"]],["⌕","SEO","Be found by customers who are searching.",["Technical SEO","On-page optimization","Content strategy"]],["⌘","Custom Software","Tailored systems for your operations.",["Business tools & dashboards","Admin panels & CRMs","Scalable architecture"]]];
H('#svd',SVD.map(x=>`<div class="card"><div class="ic">${x[0]}</div><h3>${x[1]}</h3><p class="mut">${x[2]}</p><ul style="list-style:none;padding:0;margin:14px 0 18px;font-size:.9rem">${x[3].map(f=>`<li style="margin:6px 0"><span style="color:var(--blue)">✓</span> ${f}</li>`).join('')}</ul><a class="btn pri" href="#contact" style="padding:8px 20px">Get a Quote</a></div>`).join(''));
H('#proc3',$('#proc').innerHTML);H('#why3',$('#why').innerHTML);H('#tech4',$('#tech').innerHTML);
H('#tiers2',T.map((t,i)=>`<button type="button" class="card tier" data-i="${i}"><b>${t[0]}</b><h3 style="margin:8px 0">${t[2]}</h3><p class="mut">${t[1]}</p></button>`).join(''));
document.querySelectorAll('#tiers2 .tier').forEach(b=>b.onclick=()=>{$('#b').selectedIndex=+b.dataset.i;location.hash='#contact'});
H('#faq6',mk([["Can I combine several services?","Yes. Many projects combine design, development and marketing. We will propose the right mix."],["Do you build for both iOS and Android?","Yes, mobile app development covers both platforms."],["Can you improve my existing website?","Share the details and we will review what can be upgraded."],["Do you provide SEO after the website is built?","Yes, SEO is offered as a service on its own or together with development."],["How do I get a quote?","Use the Contact page, choose a budget range and send the form on WhatsApp or email."]]));
function car2(){const n=SV.length,w=innerWidth<600?120:innerWidth<1000?160:200,z=Math.round(w/2/Math.tan(Math.PI/n))+24;$('#car2').style.setProperty('--w',w+'px');H('#car2',SV.map((x,i)=>`<div style="transform:rotateY(${i*360/n}deg) translateZ(${z}px)">${x}</div>`).join(''))}
car2();addEventListener('resize',()=>setTimeout(car2,250));
/* reviews */
/* REVIEWS moved to js/data.js */
let ri=0,ra;const nR=REVIEWS.length;
H('#rvs',REVIEWS.map(v=>`<article class="rc"><div class="rtop"><img class="av" src="${v.img}" alt="Client photo" loading="lazy"><div><b>${v.ti||'Client Review'}</b><div class="stars" aria-label="${v.s} out of 5">${'★'.repeat(v.s)}</div></div></div><p>“${v.t}”</p><div class="meta" style="color:#a2b1d3;margin-top:12px">— Client Review</div></article>`).join(''));H('#avs',REVIEWS.map(v=>`<img src="${v.img}" alt="Client photo">`).join(''));
H('#rvd',REVIEWS.map((_,i)=>`<button aria-label="Review ${i+1}"></button>`).join(''));
const updR=()=>{document.querySelectorAll('.rc').forEach((c,i)=>{c.className='rc'+(i==ri?' a':i==(ri+nR-1)%nR?' p':i==(ri+1)%nR?' n':'')});document.querySelectorAll('#rvd button').forEach((b,i)=>b.classList.toggle('on',i==ri))};
const goR=d=>{ri=(ri+d+nR)%nR;updR()};updR();
$('#rvp').onclick=()=>goR(-1);$('#rvn').onclick=()=>goR(1);document.querySelectorAll('#rvd button').forEach((b,i)=>b.onclick=()=>{ri=i;updR()});
const rsEl=$('#rvs');let tx=0;rsEl.addEventListener('touchstart',e=>tx=e.touches[0].clientX,{passive:true});rsEl.addEventListener('touchend',e=>{const d=e.changedTouches[0].clientX-tx;if(Math.abs(d)>40)goR(d<0?1:-1)});
if(!matchMedia('(prefers-reduced-motion:reduce)').matches){const st=()=>ra=setInterval(()=>goR(1),5500);st();rsEl.onmouseenter=()=>clearInterval(ra);rsEl.onmouseleave=st}
$('#rvbtn').onclick=()=>$('#rvdlg').showModal();
$('#rvf').onsubmit=e=>{e.preventDefault();location.href='mailto:'+EMAIL+'?subject='+encodeURIComponent('Client review for AS Tech Solution PK')+'&body='+encodeURIComponent('Name: '+$('#rn').value+'\nRating: '+$('#rs2').value+'/5\nReview: '+$('#rt').value);$('#rvdlg').close()};
/* contact via email */
$('#mailbtn').onclick=()=>{const f=$('#cf2'),m=$('#cm2'),v=k=>f[k].value.trim();if(!v('n')||!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(v('e'))||!v('g')){m.textContent='Please enter your name, a valid email and a message.';m.style.color='#c0392b';return}
location.href='mailto:'+EMAIL+'?subject='+encodeURIComponent('Project enquiry from '+v('n'))+'&body='+encodeURIComponent(['Name: '+v('n'),'Email: '+v('e'),'Phone: '+(v('p')||'-'),'Service: '+f.s.value,'Budget: '+f.b.value,'Message: '+v('g')].join('\n'));m.textContent='Opening your email app…';m.style.color='#1e8e4e'};

/* ===== v7: client photos wall, cinematic 3D scroll, cursor glow ===== */
if(matchMedia('(hover:hover)').matches)addEventListener('mousemove',e=>{const c=$('#cur');c.style.opacity=1;c.style.transform='translate('+e.clientX+'px,'+e.clientY+'px)'});
if(!matchMedia('(prefers-reduced-motion:reduce)').matches){let tk=0;
const tilt=()=>{tk=0;const vh=innerHeight;document.querySelectorAll('.view.on section:not(.hero):not(.cta)>.wrap').forEach(w=>{const r=w.getBoundingClientRect();if(r.bottom<-200||r.top>vh+200)return;const d=Math.max(-1,Math.min(1,(r.top+r.height/2-vh/2)/vh));w.style.transform='perspective(1400px) rotateX('+(-d*13).toFixed(2)+'deg) rotateY('+(d*5).toFixed(2)+'deg) translateZ('+(-Math.abs(d)*160).toFixed(1)+'px)'})};
addEventListener('scroll',()=>{if(!tk)tk=requestAnimationFrame(tilt)},{passive:true});addEventListener('hashchange',()=>setTimeout(tilt,80));tilt()}

/* ===== v8: deep 3D layer ===== */
(()=>{
const rm=matchMedia('(prefers-reduced-motion:reduce)').matches;
document.querySelectorAll('section:not(.hero)').forEach((s,i)=>{
 const L=i%2,big=70+(i*37%60);
 s.insertAdjacentHTML('afterbegin','<div class="fx3" aria-hidden="true">'
 +'<div class="gy" style="--s:'+big+'px;'+(L?'left':'right')+':'+(3+(i*7%6))+'%;top:'+(10+(i*13%55))+'%" data-d="'+(18+(i%3)*10)+'"><i></i><i></i><i></i><i></i></div>'
 +'<div class="pl" style="'+(L?'right':'left')+':'+(4+(i*5%8))+'%;bottom:'+(8+(i*11%30))+'%" data-d="'+(-14-(i%3)*8)+'"></div>'
 +'<div class="pr" style="'+(L?'left':'right')+':'+(22+(i*9%20))+'%;bottom:'+(6+(i*7%20))+'%" data-d="12"><i></i><i></i><i></i><i></i></div></div>')});
document.querySelectorAll('.hero').forEach(h=>{if(h.querySelector('.stage,#net'))return;
 h.insertAdjacentHTML('beforeend','<div class="h3d" aria-hidden="true"><div class="ring"></div><div class="ring b"></div><div class="hcu"><i></i><i></i><i></i><i></i><i></i><i></i></div></div>')});
const fo=new IntersectionObserver(es=>es.forEach(e=>e.target.classList.toggle('off',!e.isIntersecting)),{rootMargin:'120px'});
document.querySelectorAll('.fx3').forEach(f=>fo.observe(f));
if(rm)return;
let pt=0;
addEventListener('mousemove',e=>{if(pt)return;pt=requestAnimationFrame(()=>{pt=0;const x=e.clientX/innerWidth-.5,y=e.clientY/innerHeight-.5;
 document.querySelectorAll('.view.on .fx3>*').forEach(n=>{const d=+n.dataset.d||10;n.style.setProperty('--px',(x*d*3).toFixed(1));n.style.setProperty('--py',(y*d*3).toFixed(1))});
 document.querySelectorAll('.view.on .h3d').forEach(t=>t.style.transform='perspective(1000px) rotateY('+(x*34).toFixed(1)+'deg) rotateX('+(-y*24).toFixed(1)+'deg)')})});
document.addEventListener('mousemove',e=>{const k=e.target.closest&&e.target.closest('.msg,.fnl');if(!k)return;const r=k.getBoundingClientRect();
 k.style.setProperty('--ry',((e.clientX-r.left)/r.width-.5)*10+'deg');k.style.setProperty('--rx',-((e.clientY-r.top)/r.height-.5)*10+'deg')});
document.addEventListener('mouseout',e=>{const k=e.target.closest&&e.target.closest('.msg,.fnl');if(k){k.style.setProperty('--rx','0deg');k.style.setProperty('--ry','0deg')}});
})();

/* Three-dimensional portfolio labels orbit the studio sphere. */
(()=>{
  const stage=document.getElementById('portfolio-orbit');
  if(!stage)return;
  const reducedMotion=matchMedia('(prefers-reduced-motion: reduce)').matches;
  const chips=[...stage.querySelectorAll('.portfolio-orbit-chip')];
  const count=chips.length;
  const points=chips.map((_,index)=>{
    const fraction=(index+.5)/count;
    const polar=Math.acos(1-2*fraction);
    const azimuth=Math.PI*(1+Math.sqrt(5))*(index+.5);
    return [Math.cos(azimuth)*Math.sin(polar),Math.sin(azimuth)*Math.sin(polar),Math.cos(polar)];
  });
  let width=0,height=0,radius=0,frame=0,lastFrame=0,angleY=0;
  const render=()=>{
    const tilt=.08,cX=Math.cos(tilt),sX=Math.sin(tilt),cY=Math.cos(angleY),sY=Math.sin(angleY);
    points.forEach(([baseX,baseY,baseZ],index)=>{
      let x=baseX,y=baseY*cX-baseZ*sX,z=baseY*sX+baseZ*cX;
      [x,z]=[x*cY+z*sY,-x*sY+z*cY];
      const perspective=900/(900-z*radius);
      const chip=chips[index];
      chip.style.transform=`translate(-50%,-50%) translate(${(x*radius*.86*perspective).toFixed(1)}px,${(y*radius*perspective).toFixed(1)}px) scale(${(perspective*.94).toFixed(3)})`;
      chip.style.opacity=(.28+.72*(z+1)/2).toFixed(2);
      chip.style.zIndex=String(Math.round(50+z*50));
    });
  };
  const resize=()=>{
    const bounds=stage.getBoundingClientRect();
    if(!bounds.width||!bounds.height)return;
    width=bounds.width;
    height=bounds.height;
    radius=Math.min(width*.38,height*.42);
    render();
  };
  const tick=now=>{
    frame=0;
    if(document.hidden||reducedMotion)return;
    const delta=Math.min((now-lastFrame)/1000,.05);
    lastFrame=now;
    angleY+=delta*(Math.PI*2/24);
    render();
    frame=requestAnimationFrame(tick);
  };
  const start=()=>{
    if(document.hidden||reducedMotion){
      if(frame){cancelAnimationFrame(frame);frame=0}
      return;
    }
    if(frame)return;
    lastFrame=performance.now();
    frame=requestAnimationFrame(tick);
  };
  const resizeObserver=new ResizeObserver(resize);
  resizeObserver.observe(stage);
  document.addEventListener('visibilitychange',()=>{
    if(document.hidden&&frame){cancelAnimationFrame(frame);frame=0}
    else start();
  });
  addEventListener('pagehide',()=>{
    if(frame)cancelAnimationFrame(frame);
    resizeObserver.disconnect();
  },{once:true});
  resize();
  start();
})();

/* ===== v9: luxury tech 3D scenes ===== */
(()=>{
const rm=matchMedia('(prefers-reduced-motion:reduce)').matches;
document.querySelectorAll('.fx3').forEach(e=>e.remove());
const six=a=>[0,1,2,3,4,5].map(()=>'<i></i>').join('');
const SH={
 orb:s=>'<div class="orbx" style="--s:'+s+'px"><div class="rg" style="inset:-12%;transform:rotateX(90deg)"></div><div class="rg" style="inset:-6%;transform:rotateY(70deg);border-color:rgba(150,181,248,.65)"></div><div class="sp"></div><div class="sat"></div></div>',
 stk:s=>'<div class="stk" style="--s:'+s+'px"><i></i><i></i><i></i><i></i></div>',
 gcb:s=>'<div class="gcb" style="--s:'+s+'px">'+six()+'</div>',
 glb:s=>'<div class="glb" style="--s:'+s+'px">'+[0,1,2,3,4,5].map(k=>'<i style="transform:rotateY('+k*30+'deg)"></i>').join('')+'<i class="eq"></i></div>',
 pl:s=>'<div class="pl"></div>'
};
const SZ={orb:150,stk:130,gcb:84,glb:124,pl:0};
const SETS=[['orb','stk','pl'],['glb','gcb','stk'],['stk','orb','gcb'],['gcb','glb','pl']];
const build=(host,i)=>{const L=i%2,set=SETS[i%4];
 const POS=[[L?'left':'right',2+(i*7%7),'top',6+(i*13%34),26],[L?'right':'left',3+(i*5%9),'bottom',10+(i*11%28),-18],[L?'left':'right',20+(i*9%24),'bottom',4+(i*7%14),12]];
 host.insertAdjacentHTML('afterbegin','<div class="fx4" aria-hidden="true">'+set.map((t,k)=>{const p=POS[k],sz=SZ[t]+(i*17%30);
  return '<div style="'+p[0]+':'+p[1]+'%;'+p[2]+':'+p[3]+'%" data-d="'+p[4]+'">'+SH[t](sz)+'</div>'}).join('')+'</div>')};
document.querySelectorAll('section:not(.hero)').forEach((s,i)=>build(s,i));
build($('#ft'),1);
document.querySelectorAll('.h3d').forEach(h=>{
 h.innerHTML='<div style="right:20px;top:60px">'+SH.orb(190)+'</div><div style="left:0;bottom:30px">'+SH.stk(130)+'</div><div style="left:40px;top:10px">'+SH.gcb(80)+'</div><div style="right:0;bottom:0">'+SH.glb(100)+'</div>'});
const io2=new IntersectionObserver(es=>es.forEach(e=>e.target.classList.toggle('off',!e.isIntersecting)),{rootMargin:'160px'});
document.querySelectorAll('.fx4,.h3d').forEach(f=>io2.observe(f));
if(rm)return;
let pt=0,st=0;
addEventListener('mousemove',e=>{if(pt)return;pt=requestAnimationFrame(()=>{pt=0;const x=e.clientX/innerWidth-.5,y=e.clientY/innerHeight-.5;
 document.querySelectorAll('.view.on .fx4>*,#ft .fx4>*').forEach(n=>{const d=+n.dataset.d||10;n.style.setProperty('--px',(x*d*3.4).toFixed(1));n.style.setProperty('--py',(y*d*3.4).toFixed(1))})})});
const sc=()=>{st=0;const vh=innerHeight;document.querySelectorAll('.view.on .fx4,#ft .fx4').forEach(f=>{const r=f.parentElement.getBoundingClientRect();if(r.bottom<-200||r.top>vh+200)return;const c=(r.top+r.height/2-vh/2)/vh;
 f.querySelectorAll(':scope>*').forEach(n=>n.style.setProperty('--sy',(-c*(+n.dataset.d||10)*9).toFixed(1)))})};
addEventListener('scroll',()=>{if(!st)st=requestAnimationFrame(sc)},{passive:true});addEventListener('hashchange',()=>setTimeout(sc,90));sc();
document.addEventListener('mousemove',e=>{const k=e.target.closest&&e.target.closest('.card');if(!k)return;const r=k.getBoundingClientRect();
 k.style.setProperty('--ry',((e.clientX-r.left)/r.width-.5)*22+'deg');k.style.setProperty('--rx',-((e.clientY-r.top)/r.height-.5)*22+'deg')});
})();

/* Three.js hero scene settles in, then keeps moving at a gentle pace. */
(()=>{
  const canvas=document.getElementById('gl');
  const host=document.querySelector('#v-home .hero-visual');
  if(!canvas||!host||!window.THREE)return;
  const reduceMotion=matchMedia('(prefers-reduced-motion:reduce)').matches;

  const renderer=new THREE.WebGLRenderer({canvas,alpha:true,antialias:true});
  renderer.setPixelRatio(Math.min(window.devicePixelRatio||1,1.25));
  const scene=new THREE.Scene();
  const camera=new THREE.PerspectiveCamera(42,1,.1,100);
  camera.position.z=7.2;
  const group=new THREE.Group();
  scene.add(group);

  const core=new THREE.Mesh(
    new THREE.OctahedronGeometry(1.05,0),
    new THREE.MeshStandardMaterial({color:0x7697ff,metalness:.25,roughness:.3,emissive:0x263f9d,emissiveIntensity:.3,flatShading:true})
  );
  const wire=new THREE.Mesh(
    new THREE.IcosahedronGeometry(1.32,1),
    new THREE.MeshBasicMaterial({color:0x9eb7ff,wireframe:true,transparent:true,opacity:.32})
  );
  const knot=new THREE.Mesh(
    new THREE.TorusKnotGeometry(1.62,.025,100,8,2,3),
    new THREE.MeshStandardMaterial({color:0xb38bff,metalness:.7,roughness:.26,emissive:0x321f6e,emissiveIntensity:.18})
  );
  group.add(core,wire,knot);

  const rings=[1.8,2.2].map((radius,index)=>{
    const ring=new THREE.Mesh(
      new THREE.TorusGeometry(radius,.012,6,96),
      new THREE.MeshBasicMaterial({color:index?0x9d79ea:0x72a9ff,transparent:true,opacity:.45})
    );
    ring.rotation.x=1.05+index*.42;
    ring.rotation.y=index*.55;
    group.add(ring);
    return ring;
  });
  const satellites=Array.from({length:5},(_,index)=>{
    const mesh=new THREE.Mesh(
      new THREE.BoxGeometry(.12,.12,.12),
      new THREE.MeshStandardMaterial({color:index%2?0xb7a2ff:0x9ec5ff,metalness:.35,roughness:.32,emissive:0x283b7a,emissiveIntensity:.2})
    );
    group.add(mesh);
    return mesh;
  });
  const positions=new Float32Array(360);
  for(let i=0;i<positions.length;i++)positions[i]=(Math.random()-.5)*12;
  const starGeometry=new THREE.BufferGeometry();
  starGeometry.setAttribute('position',new THREE.BufferAttribute(positions,3));
  const stars=new THREE.Points(starGeometry,new THREE.PointsMaterial({color:0xacc5ff,size:.025,transparent:true,opacity:.65}));
  scene.add(stars,new THREE.AmbientLight(0x9bb7ff,.9));
  const keyLight=new THREE.PointLight(0xa6c2ff,2.1,30);
  keyLight.position.set(4,4,6);
  const fillLight=new THREE.PointLight(0xb58aff,1.2,30);
  fillLight.position.set(-4,-2,3);
  scene.add(keyLight,fillLight);

  let frame=0;
  let resizeFrame=0;
  let lastFrame=0;
  let idleTime=0;
  let settled=false;
  const render=()=>{
    const width=host.clientWidth,height=host.clientHeight;
    if(!width||!height)return;
    renderer.setSize(width,height,false);
    camera.aspect=width/height;
    camera.fov=width<=560?58:42;
    group.position.x=width<=560?.55:0;
    camera.updateProjectionMatrix();
    renderer.render(scene,camera);
  };
  const resizeObserver=new ResizeObserver(()=>{
    cancelAnimationFrame(resizeFrame);
    resizeFrame=requestAnimationFrame(render);
  });
  resizeObserver.observe(host);
  render();

  const setPose=progress=>{
    const ease=1-Math.pow(1-progress,3);
    group.rotation.y=ease*.34;
    group.rotation.x=Math.sin(ease*Math.PI)*.12;
    group.scale.setScalar(.82+ease*.18);
    core.rotation.y=progress*1.1;
    wire.rotation.y=-progress*.72;
    wire.rotation.x=progress*.3;
    knot.rotation.x=progress*.45;
    knot.rotation.y=progress*.68;
    rings.forEach((ring,index)=>{ring.rotation.z=progress*(index?-.34:.46)});
    satellites.forEach((satellite,index)=>{
      const angle=progress*1.2+index*(Math.PI*2/satellites.length);
      satellite.position.set(Math.cos(angle)*2.45,Math.sin(angle*1.35)*.8,Math.sin(angle)*1.25);
      satellite.rotation.set(progress+index,progress*1.2+index*.4,progress*.7);
    });
    stars.rotation.y=progress*.08;
  };
  const started=performance.now();
  const animate=now=>{
    frame=0;
    if(document.hidden)return;
    const delta=Math.min((now-lastFrame)/1000,.05);
    lastFrame=now;
    idleTime+=delta;
    const progress=Math.min((now-started)/1700,1);
    if(!settled){
      setPose(progress);
      settled=progress>=1;
    }else{
      group.rotation.y+=delta*.12;
      core.rotation.y+=delta*.2;
      wire.rotation.y-=delta*.11;
      wire.rotation.x+=delta*.045;
      knot.rotation.x+=delta*.08;
      knot.rotation.y+=delta*.13;
      rings.forEach((ring,index)=>{ring.rotation.z+=delta*(index?-.09:.12)});
      satellites.forEach((satellite,index)=>{
        const angle=1.2+idleTime*.42+index*(Math.PI*2/satellites.length);
        satellite.position.set(Math.cos(angle)*2.45,Math.sin(angle*1.35)*.8,Math.sin(angle)*1.25);
        satellite.rotation.x+=delta*.3;
        satellite.rotation.y+=delta*.38;
        satellite.rotation.z+=delta*.21;
      });
      stars.rotation.y+=delta*.012;
    }
    renderer.render(scene,camera);
    frame=requestAnimationFrame(animate);
  };
  if(reduceMotion){
    setPose(1);
    render();
  }else{
    render();
    lastFrame=performance.now();
    frame=requestAnimationFrame(animate);
  }
  document.addEventListener('visibilitychange',()=>{
    if(document.hidden&&frame){cancelAnimationFrame(frame);frame=0}
    else if(!reduceMotion&&!frame){lastFrame=performance.now();frame=requestAnimationFrame(animate)}
  });
  addEventListener('pagehide',()=>{
    cancelAnimationFrame(frame);
    cancelAnimationFrame(resizeFrame);
    resizeObserver.disconnect();
    renderer.dispose();
    starGeometry.dispose();
  },{once:true});
})();

/* Reveal the Contact page CTA once when it first enters view. */
(()=>{
  const section=document.querySelector('.cta-contact');
  if(!section||matchMedia('(prefers-reduced-motion: reduce)').matches)return;
  section.classList.add('cta-reveal-ready');
  if(!('IntersectionObserver' in window)){
    section.classList.add('cta-visible');
    return;
  }
  const observer=new IntersectionObserver(entries=>{
    if(entries.some(entry=>entry.isIntersecting)){
      section.classList.add('cta-visible');
      observer.disconnect();
    }
  },{threshold:.2});
  observer.observe(section);
})();
