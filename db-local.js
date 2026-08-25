/* ===== EHS 360 — LOCAL TEST DATA ===== */
var LOCAL_DB = {
  plants: [
    {id:'PL-001',name:'Jaipur Plant',code:'KKIL-JAI',active:true}
  ],
  modules: [
    {id:'MOD-001',name:'Visitor Safety Induction',icon:'fa-user-shield',descr:'Mandatory safety induction for all visitors',color:'#F59E0B'},
    {id:'MOD-002',name:'Contractor Safety Induction',icon:'fa-helmet-safety',descr:'Contractor safety training',color:'#06B6D4'},
    {id:'MOD-003',name:'New Employee Induction',icon:'fa-user-graduate',descr:'New hire onboarding',color:'#10B981'}
  ],
  profiles: [
    {id:'PF-001',name:'Visitor',type:'inductee',mods:['MOD-001'],cert:'pass',descr:'Site visitors'},
    {id:'PF-002',name:'Contractor',type:'inductee',mods:['MOD-002'],cert:'passport',descr:'Contract workers'},
    {id:'PF-003',name:'New Employee',type:'inductee',mods:['MOD-003'],cert:'passportLife',descr:'New hires'},
    {id:'PF-004',name:'Administrator',type:'admin',mods:['MOD-001','MOD-002','MOD-003'],cert:'none',descr:'Full system access'},
    {id:'PF-005',name:'Host Manager',type:'manager',mods:['MOD-001','MOD-002','MOD-003'],cert:'none',descr:'Department managers'},
    {id:'PF-006',name:'Security Officer',type:'security',mods:['MOD-001','MOD-002','MOD-003'],cert:'none',descr:'Gate security'},
    {id:'PF-007',name:'Supervisor',type:'supervisor',mods:['MOD-001','MOD-002','MOD-003'],cert:'none',descr:'Permit supervisors'},
    {id:'PF-008',name:'Safety Manager',type:'safety_mgr',mods:['MOD-001','MOD-002','MOD-003'],cert:'none',descr:'HSE asset management'},
    {id:'PF-009',name:'Safety Officer',type:'safety_off',mods:['MOD-001','MOD-002','MOD-003'],cert:'none',descr:'Field safety inspections'}
  ],
  users: [
    {id:'U001',un:'admin',pw:'admin123',nm:'Rajesh Kumar',pid:'PF-004',pl:'All',act:true,em:'admin@kkil.com',mob:'+1 555 0400',modules:['induction','permits','assets']},
    {id:'U002',un:'manager1',pw:'pass123',nm:'Priya Sharma',pid:'PF-005',pl:'Jaipur Plant',act:true,em:'priya@kkil.com',mob:'+1 555 0401',modules:['induction','permits']},
    {id:'U004',un:'security1',pw:'pass123',nm:'Suresh Singh',pid:'PF-006',pl:'Jaipur Plant',act:true,em:'suresh@kkil.com',mob:'+1 555 0402',modules:['induction']},
    {id:'U006',un:'supervisor1',pw:'pass123',nm:'Arjun Mehta',pid:'PF-007',pl:'Jaipur Plant',act:true,em:'arjun@kkil.com',mob:'+1 555 0403',modules:['permits']},
    {id:'U007',un:'safetymanager1',pw:'pass123',nm:'Vikram Singh',pid:'PF-008',pl:'Jaipur Plant',act:true,em:'vikram@kkil.com',mob:'+1 555 0404',modules:['assets','induction']},
    {id:'U008',un:'safetyofficer1',pw:'pass123',nm:'Ravi Kumar',pid:'PF-009',pl:'Jaipur Plant',act:true,em:'ravi@kkil.com',mob:'+1 555 0405',modules:['assets']}
  ],
  vpacks: [
    {id:'VP-001',name:'General Plant Safety',cat:'Safety',lang:'English',dur:'5:30',st:'Active',mods:['MOD-001','MOD-002','MOD-003'],qs:[
      {text:'What should you do if you notice a safety hazard?',tp:'MCQ',ops:['Ignore it','Report it immediately','Fix it yourself','Wait for others'],ans:1},
      {text:'PPE is mandatory in all production areas.',tp:'TF',ops:['True','False'],ans:0},
      {text:'In case of a fire alarm, your first action is?',tp:'MCQ',ops:['Continue working','Evacuate immediately','Call manager','Take belongings'],ans:1}],video_url:''},
    {id:'VP-002',name:'Emergency Evacuation',cat:'Emergency',lang:'English',dur:'4:10',st:'Active',mods:['MOD-001','MOD-003'],qs:[
      {text:'Where are emergency assembly points marked?',tp:'MCQ',ops:['Red signs','Green signs','Yellow signs','Blue signs'],ans:1},
      {text:'You should use elevators during a fire evacuation.',tp:'TF',ops:['True','False'],ans:1}],video_url:''},
    {id:'VP-003',name:'Contractor Hazard Awareness',cat:'Safety',lang:'English',dur:'3:45',st:'Active',mods:['MOD-002'],qs:[
      {text:'Contractors must have a valid work permit before starting.',tp:'TF',ops:['True','False'],ans:0},
      {text:'What must you verify before confined space entry?',tp:'MCQ',ops:['Weather conditions','Permit and gas testing','Lunch schedule','Parking spot'],ans:1}],video_url:''},
    {id:'VP-004',name:'Workplace Ergonomics',cat:'Health',lang:'English',dur:'3:20',st:'Active',mods:['MOD-003'],qs:[
      {text:'Proper posture reduces risk of musculoskeletal disorders.',tp:'TF',ops:['True','False'],ans:0},
      {text:'How often should you take a break from repetitive tasks?',tp:'MCQ',ops:['Never','Every 2 hours','Every 30-60 min','Once per shift'],ans:2}],video_url:''},
    {id:'VP-005',name:'Visitor Site Protocol',cat:'Protocol',lang:'English',dur:'2:50',st:'Active',mods:['MOD-001'],qs:[
      {text:'Visitors must always be accompanied by a host.',tp:'TF',ops:['True','False'],ans:0},
      {text:'What should you do if separated from your host?',tp:'MCQ',ops:['Wander around','Go to security gate','Leave premises','Call 911'],ans:1}],video_url:''}
  ],
  groups: [],
  visitors: [],
  audit: [],
  notifications: [],
  config: [{id:1,pass:80,maxAt:3,passportDays:180,visitorPassValidity:30}],
  permit_types: [
    {id:'PT-HOT',name:'Hot Work Permit',icon:'fa-fire',color:'#EF4444',risk_levels:['Low','Medium','High','Critical'],active:true,sort_order:1},
    {id:'PT-CONF',name:'Confined Space Entry',icon:'fa-door-closed',color:'#F59E0B',risk_levels:['Medium','High','Critical'],active:true,sort_order:2},
    {id:'PT-ELEC',name:'Electrical Isolation',icon:'fa-bolt',color:'#06B6D4',risk_levels:['Low','Medium','High','Critical'],active:true,sort_order:3}
  ],
  checklist_templates: [
    {id:'CL-HOT-01',type_id:'PT-HOT',name:'Hot Work Pre-Job Checklist',category:'start',approval_type:'approval_required',plant:null,active:true,items:[
      {text:'Fire extinguisher available within 5m',type:'checkbox',required:true},
      {text:'Combustible materials removed within 10m',type:'checkbox',required:true},
      {text:'Gas test completed - LEL below 1%',type:'text',required:true,placeholder:'Enter LEL %'},
      {text:'Fire watch assigned',type:'checkbox',required:true},
      {text:'Equipment inspected and safe',type:'checkbox',required:true}]},
    {id:'CL-HOT-02',type_id:'PT-HOT',name:'Hot Work Hourly Fire Watch',category:'hourly',approval_type:'self_approval',plant:null,active:true,items:[
      {text:'Fire watch still present',type:'checkbox',required:true},
      {text:'No smoldering materials',type:'checkbox',required:true},
      {text:'Gas levels rechecked',type:'text',required:true,placeholder:'Current LEL %'},
      {text:'Work area clear',type:'checkbox',required:true},
      {text:'Equipment operating safely',type:'checkbox',required:true}]},
    {id:'CL-HOT-03',type_id:'PT-HOT',name:'Hot Work Close-Out',category:'end',approval_type:'approval_required',plant:null,active:true,items:[
      {text:'All equipment shut down',type:'checkbox',required:true},
      {text:'30 min fire watch maintained',type:'checkbox',required:true},
      {text:'Area cleaned',type:'checkbox',required:true},
      {text:'Waste removed',type:'checkbox',required:true},
      {text:'Permit signed off',type:'checkbox',required:true}]},
    {id:'CL-CONF-01',type_id:'PT-CONF',name:'Confined Space Pre-Entry',category:'start',approval_type:'approval_required',plant:'Jaipur Plant',active:true,items:[
      {text:'Entry permit authorized',type:'checkbox',required:true},
      {text:'Gas test - O2/LEL/H2S within range',type:'text',required:true,placeholder:'Gas readings'},
      {text:'Continuous monitoring arranged',type:'checkbox',required:true},
      {text:'Standby person positioned',type:'checkbox',required:true},
      {text:'Rescue plan established',type:'checkbox',required:true}]},
    {id:'CL-CONF-02',type_id:'PT-CONF',name:'Confined Space Hourly Check',category:'hourly',approval_type:'self_approval',plant:null,active:true,items:[
      {text:'Gas levels rechecked',type:'text',required:true,placeholder:'Current readings'},
      {text:'Standby person alert',type:'checkbox',required:true},
      {text:'Communication confirmed',type:'checkbox',required:true},
      {text:'Ventilation operating',type:'checkbox',required:true},
      {text:'No distress signs',type:'checkbox',required:true}]},
    {id:'CL-CONF-03',type_id:'PT-CONF',name:'Confined Space Exit',category:'end',approval_type:'approval_required',plant:null,active:true,items:[
      {text:'All entrants exited safely',type:'checkbox',required:true},
      {text:'Entry point secured',type:'checkbox',required:true},
      {text:'Monitoring discontinued',type:'checkbox',required:true},
      {text:'Rescue equipment returned',type:'checkbox',required:true},
      {text:'Permit closed',type:'checkbox',required:true}]},
    {id:'CL-ELEC-01',type_id:'PT-ELEC',name:'Electrical Isolation Pre-Work',category:'start',approval_type:'approval_required',plant:null,active:true,items:[
      {text:'Circuit identified and labeled',type:'checkbox',required:true},
      {text:'Isolation point accessible',type:'checkbox',required:true},
      {text:'Isolation by authorized person',type:'checkbox',required:true},
      {text:'LO/TO tag applied',type:'text',required:true,placeholder:'Tag number'},
      {text:'Voltage verified dead (0V)',type:'text',required:true,placeholder:'Voltage reading'}]},
    {id:'CL-ELEC-02',type_id:'PT-ELEC',name:'Electrical Hourly Verification',category:'hourly',approval_type:'self_approval',plant:null,active:true,items:[
      {text:'LO/TO still in place',type:'checkbox',required:true},
      {text:'No unauthorized persons',type:'checkbox',required:true},
      {text:'Warning signs visible',type:'checkbox',required:true},
      {text:'Work progressing safely',type:'checkbox',required:true},
      {text:'No isolation changes',type:'checkbox',required:true}]},
    {id:'CL-ELEC-03',type_id:'PT-ELEC',name:'Electrical Restoration',category:'end',approval_type:'approval_required',plant:null,active:true,items:[
      {text:'All workers clear',type:'checkbox',required:true},
      {text:'Tools removed',type:'checkbox',required:true},
      {text:'Safe to re-energize',type:'checkbox',required:true},
      {text:'LO/TO tag returned',type:'text',required:true,placeholder:'Tag number'},
      {text:'Functional test passed',type:'checkbox',required:true}]}
  ],
  permits: [],
  permit_history: [],
  ppe_items: [
    {id:'PPE-001',name:'Hard Hat / Safety Helmet',icon:'fa-helmet-safety',category:'Head Protection',active:true},
    {id:'PPE-002',name:'Safety Goggles',icon:'fa-glasses',category:'Eye Protection',active:true},
    {id:'PPE-003',name:'Face Shield',icon:'fa-mask',category:'Face Protection',active:true},
    {id:'PPE-004',name:'Hi-Vis Safety Vest',icon:'fa-vest',category:'Body Protection',active:true},
    {id:'PPE-005',name:'Safety Boots (Steel Toe)',icon:'fa-shoe-prints',category:'Foot Protection',active:true},
    {id:'PPE-006',name:'Safety Gloves',icon:'fa-hand-paper',category:'Hand Protection',active:true},
    {id:'PPE-007',name:'Full Body Harness',icon:'fa-anchor',category:'Fall Protection',active:true},
    {id:'PPE-008',name:'Respirator / Mask',icon:'fa-lungs',category:'Respiratory',active:true},
    {id:'PPE-009',name:'Hearing Protection',icon:'fa-ear-listen',category:'Hearing Protection',active:true},
    {id:'PPE-010',name:'Welding Shield',icon:'fa-helmet-safety',category:'Welding Protection',active:true}
  ],
  tools: [
    {id:'TOOL-001',name:'Angle Grinder',category:'Power Tools',active:true},
    {id:'TOOL-002',name:'Arc Welding Machine',category:'Welding',active:true},
    {id:'TOOL-003',name:'Gas Welding Set',category:'Welding',active:true},
    {id:'TOOL-004',name:'Digital Multimeter',category:'Test Equipment',active:true},
    {id:'TOOL-005',name:'Insulated Screwdriver Set',category:'Hand Tools',active:true},
    {id:'TOOL-006',name:'Portable Gas Detector (4-gas)',category:'Test Equipment',active:true},
    {id:'TOOL-007',name:'Extension Cord (240V)',category:'Power Tools',active:true},
    {id:'TOOL-008',name:'Hydraulic Jack',category:'Lifting',active:true},
    {id:'TOOL-009',name:'Step Ladder',category:'Lifting',active:true},
    {id:'TOOL-010',name:'Cordless Drill',category:'Power Tools',active:true},
    {id:'TOOL-011',name:'Explosion-Proof Torch Light',category:'Test Equipment',active:true},
    {id:'TOOL-012',name:'Lock-Out / Tag-Out Kit',category:'Safety Equipment',active:true}
  ],
  asset_categories: [
    {id:'AC-FIRE',name:'Fire Safety',icon:'fa-fire-extinguisher',color:'#EF4444',active:true},
    {id:'AC-PPE',name:'PPE',icon:'fa-helmet-safety',color:'#F59E0B',active:true},
    {id:'AC-EMER',name:'Emergency Equipment',icon:'fa-kit-medical',color:'#06B6D4',active:true},
    {id:'AC-ENV',name:'Environmental',icon:'fa-leaf',color:'#10B981',active:true}
  ],
  asset_types: [
    {id:'AT-CO2',category_id:'AC-FIRE',name:'CO2 Fire Extinguisher',icon:'fa-fire-extinguisher',active:true},
    {id:'AT-DCP',category_id:'AC-FIRE',name:'DCP Fire Extinguisher',icon:'fa-fire-extinguisher',active:true},
    {id:'AT-HELMET',category_id:'AC-PPE',name:'Safety Helmet',icon:'fa-helmet-safety',active:true},
    {id:'AT-GOGGLE',category_id:'AC-PPE',name:'Safety Goggles',icon:'fa-glasses',active:true},
    {id:'AT-VEST',category_id:'AC-PPE',name:'Hi-Vis Vest',icon:'fa-vest',active:true},
    {id:'AT-GLOVE',category_id:'AC-PPE',name:'Safety Gloves',icon:'fa-hand-paper',active:true},
    {id:'AT-BOOT',category_id:'AC-PPE',name:'Safety Boots',icon:'fa-shoe-prints',active:true},
    {id:'AT-MASK',category_id:'AC-PPE',name:'Respirator Mask',icon:'fa-lungs',active:true},
    {id:'AT-FIRSTAID',category_id:'AC-EMER',name:'First Aid Kit',icon:'fa-kit-medical',active:true},
    {id:'AT-EYEWASH',category_id:'AC-EMER',name:'Eye Wash Station',icon:'fa-droplet',active:true},
    {id:'AT-SPILL',category_id:'AC-ENV',name:'Spill Kit',icon:'fa-jar',active:true}
  ],
  assets: [
    {id:'AST-001',asset_number:'FE-CO2-001',name:'CO2 Extinguisher #1',type_id:'AT-CO2',category_id:'AC-FIRE',plant:'Jaipur Plant',location:'Block A - Corridor',quantity:1,min_quantity:0,unit:'unit',shelf_life_days:365,expiry_date:null,status:'Active',supplier:'FireSafe Ltd',notes:'5kg CO2',created_by:'admin',created_at:new Date().toISOString()},
    {id:'AST-002',asset_number:'FE-CO2-002',name:'CO2 Extinguisher #2',type_id:'AT-CO2',category_id:'AC-FIRE',plant:'Jaipur Plant',location:'Block B - Corridor',quantity:1,min_quantity:0,unit:'unit',shelf_life_days:365,expiry_date:null,status:'Active',supplier:'FireSafe Ltd',notes:'5kg CO2',created_by:'admin',created_at:new Date().toISOString()},
    {id:'AST-003',asset_number:'FE-DCP-001',name:'DCP Extinguisher #1',type_id:'AT-DCP',category_id:'AC-FIRE',plant:'Jaipur Plant',location:'Warehouse',quantity:2,min_quantity:1,unit:'unit',shelf_life_days:365,expiry_date:null,status:'Active',supplier:'FireSafe Ltd',notes:'4kg DCP',created_by:'admin',created_at:new Date().toISOString()},
    {id:'AST-004',asset_number:'PPE-HEL-001',name:'Safety Helmets',type_id:'AT-HELMET',category_id:'AC-PPE',plant:'Jaipur Plant',location:'Store Room A',quantity:50,min_quantity:20,unit:'pcs',shelf_life_days:730,expiry_date:null,status:'Active',supplier:'SafeGear Inc',notes:'White standard',created_by:'admin',created_at:new Date().toISOString()},
    {id:'AST-005',asset_number:'PPE-GOG-001',name:'Safety Goggles',type_id:'AT-GOGGLE',category_id:'AC-PPE',plant:'Jaipur Plant',location:'Store Room A',quantity:80,min_quantity:30,unit:'pcs',shelf_life_days:1095,expiry_date:null,status:'Active',supplier:'SafeGear Inc',notes:'Clear lens',created_by:'admin',created_at:new Date().toISOString()},
    {id:'AST-006',asset_number:'PPE-VEST-001',name:'Hi-Vis Vests',type_id:'AT-VEST',category_id:'AC-PPE',plant:'Jaipur Plant',location:'Store Room A',quantity:60,min_quantity:25,unit:'pcs',shelf_life_days:1095,expiry_date:null,status:'Active',supplier:'SafeGear Inc',notes:'Orange',created_by:'admin',created_at:new Date().toISOString()},
    {id:'AST-007',asset_number:'PPE-GLV-001',name:'Safety Gloves',type_id:'AT-GLOVE',category_id:'AC-PPE',plant:'Jaipur Plant',location:'Store Room B',quantity:100,min_quantity:40,unit:'pairs',shelf_life_days:365,expiry_date:null,status:'Active',supplier:'SafeGear Inc',notes:'Nitrile coated',created_by:'admin',created_at:new Date().toISOString()},
    {id:'AST-008',asset_number:'PPE-MASK-001',name:'Respirator Masks',type_id:'AT-MASK',category_id:'AC-PPE',plant:'Jaipur Plant',location:'Store Room B',quantity:200,min_quantity:50,unit:'pcs',shelf_life_days:730,expiry_date:null,status:'Active',supplier:'AirPro Ltd',notes:'N95',created_by:'admin',created_at:new Date().toISOString()},
    {id:'AST-009',asset_number:'FA-001',name:'First Aid Kit #1',type_id:'AT-FIRSTAID',category_id:'AC-EMER',plant:'Jaipur Plant',location:'Block A - Reception',quantity:1,min_quantity:0,unit:'kit',shelf_life_days:365,expiry_date:null,status:'Active',supplier:'MedSupply',notes:'Standard kit',created_by:'admin',created_at:new Date().toISOString()},
    {id:'AST-010',asset_number:'FA-002',name:'First Aid Kit #2',type_id:'AT-FIRSTAID',category_id:'AC-EMER',plant:'Jaipur Plant',location:'Warehouse',quantity:1,min_quantity:0,unit:'kit',shelf_life_days:365,expiry_date:null,status:'Active',supplier:'MedSupply',notes:'Standard kit',created_by:'admin',created_at:new Date().toISOString()},
    {id:'AST-011',asset_number:'EW-001',name:'Eye Wash Station',type_id:'AT-EYEWASH',category_id:'AC-EMER',plant:'Jaipur Plant',location:'Lab Area',quantity:1,min_quantity:0,unit:'unit',shelf_life_days:null,expiry_date:null,status:'Active',supplier:'SafetyFirst',notes:'Wall mounted',created_by:'admin',created_at:new Date().toISOString()},
    {id:'AST-012',asset_number:'SK-001',name:'Spill Kit',type_id:'AT-SPILL',category_id:'AC-ENV',plant:'Jaipur Plant',location:'Chemical Store',quantity:2,min_quantity:1,unit:'kit',shelf_life_days:730,expiry_date:null,status:'Active',supplier:'EnviroGuard',notes:'Universal',created_by:'admin',created_at:new Date().toISOString()}
  ],
  inspection_schedules: [
    {id:'IS-001',asset_id:'AST-001',type:'Inspection',frequency:'Monthly',next_due:null,last_done:null,assigned_to:'Safety Officer',checklist_id:'AC-CL-FIRE',status:'Scheduled',notes:'Monthly fire extinguisher check',created_at:new Date().toISOString()},
    {id:'IS-002',asset_id:'AST-002',type:'Inspection',frequency:'Monthly',next_due:null,last_done:null,assigned_to:'Safety Officer',checklist_id:'AC-CL-FIRE',status:'Scheduled',notes:'Monthly fire extinguisher check',created_at:new Date().toISOString()},
    {id:'IS-003',asset_id:'AST-003',type:'Inspection',frequency:'Quarterly',next_due:null,last_done:null,assigned_to:'Safety Manager',checklist_id:'AC-CL-FIRE',status:'Scheduled',notes:'Quarterly warehouse check',created_at:new Date().toISOString()},
    {id:'IS-004',asset_id:'AST-009',type:'Inspection',frequency:'Monthly',next_due:null,last_done:null,assigned_to:'Safety Officer',checklist_id:'AC-CL-FIRSTAID',status:'Scheduled',notes:'First aid monthly check',created_at:new Date().toISOString()},
    {id:'IS-005',asset_id:'AST-010',type:'Inspection',frequency:'Monthly',next_due:null,last_done:null,assigned_to:'Safety Officer',checklist_id:'AC-CL-FIRSTAID',status:'Scheduled',notes:'First aid monthly check',created_at:new Date().toISOString()},
    {id:'IS-006',asset_id:'AST-011',type:'Inspection',frequency:'Weekly',next_due:null,last_done:null,assigned_to:'Safety Officer',checklist_id:null,status:'Scheduled',notes:'Eye wash weekly flush',created_at:new Date().toISOString()},
    {id:'IS-007',asset_id:'AST-004',type:'Inspection',frequency:'Quarterly',next_due:null,last_done:null,assigned_to:'Safety Manager',checklist_id:'AC-CL-PPE',status:'Scheduled',notes:'PPE stock condition check',created_at:new Date().toISOString()}
  ],
  refill_schedules: [
    {id:'RS-001',asset_id:'AST-007',type:'Replace',frequency:'Monthly',next_due:null,last_done:null,quantity_needed:40,status:'Scheduled',notes:'Glove stock replenishment',created_at:new Date().toISOString()},
    {id:'RS-002',asset_id:'AST-008',type:'Replace',frequency:'Monthly',next_due:null,last_done:null,quantity_needed:50,status:'Scheduled',notes:'Mask stock replenishment',created_at:new Date().toISOString()},
    {id:'RS-003',asset_id:'AST-009',type:'Replace',frequency:'Semi-Annual',next_due:null,last_done:null,quantity_needed:1,status:'Scheduled',notes:'First aid kit restock',created_at:new Date().toISOString()},
    {id:'RS-004',asset_id:'AST-012',type:'Replace',frequency:'Semi-Annual',next_due:null,last_done:null,quantity_needed:1,status:'Scheduled',notes:'Spill kit replacement',created_at:new Date().toISOString()}
  ],
  asset_checklists: [
    {id:'AC-CL-FIRE',asset_type_id:'AT-CO2',name:'Fire Extinguisher Inspection',active:true,items:[
      {text:'Pressure gauge in green zone',type:'checkbox',required:true},
      {text:'Safety pin and seal intact',type:'checkbox',required:true},
      {text:'No visible damage',type:'checkbox',required:true},
      {text:'Hose and nozzle clear',type:'checkbox',required:true},
      {text:'Accessible and sign visible',type:'checkbox',required:true},
      {text:'Weight within range',type:'checkbox',required:true},
      {text:'Last inspection within 12 months',type:'checkbox',required:true},
      {text:'Bracket secure',type:'checkbox',required:true}]},
    {id:'AC-CL-PPE',asset_type_id:'AT-HELMET',name:'PPE Inspection',active:true,items:[
      {text:'No cracks or dents',type:'checkbox',required:true},
      {text:'Suspension intact',type:'checkbox',required:true},
      {text:'Chin strap functional',type:'checkbox',required:true},
      {text:'Within expiry',type:'checkbox',required:true},
      {text:'Clean',type:'checkbox',required:true}]},
    {id:'AC-CL-FIRSTAID',asset_type_id:'AT-FIRSTAID',name:'First Aid Kit Inspection',active:true,items:[
      {text:'All items present',type:'checkbox',required:true},
      {text:'No expired medications',type:'checkbox',required:true},
      {text:'Sterile packaging intact',type:'checkbox',required:true},
      {text:'Kit sealed and clean',type:'checkbox',required:true},
      {text:'First aid guide present',type:'checkbox',required:true}]}
  ],
  inspection_logs: [],
  consumable_logs: [],
  asset_alerts: []
};

// Initialize next_due dates relative to today
(function(){
  var today=new Date().toISOString().split('T')[0];
  function addDays(dstr,n){var d=new Date(dstr+'T00:00:00');d.setDate(d.getDate()+n);return d.toISOString().split('T')[0]}
  var nextDues=[5,12,40,3,18,2,25];
  LOCAL_DB.inspection_schedules.forEach(function(s,i){if(nextDues[i]!==undefined)s.next_due=addDays(today,nextDues[i])});
  var refillDues=[10,15,45,180];
  LOCAL_DB.refill_schedules.forEach(function(s,i){if(refillDues[i]!==undefined)s.next_due=addDays(today,refillDues[i])});
  var assetExpiries=[null,null,null,null,null,null,null,90,45,120,null,200];
  LOCAL_DB.assets.forEach(function(a,i){if(assetExpiries[i])a.expiry_date=addDays(today,assetExpiries[i])});
})();