// ═══════════════════════
// FOOD DATA
// ═══════════════════════
const foods = [
  {name:"Margherita Pizza",price:199,category:"Pizza",img:"images/margheritapizza.jpg"},
  {name:"Farmhouse Pizza",price:249,category:"Pizza",img:"images/farmhousepizza.jpg"},
  {name:"Chicken Pizza",price:299,category:"Pizza",img:"images/chickenpizza.jpg"},
  {name:"Veg Extravaganza Pizza",price:299,category:"Pizza",img:"images/vegextravaganzapizza.jpg"},
  {name:"Chicken Tandoori Pizza",price:349,category:"Pizza",img:"images/chickentandooripizza.jpg"},
  {name:"Paneer Makhani Pizza",price:279,category:"Pizza",img:"images/paneermakhanipizza.jpg"},
  {name:"Mexican Green Wave Pizza",price:299,category:"Pizza",img:"images/mexicangreenwave.jpg"},
  {name:"Veg Burger",price:129,category:"Burgers",img:"images/vegburger.jpg"},
  {name:"Chicken Burger",price:149,category:"Burgers",img:"images/chickenburger.jpg"},
  {name:"Cheese Veg Burger",price:149,category:"Burgers",img:"images/cheesevegburger.jpg"},
  {name:"Chicken Cheese Burger",price:179,category:"Burgers",img:"images/chickencheeseburger.jpg"},
  {name:"Aloo Tikki Burger",price:129,category:"Burgers",img:"images/alootikkiburger.jpg"},
  {name:"Paneer Biryani",price:219,category:"Main Course",img:"images/paneerbiryani.jpg"},
  {name:"Chicken Biryani",price:249,category:"Main Course",img:"images/chickenbiryani.jpg"},
  {name:"Butter Chicken",price:289,category:"Main Course",img:"images/butterchicken.jpg"},
  {name:"Paneer Butter Masala",price:249,category:"Main Course",img:"images/paneerbuttermasala.jpg"},
  {name:"Dal Makhani",price:199,category:"Main Course",img:"images/dalmakhani.jpg"},
  {name:"Egg Curry",price:199,category:"Main Course",img:"images/eggcurry.jpg"},
  {name:"Chicken Curry",price:249,category:"Main Course",img:"images/chickencurry.jpg"},
  {name:"Prawn Curry",price:299,category:"Main Course",img:"images/prawncurry.jpg"},
  {name:"Chole Bhature",price:189,category:"Main Course",img:"images/cholebhature.jpg"},
  {name:"Veg Thali",price:259,category:"Main Course",img:"images/vegthaali.jpg"},
  {name:"Non Veg Thali",price:349,category:"Main Course",img:"images/nonvegthaali.jpg"},
  {name:"Vegetable Manchurian (Gravy)",price:219,category:"Chinese",img:"images/vegetablemanchurian.jpg"},
  {name:"Vegetable Manchurian (Dry)",price:200,category:"Chinese",img:"images/drymanchurian.jpg"},
  {name:"Chilli Chicken",price:249,category:"Chinese",img:"images/chillichicken.jpg"},
  {name:"Hakka Noodles",price:199,category:"Chinese",img:"images/hakkanoodles.jpg"},
  {name:"Veg Fried Rice",price:179,category:"Chinese",img:"images/vegfriedrice.jpg"},
  {name:"Chicken Fried Rice",price:229,category:"Chinese",img:"images/chickenfriedrice.jpg"},
  {name:"Sweet Corn Soup",price:129,category:"Chinese",img:"images/sweetcornsoup.jpg"},
  {name:"Hot & Sour Soup",price:139,category:"Chinese",img:"images/hotandsoursoup.jpg"},
  {name:"Spring Rolls (Veg)",price:139,category:"Chinese",img:"images/vegspringrolls.jpg"},
  {name:"Spring Rolls (Chicken)",price:169,category:"Chinese",img:"images/chickenspringrolls.jpg"},
  {name:"Chilli Paneer Dry",price:229,category:"Chinese",img:"images/chillipaneerdry.jpg"},
  {name:"Chilli Paneer Gravy",price:249,category:"Chinese",img:"images/chillipaneergravy.jpg"},
  {name:"Schezwan Noodles (Veg)",price:199,category:"Chinese",img:"images/schezwannoodlesveg.jpg"},
  {name:"Schezwan Noodles (Chicken)",price:229,category:"Chinese",img:"images/schezwannoodleschicken.jpg"},
  {name:"Potato Nuggets",price:119,category:"Starters",img:"images/potatobites.jpg"},
  {name:"Paneer Bites",price:169,category:"Starters",img:"images/paneerbites.jpg"},
  {name:"Chicken Nuggets",price:149,category:"Starters",img:"images/chickennuggets.jpg"},
  {name:"Paneer Tikka",price:179,category:"Starters",img:"images/paneertikka.jpg"},
  {name:"Veg Spring Rolls",price:139,category:"Starters",img:"images/vegspringrolls.jpg"},
  {name:"Chicken 65",price:199,category:"Starters",img:"images/chicken65.jpg"},
  {name:"Fish Fingers",price:179,category:"Starters",img:"images/fishfingers.jpg"},
  {name:"Hara Bhara Kabab",price:149,category:"Starters",img:"images/harabharakabab.jpg"},
  {name:"Chocolate Shake",price:129,category:"Beverages",img:"images/chocolatemilkshake.jpg"},
  {name:"Cold Coffee",price:99,category:"Beverages",img:"images/coldcoffee.jpg"},
  {name:"Masala Chai",price:49,category:"Beverages",img:"images/masalachai.jpg"},
  {name:"Lemonade",price:79,category:"Beverages",img:"images/lemonade.jpg"},
  {name:"Mango Shake",price:129,category:"Beverages",img:"images/mangoshake.jpg"},
  {name:"Iced Mocha",price:149,category:"Beverages",img:"images/icedmocha.jpg"},
  {name:"Coke",price:49,category:"Beverages",img:"images/coke.jpg"},
  {name:"Sprite",price:49,category:"Beverages",img:"images/sprite.jpg"},
  {name:"Buttermilk",price:39,category:"Beverages",img:"images/buttermilk.jpg"},
  {name:"Lassi (Sweet/Salted)",price:69,category:"Beverages",img:"images/lassi.jpg"},
  {name:"Vanilla Ice Cream",price:89,category:"Desserts",img:"images/vanillaicecream.jpg"},
  {name:"Chocolate Mousse",price:149,category:"Desserts",img:"images/chocolatemousse.jpg"},
  {name:"Gulab Jamun",price:99,category:"Desserts",img:"images/gulabjamun.jpg"},
  {name:"Rasgulla",price:89,category:"Desserts",img:"images/rasgulla.jpg"},
  {name:"Brownie with Ice Cream",price:149,category:"Desserts",img:"images/browniewithicecream.jpg"},
  {name:"Rasmalai",price:129,category:"Desserts",img:"images/rasmalai.jpg"},
  {name:"Jalebi",price:79,category:"Desserts",img:"images/jalebi.jpg"},
  {name:"Custard",price:99,category:"Desserts",img:"images/custard.jpg"},
  {name:"Kheer",price:119,category:"Desserts",img:"images/kheer.jpg"},
  {name:"Butter Naan",price:49,category:"Breads & Rice",img:"images/butternaan.jpg"},
  {name:"Garlic Naan",price:59,category:"Breads & Rice",img:"images/garlicnaan.jpg"},
  {name:"Plain Naan",price:39,category:"Breads & Rice",img:"images/plainnaan.jpg"},
  {name:"Tandoori Roti",price:35,category:"Breads & Rice",img:"images/tandooriroti.jpg"},
  {name:"Rumali Roti",price:39,category:"Breads & Rice",img:"images/rumaliroti.jpg"},
  {name:"Paratha",price:45,category:"Breads & Rice",img:"images/paratha.jpg"},
  {name:"Jeera Rice",price:129,category:"Breads & Rice",img:"images/jeerarice.jpg"},
  {name:"Veg Pulao",price:149,category:"Breads & Rice",img:"images/vegpulao.jpg"},
  {name:"Chicken Pulao",price:179,category:"Breads & Rice",img:"images/chickenpulao.jpg"},
  {name:"Fried Rice",price:179,category:"Breads & Rice",img:"images/friedrice.jpg"},
  {name:"Masala Dosa",price:149,category:"South Indian",img:"images/masaladosa.jpg"},
  {name:"Plain Dosa",price:99,category:"South Indian",img:"images/plaindosa.jpg"},
  {name:"Rava Dosa",price:129,category:"South Indian",img:"images/ravadosa.jpg"},
  {name:"Idli (2 pcs)",price:79,category:"South Indian",img:"images/idli.jpg"},
  {name:"Medu Vada (2 pcs)",price:89,category:"South Indian",img:"images/meduvada.jpg"},
  {name:"Uttapam (Onion/Tomato)",price:129,category:"South Indian",img:"images/uttapam.jpg"},
  {name:"Pongal",price:149,category:"South Indian",img:"images/pongal.jpg"},
  {name:"Filter Coffee",price:49,category:"South Indian",img:"images/filtercoffee.jpg"},
  {name:"Poha",price:79,category:"Breakfast Options",img:"images/poha.jpg"},
  {name:"Upma",price:79,category:"Breakfast Options",img:"images/upma.jpg"},
  {name:"Pancakes (2 pcs)",price:129,category:"Breakfast Options",img:"images/pancake.jpg"},
  {name:"Bread with Jam & Butter",price:69,category:"Breakfast Options",img:"images/breadjam.jpg"},
  {name:"Protein Shake",price:149,category:"Breakfast Options",img:"images/proteinshake.jpg"},
  {name:"Egg Omelette (2 pcs)",price:99,category:"Breakfast Options",img:"images/omlette.jpg"},
  {name:"French Toast",price:119,category:"Breakfast Options",img:"images/frenchtoast.jpg"},
  {name:"Idli",price:79,category:"Breakfast Options",img:"images/idli.jpg"},
  {name:"Smoothie Bowl",price:149,category:"Breakfast Options",img:"images/smoothiebowl.jpg"},
  {name:"Cornflakes with Milk",price:89,category:"Breakfast Options",img:"images/cornflakes.jpg"},
  {name:"Moong Dal Cheela",price:99,category:"Breakfast Options",img:"images/moongdalcheela.jpg"},
  {name:"Oatmeal",price:119,category:"Breakfast Options",img:"images/oatmeal.jpg"},
  {name:"Avocado Toast",price:149,category:"Breakfast Options",img:"images/avocadotoast.jpg"},
  {name:"White Sauce Pasta",price:219,category:"Pasta",img:"images/whitesaucepasta.jpg"},
  {name:"Red Sauce Pasta",price:209,category:"Pasta",img:"images/redsaucepasta.jpg"},
  {name:"Pesto Pasta",price:229,category:"Pasta",img:"images/pestopasta.jpg"},
  {name:"Marinara Pasta",price:219,category:"Pasta",img:"images/marinarapasta.jpg"},
  {name:"Aglio e Olio Pasta",price:199,category:"Pasta",img:"images/aglioeolio.jpg"},
  {name:"Veg Grilled Sandwich",price:149,category:"Sandwiches",img:"images/veggrilledsandwich.jpg"},
  {name:"Cheese Veg Sandwich",price:159,category:"Sandwiches",img:"images/cheesevegsandwich.jpg"},
  {name:"Paneer Tikka Sandwich",price:169,category:"Sandwiches",img:"images/paneertikkasandwich.jpg"},
  {name:"Chicken Grilled Sandwich",price:189,category:"Sandwiches",img:"images/grilledchickensandwich.jpg"},
  {name:"Coleslaw Sandwich",price:149,category:"Sandwiches",img:"images/coleslawsandwich.jpg"},
  {name:"Veg Wrap",price:149,category:"Wraps & Rolls",img:"images/vegwrap.jpg"},
  {name:"Paneer Wrap",price:169,category:"Wraps & Rolls",img:"images/paneerwrap.jpg"},
  {name:"Chicken Wrap",price:189,category:"Wraps & Rolls",img:"images/chickenwrap.jpg"},
  {name:"Egg Roll",price:129,category:"Wraps & Rolls",img:"images/eggroll.jpg"},
  {name:"Chicken Shawarma",price:199,category:"Wraps & Rolls",img:"images/chickenshawarma.jpg"},
  {name:"Kabab Roll",price:189,category:"Wraps & Rolls",img:"images/kababroll.jpg"},
  {name:"Chickpea Salad",price:149,category:"Salads",img:"images/chickpeasalad.jpg"},
  {name:"Greek Salad",price:149,category:"Salads",img:"images/greeksalad.jpg"},
  {name:"Caesar Salad (Chicken)",price:199,category:"Salads",img:"images/caesarchickensalad.jpg"},
  {name:"Fruit Salad",price:129,category:"Salads",img:"images/fruitsalad.jpg"},
  {name:"Coleslaw",price:99,category:"Salads",img:"images/coleslaw.jpg"},
  {name:"French Fries",price:99,category:"Side Dishes",img:"images/frenchfries.jpg"},
  {name:"Masala Fries",price:119,category:"Side Dishes",img:"images/masalafries.jpg"},
  {name:"Cheesy Garlic Bread",price:149,category:"Side Dishes",img:"images/cheesygarlicbread.jpg"},
  {name:"Onion Rings",price:129,category:"Side Dishes",img:"images/onionrings.jpg"},
  {name:"Chicken Wings",price:199,category:"Side Dishes",img:"images/chickenwings.jpg"},
  {name:"Veg Nuggets (3 pcs)",price:99,category:"Side Dishes",img:"images/vegnuggets.jpg"},
  {name:"Cheese Balls (3 pcs)",price:119,category:"Side Dishes",img:"images/cheeseballs.jpg"},
  {name:"Chicken Galauti Kabab",price:219,category:"Side Dishes",img:"images/chickengalautikabab.jpg"},
  {name:"Cheese Dip",price:30,category:"Side Dishes",img:"images/cheesedip.jpg"},
  {name:"Jalapeno Dip",price:30,category:"Side Dishes",img:"images/jalapenodip.jpg"},
  {name:"Schezwan Sauce",price:25,category:"Side Dishes",img:"images/schezwansauce.jpg"},
  {name:"Ketchup",price:10,category:"Side Dishes",img:"images/ketchup.jpg"},
  {name:"Red Chilli Sauce",price:20,category:"Side Dishes",img:"images/redchillisauce.jpg"}
];

