/* ===== DIGI360 — Supabase data layer =====
   Project URL : https://hgffeevtuvhexrztacpd.supabase.co
   Key type    : anon (public) — safe for frontend with RLS enabled
   DO NOT ever put the service_role key in this file. */
const SUPABASE_URL='https://hgffeevtuvhexrztacpd.supabase.co';
const SUPABASE_ANON_KEY='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhnZmZlZXZ0dXZoZXhyenRhY3BkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODc0ODgyMzYsImV4cCI6MjEwMzA2NDIzNn0.Xv3z6mbur5J6bULJHAXhMQ9Qh5f_Syskw-tHQ1WZ7gA';

var SB=null,DBREADY=false;

function initSupabase(){
  if(!window.supabase){console.warn('supabase-js missing');return false}
  SB=window.supabase.createClient(SUPABASE_URL,SUPABASE_ANON_KEY);
  return true}

async function loadDB(){
  var q=[
    SB.from('modules').select('*'),
    SB.from('profiles').select('*'),
    SB.from('users').select('*'),
    SB.from('vpacks').select('*'),
    SB.from('groups').select('*'),
    SB.from('visitors').select('*'),
    SB.from('audit').select('*').order('ts',{ascending:true}),
    SB.from('notifications').select('*').order('created_at',{ascending:false}),
    SB.from('config').select('*')];
  var r=await Promise.all(q);
  r.forEach(function(x){if(x.error)throw new Error(x.error.message)});
  DB.modules =(r[0].data||[]).map(function(x){return{id:x.id,name:x.name,icon:x.icon,desc:x.descr,color:x.color}});
  DB.profiles=(r[1].data||[]).map(function(x){return{id:x.id,name:x.name,type:x.type,mods:x.mods||[],cert:x.cert||'none',desc:x.descr}});
  DB.users   = r[2].data||[];
  DB.vpacks  =(r[3].data||[]).map(function(x){return{id:x.id,name:x.name,cat:x.cat,lang:x.lang,dur:x.dur,st:x.st,mods:x.mods||[],qs:x.qs||[]}});
  DB.groups  = r[4].data||[];
  DB.visitors= r[5].data||[];
  DB.audit   = r[6].data||[];
  DB.notifications=(r[7].data||[]).map(function(x){return{id:x.id,icon:x.icon,color:x.color,msg:x.msg,time:x.time,read:x.read}});
  var c=r[8].data&&r[8].data[0];
  if(c)DB.cfg={pass:c.pass,maxAt:c.maxAt,passportDays:c.passportDays};
  DBREADY=true}

/* ---- write-through helpers (fire & forget, errors logged) ---- */
function _w(p){return p.then(function(){},function(e){console.warn('DB write failed:',e.message)})}
function sbVis(v){if(!DBREADY)return;return _w(SB.from('visitors').upsert({
  id:v.id,nm:v.nm,mob:v.mob,em:v.em||'',co:v.co,purp:v.purp,vd:v.vd,pl:v.pl,hid:v.hid,hn:v.hn,
  pid:v.pid,st:v.st,grp:v.grp,pp:v.pp,doc:v.doc,ci:v.ci,cot:v.cot,cib:v.cib,cob:v.cob,ppe:v.ppe,pRet:v.pRet}))}
function sbGroup(g){if(!DBREADY)return;return _w(SB.from('groups').upsert(g))}
function sbUser(u){if(!DBREADY)return;return _w(SB.from('users').upsert(u))}
function sbVPack(p){if(!DBREADY)return;return _w(SB.from('vpacks').upsert({
  id:p.id,name:p.name,cat:p.cat,lang:p.lang,dur:p.dur,st:p.st,mods:p.mods,qs:p.qs}))}
function sbProf(p){if(!DBREADY)return;return _w(SB.from('profiles').upsert({
  id:p.id,name:p.name,type:p.type,mods:p.mods,cert:p.cert,descr:p.desc}))}
function sbAuditRow(a){if(!DBREADY)return;return _w(SB.from('audit').insert(a))}
function sbNotif(n){if(!DBREADY)return;return _w(SB.from('notifications').upsert({
  id:n.id,icon:n.icon,color:n.color,msg:n.msg,time:n.time,read:n.read}))}
function sbMarkAllRead(){if(!DBREADY)return;return _w(SB.from('notifications').update({read:true}).eq('read',false))}
function sbCfg(){if(!DBREADY)return;return _w(SB.from('config').upsert({id:1,pass:DB.cfg.pass,maxAt:DB.cfg.maxAt,passportDays:DB.cfg.passportDays}))}