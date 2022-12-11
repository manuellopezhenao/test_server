"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[338],{4338:(me,w,r)=>{r.r(w),r.d(w,{CoursesstudentsModule:()=>m});var p=r(6895),S=r(1390),u=r(5861),b=r(7974),_=r(6308),l=r(7155),A=r(1919),i=r(4006),e=r(4650),F=r(9668),Q=r(5609),N=r(529),v=r(9808);class c{constructor(t){this.client=t,this.httpOptions={headers:new N.WM({"Content-Type":"application/json"})}}getCoursesStudents(){var t=this;return(0,u.Z)(function*(){const o=t.client.get("/coursestudents",t.httpOptions);return(yield(0,v.n)(o)).data})()}linkCourseStudent(t,o){var n=this;return(0,u.Z)(function*(){const a=n.client.post("/linkcoursestudent",{c_id:t,s_id:o},n.httpOptions);return yield(0,v.n)(a)})()}unlinkCourseStudent(t,o,n){var a=this;return(0,u.Z)(function*(){const y=a.client.delete("/unlinkcoursestudent/"+t+"/"+o+"/"+n,a.httpOptions);return yield(0,v.n)(y)})()}searchstudentsbycourse(t){var o=this;return(0,u.Z)(function*(){const n=o.client.get("/searchstudentsbycourse/"+t,o.httpOptions);return(yield(0,v.n)(n)).data})()}}c.\u0275fac=function(t){return new(t||c)(e.LFG(N.eN))},c.\u0275prov=e.Yz7({token:c,factory:c.\u0275fac,providedIn:"root"});var f=r(7274),T=r(625),Z=r(9549),x=r(4385),U=r(3238);function q(s,t){if(1&s&&(e.TgZ(0,"mat-option",13),e._uU(1),e.qZA()),2&s){const o=t.$implicit;e.Q6J("value",o.c_id),e.xp6(1),e.hij(" ",o.name," ")}}function k(s,t){if(1&s&&(e.TgZ(0,"mat-option",13),e._uU(1),e.qZA()),2&s){const o=t.$implicit;e.Q6J("value",o.s_id),e.xp6(1),e.hij(" ",o.first_name," ")}}function I(s,t){if(1&s&&(e.TgZ(0,"div")(1,"i",15),e._uU(2),e.qZA()()),2&s){const o=e.oxw().$implicit;e.xp6(2),e.hij("The field needs ",o.requiredLength," characters")}}function O(s,t){1&s&&(e.TgZ(0,"div")(1,"i",15),e._uU(2,"This field is required"),e.qZA()())}function j(s,t){if(1&s&&(e.YNc(0,I,3,1,"div",14),e.YNc(1,O,3,0,"div",14)),2&s){const o=t.$implicit;e.Q6J("ngIf",null==o?null:o.minlength),e.xp6(1),e.Q6J("ngIf",null==o?null:o.required)}}class h{constructor(t,o,n,a){this.coursesService=t,this.studentService=o,this.courseStudentService=n,this.dialog=a,this.CreateForm=new i.cw({}),this.courses=[],this.students=[]}ngOnInit(){this.initForm(),this.getCourses().then(t=>{this.courses=t}),this.getStudents().then(t=>{this.students=t})}initForm(){this.CreateForm=new i.cw({course:new i.NI("",[i.kI.required]),student:new i.NI("",[i.kI.required])})}getStudents(){var t=this;return(0,u.Z)(function*(){return yield t.studentService.getStudents()})()}getCourses(){var t=this;return(0,u.Z)(function*(){return yield t.coursesService.getCourses()})()}submitForm(){this.CreateForm.valid&&this.courseStudentService.linkCourseStudent(this.CreateForm.value.course,this.CreateForm.value.student).then(t=>{t.success?this.dialog.close({success:!0,message:"Course Student Link Success"}):(console.log(t),this.dialog.close({success:!1,error:t.mgs}))})}cancel(){this.dialog.close({success:!0,message:"Canceled"})}}function z(s,t){if(1&s&&(e.TgZ(0,"mat-option",13),e._uU(1),e.qZA()),2&s){const o=t.$implicit;e.Q6J("value",o.c_id),e.xp6(1),e.hij(" ",o.name," ")}}function E(s,t){if(1&s&&(e.TgZ(0,"mat-option",13),e._uU(1),e.qZA()),2&s){const o=t.$implicit;e.Q6J("value",o.s_id),e.xp6(1),e.hij(" ",o.first_name," ")}}function $(s,t){if(1&s&&(e.TgZ(0,"div")(1,"i",15),e._uU(2),e.qZA()()),2&s){const o=e.oxw().$implicit;e.xp6(2),e.hij("The field needs ",o.requiredLength," characters")}}function M(s,t){1&s&&(e.TgZ(0,"div")(1,"i",15),e._uU(2,"This field is required"),e.qZA()())}function B(s,t){if(1&s&&(e.YNc(0,$,3,1,"div",14),e.YNc(1,M,3,0,"div",14)),2&s){const o=t.$implicit;e.Q6J("ngIf",null==o?null:o.minlength),e.xp6(1),e.Q6J("ngIf",null==o?null:o.required)}}h.\u0275fac=function(t){return new(t||h)(e.Y36(F.N),e.Y36(Q.V),e.Y36(c),e.Y36(f.so))},h.\u0275cmp=e.Xpm({type:h,selectors:[["app-create"]],decls:26,vars:5,consts:[["errorTailor","",3,"formGroup","submit"],[1,"m-6"],[1,"relative","z-0","w-full","group"],["for","course",1,"peer-focus:font-medium","absolute","text-sm","text-gray-500","duration-300","transform","-translate-y-6","scale-75","top-3","-z-10","origin-[0]","peer-focus:left-0","peer-focus:text-blue-600","peer-placeholder-shown:scale-100","peer-placeholder-shown:translate-y-0","peer-focus:scale-75","peer-focus:-translate-y-6"],["appearance","outline",1,"w-full"],["formControlName","course","required","",3,"controlErrorsTpl"],[3,"value",4,"ngFor","ngForOf"],["for","student",1,"peer-focus:font-medium","absolute","text-sm","text-gray-500","duration-300","transform","-translate-y-6","scale-75","top-3","-z-10","origin-[0]","peer-focus:left-0","peer-focus:text-blue-600","peer-placeholder-shown:scale-100","peer-placeholder-shown:translate-y-0","peer-focus:scale-75","peer-focus:-translate-y-6"],["formControlName","student","required","",3,"controlErrorsTpl"],[1,"relative","z-0","mb-6","w-full","group"],["type","submit",1,"bg-blue-500","hover:bg-blue-700","text-white","font-bold","py-2","px-4","rounded-full"],["type","button",1,"bg-red-500","hover:bg-red-700","text-white","font-bold","py-2","px-4","rounded-full",3,"click"],["course","","student",""],[3,"value"],[4,"ngIf"],[1,"text-red-600"]],template:function(t,o){if(1&t&&(e.TgZ(0,"form",0),e.NdJ("submit",function(){return o.submitForm()}),e.TgZ(1,"div",1)(2,"div",2)(3,"label",3),e._uU(4,"Course"),e.qZA(),e._UZ(5,"br"),e.TgZ(6,"section")(7,"mat-form-field",4)(8,"mat-select",5),e.YNc(9,q,2,2,"mat-option",6),e.qZA()()()(),e.TgZ(10,"div",2)(11,"label",7),e._uU(12,"Student"),e.qZA(),e._UZ(13,"br"),e.TgZ(14,"section")(15,"mat-form-field",4)(16,"mat-select",8),e.YNc(17,k,2,2,"mat-option",6),e.qZA()()()(),e.TgZ(18,"div",9)(19,"button",10),e._uU(20," Add "),e.qZA(),e.TgZ(21,"button",11),e.NdJ("click",function(){return o.cancel()}),e._uU(22," Cancel "),e.qZA()()()(),e.YNc(23,j,2,2,"ng-template",null,12,e.W1O)),2&t){const n=e.MAs(24),a=e.MAs(25);e.Q6J("formGroup",o.CreateForm),e.xp6(8),e.Q6J("controlErrorsTpl",n),e.xp6(1),e.Q6J("ngForOf",o.courses),e.xp6(7),e.Q6J("controlErrorsTpl",a),e.xp6(1),e.Q6J("ngForOf",o.students)}},dependencies:[p.sg,p.O5,T.kH,T.m6,Z.KE,i._Y,i.JJ,i.JL,i.Q7,i.sg,i.u,x.gD,U.ey]});class g{constructor(t,o,n,a){this.coursesService=t,this.matdialog=o,this.courseStudentService=n,this.dialog=a,this.CreateForm=new i.cw({}),this.courses=[],this.students=[]}ngOnInit(){this.initForm(),this.getCourses().then(t=>{this.courses=t}),this.CreateForm.get("course")?.valueChanges.subscribe(t=>{this.getstudentsbycourse(t).then(o=>{console.log(o),this.students=o})})}initForm(){this.CreateForm=new i.cw({course:new i.NI("",[i.kI.required]),student:new i.NI("",[i.kI.required])})}getstudentsbycourse(t){var o=this;return(0,u.Z)(function*(){return yield o.courseStudentService.searchstudentsbycourse(t)})()}getCourses(){var t=this;return(0,u.Z)(function*(){return yield t.coursesService.getCourses()})()}cancel(){this.dialog.close({success:!0,message:"Canceled"})}submitForm(){this.CreateForm.valid&&(0,A.C)(0,this.matdialog,`Are you sure to delete the course: ${this.CreateForm.get("course")?.value} of student: ${this.CreateForm.get("student")?.value}?`,"Atention","delete").afterClosed().subscribe(o=>{o.success&&this.unlinkCourse()})}unlinkCourse(){this.courseStudentService.unlinkCourseStudent(void 0,this.CreateForm.value.course,this.CreateForm.value.student).then(t=>{this.dialog.close(t?{success:!0,message:"Course Student Unlink Success"}:{success:!1,message:"Course Student Link Failed"})})}}g.\u0275fac=function(t){return new(t||g)(e.Y36(F.N),e.Y36(f.uw),e.Y36(c),e.Y36(f.so))},g.\u0275cmp=e.Xpm({type:g,selectors:[["app-search-delete"]],decls:26,vars:5,consts:[["errorTailor","",3,"formGroup","submit"],[1,"m-6"],[1,"relative","z-0","w-full","group"],["for","course",1,"peer-focus:font-medium","absolute","text-sm","text-gray-500","duration-300","transform","-translate-y-6","scale-75","top-3","-z-10","origin-[0]","peer-focus:left-0","peer-focus:text-blue-600","peer-placeholder-shown:scale-100","peer-placeholder-shown:translate-y-0","peer-focus:scale-75","peer-focus:-translate-y-6"],["appearance","outline",1,"w-full"],["formControlName","course","required","",3,"controlErrorsTpl"],[3,"value",4,"ngFor","ngForOf"],["for","student",1,"peer-focus:font-medium","absolute","text-sm","text-gray-500","duration-300","transform","-translate-y-6","scale-75","top-3","-z-10","origin-[0]","peer-focus:left-0","peer-focus:text-blue-600","peer-placeholder-shown:scale-100","peer-placeholder-shown:translate-y-0","peer-focus:scale-75","peer-focus:-translate-y-6"],["formControlName","student","required","",3,"controlErrorsTpl"],[1,"relative","z-0","mb-6","w-full","group"],["type","submit",1,"bg-blue-500","hover:bg-blue-700","text-white","font-bold","py-2","px-4","rounded-full"],["type","button",1,"bg-red-500","hover:bg-red-700","text-white","font-bold","py-2","px-4","rounded-full",3,"click"],["course","","student",""],[3,"value"],[4,"ngIf"],[1,"text-red-600"]],template:function(t,o){if(1&t&&(e.TgZ(0,"form",0),e.NdJ("submit",function(){return o.submitForm()}),e.TgZ(1,"div",1)(2,"div",2)(3,"label",3),e._uU(4,"Course"),e.qZA(),e._UZ(5,"br"),e.TgZ(6,"section")(7,"mat-form-field",4)(8,"mat-select",5),e.YNc(9,z,2,2,"mat-option",6),e.qZA()()()(),e.TgZ(10,"div",2)(11,"label",7),e._uU(12,"Student"),e.qZA(),e._UZ(13,"br"),e.TgZ(14,"section")(15,"mat-form-field",4)(16,"mat-select",8),e.YNc(17,E,2,2,"mat-option",6),e.qZA()()()(),e.TgZ(18,"div",9)(19,"button",10),e._uU(20," Delete "),e.qZA(),e.TgZ(21,"button",11),e.NdJ("click",function(){return o.cancel()}),e._uU(22," Cancel "),e.qZA()()()(),e.YNc(23,B,2,2,"ng-template",null,12,e.W1O)),2&t){const n=e.MAs(24),a=e.MAs(25);e.Q6J("formGroup",o.CreateForm),e.xp6(8),e.Q6J("controlErrorsTpl",n),e.xp6(1),e.Q6J("ngForOf",o.courses),e.xp6(7),e.Q6J("controlErrorsTpl",a),e.xp6(1),e.Q6J("ngForOf",o.students)}},dependencies:[p.sg,p.O5,T.kH,T.m6,Z.KE,i._Y,i.JJ,i.JL,i.Q7,i.sg,i.u,x.gD,U.ey]});var R=r(7185),Y=r(4144),D=r(7392),J=r(3683);function G(s,t){1&s&&(e.TgZ(0,"th",23),e._uU(1," ID "),e.qZA())}function H(s,t){if(1&s&&(e.TgZ(0,"td",24),e._uU(1),e.qZA()),2&s){const o=t.$implicit;e.Tol(t.index%2==0?"gray":"tran"),e.xp6(1),e.hij(" ",o.cxs_id," ")}}function V(s,t){1&s&&(e.TgZ(0,"th",23),e._uU(1," ID Course "),e.qZA())}function W(s,t){if(1&s&&(e.TgZ(0,"td",24),e._uU(1),e.qZA()),2&s){const o=t.$implicit;e.Tol(t.index%2==0?"gray":"tran"),e.xp6(1),e.hij(" ",o.c_id," ")}}function X(s,t){1&s&&(e.TgZ(0,"th",23),e._uU(1," Name Course "),e.qZA())}function K(s,t){if(1&s&&(e.TgZ(0,"td",24),e._uU(1),e.qZA()),2&s){const o=t.$implicit;e.Tol(t.index%2==0?"gray":"tran"),e.xp6(1),e.hij(" ",o.c_name," ")}}function P(s,t){1&s&&(e.TgZ(0,"th",23),e._uU(1," ID Student "),e.qZA())}function ee(s,t){if(1&s&&(e.TgZ(0,"td",24),e._uU(1),e.qZA()),2&s){const o=t.$implicit;e.Tol(t.index%2==0?"gray":"tran"),e.xp6(1),e.hij(" ",o.s_id," ")}}function te(s,t){1&s&&(e.TgZ(0,"th",23),e._uU(1," Name Student "),e.qZA())}function oe(s,t){if(1&s&&(e.TgZ(0,"td",24),e._uU(1),e.qZA()),2&s){const o=t.$implicit;e.Tol(t.index%2==0?"gray":"tran"),e.xp6(1),e.hij(" ",o.s_name," ")}}function se(s,t){1&s&&(e.TgZ(0,"th",23),e._uU(1," Delete "),e.qZA())}function ne(s,t){if(1&s){const o=e.EpF();e.TgZ(0,"td",24)(1,"mat-icon",25),e.NdJ("click",function(){const y=e.CHM(o).$implicit,L=e.oxw();return e.KtG(L.deleteCourse(y))}),e._uU(2,"delete"),e.qZA()()}2&s&&e.Tol(t.index%2==0?"gray":"tran")}function re(s,t){1&s&&e._UZ(0,"tr",26)}function ie(s,t){1&s&&e._UZ(0,"tr",27)}function ae(s,t){if(1&s&&(e.TgZ(0,"tr",28)(1,"td",29),e._uU(2),e.qZA()()),2&s){e.oxw();const o=e.MAs(5);e.xp6(2),e.hij('No matches for "',o.value,'"')}}const le=function(){return[10,20,30]};class C{constructor(t,o,n){this.coursesStudentSerice=t,this.dialog=o,this.toastr=n,this.courses=[],this.isVisibleFilter="invisible",this.displayedColumns=["cxs_id","c_id","c_name","s_id","s_name","delete"]}ngOnInit(){this.createTable()}getCoursesStudent(){var t=this;return(0,u.Z)(function*(){return yield t.coursesStudentSerice.getCoursesStudents()})()}createTable(){this.getCoursesStudent().then(t=>{this.courses=t,this.dataSource=new l.by(this.courses),this.dataSource.paginator=this.paginator,this.dataSource.sort=this.sort,this.isVisibleFilter="visible"})}applyFilter(t){this.dataSource.filter=t.target.value.trim().toLowerCase(),this.dataSource.paginator&&this.dataSource.paginator.firstPage()}deleteCourse(t){(0,A.C)(t.c_id,this.dialog,`Are you sure to delete the course: ${t.c_name} of student: ${t.s_name}?`,"Atention","delete").afterClosed().subscribe(n=>{n.success&&this.delteCourseStudent(t.cxs_id)})}delteCourseStudent(t){this.coursesStudentSerice.unlinkCourseStudent(t).then(o=>{o.success?(this.toastr.success("Success",o.mgs),this.createTable()):this.toastr.error("Error",o.error)})}ShowCreateDialog(t){var o=this;return(0,u.Z)(function*(){o.dialog.open(h,{width:"500px",disableClose:!0,data:t}).afterClosed().subscribe(a=>{if(a.success){if("Canceled"==a.message)return;o.toastr.success("Success",a.message),o.createTable()}else{if("Course for student already exist"==a.error)return void o.toastr.warning("Warning",a.error);o.toastr.error("Error",a.error)}})})()}ShowSearchDeleteDialog(){var t=this;return(0,u.Z)(function*(){t.dialog.open(g,{width:"500px",disableClose:!0}).afterClosed().subscribe(n=>{if(n.success){if("Canceled"==n.message)return;t.toastr.success("Success",n.message),t.createTable()}else t.toastr.error("Error",n.error)})})()}}C.\u0275fac=function(t){return new(t||C)(e.Y36(c),e.Y36(f.uw),e.Y36(R._W))},C.\u0275cmp=e.Xpm({type:C,selectors:[["app-list"]],viewQuery:function(t,o){if(1&t&&(e.Gf(b.NW,5),e.Gf(_.YE,5)),2&t){let n;e.iGM(n=e.CRH())&&(o.paginator=n.first),e.iGM(n=e.CRH())&&(o.sort=n.first)}},decls:40,vars:11,consts:[[1,"justify-between","m-8","bg-transparent"],[1,"m-2"],["matInput","","placeholder","Search",3,"keyup"],["input",""],[1,"bg-red-500","m-20","hover:bg-red-600","text-grey-darkest","py-2","px-4","rounded","inline-flex","items-center",3,"click"],[1,"w-4","h-4","mr-2"],[1,"mat-elevation-z8","m-6"],["mat-table","","matSort","",3,"dataSource"],["matColumnDef","cxs_id"],["mat-header-cell","","mat-sort-header","",4,"matHeaderCellDef"],["mat-cell","",3,"class",4,"matCellDef"],["matColumnDef","c_id"],["matColumnDef","c_name"],["matColumnDef","s_id"],["matColumnDef","s_name"],["matColumnDef","delete"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],["class","mat-row",4,"matNoDataRow"],[1,"justify-between"],["showFirstLastButtons","","aria-label","Select page of periodic elements",1,"bg-[#F5F5F5]",3,"pageSizeOptions"],["type","button",1,"fixed","z-90","bottom-10","right-8","bg-blue-600","w-20","h-20","rounded-full","drop-shadow-lg","flex","justify-center","items-center","text-white","text-4xl","hover:bg-blue-700","animate-bounce","duration-300",3,"click"],[1,"scale-150"],["mat-header-cell","","mat-sort-header",""],["mat-cell",""],["id","delete",3,"click"],["mat-header-row",""],["mat-row",""],[1,"mat-row"],["colspan","5",1,"mat-cell"]],template:function(t,o){1&t&&(e.TgZ(0,"mat-toolbar",0)(1,"mat-form-field",1)(2,"mat-label"),e._uU(3,"Search"),e.qZA(),e.TgZ(4,"input",2,3),e.NdJ("keyup",function(a){return o.applyFilter(a)}),e.qZA()(),e.TgZ(6,"button",4),e.NdJ("click",function(){return o.ShowSearchDeleteDialog()}),e.TgZ(7,"mat-icon",5),e._uU(8,"delete"),e.qZA(),e.TgZ(9,"span"),e._uU(10,"Search Delete"),e.qZA()()(),e.TgZ(11,"div",6)(12,"table",7),e.ynx(13,8),e.YNc(14,G,2,0,"th",9),e.YNc(15,H,2,4,"td",10),e.BQk(),e.ynx(16,11),e.YNc(17,V,2,0,"th",9),e.YNc(18,W,2,4,"td",10),e.BQk(),e.ynx(19,12),e.YNc(20,X,2,0,"th",9),e.YNc(21,K,2,4,"td",10),e.BQk(),e.ynx(22,13),e.YNc(23,P,2,0,"th",9),e.YNc(24,ee,2,4,"td",10),e.BQk(),e.ynx(25,14),e.YNc(26,te,2,0,"th",9),e.YNc(27,oe,2,4,"td",10),e.BQk(),e.ynx(28,15),e.YNc(29,se,2,0,"th",9),e.YNc(30,ne,3,3,"td",10),e.BQk(),e.YNc(31,re,1,0,"tr",16),e.YNc(32,ie,1,0,"tr",17),e.YNc(33,ae,3,1,"tr",18),e.qZA(),e.TgZ(34,"mat-toolbar",19),e._UZ(35,"div")(36,"mat-paginator",20),e.qZA()(),e.TgZ(37,"button",21),e.NdJ("click",function(){return o.ShowCreateDialog()}),e.TgZ(38,"mat-icon",22),e._uU(39,"add"),e.qZA()()),2&t&&(e.xp6(2),e.Tol(o.isVisibleFilter),e.xp6(2),e.Tol(o.isVisibleFilter),e.xp6(8),e.Q6J("dataSource",o.dataSource),e.xp6(19),e.Q6J("matHeaderRowDef",o.displayedColumns),e.xp6(1),e.Q6J("matRowDefColumns",o.displayedColumns),e.xp6(4),e.Q6J("pageSizeOptions",e.DdM(10,le)))},dependencies:[b.NW,l.BZ,l.fO,l.as,l.w1,l.Dz,l.nj,l.ge,l.ev,l.XQ,l.Gk,l.Ee,_.YE,_.nU,Y.Nt,Z.KE,Z.hX,D.Hw,J.Ye],styles:["#delete[_ngcontent-%COMP%]:hover{cursor:pointer;color:red}"]});const ue=[{path:"",children:[{path:"list",component:C},{path:"**",redirectTo:"list"}]}];class d{}d.\u0275fac=function(t){return new(t||d)},d.\u0275mod=e.oAB({type:d}),d.\u0275inj=e.cJS({imports:[S.Bz.forChild(ue),S.Bz]});var ce=r(455),de=r(366);class m{}m.\u0275fac=function(t){return new(t||m)},m.\u0275mod=e.oAB({type:m}),m.\u0275inj=e.cJS({imports:[p.ez,d,de.m,b.TU,l.p0,_.JX,Y.c,D.Ps,ce.rP,J.g0,i.u5,i.UX,x.LD,S.Bz,f.Is]})}}]);