// ═══════════════════════
// STATE
// ═══════════════════════
let cart=[], quantities={}, discount=0, currentUser=null, toastTimer=null, modalFood=null;
let orderHistory=[];

function loadUserHistory(){
  if(currentUser){
    try{
      orderHistory = JSON.parse(localStorage.getItem("fdHistory_"+currentUser.email)||"[]");
    }catch(e){}
  } else {
    try{
      orderHistory = JSON.parse(localStorage.getItem("fdHistory")||"[]");
    }catch(e){}
  }
}
loadUserHistory();

// ═══════════════════════
// FLOATIES
// ═══════════════════════
(function(){
  const ems=["🍕","🍔","🍜","🍣","🧁","🍩","🌮","🍦","🥗","🍛","🍟","🥤"];
  ["heroFloaties","loginFloaties","signupFloaties","welcomeFloaties"].forEach(id=>{
    const w=document.getElementById(id); if(!w) return;
    ems.forEach((e,i)=>{
      const s=document.createElement("span"); s.className="floaty"; s.textContent=e;
      s.style.cssText=`left:${4+i*8}%;bottom:-60px;animation-duration:${6+Math.random()*8}s;animation-delay:${i*0.65}s;font-size:${1.4+Math.random()*0.8}rem`;
      w.appendChild(s);
    });
  });
})();

