(this["webpackJsonpreact_movies-list-add-form"]=this["webpackJsonpreact_movies-list-add-form"]||[]).push([[0],{161:function(e){e.exports=JSON.parse('[{"title":"Inception","description":"Follows the lives of eight very different couples in dealing with their love lives in various loosely interrelated tales all set during a frantic month before Christmas in London, England.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg","imdbUrl":"https://www.imdb.com/title/tt1375666","imdbId":"tt1375666"},{"title":"Love Actually","description":"A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMTY4NjQ5NDc0Nl5BMl5BanBnXkFtZTYwNjk5NDM3._V1_.jpg","imdbUrl":"https://www.imdb.com/title/tt0314331","imdbId":"tt0314331"},{"title":"The Day After Tomorrow","description":"Jack Hall, paleoclimatologist, must make a daring trek from Washington, D.C. to New York City to reach his son, trapped in the cross-hairs of a sudden international storm which plunges the planet into a new Ice Age.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMTY4YWMzMTMtZjUyOS00OGY1LTljMGUtOWU5ZjYzMjc2ZTMwXkEyXkFqcGdeQXVyMTYzMDM0NTU@._V1_SY1000_CR0,0,701,1000_AL_.jpg","imdbUrl":"https://www.imdb.com/title/tt0319262","imdbId":"tt0319262"},{"title":"Rogue One","description":"The daughter of an Imperial scientist joins the Rebel Alliance in a risky move to steal the Death Star plans.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMjEwMzMxODIzOV5BMl5BanBnXkFtZTgwNzg3OTAzMDI@._V1_SY1000_SX675_AL_.jpg","imdbUrl":"https://www.imdb.com/title/tt3748528","imdbId":"tt3748528"},{"title":"The Holiday","description":"Two women troubled with guy-problems swap homes in each other\'s countries, where they each meet a local guy and fall in love.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMTI1MDk4MzA2OF5BMl5BanBnXkFtZTYwMjQ3NDc3._V1_.jpg","imdbUrl":"https://www.imdb.com/title/tt0457939","imdbId":"tt0457939"}]')},174:function(e,t,a){e.exports=a(306)},180:function(e,t,a){},181:function(e,t,a){},182:function(e,t,a){},183:function(e,t,a){},305:function(e,t,a){},306:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(34),l=a.n(i),o=(a(179),a(163)),c=a(68),s=a(69),m=a(75),d=a(73),u=(a(180),a(181),a(182),function(e){var t=e.title,a=e.description,n=e.imgUrl,i=e.imdbUrl;return r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"card-image"},r.a.createElement("figure",{className:"image is-4by3"},r.a.createElement("img",{src:n,alt:"Film logo"}))),r.a.createElement("div",{className:"card-content"},r.a.createElement("div",{className:"media"},r.a.createElement("div",{className:"media-left"},r.a.createElement("figure",{className:"image is-48x48"},r.a.createElement("img",{src:"images/imdb-logo.jpeg",alt:"imdb"}))),r.a.createElement("div",{className:"media-content"},r.a.createElement("p",{className:"title is-8"},t))),r.a.createElement("div",{className:"content"},a,r.a.createElement("br",null),r.a.createElement("a",{href:i},"IMDB"))))});u.defaultProps={description:""};var h=function(e){var t=e.movies;return r.a.createElement("div",{className:"movies"},t.map((function(e){return r.a.createElement(u,Object.assign({key:e.imdbId},e))})))};h.defaultProps={movies:[]};var v=a(45),p=a(21),b=a(315),f=a(318),g=(a(183),function(e){var t=e.id,a=e.name,n=e.value,i=e.label,l=e.placeholder,o=e.error,c=e.onChange,s=e.onBlur;return r.a.createElement(b.a.Input,{error:o&&{content:o},type:"text",id:t,name:a,label:"Movie ".concat(i),placeholder:l,value:n,onChange:c,onBlur:s})});g.defaultProps={placeholder:"",error:""};var w=a(317),M=function(){return r.a.createElement(w.a,{warning:!0,header:"Error!",content:"All form fields must be filled out."})},j=function(e,t){return t?"":"".concat(e," is required")},E=function(e,t){return/^((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=+$,\w]+@)?[A-Za-z0-9.-]+|(?:www\.|[-;:&=+$,\w]+@)[A-Za-z0-9.-]+)((?:\/[+~%/.\w-_]*)?\??(?:[-+=&;%@.\w_]*)#?(?:[.!/\\\w]*))?)$/.test(t)?"":"".concat(e," should be a valid URL")},O=(a(305),[{name:"title",label:"Title",placeholder:"Enter a title",validators:[j]},{name:"description",label:"Description",placeholder:"Enter a description",validators:[j]},{name:"imgUrl",label:"Image URL",placeholder:"Paste an image url",validators:[j,E]},{name:"imdbUrl",label:"IMDB URL",placeholder:"Paste an IMDB url",validators:[j,E]},{name:"imdbId",label:"IMDB id",placeholder:"Enter an IMDB id",validators:[j]}]),B=O.reduce((function(e,t){return e[t.name]="",e}),{});Object.freeze(B);var N=function(e){Object(m.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={values:B,errors:B,isFetching:!1},e.handleChange=function(t){var a=t.target,n=a.name,r=a.value;e.setState((function(e){return{values:Object(p.a)(Object(p.a)({},e.values),{},Object(v.a)({},n,r)),errors:Object(p.a)(Object(p.a)({},e.errors),{},Object(v.a)({},n,""))}}))},e.handleSubmit=function(t){t.preventDefault(),e.setState((function(t){var a=Object(p.a)({},B);return O.forEach((function(n){var r=n.name,i=n.label;a[r]=e.validateField(r,t.values[r],i)})),e.isValid(a)?(e.props.onAdd(t.values),Object(p.a)(Object(p.a)({},t),{},{values:B,errors:B})):{errors:a}}))},e.handleBlur=function(t){var a=t.target,n=a.name,r=a.id;e.setState((function(t){return{errors:Object(p.a)(Object(p.a)({},t.errors),{},Object(v.a)({},n,e.validateField(n,t.values[n],r)))}}))},e.validateField=function(e,t,a){var n=O.find((function(t){return t.name===e})).validators;return(void 0===n?[]:n).map((function(e){return e(a,t)})).filter(Boolean).join(", ")},e.isValid=function(e){return!Object.values(e).some(Boolean)},e}return Object(s.a)(a,[{key:"render",value:function(){var e=this,t=this.state,a=t.values,n=t.errors,i=t.isFetching,l=this.isValid(n);return r.a.createElement(b.a,{className:"add-movie",warning:!0,success:l&&i,onSubmit:this.handleSubmit},O.map((function(t){var i=t.name,l=t.label,o=t.placeholder;return r.a.createElement(g,{key:i,id:l,name:i,label:l,placeholder:o,value:a[i],error:n[i],onChange:e.handleChange,onBlur:e.handleBlur})})),r.a.createElement(M,{isValid:l,isFetching:i}),r.a.createElement(f.a,{className:"add-movie__btn",color:"yellow"},"Add Movie"))}}]),a}(n.Component),y=a(161),I=function(e){Object(m.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={movies:y},e.addMovie=function(t){e.setState((function(e){return{movies:[].concat(Object(o.a)(e.movies),[t])}}))},e}return Object(s.a)(a,[{key:"render",value:function(){var e=this.state.movies;return r.a.createElement("div",{className:"page"},r.a.createElement("div",{className:"page-content"},r.a.createElement(h,{movies:e})),r.a.createElement("div",{className:"sidebar"},r.a.createElement(N,{onAdd:this.addMovie})))}}]),a}(n.Component);l.a.render(r.a.createElement(I,null),document.getElementById("root"))}},[[174,1,2]]]);
//# sourceMappingURL=main.86fb3f6d.chunk.js.map