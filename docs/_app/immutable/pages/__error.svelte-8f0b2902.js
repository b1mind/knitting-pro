import{S as o,i as l,s as c,e as d,t as f,c as h,a as m,h as u,d as i,g as _,G as p,j as g,E as r}from"../chunks/index-177a79a6.js";function x(s){let t,n;return{c(){t=d("h1"),n=f(s[0])},l(e){t=h(e,"H1",{});var a=m(t);n=u(a,s[0]),a.forEach(i)},m(e,a){_(e,t,a),p(t,n)},p(e,[a]){a&1&&g(n,e[0])},i:r,o:r,d(e){e&&i(t)}}}function E({error:s,status:t}){return{props:{title:`${t}: ${s.message}`}}}function v(s,t,n){let{title:e}=t;return s.$$set=a=>{"title"in a&&n(0,e=a.title)},[e]}class S extends o{constructor(t){super(),l(this,t,v,x,c,{title:0})}}export{S as default,E as load};