// ═══════════════════════
// FILTER SCROLL
// ═══════════════════════
function scrollFilters(dir){
  const bar=document.getElementById("filtersBar");
  if(!bar) return;
  bar.scrollBy({ left: dir * 200, behavior:"smooth" });
}

// ═══════════════════════
// NAVIGATION
// ═══════════════════════
function showPage(id){
  document.querySelectorAll(".page").forEach(p=>p.classList.remove("active"));
  document.getElementById(id).classList.add("active");
  window.scrollTo(0,0);
  const noNav=["heroPage","loginPage","signupPage","welcomePage"];
  document.getElementById("bottomNav").style.display = noNav.includes(id) ? "none" : "flex";
}

function setNav(key){
  document.querySelectorAll(".nav-btn").forEach(b=>b.classList.remove("active"));
  const el=document.getElementById("nav-"+key);
  if(el) el.classList.add("active");
}

function navClick(key){
  setNav(key);
  if(key==="home"){ showPage("heroPage"); }
  else if(key==="menu"){ goToMenu(); }
  else if(key==="cart"){ goToCart(); }
  else if(key==="history"){ showPage("historyPage"); renderHistory(); }
  else if(key==="profile"){ showPage("profilePage"); renderProfile(); }
}

function goToMenu(){
  showPage("menuPage"); setNav("menu");
  const hu=document.getElementById("headerUser");
  if(hu) hu.textContent=currentUser?"👤 "+currentUser.name:"";
  document.getElementById("searchBar").value="";
  renderMenu(foods); resetFilters();
}

function goToCart(){
  clearToast(); showPage("cartPage"); setNav("cart"); renderCart();
}

// ═══════════════════════
// AUTH HELPERS
// ═══════════════════════
function togglePw(id,btn){
  const inp=document.getElementById(id);
  inp.type=inp.type==="password"?"text":"password";
  btn.textContent=inp.type==="password"?"👁":"🙈";
}

function fieldErr(id,show){ 
  document.getElementById(id).style.display=show?"block":"none"; 
}

function globalErr(id,msg){ 
  const el=document.getElementById(id); 
  el.textContent=msg; 
  el.style.display=msg?"block":"none"; 
}

function validEmail(e){ 
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e); 
}

function validPhone(p){ 
  return /^\d{10}$/.test(p); 
}

// ═══════════════════════
// SIGNUP
// ═══════════════════════
function doSignup(){
  const name=document.getElementById("signupName").value.trim();
  const email=document.getElementById("signupEmail").value.trim();
  const phone=document.getElementById("signupPhone").value.trim();
  const pw=document.getElementById("signupPw").value;
  const confirm=document.getElementById("signupConfirm").value;
  let ok=true;
  
  globalErr("signupGlobalErr","");
  
  if(name.length<2){fieldErr("signupNameErr",true);ok=false;}else fieldErr("signupNameErr",false);
  if(!validEmail(email)){fieldErr("signupEmailErr",true);ok=false;}else fieldErr("signupEmailErr",false);
  if(!validPhone(phone)){fieldErr("signupPhoneErr",true);ok=false;}else fieldErr("signupPhoneErr",false);
  if(pw.length<6){fieldErr("signupPwErr",true);ok=false;}else fieldErr("signupPwErr",false);
  if(pw!==confirm){fieldErr("signupConfirmErr",true);ok=false;}else fieldErr("signupConfirmErr",false);
  if(!ok) return;
  
  let users={};
  try{users=JSON.parse(localStorage.getItem("fdUsers")||"{}");}catch(e){}
  if(users[email]){globalErr("signupGlobalErr","⚠️ Email already registered. Please login.");return;}
  
  users[email]={name,email,phone,pw};
  try{localStorage.setItem("fdUsers",JSON.stringify(users));}catch(e){}
  
  currentUser={name,email,phone};
  loadUserHistory();
  showWelcome(name,"new");
}

// ═══════════════════════
// LOGIN
// ═══════════════════════
function doLogin(){
  const email=document.getElementById("loginEmail").value.trim();
  const pw=document.getElementById("loginPw").value;
  let ok=true;
  
  globalErr("loginGlobalErr","");
  
  if(!validEmail(email)){fieldErr("loginEmailErr",true);ok=false;}else fieldErr("loginEmailErr",false);
  if(!pw){fieldErr("loginPwErr",true);ok=false;}else fieldErr("loginPwErr",false);
  if(!ok) return;
  
  let users={};
  try{users=JSON.parse(localStorage.getItem("fdUsers")||"{}");}catch(e){}
  
  if(!users[email]){globalErr("loginGlobalErr","❌ No account with this email. Please sign up.");return;}
  if(users[email].pw!==pw){globalErr("loginGlobalErr","❌ Incorrect password. Try again.");return;}
  
  currentUser={name:users[email].name,email,phone:users[email].phone};
  loadUserHistory();
  showWelcome(currentUser.name,"returning");
}

function skipAuth(){ 
  currentUser=null; 
  loadUserHistory(); 
  showWelcome("Guest","guest"); 
}

function showWelcome(name,type){
  const av=document.getElementById("welcomeAvatar");
  const ti=document.getElementById("welcomeTitle");
  const ms=document.getElementById("welcomeMsg");
  
  if(type==="guest"){ 
    av.textContent="🍽"; 
    ti.textContent="Welcome, Guest!"; 
    ms.textContent="Browse our menu and order your favourites!"; 
  }
  else if(type==="new"){ 
    av.textContent="🎉"; 
    ti.textContent="Welcome, "+name+"!"; 
    ms.textContent="Your account is ready. Time to explore the menu!"; 
  }
  else { 
    av.textContent="👋"; 
    ti.textContent="Welcome back, "+name+"!"; 
    ms.textContent="Great to see you again. Let's get ordering!"; 
  }
  showPage("welcomePage");
}

// ═══════════════════════
// MENU RENDER
// ═══════════════════════
function safeId(n){ 
  return n.replace(/[^a-z0-9]/gi,"_"); 
}

function renderMenu(data){
  const fc=document.getElementById("foodContainer");
  fc.innerHTML="";
  fc.className="container"+(data.length===1?" single-result":"");
  
  data.forEach((food,i)=>{
    if(!quantities[food.name] || !cart.find(c=>c.name===food.name)) quantities[food.name]=1;
    
    const qid="q_"+safeId(food.name);
    const idx=foods.indexOf(food);
    const inCart=cart.find(c=>c.name===food.name);
    const badgeStyle=inCart?"display:block":"display:none";
    const badgeQty=inCart?inCart.qty:0;
    
    fc.innerHTML+=`
      <div class="card" style="animation-delay:${i*0.04}s" onclick="openModal(${idx})">
        <div class="card-in-cart-badge" id="badge_${safeId(food.name)}" style="${badgeStyle}">🛒 ${badgeQty} in cart</div>
        <img src="${food.img}" alt="${food.name}">
        <h3>${food.name}</h3>
        <div class="price">₹${food.price}</div>
        <div class="cat-label">${food.category}</div>
        <div class="qty" onclick="event.stopPropagation()">
          <button onclick="changeQty(${idx},-1)">−</button>
          <span id="${qid}">${quantities[food.name]}</span>
          <button onclick="changeQty(${idx},1)">+</button>
        </div>
        <button class="addBtn" onclick="event.stopPropagation();addToCart(${idx})">Add to Cart</button>
      </div>`;
  });
}

function resetFilters(){
  document.querySelectorAll(".filters button").forEach(b=>b.classList.remove("active-filter"));
  const f=document.querySelector(".filters button"); 
  if(f) f.classList.add("active-filter");
}

function changeQty(idx,val){
  const food=foods[idx];
  quantities[food.name]=Math.max(1,(quantities[food.name]||1)+val);
  const el=document.getElementById("q_"+safeId(food.name));
  if(el) el.textContent=quantities[food.name];
  
  if(val===-1){
    const ci=cart.findIndex(c=>c.name===food.name);
    if(ci>-1){
      cart[ci].qty=Math.max(0,cart[ci].qty-1);
      if(cart[ci].qty===0){ cart.splice(ci,1); }
      updateCount();
      updateCardBadge(food.name);
    }
  }
}

// ═══════════════════════
// CART ACTIONS
// ═══════════════════════
function addToCart(idx){
  const food=foods[idx];
  const existing=cart.find(i=>i.name===food.name);
  if(existing){ 
    existing.qty+=quantities[food.name]; 
  } else{ 
    cart.push({...food,qty:quantities[food.name],note:""}); 
  }
  updateCount(); 
  showToast(food.name);
  updateCardBadge(food.name);
  
  const btn=document.querySelector(".cart-btn");
  if(btn){btn.classList.remove("bounce");void btn.offsetWidth;btn.classList.add("bounce");}
}

function updateCardBadge(name){
  const badge=document.getElementById("badge_"+safeId(name));
  if(!badge) return;
  const inCart=cart.find(c=>c.name===name);
  if(inCart){ 
    badge.style.display="block"; 
    badge.textContent="🛒 "+inCart.qty+" in cart"; 
  } else { 
    badge.style.display="none"; 
  }
}

function updateCount(){
  const total=cart.reduce((s,i)=>s+i.qty,0);
  document.getElementById("cartCount").textContent=total;
  const dot=document.getElementById("navCartDot");
  if(dot){ 
    dot.textContent=total; 
    dot.style.display=total>0?"block":"none"; 
  }
}

// ═══════════════════════
// TOAST
// ═══════════════════════
function showToast(name){
  const t=document.getElementById("toast");
  document.getElementById("toastName").innerHTML="🛍️ <strong>"+name+"</strong> added!";
  if(toastTimer) clearTimeout(toastTimer);
  t.classList.remove("show"); 
  void t.offsetWidth; 
  t.classList.add("show");
  toastTimer=setTimeout(()=>t.classList.remove("show"),3500);
}

function clearToast(){ 
  if(toastTimer) clearTimeout(toastTimer); 
  document.getElementById("toast").classList.remove("show"); 
}

// ═══════════════════════
// ITEM MODAL
// ═══════════════════════
function openModal(idx){
  modalFood=foods[idx];
  document.getElementById("modalImg").src=modalFood.img;
  document.getElementById("modalImg").alt=modalFood.name;
  document.getElementById("modalName").textContent=modalFood.name;
  document.getElementById("modalCat").textContent="📂 "+modalFood.category;
  document.getElementById("modalPrice").textContent="₹"+modalFood.price;
  
  const existing=cart.find(c=>c.name===modalFood.name);
  const initQty=existing?existing.qty:(quantities[modalFood.name]||1);
  document.getElementById("modalQtyVal").textContent=initQty;
  quantities[modalFood.name]=initQty;
  document.getElementById("modalNote").value=existing?existing.note:"";
  
  document.getElementById("itemModal").classList.add("open");
  document.body.style.overflow="hidden";
}

function closeModal(){ 
  document.getElementById("itemModal").classList.remove("open"); 
  document.body.style.overflow=""; 
}

function modalBgClick(e){ 
  if(e.target===document.getElementById("itemModal")) closeModal(); 
}

function modalQtyChange(val){
  if(!modalFood) return;
  const el=document.getElementById("modalQtyVal");
  let q=Math.max(1,parseInt(el.textContent)+val); 
  el.textContent=q;
  quantities[modalFood.name]=q;
  const cardEl=document.getElementById("q_"+safeId(modalFood.name));
  if(cardEl) cardEl.textContent=q;
}

function modalAddCart(){
  if(!modalFood) return;
  const newQty=parseInt(document.getElementById("modalQtyVal").textContent);
  const note=document.getElementById("modalNote").value.trim();
  const inCart=cart.find(c=>c.name===modalFood.name);
  
  if(inCart){
    inCart.qty=newQty;
    inCart.note=note;
    updateCount();
    showToast(modalFood.name);
    updateCardBadge(modalFood.name);
    const btn=document.querySelector(".cart-btn");
    if(btn){btn.classList.remove("bounce");void btn.offsetWidth;btn.classList.add("bounce");}
  } else {
    quantities[modalFood.name]=newQty;
    const idx=foods.indexOf(modalFood);
    addToCart(idx);
    const added=cart.find(c=>c.name===modalFood.name);
    if(added) added.note=note;
  }
  closeModal();
}

// ═══════════════════════
// SEARCH & FILTER
// ═══════════════════════
function searchFood(q){
  q=q.trim().toLowerCase();
  document.querySelectorAll(".filters button").forEach(b=>b.classList.remove("active-filter"));
  if(!q){
    resetFilters();
    renderMenu(foods);
  } else {
    renderMenu(foods.filter(f=>f.name.toLowerCase().includes(q)||f.category.toLowerCase().includes(q)));
  }
}

function filterFood(cat,btn){
  document.querySelectorAll(".filters button").forEach(b=>b.classList.remove("active-filter"));
  btn.classList.add("active-filter");
  document.getElementById("searchBar").value="";
  renderMenu(cat==="All"?foods:foods.filter(f=>f.category===cat));
}

// ═══════════════════════
// CART RENDER
// ═══════════════════════
const FREE_THRESH=499;
const DELIVERY_FEE=50;

function renderCart(){
  const wrap=document.getElementById("cartBody"); 
  wrap.innerHTML="";
  
  if(!cart.length){
    wrap.innerHTML=`<div class="cart-empty">😕 Your cart is empty!<br><button class="back-btn" style="margin-top:20px" onclick="goToMenu()">Browse Menu</button></div>`;
    return;
  }
  
  const sub=cart.reduce((s,i)=>s+i.price*i.qty,0);
  const rem=Math.max(0,FREE_THRESH-sub);
  const pct=Math.min(100,(sub/FREE_THRESH)*100);
  
  wrap.innerHTML+=`<div class="delivery-bar-wrap"><p>${rem>0?"Add <strong>₹"+rem+"</strong> more for FREE delivery! 🛵":"🎉 You've unlocked <strong>FREE delivery!</strong>"}</p><div class="delivery-bg"><div class="delivery-fill" style="width:${pct}%"></div></div></div>`;

  cart.forEach((item,ci)=>{
    wrap.innerHTML+=`
      <div class="cart-card">
        <img src="${item.img}" alt="${item.name}">
        <div class="cc-info">
          <strong>${item.name}</strong>
          <div class="cc-price">₹${item.price} each</div>
          ${item.note?`<div class="cc-note">📝 ${item.note}</div>`:""}
          <div class="cc-qty">
            <button onclick="cartQty(${ci},-1)">−</button>
            <span>${item.qty}</span>
            <button onclick="cartQty(${ci},1)">+</button>
          </div>
        </div>
        <div class="cc-right">
          <div class="cc-total">₹${item.price*item.qty}</div>
          <button class="rm-btn" onclick="removeItem(${ci})">🗑️</button>
        </div>
      </div>`;
  });

  wrap.innerHTML+=`
    <div class="address-box">
      <h3>📍 Delivery Address</h3>
      <div class="addr-warn" id="addrWarn">
        <div class="addr-warn-inner">
          <span class="addr-warn-icon">📍</span>
          <div class="addr-warn-text">
            <strong>Address Required!</strong>
            <span>Please fill in your Flat/House No., City and PIN Code to place your order.</span>
          </div>
        </div>
      </div>
      <div class="addr-grid">
        <input type="text" id="addrName" placeholder="Full Name" value="${currentUser?currentUser.name:''}">
        <input type="tel" id="addrPhone" placeholder="Phone" value="${currentUser?currentUser.phone:''}">
        <input type="text" id="addrFlat" placeholder="Flat / House No.">
        <input type="text" id="addrArea" placeholder="Area / Street">
        <input type="text" id="addrCity" placeholder="City">
        <input type="text" id="addrPin" placeholder="PIN Code" maxlength="6">
      </div>
      <div class="addr-full"><input type="text" id="addrLandmark" placeholder="Landmark (optional)"></div>
    </div>`;

  wrap.innerHTML+=`
    <div class="promo-box">
      <h3>🎟️ Promo Code</h3>
      <div class="promo-row">
        <input type="text" id="promoInput" placeholder="Try: SAVE10, SAVE20, FLAT100">
        <button onclick="applyPromo()">Apply</button>
      </div>
      <p id="promoMsg"></p>
    </div>`;

  const deliveryFee = sub >= FREE_THRESH ? 0 : DELIVERY_FEE;
  const total=Math.max(0,sub-discount+deliveryFee);
  
  wrap.innerHTML+=`
    <div class="order-summary">
      <h3>📋 Order Summary</h3>
      <div class="sum-row"><span>Subtotal</span><span>₹${sub}</span></div>
      <div class="sum-row"><span>Delivery</span><span style="color:${deliveryFee>0?'#ff3366':'green'}">${deliveryFee>0?'₹'+deliveryFee:'FREE'}</span></div>
      ${discount>0?`<div class="sum-row" style="color:green"><span>Discount</span><span>− ₹${discount}</span></div>`:""}
      <div class="sum-row total"><span>Total</span><span>₹${total}</span></div>
    </div>`;

  wrap.innerHTML+=`
    ${!currentUser?`
    <div style="background:linear-gradient(135deg,#fff0f5,#ffe6f0);border:2px solid #ffb3c6;border-radius:18px;padding:18px 20px;margin-bottom:16px;text-align:center;">
      <div style="font-size:28px;margin-bottom:8px;">👤</div>
      <p style="font-size:15px;font-weight:600;color:#ff3366;margin-bottom:4px;">Want to save your order history?</p>
      <p style="font-size:13px;color:#888;margin-bottom:14px;">Create a free account to track orders, save addresses & more!</p>
      <div style="display:flex;gap:10px;justify-content:center;flex-wrap:wrap;">
        <button onclick="showPage('signupPage')" style="padding:9px 22px;background:#ff3366;color:white;border:none;border-radius:20px;font-family:'Poppins',sans-serif;font-size:13px;font-weight:600;cursor:pointer;box-shadow:0 3px 10px rgba(255,51,102,0.3);">✨ Create Account</button>
        <button onclick="showPage('loginPage')" style="padding:9px 22px;background:white;color:#ff3366;border:2px solid #ff3366;border-radius:20px;font-family:'Poppins',sans-serif;font-size:13px;font-weight:600;cursor:pointer;">🔑 Login</button>
      </div>
      <p style="font-size:12px;color:#aaa;margin-top:10px;">Or continue below as guest</p>
    </div>`:""}
    <button class="pay-btn" onclick="payNow()">💳 Place Order — ₹${total}</button>`;
}

function cartQty(ci,val){
  cart[ci].qty=Math.max(0,cart[ci].qty+val);
  if(cart[ci].qty===0){removeItem(ci);return;}
  updateCount();
  renderCart();
}

function removeItem(ci){
  const name=cart[ci].name; 
  cart.splice(ci,1);
  updateCount(); 
  renderCart(); 
  updateCardBadge(name);
}

function applyPromo(){
  const code=document.getElementById("promoInput").value.trim().toUpperCase();
  const msg=document.getElementById("promoMsg");
  const sub=cart.reduce((s,i)=>s+i.price*i.qty,0);
  
  if(code==="SAVE10"){
    discount=sub*0.1;
    msg.style.color="#2e7d32";
    msg.textContent="✅ 10% discount applied!";
  } else if(code==="SAVE20"){
    discount=sub*0.2;
    msg.style.color="#2e7d32";
    msg.textContent="✅ 20% discount applied!";
  } else if(code==="FLAT100"){
    discount=100;
    msg.style.color="#2e7d32";
    msg.textContent="✅ ₹100 discount applied!";
  } else {
    discount=0;
    msg.style.color="#ff3366";
    msg.textContent="❌ Invalid promo code";
  }
  renderCart();
}

// ═══════════════════════
// ADDRESS WARNING
// ═══════════════════════
function showAddrWarn(){
  const warn=document.getElementById("addrWarn");
  if(!warn) return;
  
  warn.classList.remove("visible");
  void warn.offsetWidth;
  warn.classList.add("visible");
  warn.scrollIntoView({ behavior:"smooth", block:"center" });
  
  const flat=document.getElementById("addrFlat");
  const city=document.getElementById("addrCity");
  const pin=document.getElementById("addrPin");
  
  [flat,city,pin].forEach(el=>{
    if(el && !el.value.trim()){
      el.style.borderColor="#ff3366";
      el.style.background="#fff0f5";
      el.addEventListener("input",function fix(){
        el.style.borderColor="";
        el.style.background="";
        el.removeEventListener("input",fix);
        const f=document.getElementById("addrFlat");
        const c=document.getElementById("addrCity");
        const p=document.getElementById("addrPin");
        if(f&&c&&p&&f.value.trim()&&c.value.trim()&&p.value.trim()){
          document.getElementById("addrWarn").classList.remove("visible");
        }
      });
    }
  });
}

// ═══════════════════════
// CHECKOUT
// ═══════════════════════
function payNow(){
  if(!cart.length){ return; }
  
  const flat=document.getElementById("addrFlat")?document.getElementById("addrFlat").value.trim():"";
  const city=document.getElementById("addrCity")?document.getElementById("addrCity").value.trim():"";
  const pin=document.getElementById("addrPin")?document.getElementById("addrPin").value.trim():"";
  
  if(!flat||!city||!pin){ 
    showAddrWarn(); 
    return; 
  }

  const addrStr=[flat, document.getElementById("addrArea").value.trim(), city, pin].filter(Boolean).join(", ");
  const sub=cart.reduce((s,i)=>s+i.price*i.qty,0);
  const deliveryFee = sub >= FREE_THRESH ? 0 : DELIVERY_FEE;
  
  const order={
    id:"ORD"+Date.now(),
    date:new Date().toLocaleString(),
    items:cart.map(i=>({name:i.name,qty:i.qty,price:i.price,note:i.note||""})),
    subtotal:sub,
    delivery:deliveryFee,
    discount,
    total:Math.max(0,sub+deliveryFee-discount),
    address:addrStr,
    user:currentUser?currentUser.name:"Guest"
  };
  
  orderHistory.unshift(order);
  try{
    const historyKey = currentUser ? "fdHistory_"+currentUser.email : "fdHistory";
    localStorage.setItem(historyKey,JSON.stringify(orderHistory));
  }catch(e){}

  cart=[]; 
  discount=0; 
  updateCount();
  foods.forEach(f=>updateCardBadge(f.name));

  const overlay=document.createElement("div");
  overlay.style.cssText="position:fixed;inset:0;background:rgba(255,51,102,0.15);display:flex;align-items:center;justify-content:center;z-index:999999;padding:20px;";
  overlay.innerHTML=`
    <div style="background:linear-gradient(135deg,#fff0f5,#ffe6f0);border-radius:28px;padding:36px;max-width:380px;width:100%;text-align:center;box-shadow:0 20px 60px rgba(255,51,102,0.3);animation:popIn 0.4s cubic-bezier(0.34,1.56,0.64,1);border:2px solid #ffb3c6;">
      <div style="font-size:60px;margin-bottom:14px;">🎉</div>
      <h2 style="font-family:'Playfair Display',serif;font-size:26px;color:#ff3366;margin-bottom:8px;">Order Placed!</h2>
      <p style="font-size:14px;color:#5a2c40;margin-bottom:4px;font-weight:500;">Your order has been placed successfully.</p>
      <p style="font-size:13px;color:#ff6699;margin-bottom:8px;">📍 Delivering to: <strong>${addrStr}</strong></p>
      <p style="font-size:13px;color:#888;margin-bottom:24px;">🕐 Estimated delivery: 30–45 mins</p>
      <div style="width:80%;height:3px;background:linear-gradient(90deg,#ff6699,#ff3366,#ff6699);border-radius:10px;margin:0 auto 20px;"></div>
      <button onclick="this.closest('div').parentElement.remove();navClick('menu');" style="padding:11px 32px;background:#ff3366;color:white;border:none;border-radius:25px;font-family:'Poppins',sans-serif;font-size:14px;font-weight:600;cursor:pointer;box-shadow:0 4px 15px rgba(255,51,102,0.4);" onmouseover="this.style.background='#e6005c'" onmouseout="this.style.background='#ff3366'">Back to Menu 🍽</button>
    </div>`;
  document.body.appendChild(overlay);
}

// ═══════════════════════
// ORDER HISTORY
// ═══════════════════════
function renderHistory(){
  loadUserHistory();
  
  const wrap=document.getElementById("histBody"); 
  wrap.innerHTML="";
  
  if(!orderHistory.length){
    wrap.innerHTML=`<div class="hist-empty">📋 No orders yet!<br><button class="back-btn" style="margin-top:20px" onclick="goToMenu()">Browse Menu</button></div>`;
    return;
  }
  
  orderHistory.forEach(order=>{
    wrap.innerHTML+=`
      <div class="hist-card">
        <div class="hist-card-header">
          <div><strong>${order.id}</strong><br><span>${order.date}</span></div>
          <strong>₹${order.total}</strong>
        </div>
        ${order.items.map(i=>`<div class="hist-item"><span>${i.name}${i.note?` <em>(${i.note})</em>`:""} × ${i.qty}</span><span>₹${i.price*i.qty}</span></div>`).join("")}
        ${order.discount>0?`<div style="font-size:12px;color:green;margin-top:6px;">Discount applied: −₹${order.discount}</div>`:""}
        ${order.delivery>0?`<div style="font-size:12px;color:#ff3366;margin-top:4px;">Delivery fee: ₹${order.delivery}</div>`:""}
        <div class="hist-total">Total: ₹${order.total}</div>
        ${order.address?`<div class="hist-addr">📍 ${order.address}</div>`:""}
      </div>`;
  });
}

// ═══════════════════════
// PROFILE
// ═══════════════════════
function renderProfile(){
  const wrap=document.getElementById("profBody"); 
  wrap.innerHTML="";
  
  if(!currentUser){
    wrap.innerHTML=`<div class="hist-empty" style="margin-top:60px;">👤 You're browsing as Guest.<br><br><button class="back-btn" onclick="showPage('loginPage')">Login / Sign Up</button></div>`;
    return;
  }
  
  wrap.innerHTML=`
    <div class="prof-avatar">
      <div>👤</div>
      <h2>${currentUser.name}</h2>
    </div>
    <div class="prof-card">
      <h3>Personal Info</h3>
      <div class="prof-field"><label>Full Name</label><input type="text" id="profName" value="${currentUser.name}"></div>
      <div class="prof-field"><label>Email</label><input type="email" id="profEmail" value="${currentUser.email}" readonly style="opacity:0.6;cursor:not-allowed;"></div>
      <div class="prof-field"><label>Phone</label><input type="tel" id="profPhone" value="${currentUser.phone}" maxlength="10"></div>
      <button class="prof-save" onclick="saveProfile()">💾 Save Changes</button>
      <div class="prof-success" id="profSuccess">✅ Profile updated successfully!</div>
    </div>
    <div class="prof-card">
      <h3>Account</h3>
      <button class="prof-logout" onclick="doLogout()">🚪 Logout</button>
    </div>`;
}

function saveProfile(){
  const name=document.getElementById("profName").value.trim();
  const phone=document.getElementById("profPhone").value.trim();
  
  if(name.length<2){alert("Name must be at least 2 characters.");return;}
  if(!validPhone(phone)){alert("Enter a valid 10-digit phone number.");return;}
  
  currentUser.name=name; 
  currentUser.phone=phone;
  
  let users={};
  try{users=JSON.parse(localStorage.getItem("fdUsers")||"{}");}catch(e){}
  if(users[currentUser.email]){
    users[currentUser.email].name=name;
    users[currentUser.email].phone=phone;
  }
  try{localStorage.setItem("fdUsers",JSON.stringify(users));}catch(e){}
  
  const hu=document.getElementById("headerUser");
  if(hu) hu.textContent="👤 "+name;
  
  const s=document.getElementById("profSuccess"); 
  s.style.display="block";
  setTimeout(()=>s.style.display="none",2500);
}

function doLogout(){
  currentUser=null; 
  cart=[]; 
  discount=0; 
  updateCount();
  foods.forEach(f=>updateCardBadge(f.name));
  loadUserHistory();
  showPage("heroPage");
}

// ── Init ──
renderMenu(foods);